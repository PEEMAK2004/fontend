import Navbar from '/app/component/nav';
import Footer from '/app/component/fot';

export default function about() {
    return (
      <>
      <Navbar />
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center gx-4">
            <div className="col-md-5">
              <div className="ms-md-2 ms-lg-5"><img className="img-fluid rounded-3" src="img/5.png" alt="About Us Image" /></div>
            </div>
            <div className="col-md-6 offset-md-1">
              <div className="ms-md-2 ms-lg-5">
                <span className="text-muted"></span>
                <h2 className="display-5 fw-bold">เกี่ยวกับพวกเรา</h2>
                <p className="lead">เรามีทีมงานผู้เชี่ยวชาญที่มีประสบการณ์และความรู้ด้านไอทีอย่างกว้างขวาง พร้อมให้บริการลูกค้าของเราอย่างเต็มที่ เรานำเสนอโซลูชันไอทีที่หลากหลายที่ปรับแต่งให้เหมาะกับความต้องการของธุรกิจแต่ละแห่ง

</p>
                
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}