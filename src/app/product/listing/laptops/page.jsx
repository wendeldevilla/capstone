import CommonListing from "@/app/components/CommonListing";
import { productByCategory } from "@/services/product";

export default async function LaptopsAllProducts() {
  const getAllProducts = await productByCategory("laptops");

  return <CommonListing data={getAllProducts && getAllProducts.data} />;
}
