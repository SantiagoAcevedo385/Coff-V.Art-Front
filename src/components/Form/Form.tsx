import React, { FC, useState } from 'react';

import './Form.css';

interface optionField {
	value: string;
	label: string;
}

export interface FormField {
	name: string;
	type: string;
	label: string;
	placeholder?: string;
	value?: string;
	options?: optionField[];
}

interface FormProps {
	title?: string;
	fields: FormField[];
	onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
	button: JSX.Element | JSX.Element[] | string;
	errors?: { [key: string]: string };
}

export const Form: FC<FormProps> = ({
	title,
	fields,
	onSubmit,
	button,
	errors,
}) => {
	const [selectedOption, setSelectedOption] = useState(false);

	return (
		<>
			<form onSubmit={onSubmit}>
				{title && <h1>{title}</h1>}
				{fields?.map(({ name, type, label, placeholder, value, options }) => {
					switch (type) {
						case 'text':
						case 'password': {
							return (
								<div className={`inputControl`} key={name}>
									<input
										type={type}
										name={name}
										id={name}
										value={value && value}
										placeholder={placeholder ? placeholder : label}
										autoComplete='false'
									/>
									{errors && errors[name] && (
										<span className={`error`}>{errors[name]}</span>
									)}
									<label htmlFor={name}>{label}</label>
								</div>
							);
						}
						case 'select': {
							return (
								<div className={`selectControl${selectedOption ? ' active' : ''}`} key={name}>
									<select
										name={name}
										id={name}
										onChange={(e) =>
											e.target.value === ''
												? setSelectedOption(false)
												: setSelectedOption(true)
										}
									>
										<option value=''></option>
										{options?.map(({ value, label }) => (
											<option key={value} value={value}>
												{label}
											</option>
										))}
									</select>
									<label htmlFor={name}>{label}</label>
								</div>
							);
						}
						default: {
							return (
								<div>
									Tipo {type} desconocido en el input {name}
								</div>
							);
						}
					}
				})}
				{button}
			</form>
		</>
	);
};
