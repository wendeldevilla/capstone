"use client";

import ProductButton from "./ProductButtons";
import ProductTile from "./ProductTile";

const dummyData = [
  {
    _id: "6536166fe5f9cf56795ba4b0",
    name: "Steelseries Apex Pro",
    description: "Steelseries Keyboard",
    price: 5000,
    category: "peripherals",
    deliveryInfo: "Free Delivery",
    onSale: "no",
    priceDrop: 0,
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/capstone-621b7.appspot.com/o/capstone%2Fapex-pro.jfif-1698043480475-hpvepkb1a7?alt=media&token=1f1ba622-5d10-4ecf-a582-8aba4d733317",
  },
];

export default function CommonListing() {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-4 lg:mt-16">
          {dummyData && dummyData.length
            ? dummyData.map((item) => (
                <article key={item._id}>
                  <ProductTile item={item} />
                  <ProductButton item={item} />
                </article>
              ))
            : null}
        </div>
      </div>
    </section>
  );
}
