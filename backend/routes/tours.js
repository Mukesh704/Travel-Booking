import express from 'express'
import { createTour, deleteTour, getAllTours, getFeaturedTours, getSingleTour, getTourBySearch, getTourCount, updateTour } from '../controllers/tourController.js'

const router = express.Router()

// Create new tour
router.post('/', createTour)

// Update tour
router.put('/:id', updateTour)

// delete tour
router.delete('/:id', deleteTour)

// get single tour
router.get('/:id', getSingleTour)

// get all tours tour
router.get('/', getAllTours)

// Get tour by search
router.get('/search/getTourBySearch', getTourBySearch)

// Get featured tours
router.get('/search/getFeaturedTours', getFeaturedTours)

// Get featured tours
router.get('/search/getTourCount', getTourCount)

export default router;