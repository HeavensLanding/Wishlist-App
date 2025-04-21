import WishlistItem from "./WishlistItem"; // Import the child component

// Define the shape of a wishlist item
type WishlistItemType = {
  id: number;
  name: string;
  starred: boolean;
};

// Define the props that the Wishlist component expects
type Props = {
  list: WishlistItemType[]; // The list of items to display
  setList: React.Dispatch<React.SetStateAction<WishlistItemType[]>>; // Function to update the list
  searchTerm: string; // The current value of the search input
};

export default function Wishlist({ list, setList, searchTerm }: Props) {
  // Filter the list based on the search term (case-insensitive match)
  const filteredList = list.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* Map over the filtered list and render each item */}
      {filteredList.map((item) => (
        <WishlistItem key={item.id} item={item} setList={setList} />
      ))}
    </div>
  );
}
