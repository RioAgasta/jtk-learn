const { Course, Pengajar } = require('../models'); // Import model

// Get all courses
const getAllCourses = async (req, res) => {
    try {
      const courses = await Course.findAll({
        include: [
          {
            model: Pengajar,
            as: 'pengajar', // Pastikan sama dengan alias di relasi
          },
        ],
      });
      res.status(200).json(courses);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  };

// Get course by ID
const getCourseById = async (req, res) => {
  try {
    const { id } = req.params;
    const course = await Course.findOne({
      where: { id_course: id },
      include: [{ model: Pengajar, as: 'pengajar' }],
    });

    if (!course) {
      return res.status(404).json({ message: 'Course not found.' });
    }

    res.status(200).json(course);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch the course.' });
  }
};

// Create a new course
const createCourse = async (req, res) => {
  try {
    const { id_pengajar, nama_course, enrollment_key, gambar_course, deskripsi } = req.body;

    const course = await Course.create({
      id_pengajar,
      nama_course,
      enrollment_key,
      gambar_course,
      deskripsi,
    });

    res.status(201).json({ message: 'Course created successfully.', course });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to create the course.' });
  }
};

// Update course
const updateCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const { id_pengajar, nama_course, enrollment_key, gambar_course, deskripsi } = req.body;

    const course = await Course.findOne({ where: { id_course: id } });

    if (!course) {
      return res.status(404).json({ message: 'Course not found.' });
    }

    await course.update({
      id_pengajar,
      nama_course,
      enrollment_key,
      gambar_course,
      deskripsi,
    });

    res.status(200).json({ message: 'Course updated successfully.', course });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to update the course.' });
  }
};

// Delete course
const deleteCourse = async (req, res) => {
  try {
    const { id } = req.params;

    const course = await Course.findOne({ where: { id_course: id } });

    if (!course) {
      return res.status(404).json({ message: 'Course not found.' });
    }

    await course.destroy();

    res.status(200).json({ message: 'Course deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to delete the course.' });
  }
};

module.exports = {
  getAllCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
};
