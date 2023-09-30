import React, { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  // State variable to hold file list
  const [files, setFiles] = useState([]);

  // https://flask-production-be46.up.railway.app/upload
  useEffect(() => {
    // Function to fetch files from Flask API
    const fetchFiles = async () => {
      try {
        const response = await fetch('https://flask-production-be46.up.railway.app/list_files');
        const data = await response.json();
        if (data.files) {
          setFiles(data.files);
        }
      } catch (error) {
        console.error("Error fetching files:", error);
      }
    };

    // Call the fetch function
    fetchFiles();
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>Choo Choo! This is an example of a Vite + React app running on Railway.</p>
        <h2>List of Files</h2>
        <ul>
          {files.map((file, index) => (
            <li key={index}>{file}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
