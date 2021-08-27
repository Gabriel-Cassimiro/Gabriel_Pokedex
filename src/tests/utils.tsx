import React from "react"
import { ThemeProvider } from "styled-components"

import theme from "../styles/theme"

export const TestProvider: React.FC = ({ children }) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
