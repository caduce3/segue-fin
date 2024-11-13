"use server";

import { db } from "@/app/_lib/prisma";
import { auth } from "@clerk/nextjs/server";
import {
  Prisma,
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionType,
} from "@prisma/client";
import { upseartTransactionSchema } from "./schema";
import { revalidatePath } from "next/cache";

interface UpseartTransactionParams {
  id?: string;
  name: string;
  amount: number;
  type: TransactionType;
  category: TransactionCategory;
  paymentMethod: TransactionPaymentMethod;
  date: Date;
}

export const upsertTransaction = async (params: UpseartTransactionParams) => {
  upseartTransactionSchema.parse(params);

  const { userId } = await auth();
  if (!userId) {
    throw new Error("Não autorizado!");
  }
  if (params.id) {
    // Atualiza uma transação existente se o ID for fornecido
    await db.transaction.upsert({
      where: {
        id: params.id,
      },
      update: { ...params, userId },
      create: { ...params, userId },
    });
  } else {
    // Cria uma nova transação se o ID não for fornecido
    await db.transaction.create({
      data: { ...params, userId },
    });
  }
  revalidatePath("/transactions");
};
