/*
  Warnings:

  - You are about to drop the column `churchId` on the `Transaction` table. All the data in the column will be lost.
  - You are about to drop the `Church` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Transaction" DROP CONSTRAINT "Transaction_churchId_fkey";

-- DropForeignKey
ALTER TABLE "Transaction" DROP CONSTRAINT "Transaction_userId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_churchId_fkey";

-- AlterTable
ALTER TABLE "Transaction" DROP COLUMN "churchId";

-- DropTable
DROP TABLE "Church";

-- DropTable
DROP TABLE "User";
