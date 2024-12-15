import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import CourseListPage from './pages/CourseListPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <LoginPage />
            </>
          } 
        />
        <Route 
          path="/list-course" 
          element={
            <>
              <Navbar />
              <CourseListPage />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;