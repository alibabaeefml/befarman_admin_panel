import { setQueries } from "@/utils/createQueriesObject";
import axios from "axios";
import { getArrayCredit, getJsonCredit } from "../resources/creditResource";
import {
  getArrayDiscount,
  getJsonDiscount,
} from "../resources/discountResource";
import url from "../url";

export default class DiscountRepository {
  async indexDiscount(data = {}) {
    const params = setQueries(data);
    const response = await axios.get(url("indexDiscount"), { params });
    return getArrayDiscount(response.data);
  }
  async storeDiscount(discountData: Discount) {
    const formData = setData(discountData);
    const response = await axios.post(url("storeDiscount"), formData);
    return getJsonDiscount(response.data.data);
  }
  async updateDiscount(discountId: number, discountData = {}) {
    const formData = setData(discountData);
    const response = await axios.put(
      url("updateDiscount", { car: discountId }),
      formData
    );
    return getJsonDiscount(response.data.data);
  }

  async deleteDiscount(discountId: number) {
    await axios.delete(url("deleteDiscount", { car: discountId }));
  }
  async indexCredit(data = {}) {
    const params = setQueries(data);
    const response = await axios.get(url("indexCreditCard"), { params });
    return getArrayCredit(response.data);
  }
  async storeCredit(creditData: Credit) {
    const formData = setData(creditData);
    const response = await axios.post(url("storeCreditCard"), formData);
    return getJsonCredit(response.data.data);
  }
}
