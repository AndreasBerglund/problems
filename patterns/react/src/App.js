import React from "react";
import { createRoot } from "react-dom/client";
import BooksContainer from "./container_presentation/container/BooksContainer";
import ErrorExample from "./error_boundary/ErrorExample";
import RichButton from "./hoc/Hoc";
import CustomHook from "./hooks/CustomHook";
import ConsumerOfTheme from "./provider/ConsumerOfTheme";
import ThemeProviderWrapper from "./provider/ThemeProviderWrapper";
import ShowRenderProps from "./render_props/RenderProps";

const App = () => {
  return (
    <ThemeProviderWrapper>
      <div>
        <h2>Container / Presentation pattern</h2>
        <BooksContainer />
        <h2>Higher order component pattern</h2>
        <RichButton />
        <h2>Render props pattern</h2>
        <ShowRenderProps />
        <h2>Hooks pattern</h2>
        <CustomHook />
        <h2>Provider pattern</h2>
        <ConsumerOfTheme />
        <h2>ErrorBoundary</h2>
        <ErrorExample />
      </div>
    </ThemeProviderWrapper>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
