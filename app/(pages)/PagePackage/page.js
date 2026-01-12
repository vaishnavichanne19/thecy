const PagePackage = () => {
  return (
    <main>
    <div className="container main-spread package-page">
      <h2 data-aos="fade-down" data-aos-duration={1000}>
        Choose the plan <br />
        that fits your goals.
      </h2>

      <div className="package-section">
        <div className="package-card">
          <h3>Beginner</h3>
          <h3>$199</h3>
        </div>
        <div className="package-content">
          <ul>
            <li>Logo Design Concept</li>
            <li>Revision</li>
            <li>Social Media Kit</li>
          </ul>

          <div className="choose-plan-btn">
            <button>Choose Plan</button>
          </div>
        </div>
      </div>

      <div className="package-section">
        <div className="package-card">
          <h3>Beginner</h3>
          <h3>$199</h3>
        </div>
        <div className="package-content">
          <ul>
            <li>Logo Design Concept</li>
            <li>Revision</li>
            <li>Social Media Kit</li>
            <li>Brand Guidelines</li>
            <li>Stationery Design</li>
            <li>Business Card Design</li>
          </ul>

          <div className="choose-plan-btn">
            <button>Choose Plan</button>
          </div>
        </div>
      </div>
    </div>
    </main>
  );
};

export default PagePackage;
