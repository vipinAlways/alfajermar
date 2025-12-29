interface Nav {
  name: string;
  href: string;
  icon: React.ReactElement;
}

interface Product {
  name: string;
  maxPrice: number;
  minPrice: number;
  image: string;
  off?: number;
  catchLine?: string;
}

interface MainProduct {
  name: string;
  image: string;
  bg: string;
}
interface Certificate {
  certificate: string;
  label: string;
}

interface MyImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}
interface Data {
  src: string[];
  hoverImage?: string[];
  para?: string;
  heading?: string;
  label?: string;
  button: {
    label: string;
    Icon: React.ReactElement;
  };
}
