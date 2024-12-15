const express = require('express');
const {
  getAllCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
} = require('../controllers/courseController');
const router = express.Router();

// Routes for Course
router.get('/', getAllCourses); // Get all courses
router.get('/:id', getCourseById); // Get course by ID
router.post('/', createCourse); // Create a new course
router.put('/:id', updateCourse); // Update course by ID
router.delete('/:id', deleteCourse); // Delete course by ID

module.exports = router;
