import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

ReactDOM.render(
    <React.Fragment>
        <QueryClientProvider client={queryClient}>
            <App />
        </QueryClientProvider>
    </React.Fragment>,
    document.getElementById("root")
);
