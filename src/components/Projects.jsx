import React from 'react';


const Projects = () => {
  return (
    <section id="projects" className="projects section">
    <h2 className="section-header">My Projects:</h2>
    <div className="projects-container flex">
      {/* Gender-Based Recommendation System */}
      <div className="project">
        <h4 className="project-name">Gender-Based Recommendation System</h4>
        <p className="project-description">Developed a web application using Django integrated with machine learning algorithms. The system predicts gender based on voice input and redirects users to a customized product page.</p>
        <a href="https://github.com/HamzasZaitoun/Gender-based-recomndation-system" target="_blank" rel="noopener noreferrer" className="project-link">See the project</a>
      </div>
  
      {/* Hikaya */}
      <div className="project">
        <h4 className="project-name">Hikaya</h4>
        <p className="project-description">Developed a storytelling platform that allows users to share and read inspiring stories. Built using HTML, CSS, JavaScript, and Laravel for backend. Integrated features include story categories, user authentication, and a voting system for top stories.</p>
        <a href="https://github.com/HamzasZaitoun/Hikaya" target="_blank" rel="noopener noreferrer" className="project-link">See the project</a>
      </div>
  
      {/* Bookify */}
      <div className="project">
        <h4 className="project-name">Bookify</h4>
        <p className="project-description">Led a team of 5 developers to build an online book shop using HTML, CSS, JavaScript, and Bootstrap, with PHP backend. The project features book listings, a wishlist, shopping cart, and admin panel for managing inventory.</p>
        <a href="https://github.com/HamzasZaitoun/Bookify" target="_blank" rel="noopener noreferrer" className="project-link">See the project</a>
      </div>
  
      {/* Gamifytech */}
      <div className="project">
        <h4 className="project-name">Gamifytech</h4>
        <p className="project-description">Created a gamer supplement e-commerce platform using WAMP, PHP, and MySQL. The platform includes an admin dashboard, product listings, categories, shopping cart, and user roles (admin/customer) with separate access controls.</p>
        <a href="https://github.com/HamzasZaitoun/Gamifytech" target="_blank" rel="noopener noreferrer" className="project-link">See the project</a>
      </div>
  
    
    </div>
  </section>
  
  );
};

export default Projects;
