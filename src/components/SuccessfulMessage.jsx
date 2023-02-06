import styled from "styled-components";
import { Left, ErrorMessageWrapper, Right, Top } from "./ErrorMessage.styles";
import { useEffect, useState } from "react";
import close from "../images/close.svg";
import done from "../images/done.svg";

const NewMain = styled(ErrorMessageWrapper)`
	background-color: ${({ theme }) => theme.activated};
`;

const SuccessfulMessage = ({ children }) => {
	const [show, setShow] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setShow(false);
		}, 3 * 1000);
	}, []);
	const handleClick = () => {
		setShow(false);
	};
	if (show) {
		return (
			<NewMain>
				<Left>
					<Top>
						<img src={done} />
						<p>{children}</p>
					</Top>
				</Left>
				<Right>
					<img src={close} onClick={handleClick} />
				</Right>
			</NewMain>
		);
	}
	return <></>;
};

export default SuccessfulMessage;
