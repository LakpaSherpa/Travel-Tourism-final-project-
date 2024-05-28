const Booking = require('../models/booking');

const addBooking = async (bookingData) => {
  try {
    const booking = await Booking.create(bookingData);
    return booking;
  } catch (error) {
    throw new Error(`Error adding booking: ${error.message}`);
  }
};

const getBookings = async () => {
  try {
    const bookings = await Booking.find();
    return bookings;
  } catch (error) {
    throw new Error(`Error fetching bookings: ${error.message}`);
  }
};

const getBookingById = async (bookingId) => {
  try {
    const booking = await Booking.findById(bookingId);
    return booking;
  } catch (error) {
    throw new Error(`Error fetching booking by ID: ${error.message}`);
  }
};

const updateBooking = async (bookingData) => {
  try {
    const { id, ...update } = bookingData;
    const updatedBooking = await Booking.findByIdAndUpdate(id, update, { new: true });
    return updatedBooking;
  } catch (error) {
    throw new Error(`Error updating booking: ${error.message}`);
  }
};

const deleteBooking = async (bookingId) => {
  try {
    const booking = await Booking.findByIdAndDelete(bookingId);
    return booking;
  } catch (error) {
    throw new Error(`Error deleting booking: ${error.message}`);
  }
};

module.exports = {
  addBooking,
  getBookings,
  getBookingById,
  updateBooking,
  deleteBooking,
};
