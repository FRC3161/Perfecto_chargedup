import styled from "styled-components";

export const AutoFieldWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 20px;
	background-color: #1b1b1f;
	height: 100%;
	box-shadow: ${({ theme }) => theme.boxShadow};
	border-radius: 15px;
	position: relative;
`;

export const FieldImage = styled.img`
	object-fit: contain;
	object-position: right;
	height: 100%;
`;

export const PinPoint = styled.div`
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	cursor: pointer;

	> svg {
		box-shadow: ${({ theme }) => theme.boxShadow};
		fill: ${({ theme, active }) =>
			active ? theme.interactive : theme.interactiveText};
		> path {
			transition: 0.5s;
		}
	}

	&:hover {
		path {
			fill: ${({ theme, active }) =>
				active ? theme.interactive : theme.interactiveText};
			transition: 0.5s;
		}
		> div {
			background-color: ${({ theme, active }) =>
				active ? theme.interactive : theme.interactiveText};
			transition: 0.2s;
			display: flex;

			> h3 {
				color: ${({ theme, active }) =>
					active ? theme.interactiveText : theme.text};
				transition: 0.2s;
			}
			path {
				transition: 0.2s !important;
			}
		}
	}
`;

export const PinPointName = styled.div`
	display: ${({ active }) => (active ? "flex" : "none")};
	justify-content: center;
	align-items: center;
	background-color: ${({ theme, active }) =>
		active ? theme.interactive : theme.interactiveText};
	border-radius: 10px;
	padding: 10px;
	width: max-content;
	position: absolute;
	transform: translateY(calc(-100% - 30px));
	flex-direction: column;
	transition: 0.2s;
	> h3 {
		text-align: center;
		font-size: 20px;
		font-weight: 500;
		color: ${({ theme, active }) =>
			active ? theme.interactiveText : theme.text};
		transition: 0.2s;
	}
	> svg {
		position: absolute;
		bottom: 0;
		transform: translateY(80%);
		> path {
			transition: 0.2s;
			fill: ${({ theme, active }) =>
				active ? theme.interactive : theme.interactiveText};
		}
	}
`;
