import { useInView } from "react-intersection-observer";
import "./CSS/page2.css";

const LazyLoadedCar = ({ car }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "100px",
  });

  const carStyle = {
    backgroundImage: `url(${car.image})`,
  };

  return (
    <>
      <div>
        <div ref={ref} className="car-card">
          {inView ? (
            <>
              <div className="containeria">
                <div className="banner-imageia" style={carStyle}></div>
                <h1 className="carNameClass">{car.name}</h1>
                <p className="carPriceClass">{car.price}</p>
                <p className="carTypeClass">{car.type}</p>
              </div>
            </>
          ) : (
            <div style={{ width: "100%", height: "200px", background: "#eee" }}>
              Loading...
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default LazyLoadedCar;
