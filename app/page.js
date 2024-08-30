import Navbar from '../app/component/nav';

export default function Home() {
  return (
    <>
      <Navbar />
      
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="img/1.png" className="d-block w-100" width="1920" height="900" alt="Slide 1" />
          </div>
          <div className="carousel-item">
            <img src="img/2.png" className="d-block w-100" width="1920" height="900" alt="Slide 2" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <h1 className="text-center mt-4">บริการของเรา</h1>
      <div className="d-flex justify-content-center mt-2">
        <img src="img/13.png" width="40" height="40" alt="Logo" style={{ verticalAlign: 'middle' }} />
      </div>

      <div className="row mt-4">
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src="img/1.1.png" className="card-img-top" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">บริการทำเว็บ</h5>
              <p className="card-text">
                การมีเว็บไซต์ที่สวยงามและสื่อสารได้ดีเป็นสิ่งที่สำคัญสำหรับธุรกิจในยุคปัจจุบัน...
              </p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src="img/1.2.png" className="card-img-top" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">บริการทำแอป</h5>
              <p className="card-text">
                ในยุคปัจจุบัน เทคโนโลยีและอุตสาหกรรมเกี่ยวกับแอปพลิเคชันมีการเติบโตอย่างรวดเร็ว...
              </p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src="img/1.3.png" className="card-img-top" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">บริการวิเคราะห์ข้อมูล</h5>
              <p className="card-text">
                ริการวิเคราะห์ข้อมูลเป็นบริการที่ช่วยให้ธุรกิจหรือองค์กรสามารถทำการวิเคราะห์ข้อมูลได้...
              </p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>

      <footer className="py-5">
        <div className="row">
          <div className="col-6 col-md-2 mb-3">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
            </ul>
          </div>

          <div className="col-md-5 offset-md-1 mb-3">
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of what's new and exciting from us.</p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                <button className="btn btn-primary" type="submit">Subscribe</button>
              </div>
            </form>
          </div>
        </div>

      
      </footer>
    </>
  );
}
