'use server';

import { revalidatePath } from 'next/cache';
import { auth, signIn, signOut } from './auth';
import { supabase } from './supabase';
import { getBookings } from './data-service';
import { redirect } from 'next/navigation';

export async function updateGuest(formData) {
  const session = await auth();
  if (!session) throw new Error('You must be signed in to update your profile');

  const nationalID = formData.get('nationalID');
  const [nationality, countryFlag] = formData.get('nationality').split('%');

  if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID)) {
    throw new Error('Invalid national ID');
  }

  const updateData = {
    nationalID,
    nationality,
    countryFlag,
  };

  const { data, error } = await supabase
    .from('guests')
    .update(updateData)
    .eq('id', session.user.guestId);

  if (error) throw new Error('Guest could not be updated');

  revalidatePath('/account/profile');
}

export async function createBooking(bookingData, formData) {
  console.log(formData);
  if (!session) throw new Error('You must be signed in to update your profile');

  const newBooking = { ...bookingData, guestId: session.user.guestId };
}

export async function deleteBooking(bookingId) {
  const session = await auth();
  if (!session) throw new Error('You must be signed in to update your profile');

  const guestBookings = await getBookings(session.user.guestId);
  const guestBookingsIds = guestBookings.map((booking) => booking.id);

  if (!guestBookingsIds.includes(bookingId)) {
    throw new Error('You can only delete your own reservations');
  }

  const { error } = await supabase
    .from('bookings')
    .delete()
    .eq('id', bookingId);

  if (error) throw new Error('Booking could not be deleted');

  revalidatePath('/account/reservations');
}

export async function updateBooking(formData) {
  console.log(formData);
  const session = await auth();
  if (!session) throw new Error('You must be signed in to update your profile');

  const bookingId = Number(formData.get('bookingId'));

  const guestBookings = await getBookings(session.user.guestId);
  const guestBookingsIds = guestBookings.map((booking) => booking.id);
  console.log(guestBookingsIds);

  if (!guestBookingsIds.includes(bookingId)) {
    throw new Error('You can only update your own reservations');
  }

  const updateData = {
    numGuests: Number(formData.get('numGuests')),
    observations: formData.get('observations').slice(0, 1000),
  };

  const { error } = await supabase
    .from('bookings')
    .update(updateData)
    .eq('id', bookingId)
    .select()
    .single();

  if (error) throw new Error('Booking could not be updated');

  revalidatePath('/account/reservations');
  revalidatePath(`/account/reservations/edit/${bookingId}`);

  redirect('/account/reservations');
}

export async function signInAction() {
  await signIn('google', { redirectTo: '/account' });
}

export async function signOutAction() {
  await signOut({ redirectTo: '/' });
}
