import { Steps } from "antd";
import "./index.css";
const Prosedur = () => {
  const items = [
    {
      key: "1",
      title:
        "Hubungi Kami via Whatsapp dan konsultasikan kebutuhan Anda Secara Gratis!",
    },
    { key: "2", title: "Kesepakatan layanan yang akan digunakan" },
    {
      key: "3",
      title: "Pembuatan Whatsapp Group",
    },
    {
      key: "4",
      title: "Permintaan dan Pengiriman Data",
    },
    {
      key: "5",
      title: "Proses Atau Pengolahan Data",
    },
    {
      key: "6",
      title: "Konfirmasi dan Penjelasan Data",
    },
    {
      key: "7",
      title: "Finalisasi & Report",
    },
  ];
  return (
    <>
      <div className="section" id="prosedur"></div>
      <div className="prosedur">
        <div className="container">
          <div className="d-flex mb-5">
            <img src="logo-icon.png" alt="icon" height={50} className="me-3" />
            <h1 className="fw-bolder d-flex align-items-center m-0">
              Prosedur
            </h1>
          </div>
          <p className="text-center fs-4 mb-5">
            Belum familiar dengan kemudahan proses layanan kami dari awal hingga
            akhir? <br />
            Berikut gambaran lengkapnya untuk Anda!
          </p>
          <Steps
            className="desktop"
            current={0}
            labelPlacement="vertical"
            items={items}
            size="default"
          />
          <div className="mobile">
            <div className="row">
              {items.map((item, _index) =>
                item.key === "1" ? (
                  <div className="col-md-12 mb-4">
                    <div className="card">
                      <div className="card-body text-center">
                        <h2 className="number mt-2">{item.key}</h2>
                        <p className="fs-4 mt-3">{item.title}</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="col-md-4 col-sm-6 col-12 mb-4">
                    <div className="card">
                      <div className="card-body text-center">
                        <h2 className="number mt-2">{item.key}</h2>
                        <p className="fs-4 mt-3">{item.title}</p>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Prosedur;
