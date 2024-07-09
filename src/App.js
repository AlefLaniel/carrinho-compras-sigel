import React from "react";
import RoutesApp from "./routes";
import { AuthProvider } from "./contexts/auth";
import GlobalStyle from "./styles/global";
import Provider from "./contexts/Provider";

function App() {
  return (
    <AuthProvider>
      <Provider>
        <RoutesApp />
      </Provider>

      <GlobalStyle />
    </AuthProvider>
  );
}

export default App;
