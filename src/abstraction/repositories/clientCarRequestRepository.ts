import axios from "axios";
import url from "../url";
import { getArrayClientCarRequest } from "../resources/clientCarRequestResource";
import { setQueries } from "@/utils/createQueriesObject";
import type { dynamicObject } from "@/types/common";
import type { ClientCarRequest } from "@/types/clientCarRequest";

export default class ClientCarRequestRepository {
  async register(data: dynamicObject) {
    const response = await axios.post(url("registerClientCarRequest"), data);
    if ([200, 201].includes(response.status)) {
      return true;
    }
    return null;
  }
  async index(data: {}) {
    const params = setQueries(data);
    const response = await axios.get(url("indexClientCarRequest", { params }));
    if ([200, 201].includes(response.status)) {
      return getArrayClientCarRequest(response.data);
    }
    return null;
  }
  async ownerDelivery(clientCarRequestId: number, formData: dynamicObject) {
    const response = await axios.put(
      url("ownerDeliveryClientCarRequest", { clientCarRequestId }),
      formData
    );
    if ([200, 201].includes(response.status)) {
      return true;
    }
    return null;
  }
  async userDelivery(clientCarRequestId: number, formData: dynamicObject) {
    const response = await axios.put(
      url("userDeliveryClientCarRequest", { clientCarRequestId }),
      formData
    );
    if ([200, 201].includes(response.status)) {
      return true;
    }
    return null;
  }
  async adminVerify(clientCarRequestId: number, formData: dynamicObject) {
    return await axios.put(
      url("adminVerifyClientCarRequest", { clientCarRequestId }),
      formData
    );
  }

  async ownerVerify(clientCarRequestId: number, formData: dynamicObject) {
    const response = await axios.put(
      url("ownerVerifyClientCarRequest", { clientCarRequestId }),
      formData
    );
    if ([200, 201].includes(response.status)) {
      return true;
    }
    return null;
  }
}
