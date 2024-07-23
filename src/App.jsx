import ThemePicker from "./components/ThemePicker";
import { useTheme } from "./hooks/useTheme";

export default function App() {
    const { primary, secondary } = useTheme("state");

    return (
        <div className="container">
            <ThemePicker />
            <div className={`box m-4 p-4 has-background-${primary}`}>
                <h1 className={`title is-1 has-text-${secondary}`}>
                    Theme Switcher
                </h1>
            </div>
        </div>
    );
}
