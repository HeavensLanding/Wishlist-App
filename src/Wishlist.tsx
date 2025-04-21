import WishlistItem from "./WishlistItem";

// Type definition for a wishlist item
type WishlistItemType = {
  id: number;
  name: string;
  starred: boolean;
};

// Props this component receives
type Props = {
  list: WishlistItemType[];
  setList: React.Dispatch<React.SetStateAction<WishlistItemType[]>>;
  searchTerm: string;
};

export default function Wishlist({ list, setList, searchTerm }: Props) {
  // Filter the wishlist based on the search input (case-insensitive)
  const filteredList = list.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    // Bootstrap card container for the entire wishlist
    <div className="mt-4">
      <h4 className="mb-3">Wishlist Items</h4>

      {/* If list is empty, show a message */}
      {filteredList.length === 0 ? (
        <div className="alert alert-info">No items match your search.</div>
      ) : (
        filteredList.map((item) => (
          // Render each item using the WishlistItem component
          <WishlistItem key={item.id} item={item} setList={setList} />
        ))
      )}
    </div>
  );
}
