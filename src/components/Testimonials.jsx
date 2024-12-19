import React from 'react';


const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials section">
      <h2 className="section-header">Testimonials</h2>
      <div className="cards flex">
        <div className="card1 card flex">
          <img src="Images/sdad.enc" alt="Sdad Al-bayari" className="card-img" />
          <h3>Sdad Al-bayari</h3>
          <p>"His communication and collaboration made the entire process enjoyable and stress-free."</p>
        </div>
        <div className="card2 card flex ">
          <img src="Images/John_Doe.jpg" alt="John Doe" className="card-img" />
          <h3>John Doe</h3>
          <p>"He always delivers projects on time."</p>
        </div>
        <div className="card3 card flex">
          <img src="Images/saleem.enc" alt="Mohammed Nasser" className="card-img" />
          <h3>Mohammed Nasser</h3>
          <p>"Working with Hamza was a game-changer for our web presence."</p>
        </div>
        <div className="card4 card flex">
          <img src="Images/amj.enc" alt="Amjaad Ghaben" className="card-img" />
          <h3>Amjaad Ghaben</h3>
          <p>"From start to finish, the entire process was smooth and professional."</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
