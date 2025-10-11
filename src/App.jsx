import "@/assets/index.css";
import RQProvider from "./react-query/RQProvider";
import HomePage from "./components/homepage/HomePage";
import Header from "./components/general/header/Header";
import Footer from "./components/general/footer/Footer";

export default function App() {
  return (
    <RQProvider>
      <Header />
      <HomePage />
      <Footer />
    </RQProvider>
  );
}
