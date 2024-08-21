import pf from "../assets/NH ng hah.jpg";
const About = () => {
  return (
    <div className="about-container">
      <div className="image">
        <img src={pf} alt="NH" />
      </div>
      <div className="content">
        <h1>Phoem Sophanna</h1>
        <p>
          This is a small website using React.js for your computer sales
          business, Yeak Tech. The site features an API for managing product
          data, making it easy to display and update your inventory online.
        </p>
      </div>
    </div>
  );
};

export default About;
