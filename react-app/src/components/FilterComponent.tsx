import React from "react";

interface FilterComponentProps {
  onFilter: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClear: () => void;
  filterText: string;
}

const FilterComponent: React.FC<FilterComponentProps> = ({
  onFilter,
  onClear,
  filterText,
}) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <input
        type="text"
        placeholder="Filter..."
        value={filterText}
        onChange={onFilter}
        style={{
          padding: "8px",
          border: "2px solid #2196F3", // Blue border for the input
          borderRadius: "8px 0 0 8px", // Border radius for the input
          //marginRight: '8px', // Adjust spacing between input and button
          outline: "none", // Remove outline when focused
        }}
      />
      <button
        onClick={onClear}
        style={{
          padding: "8px",
          paddingRight: "10px",
          border: "2px solid #2196F3", // Blue border for the button
          borderRadius: "0 8px 8px 0", // Border radius for the button
          backgroundColor: "#2196F3", // Blue background color for the button
          color: "white", // White text color for better contrast
          cursor: "pointer", // Show pointer cursor on hover
        }}
      >
        X
      </button>
    </div>
  );
};

export default FilterComponent;
