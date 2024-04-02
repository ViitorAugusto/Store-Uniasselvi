import ProductsPage from "../../components/Products";

export default async function Home() {
    await new Promise(resolve => setTimeout(resolve, 4000));
  return <ProductsPage />;
}
