import React from 'react';

// Function to format a user's full name
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

// JSXFunctions Component
function JSXFunctions() {
  // Example user object
  const user = {
    firstName: 'Alice',
    lastName: 'Johnson',
    imageUrl: 'https://picsum.photos/200/300'
  };

  // Example list of books
  const books = ["React for Beginners", "Advanced React", "React Hooks in Depth"];
  
  // Mapping over the books array to create <li> elements
  const listBooks = books.map((book) => 
    <li key={book}>{book}</li>
  );

  return (
    <div>
      <h1>Hello, {formatName(user)}</h1>
      <img src={user.imageUrl} alt="User" />
      
      <h2>Books to Read:</h2>
      <ul>{listBooks}</ul>
    </div>
  );
}

export default JSXFunctions;
