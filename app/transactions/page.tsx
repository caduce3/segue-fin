import { db } from "../_lib/prisma";
import { DataTable } from "../_components/ui/data-table";
import { transactionsColumns } from "./_columns";
import UpseartTransactionButton from "../_components/add-transaction-button";
import Navbar from "../_components/navbar";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const Transactions = async () => {
  const { userId } = await auth();
  if (!userId) {
    return redirect("/login");
  }
  const transactions = await db.transaction.findMany({
    where: {
      userId: userId,
    },
    orderBy: {
      date: "desc",
    },
  });

  return (
    <>
      <Navbar />
      <div className="space-y-6 p-6">
        <div className="flex w-full items-center justify-between p-6">
          <h1 className="text-2xl font-bold">Transações</h1>
          <UpseartTransactionButton />
        </div>
        <DataTable columns={transactionsColumns} data={transactions} />
      </div>
    </>
  );
};

export default Transactions;
