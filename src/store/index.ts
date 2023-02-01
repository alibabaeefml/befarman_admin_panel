import resetStore from "@/plugins/resetStore";
import { createPinia } from "pinia";

const pinia = createPinia();
pinia.use(resetStore)
export default pinia;
