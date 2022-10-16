import { useStatusStore } from "@/store/status";
import { storeToRefs } from "pinia/dist/pinia";
const { loadStatuses } = useStatusStore();
loadStatuses();
export const { getStatuses } = storeToRefs(useStatusStore());
