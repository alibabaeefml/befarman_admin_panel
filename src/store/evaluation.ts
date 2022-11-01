import { defineStore } from "pinia";
import evaluationRepository from "@/abstraction/repositories/evaluationRepository";

export const useEvaluationStore = defineStore("evaluation", () => {
  
  const repository = new evaluationRepository();

  const storeEvaluation = async (id,data) => {
    return await repository.store(id,data);
  };
  const showEvaluation = async (id) => {
    return await repository.show(id);
  };
  return { showEvaluation, storeEvaluation };
});
