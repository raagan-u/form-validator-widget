import React from "react";

interface CustomFormProps {
	onSubmit: (data: Record<string, any>) => void;
	children: React.ReactNode;
	className?: string;
}

const FormComponent: React.FC<CustomFormProps> = ({ onSubmit, children, className }) => {
	const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();

		const FormData: Record<string, any> = {};
		React.Children.forEach(children, (child) => {
			if (React.isValidElement(child) && child.props.name) {
				FormData[child.props.name] = child.props.value;
			}
		})

		onSubmit(FormData);
	};

	return (
		<div className={className}>
			<div>{children}</div>
			<button type='submit' onClick={handleSubmit}>SUBMIT</button>
		</div>
	);
}

export default FormComponent;