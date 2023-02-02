import styled from "styled-components";

export const OperateWrapper = styled.div`
	width: 100%;
`;
export const Cameras = styled.div`
	display: flex;
	width: 100%;
	gap: 50px;
	padding: 20px;
	background-color: ${({ theme }) => theme.boxBackground};
	box-shadow: ${({ theme }) => theme.boxShadow};
	border-radius: 15px;
	align-items: flex-start;
	flex-direction: column;
`;

export const CamerasTop = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
	> svg > path {
		height: 22px;
		width: auto;
		fill: ${({ theme }) => theme.text};
	}
	> h3 {
		font-size: 24px;
		font-weight: 500;
		color: ${({ theme }) => theme.text};
	}
`;

export const CamerasInner = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	width: 100%;
	gap: 20px;
	height: 400px;
`;
