import { useState } from 'react';
import '../styles/infos.css';

function InfoSide({ data, onChange }) {
  const [currentCard, setCard] = useState('general');

  return (
    <aside className="infosCon">
      <header className="infosTitle title">
        <h1>CV-Application</h1>
      </header>

      <div className="cardArea">
        {currentCard === 'general' && (
          <GeneralInfos data={data} onChange={onChange} />
        )}
        {currentCard === 'objective' && <Objective />}
        {currentCard === 'education' && <Education />}
        {currentCard === 'experience' && <Experience />}
        {currentCard === 'profImg' && <ProfileImg />}
        {currentCard === 'exportCv' && <ExportCv />}
      </div>

      <nav className="form-nav">
        {steps.map((step) => {
          const isActive = currentCard === step.id;

          return (
            <button
              key={step.id}
              className={`nav-item ${isActive ? 'active' : ''}`}
              onClick={() => setCard(step.id)}
            >
              {isActive ? (
                <span className="nav-label">{step.label}</span>
              ) : (
                <span className="nav-dot" />
              )}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}

const steps = [
  { id: 'general', label: 'General' },
  { id: 'objective', label: 'Objective' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'profImg', label: 'Upload' },
  { id: 'exportCv', label: 'Download' },
];

function GeneralInfos({ data, onChange }) {
  return (
    <div className="generalInfos">
      <div className="generalTitle title">
        <h2>General Information</h2>
      </div>
      <div className="userName user">
        <Label name="Name *" forIn="name" />
        <Input
          type="text"
          placeholder="John Doe.."
          id="name"
          name="name"
          value={data.name}
          onChange={onChange}
        />
      </div>
      <div className="userAddress user">
        <Label name="Address *" forIn="address" />
        <Input
          type="text"
          placeholder="e.g. Example Street 12, City"
          id="address"
          name="address"
          value={data.address}
          onChange={onChange}
        />
      </div>
      <div className="userPhone user">
        <Label name="Phone Number *" forIn="contact" />
        <Input
          type="number"
          placeholder="e.g. 0123 456 789"
          id="contact"
          name="contact"
          value={data.contact}
          onChange={onChange}
        />
      </div>
      <div className="userEmail user">
        <Label name="Email Address *" forIn="email" />
        <Input
          type="email"
          placeholder="email@example.com"
          id="email"
          name="email"
          value={data.address}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

function Objective({ data, onChange }) {
  return (
    <div className="objective">
      <div className="objTitle title">
        <h2>Objective</h2>
      </div>
      <div className="objText">
        <Label name="Objective *" forIn="infos" />
        <Textarea
          name="infos"
          id="infos"
          placeholder="Describe your goal or objective here"
          value={data.objective}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

function Education({ data, onChange }) {
  return (
    <div className="education">
      <div className="edTitle title">
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
          value={data.education.schoolName}
          onChange={onChange}
        />
      </div>

      <div className="schoolAddress ed">
        <Label name="School Address *" forIn="schoolAddress" />
        <Input
          type="text"
          placeholder="e.g. School Street 12, City, 12345"
          id="schoolAddress"
          name="schoolAddress"
          value={data.education.schoolAddress}
          onChange={onChange}
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

function Experience() {
  return (
    <div className="experience">
      <div className="expTitle title">
        <h2>Experience</h2>
      </div>
      <div className="expInputs">
        <Label name="Experience *" forIn="exp" />
        <Textarea
          name="exp"
          id="exp"
          placeholder="e.g. Worked at a (Company name)..."
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
      <div className="exTitle title">
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

function Input({ type, placeholder, id, name, value, onChange }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
}

function Textarea({ name, id, placeholder, value, onChange }) {
  return (
    <textarea
      name={name}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    ></textarea>
  );
}

export { InfoSide, GeneralInfos };
