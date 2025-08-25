import Hero from "@/components/Hero";
import ProductHighlights from "@/components/ProductHighlights";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`);
  // const products = await res.json()
  return (
    <div>
      <Hero></Hero>
      <ProductHighlights></ProductHighlights>
    </div>
  );
}
