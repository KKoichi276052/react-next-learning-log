import { useState } from 'react'
import FriendList from './components/FriendList'
import FormAddFriend from './components/FormAddFriend'
import Button from './components/Button'
import FormSplitBill from './components/FormSplitBill'


function App() {
  const [showAddFriend, setShowAddFriend] = useState(false)

  return (
    <>
    <div className="app">
      <div className="sidebar">
        <FriendList />
        {showAddFriend && <FormAddFriend />}
        <Button onClick={() => setShowAddFriend(!showAddFriend)} >
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>

      <FormSplitBill />

    </div>
    </>
  )
}

export default App
