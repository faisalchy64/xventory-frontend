import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./components/AuthProvider.jsx";
import App from "./App.jsx";
import Scroll from "./components/Scroll.jsx";
import "./index.css";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <App />
        </AuthProvider>
        <Toaster position="top-right" toastOptions={{ duration: 5000 }} />
        <Scroll />
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>
);
