export default async function SearchProducts() {
  await new Promise(resolve => setTimeout(resolve, 4000));
  return <h2>Search</h2>;
}
