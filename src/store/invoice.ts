import { defineStore } from "pinia";
import InvoiceRepository from "@/abstraction/repositories/invoiceRepository";
import type { dynamicObject } from "@/types/common";

export const useInvoiceStore = defineStore("invoice", () => {
  const repository = new InvoiceRepository();

  const showInvoice = async (clientCarRequestId: number) => {
    return await repository.show(clientCarRequestId);
  };
  const updateInvoice = async (clientCarRequestId: number, data: dynamicObject) => {
    return await repository.update(clientCarRequestId, data);
  };

  return { showInvoice, updateInvoice };
});
