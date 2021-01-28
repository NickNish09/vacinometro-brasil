import { AppProps } from "next/app";
import "../styles/index.css";
import "../styles/title-select.css";
import "../styles/svg-map.css";

const App = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);
export default App;
