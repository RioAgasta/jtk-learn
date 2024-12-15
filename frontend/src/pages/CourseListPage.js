import React, { useState } from 'react';
import CourseModal from '../components/AddCourseModal';
import Swal from 'sweetalert2';
import 'bootstrap-icons/font/bootstrap-icons.css';

const courses = [
  { id: 1, title: 'Dasar-dasar Pemrograman', author: 'Najib Alimudin, Ph.D.', image: 'https://via.placeholder.com/300x150' },
  { id: 2, title: 'Struktur Data dan Algoritma', author: 'Najib Alimudin, Ph.D.', image: 'https://via.placeholder.com/300x150' },
  { id: 3, title: 'Komputasi Kognitif', author: 'Najib Alimudin, Ph.D.', image: 'https://via.placeholder.com/300x150' },
  { id: 4, title: 'Sistem Basis Data', author: 'Najib Alimudin, Ph.D.', image: 'https://via.placeholder.com/300x150' },
  { id: 5, title: 'Prinsip Bahasa Pemrograman', author: 'Najib Alimudin, Ph.D.', image: 'https://via.placeholder.com/300x150' },
  { id: 6, title: 'Sistem Operasi', author: 'Najib Alimudin, Ph.D.', image: 'https://via.placeholder.com/300x150' },
  { id: 7, title: 'Komunikasi Data dan Jaringan', author: 'Najib Alimudin, Ph.D.', image: 'https://via.placeholder.com/300x150' },
  { id: 8, title: 'Matematika Diskrit', author: 'Najib Alimudin, Ph.D.', image: 'https://via.placeholder.com/300x150' }
];

const CourseList = () => {
  const [showModal, setShowModal] = useState(false);
  const [courseList, setCourseList] = useState(courses);

  const handleAddCourse = (newCourse) => {
    const newCourseData = {
      id: courseList.length + 1,
      title: newCourse.courseName,
      author: 'Najib Alimudin, Ph.D.',
      image: newCourse.image ? URL.createObjectURL(newCourse.image) : 'https://via.placeholder.com/300x150',
    };
    setCourseList([...courseList, newCourseData]);
  };

  const handleDeleteCourse = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        // Logic to delete the course
        console.log('Deleted course with ID:', id);
        Swal.fire('Deleted!', 'The course has been deleted.', 'success');
      }
    });
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="fw-bold mb-0">Courses</h3>
        <button className="btn btn-primary" onClick={() => setShowModal(true)}>
          + Course
        </button>
      </div>
      <div className="row">
        {courseList.map((course) => (
          <div key={course.id} className="col-md-3 mb-4">
            <div className="card h-100 shadow-sm position-relative">
              {/* Icon delete */}
              <button
                className="btn btn-sm btn-danger position-absolute top-0 end-0 m-2"
                onClick={() => handleDeleteCourse(course.id)}
              >
                <i className="bi bi-trash"></i>
              </button>
              <img
                src={course.image}
                className="card-img-top"
                alt={course.title}
              />
              <div className="card-body">
                <h6 className="card-title fw-bold">{course.title}</h6>
                <p className="card-text">{course.author}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Modal */}
      <CourseModal
        show={showModal}
        onClose={() => setShowModal(false)}
        onSubmit={handleAddCourse}
      />
    </div>
  );
}

export default CourseList;