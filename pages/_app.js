import GlobalStyle from "../styles";
import Layout from "../components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
      <div>
        <spotlightArt />
      </div>
    </>
  );
}
