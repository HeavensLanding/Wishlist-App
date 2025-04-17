import WishlistItem from "./WishlistItem.tsx";

// Define the type for the props the component will receive
type WishlistItemType = {
  id: number;
  name: string;
  starred: boolean;
};

type Props = {
  list: WishlistItemType[];
  setList: React.Dispatch<React.SetStateAction<WishlistItemType[]>>;
};

export default function Wishlist({ list, setList }: Props) {
  return (
    <div>
      {/* Render a WishlistItem for each item in the list */}
      {list.map((item) => (
        <WishlistItem key={item.id} item={item} setList={setList} />
      ))}
    </div>
  );
}
