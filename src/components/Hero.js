import "./Herostyle.css";

function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        <img src={props.heroImg} alt="homehero" />
        <div className="hero-text">
          <h1>{props.title}</h1>
          <h2>{props.aboutText}</h2>
          <p>{props.subtitle}</p>
          <a href={props.url} className={props.btnClass}>
            {props.buttontext}
          </a>
        </div>
      </div>
    </>
  );
}

export default Hero;
