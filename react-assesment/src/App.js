import "./App.css";
import React from "react";
import Input from "./components/Input/Input";

import Alert from "./components/Alert/Alert";
import useAlert from "./hooks/useAlert";

const App = () => {
	const { inputValue, setInputValue, showAlert, handleClick, closeAlert } =
		useAlert();

	return (
		<div className='app-container'>
			<Input value={inputValue} onChange={setInputValue} />
			<button className='button' onClick={handleClick} disabled={!inputValue}>
				Mostrar Alerta
			</button>

			{showAlert && (
				<Alert message='Este es un mensaje de alerta' onClose={closeAlert} />
			)}
		</div>
	);
};

export default App;
