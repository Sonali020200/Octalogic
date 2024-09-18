const Vehicle = require('../models/Vehicle');

exports.getVehiclesByType = async (req, res) => {
  const { wheels } = req.params;
  const vehicles = await Vehicle.findAll({ where: { wheels } });
  res.json(vehicles);
};

exports.bookVehicle = async (req, res) => {
  const { name, wheels, type, model, startDate, endDate } = req.body;

  const existingBooking = await Booking.findOne({
    where: { model, startDate: { [Op.lte]: endDate }, endDate: { [Op.gte]: startDate } }
  });

  if (existingBooking) {
    return res.status(400).json({ error: 'Vehicle is already booked for these dates' });
  }

  await Booking.create({ name, wheels, type, model, startDate, endDate });
  res.status(201).json({ message: 'Booking successful' });
};
