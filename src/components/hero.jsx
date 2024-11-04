import bmwx7 from "../imgs/image92.png";
function Hero() {
  return (
    <div className="container">
      <div className="car-banner">
        <div className="car-info">
          <h1>BMW X7 M60I XDRIVE</h1>
          <p>
            Дизель, полный привод, полная комплектация.
            <br />
            Без обременений и ограничений.
          </p>
          <button className="request-btn hero_btn">Подробнее</button>
        </div>
        <div className="car-image">
          <img src={bmwx7} alt="BMW X7" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
