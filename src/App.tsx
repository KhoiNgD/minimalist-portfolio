import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import { Outlet } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyles/GlobalStyles";

function App() {
  const navLinks = [
    { name: "home", path: "/home" },
    { name: "portfolio", path: "/portfolio" },
    { name: "contact me", path: "/contact me" },
  ];

  return (
    <>
      <Header navLinks={navLinks} />
      <Outlet />
      <Footer navLinks={navLinks} />

      <GlobalStyles />
    </>
  );
}

export default App;
