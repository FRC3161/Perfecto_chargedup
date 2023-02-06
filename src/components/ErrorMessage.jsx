import { useEffect, useState } from "react";
import { ErrorMessageWrapper, Left, Right, Top } from "./ErrorMessage.styles";
import closeSvg from "../images/close.svg";
import errorSvg from "../images/error.svg";

const ErrorMessage = ({ children }) => {
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
			<ErrorMessageWrapper>
				<Left>
					<Top>
						<img src={errorSvg} />
						<p>{children}</p>
					</Top>
				</Left>
				<Right>
					<img src={closeSvg} onClick={handleClick} />
				</Right>
			</ErrorMessageWrapper>
		);
	}

	return <></>;
};

export default ErrorMessage;
