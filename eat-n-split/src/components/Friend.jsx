import Button from "./Button";


export default function Friend({ friend, onSelection, selectedFriend }) {
  return (
    <li className={selectedFriend === friend ? "selected" : ""} >
			<img src={friend.image} alt={friend.name} />
			<h3>
			{friend.name}
			</h3>

			{friend.balance < 0 && (
				<p className="red">
					You owe {friend.name} ${Math.abs(friend.balance)}
				</p>
			)}
			{friend.balance > 0 && (
				<p className="green">
					{friend.name} owe you ${Math.abs(friend.balance)}
				</p>
			)}
			{friend.balance === 0 && (
				<p className="">
					You and {friend.name} are even
				</p>
			)}

			<Button onClick={() => onSelection(friend)}>{selectedFriend === friend ? "Close" : "Select"}</Button>
		</li>
  );
}
