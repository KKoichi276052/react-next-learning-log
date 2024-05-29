import Button from "./Button";

export default function FormSplitBill() {
	return <form action="" className="form-split-bill">
		<h2>Split a bill with</h2>

		<label htmlFor="">💰 Bill value</label>
		<input type="text" />

		<label htmlFor="">🙋‍♂️ Your expense</label>
		<input type="text" />

		<label htmlFor="">🕺 x's expense</label>
		<input type="text" disabled/>

		<label htmlFor="">🤑 Who is paying the bill</label>
		<select name="" id="">
			<option value="you">👨‍💼 You</option>
			<option value="friend">👨‍💼 </option>
		</select>

		<Button>Split Bill</Button>
	</form>
}
