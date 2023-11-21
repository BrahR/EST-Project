import { useEffect, useRef } from "react";
import $ from "jquery";
import DataTables from "datatables.net";
import "datatables.net-dt/css/jquery.dataTables.min.css";

$.DataTable = DataTables;

export default function DataTableView(props: { data: unknown[] }) {
  const tableRef = useRef(
    null as never
  ) as React.MutableRefObject<HTMLTableElement>;

  useEffect(() => {
    console.log(props.data);
    const table = $(tableRef.current).DataTable({
      data: props.data,
      columns: [
        { title: "Name" },
        { title: "Position" },
        { title: "Office" },
        { title: "Extn." },
        { title: "Start data" },
        { title: "Salary" },
      ],
      destroy: true,
    });
    return function () {
      console.log("Table destroyed");
      table.destroy();
    };
  }, [props]);
  return <table className="display" width="100%" ref={tableRef}></table>;
}
