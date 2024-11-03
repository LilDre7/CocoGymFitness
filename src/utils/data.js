import { HomeIcon, MapPin } from "lucide-react";

export const links = [
  {
    href: "/",
    label: "Home",
    icon: <HomeIcon className="h-5 w-5" />,
    extraClasses: "flex items-center gap-2 hover:text-primary",
    external: false,
  },
  {
    href: "/shop",
    label: "SHOP",
    extraClasses: "hover:text-primary",
    external: false,
  },
  {
    href: "/blog",
    label: "BLOG",
    extraClasses: "hover:text-primary",
    external: false,
  },
  {
    href: "/contact",
    label: "CONTACT",
    extraClasses: "hover:text-primary",
    external: false,
  },
  {
    href: "https://g.co/kgs/VAWVS2W",
    label: "COCO GYM FITNESS",
    icon: <MapPin />,
    extraClasses:
      "bg-[#c4f135] text-black font-bold p-3 rounded-full flex gap-2",
    external: true,
  },
];
