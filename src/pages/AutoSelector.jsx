import { AutoSelectorWrapper } from "./AutoSelector.styles";

import { useContext, useEffect, useState } from "react";
import { messagesContext, robotContext } from "../App";
import AutoField from "../components/AutoField";
import AutoList from "../components/AutoList";

const AutoSelector = () => {
	const [autos, setAutos] = useState(null);
	const [selectedAuto, setSelectedAuto] = useState(null);
	const isRobotConnected = useContext(robotContext);
	const addMessage = useContext(messagesContext);

	const changeSelectedAuto = (name) => {
		if (selectedAuto === name) return;

		if (name === null) {
			setSelectedAuto(null);
			window.NetworkTables.putValue("/SmartDashboard/selectedAuto", "");
			window.localStorage.removeItem("selectedAuto");
			addMessage("Auto removed", false);
			return;
		}
		setSelectedAuto(name);
		window.NetworkTables.putValue("/SmartDashboard/selectedAuto", name);
		window.localStorage.setItem("selectedAuto", name);
		addMessage("Auto updated!", false);
	};

	useEffect(() => {
		if (!isRobotConnected) {
			setAutos(null);
			setSelectedAuto(null);
			return;
		}
		const receivedAutos = JSON.parse(
			window.NetworkTables.getValue("/SmartDashboard/autos")
		);
		setAutos(receivedAutos);

		const localStorageSelectedAuto =
			window.localStorage.getItem("selectedAuto");
		const autoNames = Object.keys(receivedAutos);

		if (
			localStorageSelectedAuto === null ||
			!autoNames.includes(localStorageSelectedAuto)
		)
			return;

		changeSelectedAuto(localStorageSelectedAuto);
	}, [isRobotConnected]);

	return (
		<AutoSelectorWrapper>
			<AutoField
				autos={autos}
				selectedAuto={selectedAuto}
				changeSelectedAuto={changeSelectedAuto}
			/>
			<AutoList
				autos={autos}
				selectedAuto={selectedAuto}
				changeSelectedAuto={changeSelectedAuto}
			/>
		</AutoSelectorWrapper>
	);
};

export default AutoSelector;
