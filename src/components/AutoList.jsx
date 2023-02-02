import AutoSvg from "../images/svg/AutoSvg";
import {
	AutoListWrapper,
	DeleteOption,
	InteractiveOption,
	Path,
	Paths,
	Top,
	TopName,
	TopOptions,
} from "./AutoList.styles";

const AutoList = ({ autos, selectedAuto, changeSelectedAuto }) => {
	const handleEmpty = () => {
		changeSelectedAuto(null);
	};
	return (
		<AutoListWrapper>
			<Top>
				<TopName>
					<AutoSvg />
					<h2>autos</h2>
				</TopName>
				<TopOptions>
					<DeleteOption onClick={handleEmpty}>
						<p>Deselect</p>
					</DeleteOption>
				</TopOptions>
			</Top>
			<Paths>
				{autos &&
					Object.entries(autos).map(([key, value]) => (
						<Path key={key} active={key === selectedAuto}>
							<TopName>
								<h2>{key}</h2>
							</TopName>
							<TopOptions>
								<InteractiveOption
									active={key === selectedAuto}
									onClick={() => {
										changeSelectedAuto(key);
									}}
								>
									<p>
										{key === selectedAuto
											? "Selected"
											: "Select"}
									</p>
								</InteractiveOption>
							</TopOptions>
						</Path>
					))}
			</Paths>
		</AutoListWrapper>
	);
};

export default AutoList;
