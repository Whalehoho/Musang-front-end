<template>
    <div class="login-page-container">
      <div class="login-card">
        <div class="logo-section">
          <h1>LOGO</h1>
          <p>Excellent Tuition Center</p>
          <p>slogan, announcement, etc.</p>
        </div>
        <div class="form-section">
          <h2>Use Account</h2>
          <form @submit.prevent="login">
            <input type="text" placeholder="Username" v-model="username" />
            <input type="password" placeholder="Password" v-model="password" />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoginPage',
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      login() {
        // Login logic here
      }
    }
  };
  </script>
  
  <style scoped>
  .login-page-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 1rem;
    background-color: #f7d7d7; /* Adjust the background color as needed */
  }
  
  .login-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 2rem;
    width: 100%;
    max-width: 350px; /* Adjust the width as needed */
    box-sizing: border-box;
  }
  
  .logo-section, .form-section {
    width: 100%;
    text-align: center;
  }
  
  h1, h2, p {
    margin: 0.5rem 0;
  }
  
  input[type="text"],
  input[type="password"] {
    width: 100%;
    padding: 0.5rem;
    margin: 0.5rem 0;
    border: 1px solid #ccc;
    border-radius: 15px;
  }
  
  button[type="submit"] {
    width: 100%;
    padding: 0.5rem;
    border: none;
    border-radius: 15px;
    background-color: #e1e1e1; /* Adjust the button color as needed */
    cursor: pointer;
  }
  </style>
  