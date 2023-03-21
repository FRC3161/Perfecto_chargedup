import ArmKinematics from "./components/ArmKinematics";

class ArmSimulation {
	width = 400;
	height = 300;
	widthMeters = 2;

	constructor({
		canvas = document.createElement("canvas"),
		armLength = 0,
		wristLength = 0,
	}) {
		this.canvas = canvas;
		this.canvas.width = this.canvas.clientWidth;
		this.canvas.height = this.canvas.clientHeight;
		this.ctx = canvas.getContext("2d");
		this.scaleFactor = this.canvas.clientWidth / this.width;
		this.armLength = armLength;
		this.wristLength = wristLength;
		this.kinematics = new ArmKinematics({ armLength, wristLength });
	}

	start = () => {
		this.update();
	};

	get canvasWidth() {
		return this.width * this.scaleFactor;
	}
	get canvasHeight() {
		return this.height * this.scaleFactor;
	}

	scale = (value) => {
		return value * this.scaleFactor;
	};

	metersToPixels = (meters) => {
		const value = (meters * this.width) / this.widthMeters;
		return this.scale(value);
	};

	drawRobot = () => {
		this.ctx.fillStyle = "white";
		this.ctx.fillRect(
			this.scale(20),
			this.scale(260),
			this.metersToPixels(0.5842),
			this.metersToPixels(0.0508)
		);

		this.ctx.strokeStyle = "white";
		this.ctx.lineWidth = 3;
		this.ctx.beginPath();
		this.ctx.arc(
			this.scale(20) + this.metersToPixels(0.0508),
			this.scale(260) + this.metersToPixels(0.0508 * 2),
			this.metersToPixels(0.0508),
			0,
			2 * Math.PI
		);
		this.ctx.stroke();

		this.ctx.beginPath();
		this.ctx.arc(
			this.metersToPixels(0.5842) +
				this.scale(20) -
				this.metersToPixels(0.0508),
			this.scale(260) + this.metersToPixels(0.0508 * 2),
			this.metersToPixels(0.0508),
			0,
			2 * Math.PI
		);
		this.ctx.strokeStyle = "white";
		this.ctx.stroke();

		this.ctx.fillRect(
			this.scale(20) + this.metersToPixels(0.2),
			this.scale(130),
			this.metersToPixels(0.0508),
			this.scale(260) - this.scale(130)
		);
	};

	drawArm = () => {
		this.ctx.strokeStyle = "blue";
		this.ctx.lineWidth = this.metersToPixels(0.0508);
		this.ctx.beginPath();
		this.ctx.moveTo(
			this.scale(20) +
				this.metersToPixels(0.2) +
				this.metersToPixels(0.0508) / 2,
			this.scale(130)
		);
		this.ctx.lineTo(
			this.scale(20) +
				this.metersToPixels(0.2) +
				this.metersToPixels(0.0508) / 2 +
				this.metersToPixels(0.8382),
			this.scale(130)
		);
		this.ctx.stroke();
	};

	update = () => {
		this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
		this.ctx.lineWidth = 5;
		this.ctx.fillStyle = "black";
		this.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
		this.drawRobot();
		this.drawArm();

		requestAnimationFrame(this.update);
	};
}

export default ArmSimulation;
