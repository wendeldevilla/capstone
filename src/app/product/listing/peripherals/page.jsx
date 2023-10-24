import CommonListing from "@/app/components/CommonListing";
import { productByCategory } from "@/services/product";

export default async function PeripheralsAllProducts() {
  const getAllProducts = await productByCategory("peripherals");

  return <CommonListing data={getAllProducts && getAllProducts.data} />;
}
