// ***** start - import from files
import api from "@/src/api/api";
import Layout from "@/src/components/layout/Layout";
import ProductGrid from "@/src/components/product/ProductGrid";
import { ProductDataType } from "@/src/constants/types/types";
// ***** end - import from files

// ***** start - Next.js v16 this is server side rendering of api data
async function getProducts() {
  const res = await api.get<ProductDataType[]>('/products');
  return res;
}
// ***** end - Next.js v16 this is server side rendering of api data

const ProductListing = async() => {

  // ***** start - get api data using function
  const products = await getProducts();
  // ***** end - get api data using function

  return (
    <Layout>
      <ProductGrid products={[...products.map(ele => {
        return {
          ...ele,
          addedToWishlist: false
        }
      })]}/>
    </Layout>
  );
};

export default ProductListing;
