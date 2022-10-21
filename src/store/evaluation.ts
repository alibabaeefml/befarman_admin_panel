import { defineStore } from "pinia";
import { ref, computed } from "vue";
import type Evaluation from "@/types/evaluation";
import evaluationRepository from "@/abstraction/repositories/evaluationRepository";

export const useEvaluationStore = defineStore("Evaluation", () => {
  const evaluations = ref<Evaluation[]>([]);
  const getEvaluations = computed(() => evaluations.value);

  const loadEvaluations = async () => {
    if (evaluations.value.length) {
      return evaluations.value;
    }
    const repository = new evaluationRepository();
    evaluations.value = await repository.index();
    console.log(evaluations.value)
    return evaluations.value;
  };

  return { evaluations, getEvaluations, loadEvaluations };
});
