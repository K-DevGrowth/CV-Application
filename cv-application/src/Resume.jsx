export default function Resume({ personal, education, experience }) {
  return (
    <div className="resume">
      <h1>Resume</h1>
      <h3>Personal</h3>
      {personal.map((personal, index) => (
        <div key={index}>
          <p>Name: {personal.name}</p>
          <p>Email: {personal.email}</p>
          <p>Phone number: {personal.phoneNumber}</p>
        </div>
      ))}

      <h3>Education</h3>
      {education.map((education, index) => (
        <div key={index}>
          <p>School name: {education.schoolName}</p>
          <p>Title of study: {education.titleOfStudy}</p>
          <p>Date of study: {education.dateOfStudy}</p>
        </div>
      ))}

      <h3>Experience</h3>
      {experience.map((experience, index) => (
        <div key={index}>
          <p>Company name: {experience.companyName}</p>
          <p>Position title: {experience.position}</p>
          <p>Main responsibilities of your jobs: {experience.responsibility}</p>
          <p>Start day: {experience.startDay}</p>
          <p>End day: {experience.endDay}</p>
        </div>
      ))}
    </div>
  );
}
