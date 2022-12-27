import axios from "axios";
import url from "../url";
import { getArrayClientCarRequest } from "../resources/clientCarRequestResource";
import { setQueries } from "@/utils/createQueriesObject";
import type { dynamicObject } from "@/types/common";
import type { ClientCarRequest } from "@/types/clientCarRequest";

export default class ClientCarRequestRepository {
  async index(data: dynamicObject) {
    const params: dynamicObject = setQueries(data);
    const response:  Response = await axios.get(
      url("indexClientCarRequest"),
      params
    );
    if ([200, 201].includes(response.status)) {
      return getArrayClientCarRequest(response.data.data);
    }
    return null;
  }
  async ownerDelivery(id: number) {
    const response:  Response = await axios.put(
      url("ownerDeliveryClientCarRequest", { clientCarRequest: id })
    );
    if ([200, 201].includes(response.status)) {
      return true;
    }
    return null;
  }
  async userDelivery(id: number) {
    const response:  Response = await axios.put(
      url("userDeliveryClientCarRequest", { clientCarRequest: id })
    );
    if ([200, 201].includes(response.status)) {
      return true;
    }
    return null;
  }
  async adminVerify(id: number) {
    const response:  Response = await axios.put(
      url("adminVerifyClientCarRequest", { clientCarRequest: id })
    );
    if ([200, 201].includes(response.status)) {
      return true;
    }
    return null;
  }
  async ownerVerify(id: number) {
    const response:  Response = await axios.put(
      url("ownerVerifyClientCarRequest", { clientCarRequest: id })
    );
    if ([200, 201].includes(response.status)) {
      return true;
    }
    return null;
  }
}
