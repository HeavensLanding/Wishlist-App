import React, { useState } from 'react';

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
  const [isEditing, setIsEditing] = useState<boolean>(false); // Track if we’re editing
  const [newName, setNewName] = useState<string>(item.name); // Track the new name

  // Delete item from the list
  const deleteItem = () => {
    setList((prevList) => prevList.filter((i) => i.id !== item.id));
  };

  // Toggle the starred status
  const toggleStar = () => {
    setList((prevList) =>
      prevList.map((i) =>
        i.id === item.id ? { ...i, starred: !i.starred } : i
      )
    );
  };

  // Toggle the edit mode
  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  // Save the new name when editing is finished
  const saveName = () => {
    setList((prevList) =>
      prevList.map((i) =>
        i.id === item.id ? { ...i, name: newName } : i
      )
    );
    setIsEditing(false); // Exit edit mode after saving
  };

  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body d-flex justify-content-between align-items-center">
        {/* Item name or input field based on edit mode */}
        <div>
          {isEditing ? (
            <input
              type="text"
              className="form-control"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              onBlur={saveName} // Save when focus is lost
              autoFocus
            />
          ) : (
            <>
              <h5 className="card-title mb-0">
                {item.name}{" "}
                {item.starred && (
                  <span className="text-warning" title="Starred">
                    ⭐
                  </span>
                )}
              </h5>
            </>
          )}
        </div>

        {/* Action buttons */}
        <div className="btn-group">
          <button
            className={`btn btn-sm ${
              item.starred ? "btn-warning" : "btn-outline-secondary"
            }`}
            onClick={toggleStar}
          >
            {item.starred ? "Unstar" : "Star"}
          </button>

          {/* Edit button */}
          <button
            className="btn btn-sm btn-secondary"
            onClick={toggleEdit}
          >
            {isEditing ? "Cancel" : "Edit"}
          </button>

          {/* Delete button */}
          <button className="btn btn-sm btn-danger" onClick={deleteItem}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
