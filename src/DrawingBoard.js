import React, { useRef, useState } from "react";

const DrawingBoard = ({ color }) => {
	const canvasRef = useRef(null);
	const [isDrawing, setIsDrawing] = useState(false);
	const [startCoords, setStartCoords] = useState({ x: 0, y: 0 });

	const handleMouseDown = (event) => {
		setIsDrawing(true);
		setStartCoords({
			x: event.nativeEvent.offsetX,
			y: event.nativeEvent.offsetY,
		});
	};

	const handleMouseMove = (event) => {
		if (!isDrawing) {
			return;
		}

		const canvas = canvasRef.current;
		const ctx = canvas.getContext("2d");
		ctx.strokeStyle = color;
		ctx.beginPath();
		ctx.moveTo(startCoords.x, startCoords.y);
		ctx.lineTo(event.nativeEvent.offsetX, event.nativeEvent.offsetY);
		ctx.stroke();

		setStartCoords({
			x: event.nativeEvent.offsetX,
			y: event.nativeEvent.offsetY,
		});
	};

	const handleMouseUp = () => {
		setIsDrawing(false);
	};
	const handleClearCanvas = () => {
		const canvas = canvasRef.current;
		const ctx = canvas.getContext("2d");
		ctx.clearRect(0, 0, canvas.width, canvas.height);
	};
	return (
		<>
			<canvas
				className="canvas"
				ref={canvasRef}
				style={{ border: "5px solid black" }}
				width={800}
				height={600}
				onMouseDown={handleMouseDown}
				onMouseMove={handleMouseMove}
				onMouseUp={handleMouseUp}
			/>
			<button
				type="button"
				style={{ width: "10em", color: "#ff0000" }}
				onClick={handleClearCanvas}
			>
				Clear
			</button>
		</>
	);
};

export default DrawingBoard;
