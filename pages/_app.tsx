import { AppProps } from "next/app";
import "../styles/index.css";
import "react-svg-map/lib/index.css";

const App = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);
export default App;
