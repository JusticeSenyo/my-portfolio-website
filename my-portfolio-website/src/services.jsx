import './services.css'

function Services (){
return(
<section className='services' id='services'>
        <h2 className='services-title'>innovative solutions</h2>
       <h3 className='services-subtitle'>Tailored applications for your needss</h3>

  <div className="services-container">

    <div className="service-card">
      <img className='service-image' src="src\assets\fotis-fotopoulos-DuHKoV44prg-unsplash.jpg" alt="" />
      <div className="service-content">
      <h4 >Web applicaion development &gt;</h4>
      <p >
        Create engaging and interactive web applications tailored to your needs.
      </p>
      </div>
    </div>
    <div className="service-card">
      <img className='service-image' src="src\assets\fotis-fotopoulos-6sAl6aQ4OWI-unsplash.jpg" alt="" />
      <div className="service-content">
      <h4 >UI/UX design &gt;</h4>
      <p >
       Design visually appealing and user-friendly interfaces.
      </p>
      </div>
    </div>
    <div className="service-card">
      <img className='service-image' src="src\assets\backend-utvikling-toaarig-2024.jpg" alt="" />
      <div className="service-content">
      <h4 >Backend development &gt;</h4>
      <p>
       Build robust and efficient server-side applications.
      </p>
      </div>
    </div>
</div>
</section>
)
};
export default Services;