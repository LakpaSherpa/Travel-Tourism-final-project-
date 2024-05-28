const httpStatus = require('http-status');
const bookingService = require('../services/booking.service');
const catchAsync = require('../utils/catchAsync');

const addBooking = catchAsync(async (req, res) => {
  const booking = await bookingService.addBooking(req.body);
  res.status(httpStatus.CREATED).send(booking);
});

const getBooking = catchAsync(async (req, res) => {
  const bookings = await bookingService.getBookings();
  res.status(httpStatus.OK).send(bookings);
});

const getBookingById = catchAsync(async (req, res) => {
  const booking = await bookingService.getBookingById(req.params.id);
  if (!booking) {
    return res.status(httpStatus.NOT_FOUND).send({ message: 'Booking not found' });
  }
  res.status(httpStatus.OK).send(booking);
});

const updateBooking = catchAsync(async (req, res) => {
  const booking = await bookingService.updateBooking({ id: req.params.id, ...req.body });
  if (!booking) {
    return res.status(httpStatus.NOT_FOUND).send({ message: 'Booking not found' });
  }
  res.status(httpStatus.OK).send(booking);
});

const deleteBooking = catchAsync(async (req, res) => {
  const booking = await bookingService.deleteBooking(req.params.id);
  if (!booking) {
    return res.status(httpStatus.NOT_FOUND).send({ message: 'Booking not found' });
  }
  res.status(httpStatus.OK).send({ message: 'Booking deleted successfully' });
});

module.exports = {
  addBooking,
  getBooking,
  getBookingById,
  updateBooking,
  deleteBooking,
};
