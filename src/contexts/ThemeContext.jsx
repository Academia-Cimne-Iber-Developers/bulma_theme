import { createContext, useReducer } from "react";
import reducer from "./reducer";
import { ACTIONS } from "./actions";
//import PropTypes from "prop-types";

const ThemeContext = createContext();

function ThemeProvider({
    initialTheme = { primary: "primary", secondary: "dark" },
    children,
}) {
    const [state, dispatch] = useReducer(reducer, initialTheme);

    const actions = {
        setTheme: (primary, secondary) => {
            dispatch({
                type: ACTIONS.SET_THEME,
                payload: { primary, secondary },
            });
        },
        resetTheme: () => {
            dispatch({ type: ACTIONS.RESET_THEME, payload: initialTheme });
        },
    };

    return (
        <ThemeContext.Provider value={{ state, actions }}>
            {children}
        </ThemeContext.Provider>
    );
}

// ThemeProvider.propTypes = {
//     initialTheme: PropTypes.shape({
//         primary: PropTypes.string,
//         secondary: PropTypes.string,
//     }),
//     children: PropTypes.node,
// };

export { ThemeContext, ThemeProvider };
