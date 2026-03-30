import styles from "./page.module.css";
import Hero from "../components/Hero/Hero";
import ProductGrid from "../components/ProductGrid/ProductGrid";
import fallbackProducts from "../fallbackProducts.json";

// Server Action / Fetch
async function getProducts() {
  try {
    // We add no-store to force SSR instead of static build-time generation
    // which prevents the build from crashing if FakeStoreAPI rate limits Vercel's IP
    const res = await fetch('https://fakestoreapi.com/products', { cache: 'no-store' });
    if (!res.ok) {
      console.warn('API returned non-200. Defaulting to fallback items.');
      return fallbackProducts;
    }
    return res.json();
  } catch (error) {
    console.warn('Failed to fetch data from FakeStoreAPI. Defaulting to fallback items.', error);
    return fallbackProducts; // Return fallback gracefully so the build doesn't crash
  }
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
