import Layout from "../../components/Layout";
import "@/styles/globals.css";

//this wraps around all page components
export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
