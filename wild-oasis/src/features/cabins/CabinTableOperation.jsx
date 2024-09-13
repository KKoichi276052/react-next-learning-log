import TableOperation from '../../ui/TableOperations';
import Filter from '../../ui/Filter';

function CabinTableOperation() {
  return (
    <TableOperation>
      <Filter
        filterField="discount"
        options={[
          {
            value: 'all',
            label: 'All',
          },
          { value: 'no-discount', label: 'No discount' },
          { value: 'with-discount', label: 'With discount' },
        ]}
      />
    </TableOperation>
  );
}
export default CabinTableOperation;
