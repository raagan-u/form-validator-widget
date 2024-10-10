import { useState } from "react";
import FormComponent from "../components/FormComponent";

function Testing() {
	const [name, setName] = useState("")
	const FormHandler = (data: Record<string, any>) => {
		console.log(data);
	}
	return (
		<div>
			<FormComponent onSubmit={FormHandler}>
			<input
				type="text"
				name="name"  // Make sure this matches the key expected in the FormData object
				value={name}
				onChange={(e) => setName(e.target.value)}
				placeholder="name"
			/>
			</FormComponent>
		</div>
	)
}

export default Testing;