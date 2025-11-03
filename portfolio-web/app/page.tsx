export default function Home() {
  return (
    <section className="hero-section d-flex align-items-center justify-content-between flex-column flex-md-row gap-5">

      <div className="text-center text-md-start">
        <h1 className="fw-bold display-4">Hi, I'm <span className="highlight-name">Lyvia</span></h1>
        <p className="lead mb-4">
          Web Developer | Data Scientist | Tech Enthusiast
        </p>
        <p className="lead mb-4">
          Mahasiswa Universitas Tarumanagara prodi Teknik Informatika dengan
          pengalaman dalam programming. Memiliki keterampilan problem
          solving dan critical thinking yang kuat dan kemampuan bekerja dalam tim.
        </p>

        <a href="/about" className="btn btn-primary btn-lg">
          View My Work
        </a>
      </div>

      <div>
        <img
          src="1218.jpg"
          alt="Profile"
          className="img-fluid rounded-circle shadow hero-profile-img"
          style={{ maxWidth: "350px", border: "6px solid #242834" }}
        />
      </div>

    </section>
  );
}
