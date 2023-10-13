import Marquee from "react-fast-marquee";
import './Skills.css'
const SkillsData = () => {
  return (
    <div  className="skills" id="skills">
      <h1  style={{ textAlign: "start" }}>skills</h1>
      <div className="skill-image">
              <Marquee
        gradient={false}
        speed={100}
        pauseOnClick={true}
        delay={0}
        play={true}
        direction="right"
      >
        <div>
          <img src="../public/assets/html.svg" alt="" />
        </div>
        <div>
          <img src="../public/assets/css.svg" alt="" />
        </div>
        <div>
          <img src="../public/assets/bootstrap.svg" alt="" />
        </div>

        <div>
          <img src="../public/assets/tailwind.svg" alt="" />
        </div>
        <div>
          <img src="../public/assets/javascript.svg" alt="" />
        </div>
        <div>
          <img src="../public/assets/react.svg" alt="" />
        </div>

        <div>
          <img src="../public/assets/materialui.svg" alt="" />
        </div>
        <div>
          <img src="../public/assets/nextJS.svg" alt="" />
        </div>
        <div>
        <img src="../public/assets/vitejs.svg" alt="" />
        </div>
        <div>
          <img src="../public/assets/git.svg" alt="" />
        </div>
      </Marquee>
      </div>

    </div>
  );
};

export default SkillsData;
