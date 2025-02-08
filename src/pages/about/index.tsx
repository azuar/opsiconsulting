import { Button } from "antd";
import "./index.css";

const About = () => {
  const whyUs = [
    "Konsultan Pajak Berserfikat",
    "Kooperatif dan Fast Respond",
    "Rahasia Terjamin",
    "Layanan dapat disesuaikan denggan kebutuhan Anda",
  ];
  return (
    <>
      <div className="section" id="tentang"></div>
      <div className="tentang">
        <div className="container">
          <div className="d-flex mb-5">
            <img src="logo-icon.png" alt="icon" height={50} className="me-3" />
            <h1 className="fw-bolder d-flex align-items-center m-0">
              Tentang Kami
            </h1>
          </div>
          <div className="row">
            <div className="col-lg-6 text-center mt-3">
              <img
                src="https://bmginstitute.com/wp-content/uploads/2024/05/Procurement-Negotiation-Contracting-Strategy.webp"
                alt="img"
                className="image-tentang"
              />
              <Button
                type="primary"
                className="bg-warning text-dark mt-3 p-4 mb-4"
                size="large"
              >
                Konsultasi <span className="fw-bold">GRATIS</span> Sekarang
              </Button>
            </div>
            <div className="col-lg-6 fs-5">
              <p>
                <span style={{ color: "#2561B2", fontWeight: 600 }}>
                  Opsi Consulting
                </span>{" "}
                adalah konsultan pajak yang berbasis di Jakarta. Kami
                berkomitmen untuk memberikan solusi perpajakan terbaik bagi
                individu dan perusahaan. Kami memiliki tim ahli dengan
                pengalaman luas dan pemahaman mendalam tentang regulasi
                perpajakan, yang siap membantu Anda mengelola kewajiban pajak
                secara efisien dan tepat waktu.
              </p>
              <p>
                Mengapa{" "}
                <span style={{ color: "#2561B2", fontWeight: 600 }}>
                  Opsi Consulting
                </span>{" "}
                ?
              </p>
              {whyUs.map((item, _index) => (
                <div className="row">
                  <div className="col-2 text-end">
                    <img src="check-icon.png" alt="check" height={50} />
                  </div>
                  <div className="col-10 d-flex align-items-center">
                    <p className="mb-0">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
