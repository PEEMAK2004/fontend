import Navbar from '/app/component/nav';
import Footer from '/app/component/fot';

export default function about() {
    return (
      <>
      <Navbar />
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
      <Footer />
    </>
  );
}