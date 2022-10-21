import axios from "axios";
import { getArrayEvaluation } from "../resources/evaluationResource";
import url from "../url";

export default class EvaluationRepository {
  async show(id) {
    const response = await axios.get(url("showEvaluation", { id: id }));
    return getArrayEvaluation(response.data);
  }
}