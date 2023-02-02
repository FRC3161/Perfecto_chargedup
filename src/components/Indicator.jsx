import { IndicatorWrapper } from "./Indicator.styles";

const Indicator = ({ image, activated = false, children }) => {
	return (
		<IndicatorWrapper activated={activated}>
			<img src={image} alt="svg" />
			<p>{children}</p>
		</IndicatorWrapper>
	);
};

export default Indicator;
