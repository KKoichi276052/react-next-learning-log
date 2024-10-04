'use client';

import ReservationCard from '@/app/_components/ReservationCard';
import { useOptimistic } from 'react';
import { deleteReservation } from '../_lib/actions';

function ReservationList({ bookings }) {
  const [optimisticBookings, optimisticDelete] = useOptimistic(
    bookings,
    () => {}
  );

  async function handleDelete(bookingId) {
    optimisticDelete((prevBookings) =>
      prevBookings.filter((booking) => booking.id !== bookingId)
    );
    await deleteReservation(bookingId);
  }

  return (
    <ul className="space-y-6">
      {optimisticBookings.map((booking) => (
        <ReservationCard
          onDelete={handleDelete}
          booking={booking}
          key={booking.id}
        />
      ))}
    </ul>
  );
}
export default ReservationList;
