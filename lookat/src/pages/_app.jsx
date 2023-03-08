import "./../styles/globals.css";
import "./../styles/transition.css";
import Layout from "../components/Layout";
import Transition from "../components/Transition";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Transition>
        <Component {...pageProps} />
      </Transition>
    </Layout>
  );
}
