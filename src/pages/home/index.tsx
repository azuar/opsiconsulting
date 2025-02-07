import { Button, Card, DatePicker, Input, Select, Steps } from "antd";
import "./index.css";
import TextArea from "antd/es/input/TextArea";
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

  const contacts: any[] = [
    {
      title: "Kantor Opsi Consulting",
      description:
        "Menara Kadin Lantai 26 Jl. HR. Rasuna Said Blok X-5 Kav.2-3, Setiabudi Jakarta Selatan",
      icon: "location.png",
    },
    {
      title: "Telepon / Whatsapp",
      description: "08xx - xxxx - xxxx",
      icon: "phone.png",
    },
    {
      title: "Email",
      description: "opsiconsulting@gmail.com",
      icon: "email.png",
    },
    {
      title: "Instagram",
      description: "@opsiconsulting",
      icon: "instagram.png",
    },
    {
      title: "LinkedIn",
      description: "opsiconsulting",
      icon: "linkedin.png",
    },
  ];

  const whyUs = [
    "Konsultan Pajak Berserfikat",
    "Kooperatif dan Fast Respond",
    "Rahasia Terjamin",
    "Layanan dapat disesuaikan denggan kebutuhan Anda",
  ];

  const items = [
    {
      title:
        "Hubungi Kami via Whatsapp dan konsultasikan kebutuhan Anda Secara Gratis!",
    },
    {
      title: "Kesepakatan layanan yang akan digunakan",
    },
    {
      title: "Pembuatan Whatsapp Group",
    },
    {
      title: "Permintaan dan Pengiriman Data",
    },
    {
      title: "Proses Atau Pengolahan Data",
    },
    {
      title: "Konfirmasi dan Penjelasan Data",
    },
    {
      title: "Finalisasi & Report",
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
              <div className="col-lg-4 mb-4">
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
      <div className="tentang mt-5" id="tentang">
        <div className="container">
          <div className="d-flex">
            <img src="logo-icon.png" alt="icon" height={50} className="me-3" />
            <h1 className="fw-bolder mb-4">Tentang Kami</h1>
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
      <div className="layanan mt-5" id="layanan">
        <div className="container">
          <div className="d-flex">
            <img src="logo-icon.png" alt="icon" height={50} className="me-3" />
            <h1 className="fw-bold mb-4">Layanan Kami</h1>
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
      <div className="prosedur mt-5" id="prosedur">
        <div className="container">
          <div className="d-flex">
            <img src="logo-icon.png" alt="icon" height={50} className="me-3" />
            <h1 className="fw-bolder mb-4">Prosedur</h1>
          </div>
          <p className="text-center fs-4 mb-5">
            Belum familiar dengan kemudahan proses layanan kami dari awal hingga
            akhir? <br />
            Berikut gambaran lengkapnya untuk Anda!
          </p>
          <Steps
            current={0}
            labelPlacement="vertical"
            items={items}
            size="default"
          />
        </div>
      </div>
      <div className="contact mt-5" id="kontak">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="d-flex">
                <img
                  src="logo-icon.png"
                  alt="icon"
                  height={50}
                  className="me-3"
                />
                <h1 className="fw-bolder mb-4">Kontak</h1>
              </div>
              <div className="contact-content">
                <p className="mt-4 fs-5">Hubungi kami melalui:</p>
                <hr />
                {contacts.map((item, _index) => (
                  <div className="row mb-3">
                    <div className="col-2 text-end">
                      <img src={item.icon} alt="check" height={50} />
                    </div>
                    <div className="col-10">
                      <h5 className="mb-0">{item.title}</h5>
                      <p className="mb-0 fs-6">{item.description}</p>
                    </div>
                  </div>
                ))}
                <hr />
              </div>
            </div>
            <div className="col-lg-6">
              <Card
                style={{
                  backgroundColor: "#0071BC",
                  color: "white",
                }}
              >
                <h4 className="text-center">Jadwalkan Konsultasi</h4>
                <div className="row mt-5">
                  <div className="col-lg-6 mb-4">
                    <Input placeholder="Nama" size="large" />
                  </div>
                  <div className="col-lg-6 mb-4">
                    <Input placeholder="Telp." size="large" />
                  </div>
                  <div className="col-lg-6 mb-4">
                    <Input placeholder="Perusahaan" size="large" />
                  </div>
                  <div className="col-lg-6 mb-4">
                    <Input placeholder="Email" size="large" />
                  </div>
                  <div className="col-lg-12 mb-4">
                    <Select
                      style={{ width: "100%" }}
                      size="large"
                      placeholder="Layanan"
                      options={[
                        { value: "jack", label: "Jack" },
                        { value: "lucy", label: "Lucy" },
                        { value: "Yiminghe", label: "yiminghe" },
                      ]}
                    />
                  </div>
                  <div className="col-lg-12 mb-4">
                    <DatePicker
                      placeholder="Jadwalkan Meeting"
                      size="large"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div className="col-lg-12 mb-4">
                    <TextArea
                      placeholder="Jelaskan Permasalahan Anda"
                      size="large"
                      rows={6}
                    />
                  </div>
                </div>
                <Button
                  type="primary"
                  size="large"
                  className="px-5 py-3 fw-bold mb-2"
                  style={{ backgroundColor: "#F7C701", color: "black" }}
                >
                  SUBMIT
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
