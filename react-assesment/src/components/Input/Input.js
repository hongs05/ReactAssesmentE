import React from "react";
//import "./Input.css";

const Input = ({ value, onChange }) => {
	return (
		<input
			className='styled-input'
			type='text'
			value={value}
			onChange={(e) => onChange(e.target.value)}
			placeholder='Ingresa algo...'
		/>
	);
};

export default Input;
