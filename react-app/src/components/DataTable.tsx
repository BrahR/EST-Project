import DataTable, { TableColumn } from "react-data-table-component";
import { useState } from "react";
import { useMemo } from "react";
import FilterComponent from "./FilterComponent";

const customStyles = {
  headRow: {
    style: {
      border: "none",
    },
  },
  headCells: {
    style: {
      color: "#202124",
      fontSize: "14px",
    },
  },
  rows: {
    highlightOnHoverStyle: {
      backgroundColor: "#caf0f8",
      borderBottomColor: "#FFFFFF",
      borderRadius: "10px",
      outline: "1px solid #FFFFFF",
    },
  },
  pagination: {
    style: {
      border: "none",
    },
  },
};

export default function DataTableView<T extends object>(props: {
  data: T[];
  columns: TableColumn<T>[];
  filter: Only<T, string>;
}) {
  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const data = props.data ?? [];
  const filteredItems = data.filter(
    (item) =>
      item[props.filter] &&
      (item[props.filter] as string)
        .toLowerCase()
        .includes(filterText.toLowerCase())
  );

  const subHeaderComponentMemo = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);

  return (
    <DataTable
      columns={props.columns}
      data={filteredItems}
      pagination
      subHeader
      subHeaderComponent={subHeaderComponentMemo}
      persistTableHead
      customStyles={customStyles}
      highlightOnHover
      pointerOnHover
    />
  );
}
