import React from 'react';


const Skills = () => {
  return (
    <section id="skills" className="skills section">
  <h2 className="section-header skills-h">Skills:</h2>
  <div className="skills-container">
    
    {/* Languages & Technologies */}
    <h3>Languages & Technologies:</h3>
    <div className="skills-icons">
      <i className="fab fa-html5" title="HTML"></i>
      <i className="fab fa-css3-alt" title="CSS"></i>
      <i className="fab fa-js" title="JavaScript"></i>
      <i className="fab fa-php" title="PHP"></i>
      <i className="fab fa-python" title="Python"></i>
      <i className="fab fa-laravel" title="Laravel"></i>
      <i className="fab fa-node-js" title="Node.js"></i>
      <i className="fab fa-react" title="React.js"></i>
      <i className="fab fa-git" title="Git"></i>
      <i className="fab fa-bootstrap" title="Bootstrap"></i>
    </div>
    
    {/* Dev Tools */}
    <h3>Dev Tools:</h3>
    <div className="skills-icons">
      <i className="fas fa-code" title="VSCode"></i>
      <i className="fab fa-git-alt" title="Git"></i>
      <i className="fab fa-github" title="GitHub"></i>
    </div>
    
    {/* Frameworks & Libraries */}
    <h3>Frameworks & Libraries:</h3>
    <div className="skills-icons">
      <i className="fab fa-laravel" title="Laravel"></i>
      <i className="fab fa-react" title="React.js"></i>
      <i className="fab fa-bootstrap" title="Bootstrap"></i>
      <i className="fab fa-node-js" title="Node.js"></i>
     
    </div>

    {/* Database & Tools */}
    <h3>Database & Tools:</h3>
    <div className="skills-icons">
      <i className="fas fa-database" title="MySQL"></i>
      <i className="fas fa-server" title="PHPMyAdmin"></i>
    </div>
  </div>
</section>

  );
};

export default Skills;
