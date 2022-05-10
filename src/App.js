import { createContext, useState } from "react";
import Home from "./components/Home";

export const SideNavBar = createContext();
function App() {
  const [sideNav, setSideNav] = useState(false);
  return (
    <SideNavBar.Provider value={{ sideNav, setSideNav }}>
      <Home />
    </SideNavBar.Provider>
  );
}

export default App;
