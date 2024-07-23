import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

function useTheme(type) {
    const context = useContext(ThemeContext);

    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context[type];
}

export { useTheme };
