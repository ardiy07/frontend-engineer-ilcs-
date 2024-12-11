import React, { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Layout from "./components/Layout/Layout";
import { loadDataParkir } from "./utils/loadDataParkir";
import { getDataLocalStorage } from "./utils/localStorageUtils";

function App() {
  useEffect(() => {
    const data = getDataLocalStorage("dataParkir");
    if (data === null) {
      loadDataParkir();
    }
  }, []);
  return (
    <>
      <Navbar />
      <Layout />
    </>
  );
}

export default App;
