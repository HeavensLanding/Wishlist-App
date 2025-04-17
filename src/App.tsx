import { useState } from "react";
import Wishlist from "./Wishlist.tsx";

// Define the type for the items in the wishlist
type WishlistItemType = {
  id: number;
  name: string;
  starred: boolean;
};

const TEST_DATA: WishlistItemType[] = [
  { id: 1, name: "Nintendo Switch", starred: false },
  { id: 2, name: "MacBook Pro", starred: true },
  { id: 3, name: "Noise Cancelling Headphones", starred: false },
];

function App() {
  // State to hold the wishlist items
  const [list, setList] = useState<WishlistItemType[]>(TEST_DATA);
  // State to hold the input value for a new item
  const [newItemName, setNewItemName] = useState<string>("");

  // Function to add a new item based on the input
  const addItem = () => {
    if (newItemName.trim() === "") return; // Do nothing if input is empty

    const newItem: WishlistItemType = {
      id: Date.now(),
      name: newItemName,
      starred: false,
    };
    setList((prevList) => [...prevList, newItem]);
    setNewItemName(""); // Clear the input after adding
  };

  return (
    <div>
      <h1>My Wishlist</h1>

      {/* Input to type the new item name */}
      <input
        type="text"
        value={newItemName}
        onChange={(e) => setNewItemName(e.target.value)}
        placeholder="Type item name..."
      />

      {/* Button to add the new item */}
      <button onClick={addItem}>Add Item</button>

      {/* Pass list and setList to child component */}
      <Wishlist list={list} setList={setList} />
    </div>
  );
}

export default App;
