import axios from "axios";
import { getJsonEvaluation } from "../resources/evaluationResource";
import url from "../url";

import type { dynamicObject } from "@/types/common";
export default class EvaluationRepository {
  async store(clientCarId: number, data: dynamicObject) {
    const response = await axios.post(
      url("storeEvaluation", { clientCar: clientCarId }),
      data
    );
    if ([200, 201].includes(response.status)) {
      return getJsonEvaluation(response.data.data);
    }
  }
  async show(clientCarId: number) {
    const response = await axios.get(
      url("showEvaluation", { clientCar: clientCarId })
    );
    if ([200, 201].includes(response.status)) {
      return getJsonEvaluation(response.data.data);
    }
  }
}
