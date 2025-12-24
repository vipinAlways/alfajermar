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
}

interface MainProduct {
  name: string;
  image: string;
  bg:string
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
  priority?:boolean
}
