import { Link, Router, useLocation } from "react-router-dom";
import {
	HeaderWrapper,
	Left,
	Name,
	Right,
	Links,
	ModeToggler,
	LinkWrapper,
} from "./Header.styles";
import Indicator from "./Indicator";

import robotSvg from "../images/robot.svg";
import serverSvg from "../images/server.svg";
import darkmodeSvg from "../images/darkmode.svg";
import lightmodeSvg from "../images/lightmode.svg";
import { useContext, useEffect, useState } from "react";
import { messagesContext, robotContext } from "../App";

const Header = ({ themeToggler, setRobotConnected, theme }) => {
	const [isServerConnected, setServerConnected] = useState(false);
	const isRobotConnected = useContext(robotContext);
	const addMessage = useContext(messagesContext);

	const location = useLocation();

	useEffect(() => {
		window.NetworkTables.addRobotConnectionListener((connected) => {
			setTimeout(() => {
				setRobotConnected(connected);
				if (connected) {
					addMessage("Robot connected!", false);
				} else {
					addMessage("Robot disconnected!", true);
				}
			}, 1000);
		}, true);
		window.NetworkTables.addWsConnectionListener((connected) => {
			setServerConnected(connected);
			if (connected) {
				addMessage("Server connected!", false);
			} else {
				addMessage("Server disconnected!", true);
			}
		}, true);
	}, []);

	return (
		<HeaderWrapper>
			<Left>
				<Name>Perfecto</Name>
				<Links>
					<LinkWrapper active={location.pathname === "/"}>
						<Link to="/">Operate</Link>
					</LinkWrapper>
					<LinkWrapper active={location.pathname === "/swerve"}>
						<Link to="/swerve">Swerve</Link>
					</LinkWrapper>
					<LinkWrapper active={location.pathname === "/arm"}>
						<Link to="/arm">Arm</Link>
					</LinkWrapper>
					<LinkWrapper active={location.pathname === "/vision"}>
						<Link to="/vision">Vision</Link>
					</LinkWrapper>
					<LinkWrapper active={location.pathname === "/auto"}>
						<Link to="/auto">Auto</Link>
					</LinkWrapper>
				</Links>
			</Left>
			<Right>
				<Indicator image={robotSvg} activated={isRobotConnected}>
					Robot
				</Indicator>
				<Indicator image={serverSvg} activated={isServerConnected}>
					Server
				</Indicator>
				<ModeToggler onClick={themeToggler}>
					<img
						src={theme === "light" ? darkmodeSvg : lightmodeSvg}
						alt=""
					/>
					<p>{theme === "light" ? "Dark Mode" : "Light Mode"}</p>
				</ModeToggler>
			</Right>
		</HeaderWrapper>
	);
};

export default Header;
