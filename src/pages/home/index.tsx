import { Button, Card } from "antd";
import "./index.css";
const Home = () => {
  const taglineSolution: any[] = [
    {
      icon: "https://cdn-icons-png.flaticon.com/512/1176/1176289.png",
      content: "Mengalami Kerugian Karena Salah Perhitungan Pajak",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/951/951978.png",
      content: "Mendapat Surat Teguran dari Kantor Pajak",
    },
    {
      icon: "https://cdn-icons-png.freepik.com/256/912/912318.png?semt=ais_hybrid",
      content: "Kesulitan Pelaporan Pajak Karena Kurangnya Staff",
    },
    {
      icon: "https://png.pngtree.com/png-clipart/20230504/original/pngtree-feedback-line-icon-png-image_9137822.png",
      content: "Tidak Puas Dengan Konsultan Pajak Sebelumnya",
    },

    {
      icon: "https://cdn-icons-png.flaticon.com/512/899/899054.png",
      content: "Tidak Punya Waktu untuk Melakukan Pelaporan Pajak",
    },
    {
      icon: "https://uxwing.com/wp-content/themes/uxwing/download/business-professional-services/tax-law-icon.png",
      content: "Bingung dan Tidak Update dengan Aturan Perpajakan",
    },
  ];

  return (
    <>
      <div className="jumbotron" id="home">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 d-flex align-items-center"
              style={{ height: "650px" }}
            >
              <div className="row">
                <div className="col-12">
                  <h1>Opsi Terbaik</h1>
                  <h1>Mengelola Perpajakan</h1>
                  <p className="text-jumbotron fs-5">
                    Opsi Consulting adalah konsultan pajak profesional yang
                    dirancang untuk membantu Anda mengelola kewajiban perpajakan
                    secara efisien dan tepat waktu. Dengan pengalaman luas dan
                    pemahaman mendalam tentang peraturan perpajakan, Opsi
                    Consulting adalah mitra terpercaya untuk melindungi bisnis
                    Anda dari risiko pajak sekaligus memastikan Anda tetap fokus
                    pada pertumbuhan usaha.{" "}
                  </p>
                  <Button
                    type="primary"
                    className="bg-warning text-dark p-4"
                    size="large"
                  >
                    Konsultasi <span className="fw-bold">GRATIS</span> Sekarang
                  </Button>
                </div>
              </div>
            </div>
            <div className="col-lg-6 text-center">
              <img
                src="https://ideatax.my.canva.site/opsi-consulting/media/b016e5c353bfe1284d4593c47750765e.png"
                alt=""
                height={"800px"}
                className="imageFlip"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="tagline mt-5">
        <div className="container">
          <h1 className="text-center fs-1">
            Apakah Anda Mengalami Masalah Perpajakan Ini?
          </h1>
          <div className="row mt-5">
            {taglineSolution.map((item, _index) => (
              <div className="col-lg-4 col-md-6 mb-4">
                <Card className="card-tagline">
                  <div className="row">
                    <div className="col-3">
                      <img src={item.icon} alt="calculator" height={60} />
                    </div>
                    <div className="col-9">
                      <p className="fs-5 mb-0">{item.content}</p>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
            <p className="text-center fs-4 mb-5 mt-4">
              Denda dan sanksi dapat timbul jika dibiarkan tanpa penanganan yang
              tepat
            </p>
            <p className="text-center fs-4">
              <span className="fw-bold">Opsi Consulting</span> menawarkan solusi
              strategis untuk mengatasi permasalahan perpajakan pribadi maupun
              usaha Anda dengan profesionalisme dan keahlian.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
