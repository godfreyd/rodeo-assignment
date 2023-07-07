import { css, Global } from "@emotion/react";
import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Theme from "./ui/Theme";
import ApolloProvider from "./services/request/provider";

const IndexPage = lazy(() => import("./pages"));

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.Fragment>
    <Global
      styles={css`
        html,
        body,
        #root {
          height: 100%;
          width: 100%;
        }
      `}
    />
    <Theme>
      <ApolloProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<IndexPage />} />
          </Routes>
        </BrowserRouter>
      </ApolloProvider>
    </Theme>
  </React.Fragment>
);
