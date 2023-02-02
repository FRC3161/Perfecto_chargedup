import {
	AutoFieldWrapper,
	FieldImage,
	PinPoint,
	PinPointName,
} from "./AutoField.styles";

import fieldImage from "../images/field.png";
import PinPointSvg from "../images/svg/PinPointSvg";
import PolygonSvg from "../images/svg/PolygonSvg";

const FIELD_WIDTH = 6.16;
const FIELD_HEIGHT = 8.02;

const AutoField = ({ autos, selectedAuto, changeSelectedAuto }) => {
	return (
		<AutoFieldWrapper>
			<FieldImage src={fieldImage} alt="field image" />
			{autos &&
				Object.entries(autos).map(([key, value]) => (
					<PinPoint
						onClick={() => {
							changeSelectedAuto(key);
						}}
						style={{
							bottom: `calc(${
								(value[1] * 100) / FIELD_HEIGHT
							}% + 20px - 60px / 2)`,
							left: `calc(${
								(value[0] * 100) / FIELD_WIDTH
							}% + 20px - 54px / 2)`,
						}}
						key={key}
						active={selectedAuto === key}
					>
						<PinPointName active={selectedAuto === key}>
							<h3>{key}</h3>
							<PolygonSvg />
						</PinPointName>
						<PinPointSvg height="60px" fill="white" />
					</PinPoint>
				))}
		</AutoFieldWrapper>
	);
};

export default AutoField;
