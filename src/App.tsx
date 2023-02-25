import React from "react";
import Layout from "./components/Layout";
import "./App.css"
import CustomTab from "./components/Tab";

function App() {
  return (
    <div className="App">
      <Layout>
        <CustomTab>
          Hello
        </CustomTab>
      </Layout>
    </div>
  );
}

export default App;
