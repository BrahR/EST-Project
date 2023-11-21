import type DataTable from "datatables.net-dt";

declare global {
  interface JQueryStatic {
    DataTable: DataTable;
  }
}
