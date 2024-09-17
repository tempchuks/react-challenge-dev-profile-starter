import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import image from "../public/templegithub.jpg";

function App() {
  return (
    <div className="card">
      <Avatar image={image} />
      <div className="data">
        <Intro
          int="
         I am a backend developer with a strong focus on server-side technologies and a hands-on approach to problem-solving. My development workflow leverages tools like Parcel and Lodash, often working without the need for a dedicated frontend framework. I prefer Express.js for serving static websites on my VPS and use Netlify for efficient website deployment. As a dedicated Linux user, I’m comfortable in open-source environments, which enhances my productivity and adaptability. "
        />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar(props) {
  return <img className="avatar" src={props.image} />;
}
function Intro(props) {
  return (
    <div>
      <h1>Temple Chukwuka</h1>
      <p className="data">{props.int}</p>
    </div>
  );
}
function Skill(props) {
  return (
    <li className="skill" style={{ backgroundColor: props.color }}>
      {props.skill}
    </li>
  );
}
function SkillList() {
  return (
    <ul className="skill-list">
      <Skill color="red" skill="HTML+CSS" />
      <Skill color="grey" skill="GIT" />
      <Skill color="blue" skill="Javascript" />
      <Skill color="yellowgreen" skill="Learning react" />
    </ul>
  );
}
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
