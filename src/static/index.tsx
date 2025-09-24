import { AboutUs, ContactUs, Products } from "../pages";

export const LINKS = [
  {
    id: 1,
    path: "/",
    title: "products",
    element: <Products />,
  },
  {
    id: 2,
    path: "/about-us",
    title: "about-us",
    element: <AboutUs />,
  },
  {
    id: 3,
    path: "/contact-us",
    title: "contact-us",
    element: <ContactUs />,
  },
];
