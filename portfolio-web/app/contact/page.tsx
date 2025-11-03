export default function ContactPage() {
  return (
    <div className="container py-4 text-center">
      <h1 className="fw-bold">Contact Me</h1>

      <div className="row justify-content-center mt-5">
        <div className="col-12 col-md-4 mb-4">
          <h6 className="fw-bold mb-1 highlight-name">ADDRESS</h6>
          <p className="mb-0">Tangerang, Banten</p>
        </div>

        <div className="col-12 col-md-4 mb-4">
          <h6 className="fw-bold mb-1 highlight-name">PHONE</h6>
          <p className="mb-0">0821-2387-4107</p>
        </div>

        <div className="col-12 col-md-4 mb-4">
          <h6 className="fw-bold mb-1 highlight-name">EMAIL</h6>
          <p className="mb-0">lyvia.535240028@stu.untar.ac.id</p>
        </div>
      </div>
    </div>
  );
}