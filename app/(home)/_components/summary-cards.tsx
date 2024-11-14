import { Card, CardContent, CardHeader } from "@/app/_components/ui/card";
import {
  PiggyBankIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  WalletIcon,
} from "lucide-react";
import SummaryCard from "./summary-card";
import AddTransactionButton from "@/app/_components/add-transaction-button";
import { db } from "@/app/_lib/prisma";

interface SummaryCardProps {
  month: string;
  userId: string;
}

const SummaryCards = async ({ month, userId }: SummaryCardProps) => {
  const where = {
    date: {
      gte: new Date(`2024-${month}-01`),
      lt: new Date(`2024-${month}-31`),
    },
  };

  const depositsTotal = Number(
    (
      await db.transaction.aggregate({
        where: {
          ...where,
          type: "DEPOSIT",
          userId: userId,
        },
        _sum: {
          amount: true,
        },
      })
    )._sum.amount || 0,
  );

  const investimentsTotal = Number(
    (
      await db.transaction.aggregate({
        where: {
          ...where,
          type: "INVESTIMENT",
          userId: userId,
        },
        _sum: {
          amount: true,
        },
      })
    )._sum.amount || 0,
  );

  const expensesTotal = Number(
    (
      await db.transaction.aggregate({
        where: {
          ...where,
          type: "EXPENSE",
          userId: userId,
        },
        _sum: {
          amount: true,
        },
      })
    )._sum.amount || 0,
  );

  const balance = depositsTotal - expensesTotal - investimentsTotal;

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <WalletIcon size={16} />
          <p className="text-white opacity-70">Saldo</p>
        </CardHeader>
        <CardContent className="flex justify-between">
          <p className="text-4xl font-bold">{balance}</p>
          <AddTransactionButton />
        </CardContent>
      </Card>

      <div className="grid grid-cols-3 gap-6">
        <SummaryCard
          icon={<PiggyBankIcon size={16} />}
          title="Investido"
          amount={investimentsTotal}
        />

        <SummaryCard
          icon={<TrendingUpIcon className="text-green-500" size={16} />}
          title="Receita"
          amount={depositsTotal}
        />

        <SummaryCard
          icon={<TrendingDownIcon className="text-red-500" size={16} />}
          title="Despesas"
          amount={expensesTotal}
        />
      </div>
    </div>
  );
};

export default SummaryCards;
