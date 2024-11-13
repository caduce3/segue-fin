import { TransactionType } from "@prisma/client";

export const TRANSACTION_TYPE_OPTIONS = [
  {
    value: TransactionType.DEPOSIT,
    label: "Depósito",
  },
  {
    value: TransactionType.EXPENSE,
    label: "Despesa",
  },
  {
    value: TransactionType.INVESTIMENT,
    label: "Investimento",
  },
];

export const TRANSACTION_CATEGORY_OPTIONS = [
  {
    value: "FOOD",
    label: "Alimentação",
  },
  {
    value: "TRANSPORT",
    label: "Transporte",
  },
  {
    value: "SPONSORSHIP",
    label: "Patrocínio",
  },
  {
    value: "DONATION",
    label: "Doação",
  },
  {
    value: "BINGO",
    label: "Bingo",
  },
  {
    value: "OTHER",
    label: "Outro",
  },
];

export const TRANSACTION_METHOD_PAYMENT = [
  {
    value: "CASH",
    label: "Dinheiro",
  },
  {
    value: "CREDIT_CARD",
    label: "Cartão de Crédito",
  },
  {
    value: "DEBIT_CARD",
    label: "Cartão de Débito",
  },
  {
    value: "PIX",
    label: "PIX",
  },
  {
    value: "BANK_TRANSFER",
    label: "Transferência Bancária",
  },
  {
    value: "BANK_SLIP",
    label: "Boleto Bancário",
  },
  {
    value: "OTHER",
    label: "Outro",
  },
];
