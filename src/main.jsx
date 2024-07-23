import { createRoot } from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "./contexts/ThemeContext";

createRoot(document.getElementById("root")).render(
    <ThemeProvider initialTheme={{ primary: "primary", secondary: "dark" }}>
        <App />
    </ThemeProvider>
);
