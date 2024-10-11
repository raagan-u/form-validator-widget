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
			{
				React.Children.map(children, (child) => {
					if ( React.isValidElement(child) && child.props.type === "submit") {
						return React.cloneElement( child as React.ReactElement<any>, { onClick: handleSubmit});
					}
					return child;
				})
			}
		</div>
	);
}

export default FormComponent;