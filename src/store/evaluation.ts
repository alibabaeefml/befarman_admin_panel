import { defineStore } from "pinia";
import evaluationRepository from "@/abstraction/repositories/evaluationRepository";

export const useEvaluationStore = defineStore("evaluation", () => {
  const showEvaluation = async (id) => {
    const repository = new evaluationRepository();
    return await repository.show(id);
  };
  return { showEvaluation };
});
