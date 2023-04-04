-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "logs";

-- CreateTable
CREATE TABLE "lookup"."pleasework" (
    "db_id" SERIAL NOT NULL,
    "value1" TEXT NOT NULL,
    "value_2" INTEGER NOT NULL,
    "value3" TEXT NOT NULL,
    "value_4" TIMESTAMP(3) NOT NULL,
    "value5" DECIMAL(65,2) NOT NULL,

    CONSTRAINT "pleasework_pkey" PRIMARY KEY ("value1","value_2","value3","value_4","value5")
);
