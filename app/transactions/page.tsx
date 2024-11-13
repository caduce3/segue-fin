import { db } from "../_lib/prisma";
import { DataTable } from "../_components/ui/data-table";
import { transactionsColumns } from "./_columns";
import UpseartTransactionButton from "../_components/add-transaction-button";

const Transactions = async () => {
  const transactions = await db.transaction.findMany({
    orderBy: {
      date: "desc",
    },
  });

  return (
    <div className="space-y-6 p-6">
      <div className="flex w-full items-center justify-between p-6">
        <h1 className="text-2xl font-bold">Transações</h1>
        <UpseartTransactionButton />
      </div>
      <DataTable columns={transactionsColumns} data={transactions} />
    </div>
  );
};

export default Transactions;
