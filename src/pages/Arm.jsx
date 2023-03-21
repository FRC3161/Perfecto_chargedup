import { useEffect } from "react";
import { useRef } from "react";
import ArmSimulation from "../ArmSimulation";
import { ArmWrapper, Simulation } from "./Arm.styles";

const Arm = () => {
	const canvasRef = useRef(null);
	useEffect(() => {
		const armSimulation = new ArmSimulation({
			canvas: canvasRef.current,
			armLength: 0.8382,
			wristLength: 0.254,
		});

		armSimulation.start();
	}, []);
	return (
		<ArmWrapper>
			<Simulation>
				<canvas ref={canvasRef}>
					ur browser doesn't support HTML5 canvas
				</canvas>
			</Simulation>
		</ArmWrapper>
	);
};

export default Arm;
