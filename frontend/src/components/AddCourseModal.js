import React, { useState } from 'react';

const CourseModal = ({ show, onClose, onSubmit }) => {
  const [courseName, setCourseName] = useState('');
  const [description, setDescription] = useState('');
  const [enrollmentKey, setEnrollmentKey] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      courseName,
      description,
      enrollmentKey,
      image,
    };
    onSubmit(formData);
    onClose();
  };

  return (
    <div className={`modal fade ${show ? 'show d-block' : ''}`} tabIndex="-1" style={show ? { backgroundColor: 'rgba(0,0,0,0.5)' } : {}}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add New Course</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Course Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={courseName}
                  onChange={(e) => setCourseName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea
                  className="form-control"
                  rows="3"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                ></textarea>
              </div>
              <div className="mb-3">
                <label className="form-label">Enrollment Key</label>
                <input
                  type="text"
                  className="form-control"
                  value={enrollmentKey}
                  onChange={(e) => setEnrollmentKey(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Upload Image</label>
                <input
                  type="file"
                  className="form-control"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Save Course
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseModal;