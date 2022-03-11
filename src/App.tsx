import Header from "components/Header/Header";
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

      <GlobalStyles />
    </>
  );
}

export default App;
