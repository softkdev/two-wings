import { getServicesData } from "@/lib/data/services";
import { ServicesPageContent } from "@/containers/ServicesPageContent";

export default function ServicesPage() {
  const { hero, filterCategories, services } = getServicesData();
  return (
    <ServicesPageContent
      hero={hero}
      filterCategories={filterCategories}
      services={services}
    />
  );
}
