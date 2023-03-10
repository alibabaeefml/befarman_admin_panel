import axios from "axios";
import {
  getJsonInvoice,
  setInvoiceData,
} from "@/abstraction/resources/invoiceResource";
import url from "../url";

import type { dynamicObject } from "@/types/common";
export default class InvoiceRepository {
  async show(clientCarRequestId: number) {
    const response = await axios.get(
      url("showClientCarRequestInvoice", {
        clientCarRequestId,
      })
    );
    if ([200, 201].includes(response.status)) {
      return getJsonInvoice(response.data.data);
    }
  }
  async update(invoiceId: number, formData: dynamicObject) {
    const response = await axios.put(
      url("updateClientCarRequestInvoice", { invoiceId }),
      setInvoiceData(formData)
    );
    if ([200, 201].includes(response.status)) {
      return getJsonInvoice(response.data.data);
    }
    return null;
  }
}
