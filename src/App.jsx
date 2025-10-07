import "./index.css";
import RQProvider from "./react-query/RQProvider";
import HomePage from "./components/general/HomePage/HomePage";
import Header from "./components/general/header/Header";
import Footer from "./components/general/footer/Footer";

export default function App() {
  // useEffect(() => {
  //   fetch("/api/v3");
  //   // fetch("/api/v1/categories/android-box/search/");
  // }, []);

  return (
    <RQProvider>
      <Header />
      <HomePage />
      <Footer/>
    </RQProvider>
  );
}
