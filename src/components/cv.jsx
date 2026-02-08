import '../styles/cv.css';

function CV({ data, imagePreview }) {
  return (
    <main className="cvSide">
      <div className="cv" id="cvContainer">
        <header className="cvTitle title">
          <h1>Curriculum Vitae</h1>
          <br />
          <br />
        </header>
        <p className="pTitle ctitle">Personal Information</p>
        <br />
        <section className="pData">
          <div className="pwrapper">
            <p className="nameData">
              <span className="targets">Name:</span> {data.name}
            </p>
            <p className="addData">
              <span className="targets">Address: </span>
              {data.address}
            </p>
            <p className="phoneData">
              <span className="targets">Phone Number: </span>
              {data.contact}
            </p>
            <p className="emailData">
              <span className="targets">Email Address: </span>
              {data.email}
            </p>
            <br />
          </div>
          <div className="imgPlaceholder">
            <div className="imgPlaceholder">
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="Profile"
                  style={{
                    width: '90%',
                    height: '90%',
                    objectFit: 'cover',
                  }}
                />
              ) : (
                'No Image'
              )}
            </div>
          </div>
        </section>
        <section className="objData">
          <p className="objTitle ctitle">Objective</p>
          <br />
          <p className="objText">{data.objective}</p>
          <br />
        </section>
        <section className="edData">
          <p className="edTitle ctitle">Educational Background</p>
          <br />
          <p className="edLevel">
            <span className="targets">Education Level: </span>
            {data.edLevel || '—'}
          </p>
          <p className="edschoolName">
            <span className="targets">School Name: </span>
            {data.schoolName || '—'}
          </p>
          <p className="edschoolAddress">
            <span className="targets">School Address: </span>
            {data.schoolAddress || '—'}
          </p>
          <p className="edschoolYear">
            <span className="targets">School Year: </span>
            {data.schoolYear || '—'}
          </p>
          <p className="edStatus">
            <span className="targets">Current Education Status: </span>
            {data.edStatus || '—'}
          </p>
          <br />
        </section>
        <section className="expData">
          <p className="expTitle ctitle">Professional Experience</p>
          <br />
          <p className="expText">{data.experience}</p>
          <br />
        </section>
      </div>
    </main>
  );
}

export { CV };
