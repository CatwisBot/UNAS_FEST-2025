import { Activities } from "@/constants/Activities/Activities";
import { Gallery } from "@/constants/Gallery/Gallery";

export const navMenu = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/activities",
    title: "Activities",
    child: Activities.map((activity) => ({
      name: activity.title,
      href: `/activities/${activity.path}`,
    })),
  },
  {
    path: "/gallery",
    title: "Gallery",
    child: Gallery.map((gallery) => ({
      name: gallery.title,
      href: `/gallery/${gallery.path}`,
    })),
  },
  {
    path: "/partnership",
    title: "Partnership",
  },
  {
    path: "/about",
    title: "About",
  },
  {
    path: "https://caturnawa.unasfest.com",
    title: "Caturnawa",
    isExternal: true,
    isSpecial: true ,
  },
];