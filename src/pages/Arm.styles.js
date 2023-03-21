import styled from "styled-components";

export const ArmWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 20px;
	width: 100%;
	height: calc(100vh - 140px);
`;

export const Simulation = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #1b1b1f;
	height: 100%;
	box-shadow: ${({ theme }) => theme.boxShadow};
	background-color: ${({ theme }) => theme.interactiveText};
	border-radius: 15px;
	overflow: hidden;
	aspect-ratio: 4 / 3;
	> canvas {
		width: 100%;
		height: 100%;
	}
`;
