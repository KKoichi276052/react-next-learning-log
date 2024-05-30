import Button from "./Button"
import { useState } from "react"


export default function FormAddFriend({onAddFriend}) {
	const [name, setName] = useState('')
	const [image, setImage] = useState('https://i.pravatar.cc/48')

	const handleSubmit = (e) => {
		e.preventDefault();

		if(!name || !image) return alert('Please fill all fields')

		const id = crypto.randomUUID();
		const newFriend = {
			id,
			name,
			image: `${image}?=${id}`,
			balance:0,
		}

		onAddFriend(newFriend)

		setName('')
		setImage('https://i.pravatar.cc/48')
	}


	return (
		<form action="" className="form-add-friend" onSubmit={handleSubmit}>
			<label htmlFor="">👯Friend name</label>
			<input type="text" name="" id="" value={name} onChange={(e) => setName(e.target.value)} />

			<label htmlFor="">📸Image URL</label>
			<input type="text" name="" id="" value={image} onChange={(e) => setImage(e.target.value)} />

			<Button>Add</Button>
		</form>
	)
}
