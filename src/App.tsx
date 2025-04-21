import { useState } from "react";
import Wishlist from "./Wishlist"; // Importing the Wishlist component

// Define what each wishlist item should contain
type WishlistItemType = {
  id: number;
  name: string;
  starred: boolean;
};

// Sample wishlist items (initial test data)
const TEST_DATA: WishlistItemType[] = [
  { id: 1, name: "Nintendo Switch", starred: false },
  { id: 2, name: "MacBook Pro", starred: true },
  { id: 3, name: "Noise Cancelling Headphones", starred: false },
];

export default function App() {
  // State for the list of wishlist items
  const [list, setList] = useState<WishlistItemType[]>(TEST_DATA);

  // State for the new item text input
  const [newItemName, setNewItemName] = useState<string>("");

  // State for the search input field
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Function to add a new item to the list
  const addItem = () => {
    // Prevent adding empty items
    if (newItemName.trim() === "") return;

    // Create a new item object
    const newItem: WishlistItemType = {
      id: Date.now(), // Using timestamp as unique ID
      name: newItemName,
      starred: false,
    };

    // Add the new item to the list
    setList((prevList) => [...prevList, newItem]);

    // Clear the input field after adding
    setNewItemName("");
  };

  return (
    <div>
      <h1>My Wishlist</h1>

      {/* Input to type a new item name */}
      <input
        type="text"
        value={newItemName}
        onChange={(e) => setNewItemName(e.target.value)}
        placeholder="Type item name..."
      />

      {/* Button to add the new item */}
      <button onClick={addItem}>Add Item</button>

      {/* Input for searching the wishlist */}
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search wishlist..."
        style={{ marginLeft: "10px" }}
      />

      {/* Pass list data and searchTerm to the Wishlist component */}
      <Wishlist list={list} setList={setList} searchTerm={searchTerm} />
    </div>
  );
}
