import axios from "axios";
import { getArrayEvaluation } from "../resources/evaluationResource";
import url from "../url";

export default class TrimRepository {
  async index() {
    const response = await axios.get(url("indexEvaluation"));
    return getArrayEvaluation(response.data);
  }
}