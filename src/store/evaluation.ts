import { defineStore } from "pinia";
import evaluationRepository from "@/abstraction/repositories/evaluationRepository";
import type { dynamicObject } from "@/types/common";

export const useEvaluationStore = defineStore("evaluation", () => {
  const repository = new evaluationRepository();

  const storeEvaluation = async (clientCarId: number, data: dynamicObject) => {
    return await repository.store(clientCarId, data);
  };

  const showEvaluation = async (clientCarId: number) => {
    return await repository.show(clientCarId);
  };

  return { showEvaluation, storeEvaluation };
});
