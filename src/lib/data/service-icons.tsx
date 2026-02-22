import {
  DesignIcon,
  CartIcon,
  MobileIcon,
  DashboardIcon,
  AIIcon,
  EducationIcon,
} from "@/assets/icons";

const DEFAULT_ICON = {
  icon: <DesignIcon className="w-8 h-8 text-text-title" />,
  iconBackground: "#fcdce7",
};

const ICON_MAP: Record<
  string,
  { icon: React.ReactNode; iconBackground: string }
> = {
  design: {
    icon: <DesignIcon className="w-8 h-8 text-text-title" />,
    iconBackground: "#fcdce7",
  },
  cart: {
    icon: <CartIcon className="w-8 h-8 text-text-title" />,
    iconBackground: "#f1fcdc",
  },
  mobile: {
    icon: <MobileIcon className="w-8 h-8 text-text-title" />,
    iconBackground: "#dce7fc",
  },
  dashboard: {
    icon: <DashboardIcon className="w-8 h-8 text-text-title" />,
    iconBackground: "#dcfcfc",
  },
  ai: {
    icon: <AIIcon className="w-8 h-8 text-text-title" />,
    iconBackground: "#e7dcfc",
  },
  education: {
    icon: <EducationIcon className="w-8 h-8 text-text-title" />,
    iconBackground: "#fce9dc",
  },
};

export function getIconForService(iconKey: string): {
  icon: React.ReactNode;
  iconBackground: string;
} {
  return ICON_MAP[iconKey] ?? DEFAULT_ICON;
}
