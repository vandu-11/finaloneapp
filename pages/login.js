import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import styles from './login.module.css';
import Footer from '../components/Footer';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const [message, setMessage] = useState(''); // State for success message

  // State to track whether the login was successful
  const [loginSuccessful, setLoginSuccessful] = useState(false);

  async function handleLogin(event) {
    event.preventDefault();
    setError(''); // Clear any previous error message

    try {
      const response = await fetch('http://3.25.111.235/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Login_username: username, Login_password: password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.message);

        // Display a message saying login successful
        setMessage('Login successful.');

        // Mark login as successful
        setLoginSuccessful(true);
      } else {
        setError('Invalid login credentials');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('An error occurred during login');
    }
  }

  // Use useEffect to listen for changes in loginSuccessful
  useEffect(() => {
    if (loginSuccessful) {
      // After 2 seconds, redirect to the next page
      const redirectTimeout = setTimeout(() => {
        router.push('/parents/Firstpage');
      }, 100); // 2000 milliseconds (2 seconds)

      // Cleanup the timeout if the component unmounts
      return () => clearTimeout(redirectTimeout);
    }
  }, [loginSuccessful, router]);

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.imageAndFormContainer}>
          
            
          
          <div className={styles.formContainer}>
            <div className={styles.new}>
            <h1>Login Page</h1>
            </div>
            <form onSubmit={handleLogin} className={styles.formContainer}>
              <label>
                Username:
                <input
                  type="text"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  className={styles.input}
                />
              </label>
              <br />
              <label>
                Password:
                <input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className={styles.input}
                />
              </label>
              <br />
              <button type="submit" className={styles.button}>
                Login
              </button>
            </form>

            {/* Display the success message */}
            {message && <p className={styles.success}>{message}</p>}

            {/* Display the error message */}
            {error && <p className={styles.error}>{error}</p>}
          </div>
        </div>
        <div className={styles.footer}>
        <Footer/>
      </div>
      </div>
      
    </>
  );
};

export default LoginPage;