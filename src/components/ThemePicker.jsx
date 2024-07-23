import { useTheme } from "../hooks/useTheme";
import { useState } from "react";

const bulmaColors = [
    "white",
    "black",
    "light",
    "dark",
    "primary",
    "link",
    "info",
    "success",
    "warning",
    "danger",
];

export default function ThemePicker() {
    const { primary, secondary } = useTheme("state");
    const { setTheme, resetTheme } = useTheme("actions");
    const [selectedPrimary, setSelectedPrimary] = useState(primary);
    const [selectedSecondary, setSelectedSecondary] = useState(secondary);

    const handlePrimaryChange = (event) => {
        setSelectedPrimary(event.target.value);
    };

    const handleSecondaryChange = (event) => {
        setSelectedSecondary(event.target.value);
    };

    const handleApplyTheme = (event) => {
        event.preventDefault();
        setTheme(selectedPrimary, selectedSecondary);
    };

    return (
        <form className="box m-4 p-4" onSubmit={handleApplyTheme}>
            <div className="field">
                <label className="label" htmlFor="primary-color">
                    Select Primary Color:
                </label>
                <div className="control is-expanded">
                    <div className="select is-fullwidth">
                        <select
                            id="primary-color"
                            value={selectedPrimary}
                            onChange={handlePrimaryChange}
                        >
                            {bulmaColors.map((color) => (
                                <option key={color} value={color}>
                                    {color}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
            <div className="field">
                <label className="label" htmlFor="secondary-color">
                    Select Secondary Color:
                </label>
                <div className="control is-expanded">
                    <div className="select is-fullwidth">
                        <select
                            id="secondary-color"
                            value={selectedSecondary}
                            onChange={handleSecondaryChange}
                        >
                            {bulmaColors.map((color) => (
                                <option key={color} value={color}>
                                    {color}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
            <div className="field is-grouped">
                <div className="control">
                    <button className="button is-primary">Apply Theme</button>
                </div>
                <div className="control">
                    <button
                        className="button is-light"
                        type="button"
                        onClick={resetTheme}
                    >
                        Reset Theme
                    </button>
                </div>
            </div>
        </form>
    );
}
