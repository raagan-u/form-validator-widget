interface RadioButtonProps {
	options: Array<{value: string; label: string}>;
	selectedValue: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	name: string;
}

const RadioButton  = ({options, selectedValue, onChange, name }: RadioButtonProps) => {
	return (
		<div>
			{options.map((option)=> (
				<label key={option.value}>
					<input
						type="radio"
						name={name}
						value={option.value}
						checked={selectedValue === option.value}
						onChange={onChange}
					>
					</input>
					{option.label}
				</label>
			))}
		</div>
	)
}

export default RadioButton;