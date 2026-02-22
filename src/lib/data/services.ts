import type { ServicesData } from "@/types/services";

import servicesJson from "@/data/services.json";

const servicesData = servicesJson as ServicesData;

export function getServicesData(): ServicesData {
  return servicesData;
}
