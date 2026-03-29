import styles from "./page.module.css";
import Hero from "../components/Hero/Hero";
import ProductGrid from "../components/ProductGrid/ProductGrid";

// Server Action / Fetch
async function getProducts() {
  const res = await fetch('https://fakestoreapi.com/products');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function Home() {
  const products = await getProducts();

  return (
    <div className={styles.pageContainer}>
      <Hero />
      <div className={styles.contentArea}>
        {/* We use a client wrapper component to handle hide/show of sidebar and sorting if needed,
            but for SSR we want the main HTML to be delivered first. So the grid is rendered here. 
            Actually, the grid needs Client Interactivity for "Like" state and "Hide/Show" filters.
            Let's structure the page with a dedicated Client Component wrapper. */}
        <ProductGrid products={products} />
      </div>
    </div>
  );
}
