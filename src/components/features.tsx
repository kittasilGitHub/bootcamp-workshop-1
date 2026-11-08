// import { Product } from "@/types/product";

import { prisma } from "@/lib/prisma";
import { connection } from 'next/server';
// async function fetchProducts(): Promise<Product[]> {
//   const response = await fetch("https://backend.codingthailand.com/v2/products");
//   if (!response.ok) {
//     throw new Error("เกิดข้อผิดพลาด ไม่สามารถดึงข้อมูลสินค้าได้");
//   }
//   const json: unknown = await response.json(); // Array
//   return json as Product[];
// }


async function fetchProducts() {
  await connection();
  const products = await prisma.products.findMany({
    orderBy: { id: 'desc' },
    include: { categories: true },
  });
  return products;
}

const Features = async () => {
  const products = await fetchProducts();

  return (
    <div className="px-6 py-20">
      <h2 className="mx-auto max-w-3xl text-center font-medium text-4xl tracking-[-0.045em] sm:text-[2.75rem]">
        รายการสินค้าทั้งหมด
      </h2>
      <div className="mx-auto mt-10 grid max-w-(--breakpoint-lg) gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div
            className="flex flex-col rounded-xl border bg-card p-6"
            key={product.id}
          >
            <div className="mb-5">
              ID: {product.id} category: {product.categories?.name}
            </div>
            <span className="font-medium text-lg">{product.name}</span>
            <p className="mt-1 text-[15px] text-foreground/80">
              ชื่อสินค้า: {product.description} ราคา: {product.price?.toFixed(2)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
