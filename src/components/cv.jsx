import '../styles/cv.css';

function CV({ data }) {
  return (
    <main className="cvSide">
      <div className="cv">
        <header className="cvTitle title">
          <h1>Curriculum Vitae</h1>
          <br />
          <br />
        </header>
        <p className="pTitle title">Personal Information</p>
        <br />
        <section className="pData">
          <div className="pwrapper">
            <p className="nameData">Name: {data.name}</p>
            <p className="addData">Address: {data.address}</p>
            <p className="phoneData">Phone Number: {data.contact}</p>
            <p className="emailData">Email Address: {data.email}</p>
            <br />
          </div>
          <div className="imgPlaceholder">No Image</div>
        </section>
        <section className="objData">
          <p className="objTitle">Objective</p>
          <br />
          <p className="objText"></p>
          <br />
        </section>
        <section className="edData">
          <p className="edTitle">Educational Background</p>
          <br />
          <p className="edText"></p>
          <br />
        </section>
        <section className="expData">
          <p className="expTitle">Professional Experience</p>
          <br />
          <p className="expText"></p>
          <br />
        </section>
      </div>
    </main>
  );
}

export { CV };
