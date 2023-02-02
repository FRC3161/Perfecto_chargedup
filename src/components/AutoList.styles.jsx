import styled from "styled-components";

export const AutoListWrapper = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	flex-grow: 1;
	flex-basis: 420px;
	height: 100%;
	box-shadow: ${({ theme }) => theme.boxShadow};
	background-color: ${({ theme }) => theme.interactiveText};
	border-radius: 15px;
	gap: 30px;
	padding: 20px;
`;

export const Top = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	align-items: center;
`;

export const TopName = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
	> svg {
		width: 33px;
		height: 22px;
		path {
			transition: 0.5s;
			stroke: ${({ theme }) => theme.text};
		}
	}

	h2 {
		font-size: 24px;
		text-align: center;
		font-weight: 500;
		color: ${({ theme }) => theme.text};
	}
`;

export const TopOptions = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
`;

export const DeleteOption = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 8px;
	padding: 5px 15px;
	background-color: ${({ theme }) => theme.deactivated};
	box-shadow: ${({ theme }) => theme.boxShadow};
	cursor: pointer;

	> p {
		font-size: 18px;
		font-weight: 500;
		color: ${({ theme }) => theme.interactiveText};
	}
`;

export const Paths = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 100%;
	max-height: 100%;
	gap: 15px;
`;

export const Path = styled(Top)`
	padding: 15px;
	background-color: ${({ theme, active }) =>
		active ? theme.interactive : theme.interactiveText};
	box-shadow: ${({ theme }) => theme.boxShadow};
	border-radius: 15px;
	cursor: pointer;
	transition: 0.5s;

	h2 {
		font-size: 20px;
		color: ${({ theme, active }) =>
			active ? theme.interactiveText : theme.text};
		transition: 0.5s;
	}
`;

export const InteractiveOption = styled(DeleteOption)`
	background-color: ${({ theme, active }) =>
		active ? theme.interactiveText : theme.interactive};
	transition: 0.5s;

	> p {
		color: ${({ theme, active }) =>
			active ? theme.interactive : theme.interactiveText};
		transition: 0.5s;
	}
`;
