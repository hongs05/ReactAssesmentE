import React from "react";
import "./Alert.css";

const Alert = ({ message, onClose }) => {
	return (
		<div className='alert'>
			<span>{message}</span>
			<button className='close-button' onClick={onClose}>
				X
			</button>
		</div>
	);
};

export default Alert;
