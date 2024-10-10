import { useState } from "react";
import { validateInput } from "../services/alertServices";

const useAlert = () => {
	const [inputValue, setInputValue] = useState("");
	const [showAlert, setShowAlert] = useState(false);

	const handleClick = () => {
		if (validateInput(inputValue)) {
			setShowAlert(true);
		}
	};

	const closeAlert = () => {
		setShowAlert(false);
	};

	const handleInputChange = (value) => {
		setInputValue(value);
		if (value) {
			closeAlert(); // Esconde la alerta si hay un valor en el input
		}
	};

	return {
		inputValue,
		setInputValue: handleInputChange,
		showAlert,
		handleClick,
		closeAlert,
	};
};

export default useAlert;
