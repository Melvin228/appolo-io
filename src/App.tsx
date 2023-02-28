import React from "react";
import "./App.css";
import DataGrid from "./components/DataGrid";
import Layout from "./components/Layout";
import Sidebar from "./components/Sidebar";
import CustomTab from "./components/Tab";

function App() {
  return (
    <div className="App">
      <Layout>
        <CustomTab>
          <Sidebar />
          <DataGrid />
        </CustomTab>
      </Layout>
    </div>
  );
}

export default App;
