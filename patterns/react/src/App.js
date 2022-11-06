import React from "react";
import { createRoot } from "react-dom/client";
import BooksContainer from "./container_presentation/container/BooksContainer";
import RichButton from "./hoc/Hoc";

const App = () => {
  return (
    <div>
      <h2>Container / Presentation pattern</h2>
      <BooksContainer />
      <h2>Higher order component pattern</h2>
      <RichButton />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
