import React, { useState, useEffect } from 'react';

const DashboardPelajar = () => {
    let nama = localStorage.getItem('nama');

    return (
        <div className="container mt-4">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3 className="fw-bold mb-0">Halo {nama}</h3>
            <h3 className="fw-bold mb-0">Courses</h3>
          </div>
        </div>
      );
}

export default DashboardPelajar;