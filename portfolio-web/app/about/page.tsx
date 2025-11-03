export default function AboutPage() {
  return (
    <div className="container py-4">
      <h1 className="mb-4">My Work</h1>

      <div className="row g-4">

        {/* card 1 */}
        <div className="col-md-4">
          <div className="card h-100 shadow-sm project-card">
            <img
              src="api.jpg"
              className="card-img-top"
              alt="API Stock Photo"
            />
            <div className="card-body">
              <h5 className="card-title">Pembuatan API</h5>
              <p className="card-text">
                Berkolaborasi dengan tim untuk membangun Rest API menggunakan Javascript.
              </p>
              <a className="btn btn-primary" href="#">
                View Details
              </a>
            </div>
          </div>
        </div>

        {/* card 2 */}
        <div className="col-md-4">
          <div className="card h-100 shadow-sm project-card">
            <img
              src="bird.jpg"
              className="card-img-top"
              alt="Bird Stock Photo"
            />
            <div className="card-body">
              <h5 className="card-title">Laporan Analisis Data</h5>
              <p className="card-text">
                Menulis laporan menganalisis pola migrasi burung menggunakan Python.
              </p>
              <a className="btn btn-primary" href="#">
                View Details
              </a>
            </div>
          </div>
        </div>

        {/* card 3 */}
        <div className="col-md-4">
          <div className="card h-100 shadow-sm project-card">
            <img
              src="spelling.jpg"
              className="card-img-top"
              alt="Texting Stock Photo"
            />
            <div className="card-body">
              <h5 className="card-title">Pembuatan Program Pengecekan Ejaan</h5>
              <p className="card-text">
                Berkolaborasi dengan tim untuk membangun program untuk mengecek 
                pengejaan kata menggunakan Java.
              </p>
              <a className="btn btn-primary" href="#">
                View Details
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
