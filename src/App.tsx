import './App.css';
import { useState } from "react";
import Wishlist from "./Wishlist";

// Define the shape of each wishlist item
type WishlistItemType = {
  id: number;
  name: string;
  starred: boolean;
};

// Starter data to test with
const TEST_DATA: WishlistItemType[] = [
  { id: 1, name: "Nintendo Switch", starred: false },
  { id: 2, name: "MacBook Pro", starred: true },
  { id: 3, name: "Noise Cancelling Headphones", starred: false },
];

export default function App() {
  // List of all wishlist items
  const [list, setList] = useState<WishlistItemType[]>(TEST_DATA);

  // Input field for new item name
  const [newItemName, setNewItemName] = useState<string>("");

  // Input field for filtering search
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Function to add a new item to the wishlist
  const addItem = () => {
    if (newItemName.trim() === "") return;

    const newItem: WishlistItemType = {
      id: Date.now(),
      name: newItemName,
      starred: false,
    };

    setList((prevList) => [...prevList, newItem]);
    setNewItemName(""); // Clear the input after adding
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8">

          {/* App Title */}
          <h1 className="mb-4 text-center">🎁 My Wishlist</h1>

          {/* Input & Buttons */}
          <div className="input-group mb-3">
            {/* Input for new item */}
            <input
              type="text"
              className="form-control"
              placeholder="Add a new item..."
              value={newItemName}
              onChange={(e) => setNewItemName(e.target.value)}
            />

            {/* Button to add item */}
            <button className="btn btn-primary" onClick={addItem}>
              Add Item
            </button>
          </div>

          {/* Search bar */}
          <div className="mb-4">
            <input
              type="text"
              className="form-control"
              placeholder="Search wishlist..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Wishlist component with props */}
          <Wishlist list={list} setList={setList} searchTerm={searchTerm} />

        </div>
      </div>
    </div>
  );
}
