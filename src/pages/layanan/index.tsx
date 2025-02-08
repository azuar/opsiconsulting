import { Button, Card } from "antd";
import "./index.css";
const Layanan = () => {
  const layanan: any[] = [
    {
      title: "Jasa Pelaporan SPT Masa Badan Usaha / Pribadi (Bulanan)",
      price: "Rp. 2.000.000,-",
      items: [
        "Perhitungan & Pelaporan PPh 21/26",
        "Perhitungan & Pelaporan PPh 23",
        "Perhitungan & Pelaporan PPh UMKM",
        "Perhitungan & Pelaporan PPh 4 Ayart (2)",
        "Konsultasi Pajak",
      ],
    },
    {
      title: "Jasa Pelaporan SPT Masa Badan Usaha / Pribadi (Tahunan)",
      price: "Rp. 5.000.000,-",
      items: [
        "Perhitungan & Pelaporan PPh 21/26",
        "Perhitungan & Pelaporan PPh 23",
        "Perhitungan & Pelaporan PPh UMKM",
        "Perhitungan & Pelaporan PPh 4 Ayart (2)",
        "Konsultasi Pajak",
      ],
    },
    {
      title: "Jasa Akuntansi / Laporan Keuangan Perusahaan",
      price: "Rp. 1.500.000,-",
      items: [
        "Perhitungan & Pelaporan PPh 21/26",
        "Perhitungan & Pelaporan PPh 23",
        "Perhitungan & Pelaporan PPh UMKM",
        "Perhitungan & Pelaporan PPh 4 Ayart (2)",
        "Konsultasi Pajak",
      ],
    },
  ];
  return (
    <>
      <div className="section" id="layanan"></div>
      <div className="layanan">
        <div className="container">
          <div className="d-flex">
            <img src="logo-icon.png" alt="icon" height={50} className="me-3" />
            <h1 className="fw-bold d-flex align-items-center m-0">
              Layanan Kami
            </h1>
          </div>
          <h2 className="text-center my-4">Pilih layanan yang Anda butuhkan</h2>
          <div className="row mt-5">
            {layanan.map((item, _index) => (
              <div className="col-lg-4 mb-4">
                <Card className="card-layanan">
                  <h5 className="text-center ">{item.title}</h5>
                  <hr />
                  <h5 className="text-center">Start From</h5>
                  <h2 className="text-center mb-4">{item.price}</h2>
                  {item?.items?.map((content: any, _index: any) => (
                    <div className="row">
                      <div className="col-2 text-end">
                        <img src="check-icon.png" alt="check" height={40} />
                      </div>
                      <div className="col-10 d-flex align-items-center">
                        <p className="mb-0 fs-5">{content}</p>
                      </div>
                    </div>
                  ))}
                  <div className="text-center">
                    <Button
                      type="primary"
                      size="large"
                      className="my-4"
                      style={{ backgroundColor: "#0071BC", color: "white" }}
                    >
                      Pesan Jasa
                    </Button>
                  </div>
                </Card>
              </div>
            ))}
          </div>
          <div className="text-center">
            <p className="fs-4 mt-4">
              Semua layanan Kami dapat disesuaikan dengan kondisi dan kebutuhan
              Perusahaan Anda!
            </p>
            <Button
              type="primary"
              className="bg-warning text-dark mt-3 fw-bold p-4"
              size="large"
            >
              Pesan Jasa Custom
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layanan;
