// Define the type for the props that WishlistItem will receive
type WishlistItemType = {
  id: number;
  name: string;
  starred: boolean;
};

type Props = {
  item: WishlistItemType;
  setList: React.Dispatch<React.SetStateAction<WishlistItemType[]>>;
};

export default function WishlistItem({ item, setList }: Props) {
  // Function to delete this item from the list
  const handleDelete = () => {
    setList((prevList) => prevList.filter((i) => i.id !== item.id));
  };

  // Function to toggle the 'starred' status of this item
  const toggleStarred = () => {
    setList((prevList) =>
      prevList.map((i) =>
        i.id === item.id ? { ...i, starred: !i.starred } : i
      )
    );
  };

  return (
    <div>
      {/* Display item name */}
      <span>{item.name}</span>
      {/* Star button toggles between starred and unstarred */}
      <button onClick={toggleStarred}>
        {item.starred ? "★" : "☆"}
      </button>
      {/* Delete button to remove the item */}
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
