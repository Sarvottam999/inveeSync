import Layout from "@/components/Layout";
import { InventoryProvider } from "@/context/InventoryContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return   <InventoryProvider>

  <Layout>
  <Component {...pageProps} />
</Layout>
</InventoryProvider>;
}
