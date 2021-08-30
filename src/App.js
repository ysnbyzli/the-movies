import { useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleChangeDarkMode = () => {
    setIsDarkMode(!isDarkMode);

    if (!isDarkMode) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }


  return (
    <div className="">
      <Header handleChangeDarkMode={handleChangeDarkMode} />
      <Home />
    </div>
  );
}

export default App;
