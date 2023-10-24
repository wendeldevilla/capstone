import CommonListing from "@/app/components/CommonListing";
import { productByCategory } from "@/services/product";

export default async function ComponentsAllProducts() {
  const getAllProducts = await productByCategory("components");

  return <CommonListing data={getAllProducts && getAllProducts.data} />;
}
