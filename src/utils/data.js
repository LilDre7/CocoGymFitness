import { ArrowUpRight, HomeIcon, MapPin, Zap } from "lucide-react";
import mancuerna from "@/public/assets/mancuerna.png";
import rack from "@/public/assets/rack.png";
import jalon from "@/public/assets/jalon.png";

// Parte del hero ✅
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

// Parte SHOW CARD HERO✅

export const cards = [
  {
    icon: mancuerna,
    title: "MUSCLE BUILDING",
    description:
      "Lorem ipsum dolor sit amet consectetur. Neque dolor in semper aliquet facilisis tristique placerat at.",
    extraClasses: "bg-[#c4f135]",
    learn: "Learn more",
    learnIcon: <ArrowUpRight />,
    button: <Zap />,
    href: "/"
  },
  {
    icon: rack,
    title: "MUSCLE BUILDING",
    description:
      "Lorem ipsum dolor sit amet consectetur. Neque dolor in semper aliquet facilisis tristique placerat at.",
    extraClasses: "",
    learn: "Learn more",
    learnIcon: <ArrowUpRight />,
    button: <Zap />,
    href: "/"
  },
  {
    icon: jalon,
    title: "MUSCLE BUILDING",
    description:
      "Lorem ipsum dolor sit amet consectetur. Neque dolor in semper aliquet facilisis tristique placerat at.",
    extraClasses: "",
    learn: "Learn more",
    learnIcon: <ArrowUpRight />,
    button: <Zap />,
    href: "/"
  },
];
