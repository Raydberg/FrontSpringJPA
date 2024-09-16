import { TableHeader } from "./TableHeader";
import { TableBodyBook } from "./TableBodyBook";

export const TableBooks = () => {
  return (
    <div>
      <table className="table table-hover">
        <TableHeader />
        <TableBodyBook />
      </table>
    </div>
  );
};
