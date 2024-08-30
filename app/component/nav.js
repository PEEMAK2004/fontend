import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="img/logo.png" alt="Logo" width="30" height="28" className="d-inline-block align-text-top" />
          EIEI SOFT
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/"><i className="bi bi-house"></i> Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about"><i className="bi bi-people-fill"></i> About</a>
            </li>
            
            <li className="nav-item">
              <a className="nav-link" href="/service"><i className="bi bi-basket3"></i> service </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact"><i className="bi bi-person-vcard"></i> contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/users"><i className="bi bi-person-vcard"></i> ข้อมูลuser</a>
            </li>
          </ul>

          <form className="d-grid gap-2 d-md-block">
          <Link href="/signup" passHref>
      <button className="btn btn-outline-primary" type="button">
        <i className="bi bi-file-lock"></i> Signup
      </button>
          </Link>
          <Link href="/login" passHref>
      <button className="btn btn-outline-primary" type="button">
        <i className="bi bi-file-lock"></i> Login
      </button>
          </Link>
          </form>
        </div>
      </div>
    </nav>
  );
}
