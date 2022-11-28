import "../styles/globals.css";
import { Navbar } from "../components/componentsIndex";
import { Footer } from "../components/componentsIndex";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
	  <Footer />
    </div>
  );
}

export default MyApp;
