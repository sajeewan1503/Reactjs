function User() {
  return (
    <div className="card-container">
      <span className="pro online">ONLINE</span>
      <img src="public/images/images1.jpg" className="img" alt="user" />
      <h3>Full Name</h3>
      <he>India</he>
      <p>Front-end-Deveoper</p>
      <div className="buttons">
        <button className="primary">Message</button>
        <button className="primary outline">Following</button>
      </div>
      <div className="skills">
        <h6>Skills</h6>
        <ul>
          <li>UI / UX</li>
          <li>Front End Developer</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>React Js</li>
        </ul>
      </div>
    </div>
  );
}
export const UserCard = () => {
  return <User />;
};
