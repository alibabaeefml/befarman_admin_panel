import axios from "axios";
import { getArrayEvaluation } from "../resources/evaluationResource";
import url from "../url";
import { setQueries } from "@/utils/createQueriesObject";
export default class EvaluationRepository {
  async store(id,data) {
    const response = await axios.post(url("storeEvaluation",{clientCar:id}),data);
    console.log(response);
    // return response;
  }
  async show(id) {
    const response = await axios.get(url("showEvaluation", { evaluation: id }));
    return response.data.data;
  }
}
