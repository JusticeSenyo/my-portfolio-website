import './services.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom


function Services (){
return(
<section className='services' id='services'>
        <h2 className='services-title'>innovative solutions</h2>
       <h3 className='services-subtitle'>Tailored applications for your needs</h3>

  <div className="services-container">

<Link to="WebDesign">
    <div className="service-card">
      <img className='service-image' src="src\assets\fotis-fotopoulos-DuHKoV44prg-unsplash.jpg" alt="" />
      <div className="service-content">
      <h4 >Web applicaion development &gt;</h4>
      <p >
        Create engaging and interactive web applications tailored to your needs.
      </p>
      </div>
    </div>
    </Link>
    <Link to="UIdesign">
    <div className="service-card">
      <img className='service-image' src="src\assets\fotis-fotopoulos-6sAl6aQ4OWI-unsplash.jpg" alt="" />
      <div className="service-content">
      <h4 >UI/UX design &gt;</h4>
      <p >
       Design visually appealing and user-friendly interfaces.
      </p>
      </div>
    </div>
    </Link>
      <Link to="/Backend">
    <div className="service-card">
      <img className='service-image' src="src\assets\backend-utvikling-toaarig-2024.jpg" alt="" />
      <div className="service-content">
      <h4 >Backend development &gt;</h4>
      <p>
       Build robust and efficient server-side applications.
      </p>
      </div>
    </div>
    </Link>
</div>
</section>
)
};
export default Services;