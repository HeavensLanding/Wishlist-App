// Define the shape of a wishlist item
type WishlistItemType = {
  id: number;
  name: string;
  starred: boolean;
};

// Define the props for a single WishlistItem
type Props = {
  item: WishlistItemType; // The item this component is displaying
  setList: React.Dispatch<React.SetStateAction<WishlistItemType[]>>; // Function to update the list
};

export default function WishlistItem({ item, setList }: Props) {
  // Function to delete the current item from the list
  const deleteItem = () => {
    setList((prevList) => prevList.filter((i) => i.id !== item.id));
  };

  // Function to toggle the 'starred' status of the current item
  const toggleStar = () => {
    setList((prevList) =>
      prevList.map((i) =>
        i.id === item.id ? { ...i, starred: !i.starred } : i
      )
    );
  };

  return (
    <div style={{ margin: "10px 0" }}>
      {/* Display item name and star status */}
      <span style={{ marginRight: "10px" }}>
        {item.name} {item.starred ? "⭐" : ""}
      </span>

      {/* Button to toggle star */}
      <button onClick={toggleStar} style={{ marginRight: "5px" }}>
        {item.starred ? "Unstar" : "Star"}
      </button>

      {/* Button to delete the item */}
      <button onClick={deleteItem}>Delete</button>
    </div>
  );
}
