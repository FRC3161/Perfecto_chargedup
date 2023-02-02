import { createContext, useState } from "react";
import "./styles/global.css";
import "./styles/fonts.css";
import styled, { ThemeProvider } from "styled-components";
import { dark, light } from "./components/Themes";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { AppDiv, Messages } from "./App.styles";
import ErrorMessage from "./components/ErrorMessage";
import SuccessfulMessage from "./components/SuccessfulMessage";

export const robotContext = createContext(false);
export const messagesContext = createContext(() => {});

const App = () => {
	const [isRobotConnected, setRobotConnected] = useState(false);
	const [messages, setMessages] = useState([]);

	const addMessage = (message, error) => {
		if (error) {
			setMessages([
				...messages,
				<ErrorMessage key={messages.length}>{message}</ErrorMessage>,
			]);
		} else {
			setMessages([
				...messages,
				<SuccessfulMessage key={messages.length}>
					{message}
				</SuccessfulMessage>,
			]);
		}
	};

	console.log(messages);
	const [theme, setTheme] = useState(
		localStorage.getItem("theme") || "light"
	);

	const updateTheme = (mode) => {
		window.localStorage.setItem("theme", mode);
		setTheme(mode);
	};
	const themeToggler = () => {
		theme === "light" ? updateTheme("dark") : updateTheme("light");
	};

	return (
		<ThemeProvider theme={theme === "light" ? light : dark}>
			<robotContext.Provider value={isRobotConnected}>
				<messagesContext.Provider value={addMessage}>
					<AppDiv>
						<Header
							themeToggler={themeToggler}
							setRobotConnected={setRobotConnected}
							theme={theme}
						/>
						<Messages>{messages}</Messages>
						<Outlet />
					</AppDiv>
				</messagesContext.Provider>
			</robotContext.Provider>
		</ThemeProvider>
	);
};

export default App;
