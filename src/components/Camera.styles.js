import styled from "styled-components";

export const CameraWrapper = styled.div`
	display: flex;
	flex-grow: 1;
	flex-basis: 400px;
	height: 100%;
	position: relative;
	justify-content: center;
	align-items: center;
	background-color: ${({ theme }) => theme.boxBackground};
	box-shadow: ${({ theme }) => theme.boxShadow};
	border-radius: 15px;
	> img {
		object-fit: contain;
		object-position: center;
		width: 100%;
		height: 100%;
		border-radius: 15px;
	}
`;

export const CameraName = styled.div`
	position: absolute;
	top: -22px;
	left: 15px;
`;

export const CameraNotFound = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 15px;
	> svg path {
		fill: ${({ theme }) => theme.text};
	}
	> h4 {
		font-size: 20px;
		font-weight: normal;
		color: ${({ theme }) => theme.text};
		text-align: center;
	}
`;
