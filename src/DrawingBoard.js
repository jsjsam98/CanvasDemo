import React, { useRef, useState } from "react";

const DrawingBoard = ({ color }) => {
	const canvasRef = useRef(null);
	const [isDrawing, setIsDrawing] = useState(false);
	const [startCoords, setStartCoords] = useState({ x: 0, y: 0 });
	const [brushSize, setBrushSize] = useState(1);

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
		ctx.lineWidth = brushSize;
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
	const handleBrushSizeChange = (event) => {
		setBrushSize(event.target.value);
	};

	return (
		<div style={{ margin: "0.5em" }} className="parent">
			<input
				type="range"
				id="brushSize"
				name="brushSize"
				min="1"
				max="10"
				value={brushSize}
				onChange={handleBrushSizeChange}
			/>
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
		</div>
	);
};

export default DrawingBoard;
