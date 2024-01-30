// Import necessary libraries
import React, { useState } from 'react';

// Define the App component
function App() {
  // State to store the user input
  const [textInput, setTextInput] = useState('');
  const [posts, setPosts] = useState([]);

  // Function to handle input change
  const handleInputChange = (event) => {
    setTextInput(event.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Make the API call using the user input
    fetch(`https://jsonplaceholder.typicode.com/${textInput}`)
      .then((response) => response.json())
      .then((data) => {
        // Process the API response data
        setPosts(data);
        console.log(data);
      })
      .catch((error) => {
        // Handle any errors that occur during the API call
        console.error(error);
      });
  };

  // Render the form
  return (
    <div style={{ margin: '0 auto', maxWidth: '600px', fontFamily: 'Arial' }}>
      <h1 className='title' style={{ textAlign: 'center', color: '#333' }}>Post of users</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', marginBottom: '20px' }}>
        <input 
          type="text" 
          value={textInput} 
          onChange={handleInputChange} 
          style={{ flex: '1', padding: '10px', fontSize: '16px' }} 
        />
        <button type="submit" style={{ padding: '10px', fontSize: '16px', marginLeft: '10px',backgroundColor: '#4CAF50', color: 'white'  }}>Submit</button>
      </form>
  
      
      {posts.map((post) => (
        <div key={post.id} className="card" style={{ marginBottom: '20px', padding: '20px', border: '1px solid #ddd', borderRadius: '5px' }}>
          <h2 className='users' style={{ fontSize: '20px', marginBottom: '10px' }}>{post.title}</h2>
          <p style={{ fontSize: '16px', lineHeight: '1.5' }}>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
