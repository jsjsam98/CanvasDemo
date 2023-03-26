import Square from "./Square";
import Input from "./Input";
import { useState } from "react";
import DrawingBoard from "./DrawingBoard";

function App() {
	const [colorValue, setColorValue] = useState("");
	const [hexValue, setHexValue] = useState("");
	const [isDarkText, setIsDarkText] = useState(true);
	return (
		<div className="App">
			<Square
				colorValue={colorValue}
				hexValue={hexValue}
				isDarkText={isDarkText}
			/>
			<Input
				colorValue={colorValue}
				setColorValue={setColorValue}
				setHexValue={setHexValue}
				isDarkText={isDarkText}
				setIsDarkText={setIsDarkText}
			/>
			<DrawingBoard color={colorValue} />
		</div>
	);
}

export default App;
