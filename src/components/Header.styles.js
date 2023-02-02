import styled from "styled-components";
import { IndicatorWrapper } from "./Indicator.styles";
import { dark, light } from "./Themes";

export const HeaderWrapper = styled.header`
	width: 100%;
	height: 80px;
	padding: 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: ${({ theme }) => theme.boxBackground};
	box-shadow: ${({ theme }) => theme.boxShadow};
	border-radius: 20px;
	margin-bottom: 20px;
`;

export const Left = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 50px;
`;

export const Name = styled.h1`
	color: ${({ theme }) => theme.text};
	font-weight: 500;
	font-size: 36px;
`;

export const Right = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 15px;
`;

export const Links = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 20px;
`;

export const LinkWrapper = styled.div`
	> a {
		transition: 0.5s;
		border-radius: 10px;
		text-decoration: none;
		box-shadow: ${({ theme }) => theme.boxShadow};
		background-color: ${({ theme, active }) =>
			active ? theme.interactive : theme.boxBackground};
		color: ${({ theme, active }) =>
			active ? theme.interactiveText : theme.text};
		padding: 10px;
		font-size: 24px;
		font-weight: 500;
		&:hover {
			background-color: ${({ theme }) => theme.interactive};
			color: ${({ theme }) => theme.interactiveText};
			transition: 0.5s;
		}
	}
`;

export const ModeToggler = styled(IndicatorWrapper)`
	cursor: pointer;
	background-color: ${({ theme }) =>
		theme.name === "light" ? dark.background : light.background};
	> p {
		color: ${({ theme }) => theme.background};
	}
`;
