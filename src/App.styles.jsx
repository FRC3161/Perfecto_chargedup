import styled from "styled-components";

export const AppDiv = styled.div`
	background-color: ${({ theme }) => theme.background};
	color: ${({ theme }) => theme.text};
	min-height: 100%;
	width: 100%;
	padding: 20px;
`;

export const Messages = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 300px;
	position: fixed;
	bottom: 30px;
	right: 30px;
	gap: 10px;
`;
