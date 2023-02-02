import styled from "styled-components";

export const IndicatorWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 15px;
	padding: 10px 15px;
	border-radius: 10px;
	user-select: none;
	box-shadow: ${({ theme }) => theme.boxShadow};
	background-color: ${({ theme, activated }) =>
		activated ? theme.activated : theme.deactivated};
	> p {
		color: ${({ theme }) => theme.interactiveText};
		font-size: 20px;
		font-weight: 500;
	}
	img {
		height: 22px;
		width: auto;
	}
`;
