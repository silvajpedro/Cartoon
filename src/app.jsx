import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { GlobalStyle } from "./components/Style";

export function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
      <Footer />
    </>
  );
}
