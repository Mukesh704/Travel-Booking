import Booking from '../models/Booking.js'

// Create new Booking
export const createBooking = async (req, res) => {

    const newBooking = await Booking(req.body)

    try {
        const savedBooking = await newBooking.save()
        res.status(200).json({
            success: true,
            message: 'Your tour is booked',
            data: savedBooking
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Internal server error',
        })
    }
}


// Get single booking
export const getBooking = async (req, res) => {
    const id = req.params.id

    try {
        const book = await Booking.findById(id)

        res.status(200).json({
            success: true,
            message: 'Successful',
            data: book
        })
    } catch (err) {
        res.status(404).json({
            success: false,
            message: 'not found',
        })
    }
}

// Get all bookings
export const getAllBooking = async (req, res) => {

    try {
        const bookings = await Booking.find()

        res.status(200).json({
            success: true,
            message: 'Successful',
            data: bookings,
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Internal server error',
        })
    }
}