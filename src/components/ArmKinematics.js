class ArmKinematics {
	constructor({ armLength = 0, wristLength = 0 }) {
		this.armLength = armLength;
		this.wristLength = wristLength;
	}

	armEndPoint = ({ x, y, wristAngle }) => {
		const wristX = Math.cos(wristAngle) * this.wristLength;
		const wristY = Math.sin(wristAngle) * this.wristLength;

		return [x - wristX, y - wristY];
	};

	calculate = ({ x, y, wristAngle = 0 }) => {
		const [armEndX, armEndY] = this.armEndPoint({ x, y, wristAngle });
		const armPivotAngle = Math.asin(armEndY / this.armLength);
		const wristPivotAngle = 180 - armPivotAngle - wristAngle;

		return [armPivotAngle, wristPivotAngle];
	};
}

export default ArmKinematics;
