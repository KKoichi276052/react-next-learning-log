import { useSearchParams } from 'react-router-dom';
import { getBookings } from '../../services/apiBookings';
import { useQuery } from '@tanstack/react-query';

export function useBookings() {
  const [searchParams] = useSearchParams();

  // Filter by status
  const filterValue = searchParams.get('status');
  const filter =
    !filterValue || filterValue === 'all'
      ? null
      : { field: 'status', value: filterValue };
  // : { field: 'status', value: filterValue, method: 'gte' };

  // Sort
  const sortValue = searchParams.get('sortBy') || 'startDate-desc';
  const [field, direction] = sortValue.split('-');
  const sortBy = { field, direction };

  const page = !searchParams.get('page') ? 1 : Number(searchParams.get('page'));

  const {
    isLoading,
    data: { data: bookings, count } = {},
    error,
  } = useQuery({
    queryKey: ['bookings', filter, sortBy, page],
    queryFn: () => getBookings({ filter, sortBy, page }),
  });

  return { isLoading, bookings, error, count };
}