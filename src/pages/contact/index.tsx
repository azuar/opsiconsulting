import { Button, Card, DatePicker, Input, Select } from "antd";
import "./index.css";
import TextArea from "antd/es/input/TextArea";
const Contacts = () => {
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
  return (
    <>
      <div className="section" id="kontak"></div>
      <div className="contact">
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
                <h1 className="fw-bolder d-flex align-items-center m-0">
                  Kontak
                </h1>
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

export default Contacts;
