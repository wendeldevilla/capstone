"use client";

import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "./context";

import { getAllAdminProducts } from "@/services/product";
import { useRouter } from "next/navigation";

export default function Home() {
  const { isAuthUser } = useContext(GlobalContext);

  const [products, setProducts] = useState([]);
  const router = useRouter();

  async function getListOfProducts() {
    const res = await getAllAdminProducts();

    if (res.success) {
      setProducts(res.data);
    }
  }

  useEffect(() => {
    getListOfProducts();
  }, []);

  console.log(products);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="">
        <div className="grid max-w-screen-xl px-4 py-8 mx-suto  lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
              For all your Computer and Gaming needs!
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
              We are aiming to bring you the cheapest price and greatest deals
              for your computer and gaming needs!
            </p>
            <button
              type="button"
              onClick={() => router.push("/product/listing/all-products")}
              className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
            >
              Shop now!
            </button>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/capstone-621b7.appspot.com/o/capstone%2Fgam1.png-1698203332431-iwqs17oal8?alt=media&token=ee59c7b9-f02b-4186-9670-7343799640f0"
              alt="Explore Shop Collection"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
