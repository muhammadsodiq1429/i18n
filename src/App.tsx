import { memo } from "react";
import { Footer, Header } from "./components";
import { useRoutes } from "react-router-dom";
import { LINKS } from "./static";

export const App = memo(() => {
  return (
    <>
      <Header />
      <main className="container">
        {useRoutes(
          LINKS.map((item) => ({
            path: item.path,
            element: item.element,
          }))
        )}
      </main>
      <Footer />
    </>
  );
});
