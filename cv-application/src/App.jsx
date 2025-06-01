import { useState } from "react";
import "./styles.css";
import { personal, experience, education } from "./Data";
import Resume from "./Resume";
import Section from "./Section";

const convertArrayToObject = (array) => {
  const result = {};
  array.forEach((item) => {
    result[item.idFor] = item.value;
  });
  return result;
};

function App() {
  const [personalData, setPersonalData] = useState(() =>
    [convertArrayToObject(personal)]
  );

  const [educationData, setEducationData] = useState(() =>
    [convertArrayToObject(education)]
  );

  const [experienceData, setExperienceData] = useState(() =>
    [convertArrayToObject(experience)]
  );

  return (
    <>
      <div className="app">
        <div className="dashboard">
          <Section
            title="Personal"
            array={personal}
            formData={personalData}
            setFormData={setPersonalData}
          />
          <Section
            title="Education"
            array={education}
            formData={educationData}
            setFormData={setEducationData}
          />
          <Section
            title="Experience"
            array={experience}
            formData={experienceData}
            setFormData={setExperienceData}
          />
        </div>
        <Resume
          personal={personalData}
          education={educationData}
          experience={experienceData}
        />
      </div>
    </>
  );
}

export default App;
