import type { ClientCarRequestStatus } from "@/types/clientCarRequestStatus";
export const getJsonClientCarRequestStatus = (
  data: ClientCarRequestStatus
) => ({
  color: data.color,
  icon: data.icon,
  id: data.id,
  name: data.name,
  name_en: data.name_en,
});
