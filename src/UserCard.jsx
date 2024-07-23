const userData = [
  {
    name: "Dhuwaraka",
    city: "Colombo, Sri Lanka",
    description: "Visa Consultant",
    skills: [
      "UI / UX",
      "Front End Developer",
      "HTML",
      "Javascript",
      "React Js",
    ],
    online: false,
    profile: "public/images/image2.jpg",
  },
  {
    name: "Sajeewan",
    city: "Colombo, Sri Lanka",
    description: "Associate Software Developer",
    skills: [
      "UI / UX",
      "Front End Developer",
      "HTML",
      "Javascript",
      "React Js",
    ],
    online: true,
    profile: "public/images/image1.jpg",
  },
];
function User(props) {
  return (
    <div className="card-container">
      {/* <span className={props.online ? "pro online" : "pro offline"}>
        {props.online ? "ONLINE" : "OFFLINE"}
      </span> */}
      <img src={props.profile} className="img" alt="user" />
      {/* <img src="public/images/image1.jpg" className="img" alt="user" /> */}
      <h3>{props.name}</h3>
      <he>{props.city}</he>
      <p>{props.description}</p>
      <div className="buttons">
        <button className="primary">Message</button>
        <button className="primary outline">Following</button>
      </div>
      <div className="skills">
        <h6>Skills</h6>
        <ul>
          {props.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export const UserCard = () => {
  return (
    <>
      {userData.map((user, index) => (
        <User
          key={index}
          name={user.name}
          city={user.city}
          description={user.description}
          online={user.online}
          profile={user.profile}
          skills={user.skills}
        />
      ))}
    </>
  );
};
{
  /* <User
      name="Sajeewan"
      city="Colombo, Sri Lanka"
      description="Front-end Developer"
      skills={[
        "UI / UX",
        "Front End Developer",
        "HTML",
        "Javascript",
        "React Js",
      ]}
      online={false}
      profile="public/images/image2.jpg"
    /> */
}
