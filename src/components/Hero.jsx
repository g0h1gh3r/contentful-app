import heroImg from '../assets/hero.svg'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam eum
            placeat ut. Maiores mollitia odio iure vero esse a, id quo iste
            ullam dignissimos dolores perferendis ipsum eaque atque officia.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="women and the browser" className="img" />
        </div>
      </div>
    </section>
  )
}
export default Hero
