import { FacebookIcon, Image, InstagramIcon, TwitterIcon } from "lucide-react";

export const footerData = {
  company: {
    title: "COMPANY",
    links: [
      { label: "Shop", href: "#" },
      { label: "About Us", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  help: {
    title: "HELP",
    links: [
      { label: "Order Tracking", href: "#" },
      { label: "FAQ's", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms & Conditions", href: "#" },
    ],
  },
  store: {
    title: "STORE",
    links: [
      { label: "SHILAJIT", href: "#" },
      { label: "Kahwa Tea", href: "#" },
      { label: "Saffron", href: "#" },
      { label: "Honey", href: "#" },
      { label: "Walnut", href: "#" },
    ],
  },
};

export const socialLinks = [
  { icon: FacebookIcon, href: "#", label: "Facebook" },
  { icon: TwitterIcon, href: "#", label: "Twitter" },
  { icon: InstagramIcon, href: "#", label: "Instagram" },
  { icon: Image, href: "#", label: "Pinterest" },
];
