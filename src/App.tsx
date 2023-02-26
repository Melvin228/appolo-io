import React from "react";
import Layout from "./components/Layout";
import "./App.css"
import CustomTab from "./components/Tab";
import Sidebar from "./components/Sidebar";
import DataGrid from "./components/DataGrid";

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
