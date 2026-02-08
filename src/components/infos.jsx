import { useState } from 'react';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

import '../styles/infos.css';

function InfoSide({
  data,
  onChange,
  setImage,
  setImagePreview,
  setImageError,
}) {
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
        {currentCard === 'objective' && (
          <Objective data={data} onChange={onChange} />
        )}
        {currentCard === 'education' && (
          <Education data={data} onChange={onChange} />
        )}
        {currentCard === 'experience' && (
          <Experience data={data} onChange={onChange} />
        )}
        {currentCard === 'profImg' && (
          <ProfileImg
            setImage={setImage}
            setImagePreview={setImagePreview}
            setImageError={setImageError}
          />
        )}
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
          maxLength={90}
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
          maxLength={90}
        />
      </div>
      <div className="userPhone user">
        <Label name="Phone Number *" forIn="contact" />
        <Input
          type="tel"
          placeholder="e.g. 0123 456 789"
          id="contact"
          name="contact"
          value={data.contact}
          onChange={onChange}
          maxLength={16}
        />
      </div>
      <div className="userEmail user">
        <Label name="Email Address *" forIn="email" />
        <Input
          type="email"
          placeholder="email@example.com"
          id="email"
          name="email"
          value={data.email}
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
        <Label name="Objective *" forIn="objective" />
        <Textarea
          name="objective"
          id="objective"
          placeholder="Describe your goal or objective here"
          value={data.objective}
          onChange={onChange}
          maxLength={500}
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
        <select
          name="edLevel"
          id="edLevel"
          value={data.edLevel}
          onChange={onChange}
        >
          <option value="">Select your Education Level</option>
          <option value="College">College</option>
          <option value="Senior Highschool">Senior Highschool</option>
          <option value="Junior Highschool">Junior Highschool</option>
          <option value="Middle School">Middle School</option>
          <option value="Elementary School">Elementary School</option>
        </select>
      </div>

      <div className="schoolName ed">
        <Label name="School Name *" forIn="schoolName" />
        <Input
          type="text"
          placeholder="e.g. High School Name"
          id="schoolName"
          name="schoolName"
          value={data.schoolName}
          onChange={onChange}
          maxLength={90}
        />
      </div>

      <div className="schoolAddress ed">
        <Label name="School Address *" forIn="schoolAddress" />
        <Input
          type="text"
          placeholder="e.g. School Street 12, City, 12345"
          id="schoolAddress"
          name="schoolAddress"
          value={data.schoolAddress}
          onChange={onChange}
          maxLength={90}
        />
      </div>

      <div className="schoolYear ed">
        <Label name="School Year *" forIn="schoolYear" />
        <Input
          type="text"
          placeholder="e.g. 2025/2026"
          id="schoolYear"
          name="schoolYear"
          value={data.schoolYear}
          onChange={onChange}
          maxLength={9}
        />
      </div>

      <div className="educationalStatus">
        <Label name="Educational Status" forIn="edStatus" />
        <select
          name="edStatus"
          id="edStatus"
          value={data.edStatus}
          onChange={onChange}
        >
          <option value="">Select your Education Status</option>
          <option value="Graduate">Graduate</option>
          <option value="Last Attended Year">Last Attended Year</option>
          <option value="Currently Studying">Currently Studying</option>
        </select>
      </div>
    </div>
  );
}

function Experience({ data, onChange }) {
  return (
    <div className="experience">
      <div className="expTitle title">
        <h2>Experience</h2>
      </div>
      <div className="expInputs">
        <Label name="Experience *" forIn="experience" />
        <Textarea
          name="experience"
          id="experience"
          placeholder="e.g. Worked at a (Company name)..."
          value={data.experience}
          onChange={onChange}
          maxLength={600}
        />
      </div>
    </div>
  );
}

function ProfileImg({ setImagePreview, setImageError, imageError }) {
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const maxSizeMB = 2;
    const fileSizeMB = file.size / 1024 / 1024;

    if (fileSizeMB > maxSizeMB) {
      setImageError(`Image too large! Max ${maxSizeMB}MB.`);
      setImagePreview('');
      return;
    }

    if (file.type !== 'image/jpeg' && file.type !== 'image/png') {
      setImageError('Only JPG or PNG images allowed!');
      setImagePreview('');
      return;
    }

    setImageError(''); // no errors, reset

    const reader = new FileReader();
    reader.onloadend = () => setImagePreview(reader.result);
    reader.readAsDataURL(file);
  };

  return (
    <div className="profileImg">
      <Label name="Upload Picture *" forIn="uploader" className="file-label" />
      <Input
        type="file"
        id="uploader"
        name="uploader"
        accept="image/jpeg,image/png"
        onChange={handleImageChange}
      />
      {imageError && <small className="error">{imageError}</small>}
      <p className="imageInfo1">Maximum size is 2MB</p>
      <p className="imageInfo2">File types JPG or PNG</p>
    </div>
  );
}

function ExportCv() {
  const downloadPdf = () => {
    // grab the CV container
    const cv = document.getElementById('cvContainer');
    if (!cv) return;

    html2canvas(cv, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width; // maintain aspect ratio

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('My_CV.pdf');
    });
  };
  return (
    <div className="exportCv">
      <div className="exTitle title">
        <h2>Download CV</h2>
      </div>
      <div className="export">
        <Label name="Export CV*" forIn="download" />
        <button onClick={downloadPdf}>Download CV as pdf</button>
      </div>
    </div>
  );
}

function Label({ name, forIn, className }) {
  return (
    <label for={forIn} className={className}>
      {name}
    </label>
  );
}

function Input({ type, placeholder, id, name, value, onChange, maxLength }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      maxLength={maxLength}
    />
  );
}

function Textarea({ name, id, placeholder, value, onChange, maxLength }) {
  return (
    <>
      <textarea
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
      ></textarea>
      <small>
        {value.length}/{maxLength}
      </small>
    </>
  );
}

export { InfoSide, GeneralInfos };
