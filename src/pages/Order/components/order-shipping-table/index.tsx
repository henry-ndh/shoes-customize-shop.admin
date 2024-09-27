import DataTable from '@/components/shared/data-table';
import { columns } from './columns';
type TStudentsTableProps = {
  users: any;
  page: number;
  totalUsers: number;
  pageCount: number;
};

export default function OrderShippingTable({
  users,
  pageCount
}: TStudentsTableProps) {
  return (
    <>
      {users && (
        <DataTable columns={columns} data={users} pageCount={pageCount} />
      )}
    </>
  );
}
