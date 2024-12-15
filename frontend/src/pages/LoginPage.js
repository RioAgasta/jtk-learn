import React, { useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await api.post('/auth/login', { username, password });
      localStorage.setItem('token', data.token);
      alert('Login successful!');
      navigate('/');
    } catch (error) {
        setError('Login gagal. Username atau password salah.');

        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: 'Username or password is incorrect!',
        });
    }
  };

  return (
    <main>
      <div className="container">
        <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                <div className="card mb-3">
                  <div className="card-body">
                    <div className="pt-4 pb-2">
                      <h5 className="card-title text-center pb-0 fs-4">Selamat Datang</h5>
                    </div>
  
                    <form onSubmit={handleSubmit} className="row g-3 needs-validation" noValidate>
                      <div className="col-12">
                        <label htmlFor="yourUsername" className="form-label">
                          Username
                        </label>
                        <div className="input-group has-validation">
                          <input
                            className="form-control form-control-lg"
                            type="text"
                            placeholder="Masukkan username Anda"
                            value={username}
                            onChange={handleUsernameChange}
                          />
                          <div className="invalid-feedback">Please enter your username.</div>
                        </div>
                      </div>
  
                      <div className="col-12">
                        <label htmlFor="yourPassword" className="form-label">
                          Password
                        </label>
                        <input
                          className="form-control form-control-lg"
                          type="password"
                          placeholder="Masukkan password Anda"
                          value={password}
                          onChange={handlePasswordChange}
                        />
                        <div className="invalid-feedback">Please enter your password!</div>
                      </div>
  
                      <div className="col-12">
                        <button className="btn btn-primary w-100" type="submit">
                          Login
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
  
                <div className="credits"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default LoginPage;