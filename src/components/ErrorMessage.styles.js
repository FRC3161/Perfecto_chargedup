import styled from "styled-components";

export const ErrorMessageWrapper = styled.div`
	background-color: ${({ theme }) => theme.deactivated};
	color: white;
	padding: 20px;
	border-radius: 15px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	box-shadow: ${({ theme }) => theme.boxShadow};
`;

export const Left = styled.div`
	margin-right: 30px;
	> p {
		font-weight: 400;
		font-size: 16px;
	}
`;

export const Right = styled.div`
	cursor: pointer;
`;

export const Top = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 10px;
	> img {
		width: 20px !important;
		height: 20px !important;
		margin-right: 10px !important;
	}
`;
