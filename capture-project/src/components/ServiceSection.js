const ServiceSection = () => {
  return (
    <div className="services">
      <div className="description">
        <h2>
          High <span>quality</span> services.
        </h2>
        <div className="cards">
          <div className="card">
            <div className="icon">
              <img src="/images/clock.svg" alt="svg" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src="/images/teamwork.svg" alt="svg" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src="/images/diaphragm.svg" alt="svg"/>
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src="/images/money.svg" alt="svg"/>
              <h3>Money</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
      <div className="image">
          <img src="/images/home2.png" alt="camera" />
      </div>
    </div>
  );
};

export default ServiceSection;
