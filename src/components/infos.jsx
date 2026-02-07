import { useState } from 'react';
import '../styles/infos.css';

function InfoSide() {
  const [currentCard, setCard] = useState('general');

  return (
    <div className="infosCon">
      <div className="infosTitle">
        <h1>CV-Application</h1>
      </div>

      {currentCard === 'general' && <GeneralInfos />}
      {currentCard === 'objective' && <Objective />}
      {currentCard === 'education' && <Education />}
      {currentCard === 'skills' && <Skills />}
      {currentCard === 'profImg' && <ProfileImg />}
      {currentCard === 'exportCv' && <ExportCv />}

      <nav>
        <button onClick={() => setCard('general')}>General</button>
        <button onClick={() => setCard('objective')}>Objective</button>
        <button onClick={() => setCard('education')}>Education</button>
        <button onClick={() => setCard('skills')}>Skills</button>
        <button onClick={() => setCard('profImg')}>Upload</button>
        <button onClick={() => setCard('exportCv')}>Download</button>
      </nav>
    </div>
  );
}

function GeneralInfos() {
  return (
    <div className="generalInfos">
      <div className="generalTitle">
        <h2>General Information</h2>
      </div>
      <div className="userName user">
        <Label name="Name: " forIn="name" />
        <Input type="text" placeholder="John Doe.." id="name" name="name" />
      </div>
      <div className="userAddress user">
        <Label name="Address: " forIn="address" />
        <Input
          type="text"
          placeholder="e.g. Example Street 12, City, 12345"
          id="address"
          name="address"
        />
      </div>
      <div className="userPhone user">
        <Label name="Phone Number: " forIn="contact" />
        <Input
          type="number"
          placeholder="e.g. 0123 456 789"
          id="contact"
          name="contact"
        />
      </div>
      <div className="userEmail user">
        <Label name="Email Address: " forIn="email" />
        <Input
          type="email"
          placeholder="email@example.com"
          id="email"
          name="email"
        />
      </div>
    </div>
  );
}

function Objective() {
  return (
    <div className="objective">
      <div className="objTitle">
        <h2>Objective</h2>
      </div>
      <div className="objText">
        <Label name="Objective *" forIn="infos" />
        <Textarea
          name="infos"
          id="infos"
          placeholder="Describe your goal or objective here"
        />
      </div>
    </div>
  );
}

function Education() {
  return (
    <div className="education">
      <div className="edTitle">
        <h2>Education</h2>
      </div>
      <div className="edLevel ed">
        <Label name="Education Level *" forIn="edTitle" />
        <select name="edTitle" id="edTitle">
          <option value="">Select your Education Level</option>
          <option value="college">College</option>
          <option value="senior-highschool">Senior Highschool</option>
          <option value="junior-highschool">Junior Highschool</option>
          <option value="middle-school">Middle School</option>
          <option value="elementary-school">Elementary School</option>
        </select>
      </div>

      <div className="schoolName ed">
        <Label name="School Name *" forIn="schoolTitle" />
        <Input
          type="text"
          placeholder="e.g. High School Name"
          id="schoolTitle"
          name="schoolTitle"
        />
      </div>

      <div className="schoolAddress ed">
        <Label name="School Address *" forIn="schoolAddress" />
        <Input
          type="text"
          placeholder="e.g. School Street 12, City, 12345"
          id="schoolAddress"
          name="schoolAddress"
        />
      </div>

      <div className="schoolYear ed">
        <Label name="School Year *" forIn="schoolYear" />
        <Input
          type="text"
          placeholder="e.g. 2025/2026"
          id="schoolYear"
          name="schoolYear"
        />
      </div>

      <div className="educationalStatus">
        <Label name="Educational Status" forIn="edStatus" />
        <select name="edStatus" id="edStatus">
          <option value="">Select your Education Status</option>
          <option value="graduate">Graduate</option>
          <option value="last-attended-year">Last Attended Year</option>
          <option value="present">Currently Studying</option>
        </select>
      </div>
    </div>
  );
}

function Skills() {
  return (
    <div className="skills">
      <div className="skTitle">
        <h2>Skills</h2>
      </div>
      <div className="skInputs">
        <Label name="Skills *" forIn="skills" />
        <Textarea
          name="skills"
          id="skills"
          placeholder="e.g. Communication, Teamwork, Problem-solving"
        />
      </div>
    </div>
  );
}

function ProfileImg() {
  return (
    <div className="profileImg">
      <div className="imgUploader">
        <Label name="Upload Picture *" forIn="uploader" />
        <Input
          type="file"
          placeholder="Upload your Image here"
          id="uploader"
          name="uploader"
          accept="image/*"
        />
      </div>
    </div>
  );
}

function ExportCv() {
  return (
    <div className="exportCv">
      <div className="exTitle">
        <h2>Download CV</h2>
      </div>
      <div className="export">
        <Label name="Export CV*" forIn="download" />
        <button>
          <a href="#" download="MyFile.pdf">
            Export as PDF
          </a>
        </button>
      </div>
    </div>
  );
}

function Label({ name, forIn }) {
  return <label for={forIn}>{name}</label>;
}

function Input({ type, placeholder, id, name }) {
  return <input type={type} placeholder={placeholder} id={id} name={name} />;
}

function Textarea({ name, id, placeholder }) {
  return <textarea name={name} id={id} placeholder={placeholder}></textarea>;
}

export { InfoSide };
