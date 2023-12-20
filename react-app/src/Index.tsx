import React from "react";
import { Toaster } from "react-hot-toast";
import ReactDOM from "react-dom/client";
import RouteHandeler from "@/RouteHandeler";
import "@/assets/css/index.css";
import { QueryClient, QueryClientProvider } from "react-query";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Toaster />
    <QueryClientProvider client={new QueryClient()}>
      <RouteHandeler />
    </QueryClientProvider>
  </React.StrictMode>
);
