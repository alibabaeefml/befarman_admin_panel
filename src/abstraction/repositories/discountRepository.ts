import { setQueries } from "@/utils/createQueriesObject";
import axios from "axios";
import {
  getArrayCredit,
  getJsonCredit,
  setCreditData,
} from "../resources/creditResource";
import {
  getArrayDiscount,
  getJsonDiscount,
  setDiscountData,
} from "../resources/discountResource";

import url from "../url";

export default class DiscountRepository {
  async indexDiscount(data = {}) {
    const params = setQueries(data);
    const response = await axios.get(url("indexDiscount"), { params });
    return getArrayDiscount(response.data);
  }
  async storeDiscount(discountData: {}) {
    const formData = setDiscountData(discountData);
    const response = await axios.post(url("storeDiscount"), formData);
    return getJsonDiscount(response.data.data);
  }
  async updateDiscount(discountId: number, discountData = {}) {
    const formData = setDiscountData(discountData);
    const response = await axios.put(
      url("updateDiscount", { discountId }),
      formData
    );
    return getJsonDiscount(response.data.data);
  }

  async deleteDiscount(discountId: number) {
    await axios.delete(url("deleteDiscount", { discountId }));
  }
  async indexCredit(data = {}) {
    const params = setQueries(data);
    const response = await axios.get(url("indexCreditCard"), { params });
    return getArrayCredit(response.data);
  }
  async storeCredit(creditData: {}) {
    const formData = setCreditData(creditData);
    const response = await axios.post(url("storeCreditCard"), formData);
    return getJsonCredit(response.data.data);
  }
  async updateCredit(creditId: number, creditData = {}) {
    const formData = setCreditData(creditData);
    const response = await axios.put(
      url("updateCredit", { creditId }),
      formData
    );
    return getJsonCredit(response.data.data);
  }
  async deleteCredit(creditId: number) {
    await axios.delete(url("deleteCredit", { creditId }));
  }
}
