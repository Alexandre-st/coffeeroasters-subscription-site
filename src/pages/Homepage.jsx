import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <main className="container">
      <section className="hero hero-main">
        <div className="hero-main-content">
          <h1 className="hero-main-title">Great coffee made simple.</h1>
          <p className="text text-hero hero-main-text">
            Start your mornings with the world’s best coffees. Try our expertly
            curated artisan coffees from our best roasters delivered directly to
            your door, at your schedule.
          </p>
          <Link to="/create" className="button button-shared">Create your plan</Link>
        </div>
      </section>
    </main>
  );
};
 
export default Homepage;