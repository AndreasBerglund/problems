import React from "react";
import { createRoot } from "react-dom/client";
import BooksContainer from "./container_presentation/container/BooksContainer";

const App = () => {
  return (
    <div>
      <h2>Container / Presentation pattern</h2>
      <BooksContainer />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
