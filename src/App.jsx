import React from "react";
import Form from './components/Form';
import Gallery from "./components/Gallery";
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Gallery></Gallery>
      <Form />
      <Footer></Footer>
    </div>
  );
};

export default App;
