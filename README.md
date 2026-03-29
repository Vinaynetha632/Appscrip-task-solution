# Appscrip Task - Candidate Solution

This is a responsive, highly optimized e-commerce Product Listing Page (PLP) built with **Next.js** (App Router) and generic HTML/CSS module styling. It faithfully implements the provided Figma design for "mettā muse" while ensuring best practices for performance and modern web development.

## 🚀 Live Demo
*(Insert your Netlify or Vercel URL here once deployed)*

---

## 💻 Tech Stack
*   **Framework:** Next.js 14+ (React)
*   **Styling:** Pure CSS Modules (`.module.css`) to enforce zero-bloat styling, strict DOM sizes, and semantic class names without heavy third-party UI libraries like Tailwind or Material UI.
*   **Data Fetching:** Native `fetch` with Server-Side Rendering (SSR).
*   **Language:** TypeScript (Strict Mode).

---

## 🎯 How Task Requirements Were Met

### 1. Server-Side Rendering (SSR)
The bulk of the page (Header, Footer, Hero, base layout structure) is rendered on the server in `src/app/page.tsx` using an asynchronous Server Component. Product data is fetched synchronously from the Dummy Store API (`fakestoreapi.com`) *before* delivering HTML to the browser.
*   *Advantage:* Lightning-fast First Contentful Paint (FCP) and superior indexing capabilities.

### 2. Fully Responsive Layout & Grid (Desktop/Tablet/Mobile)
*   **Grid System**: Leveraged native CSS `display: grid;` combined with flexible `minmax(0, 1fr)` column constraints. The product list effortlessly transforms from 4 / 3 columns on Desktop, to 2 / 3 columns on Tablet, to exactly 2 columns on Mobile screens.
*   **Dynamic Sidebar:** The Sidebar filter panel dynamically collapses or hides, seamlessly triggering reflow inside the grid container without layout shifting.

### 3. State Management & Filtering Interactivity
*   Lifting State Up: The selected sidebar categories strictly mutate the filter options inside the `ProductGrid` client-wrapper, allowing an instant, client-side re-render of products based on the selection (e.g., clicking *"Men"* under IDEAL FOR actively strips the store's `"men's clothing"` API objects into the view).
*   Like capabilities are natively handled in the atomic `ProductCard` component isolated inside its own local state logic.

### 4. Advanced Technical SEO Implementation
Every critical metadata parameter was configured inside the Next.js `layout.tsx`:
*   Dynamic `<title>` and custom meta `<description>`.
*   Embedded `<script type="application/ld+json">` injecting standardized **JSON-LD WebSite Schema** perfectly tuned for search engine crawlers.
*   Logical `<h1>` to `<h3>` heading hierarchies across the Hero, Footer, and Products.
*   Dynamic image `<img alt="...">` attributes using exact API product titles.

### 5. Crisp, High-Performance Assets
*   Complete swap of massive font-emojis for highly customized **SVG vectors**. All icons (Search, Profile, Likes, Social Media) evaluate as inline SVG components to vastly reduce HTTP requests, ensuring an exceptionally "minimized DOM size" and snappy UX.

---

## 🛠 Running the Application Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/Appscrip-task-solution.git
   cd Appscrip-task-solution
   ```
2. **Install dependencies:**
    ```bash
    npm install
    ```
3. **Start the development server:**
    ```bash
    npm run dev
    ```
4. **Open in browser:**
    Navigate to `http://localhost:3000` to view the application in action.

## 📦 Deployment (e.g. Netlify)
Push this repository directly to your public GitHub. Head over to Netlify's dashboard, import an existing project from your GitHub, and it will autodetect the Next.js deployment profile (Build command: `npm run build`, Publish directory: `.next`). No additional configuration file is required.
