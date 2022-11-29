import "../styles/globals.css";
import { Navbar } from "../components/componentsIndex";
import { Footer } from "../components/componentsIndex";
import { nftDetails } from "./nftDetails"

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
	  <nftDetails />
      <Component {...pageProps} />
	  <Footer />
    </div>
  );
}

export default MyApp;
