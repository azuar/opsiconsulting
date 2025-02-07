import React from "react";
import { Button, Flex, Layout } from "antd";
import { PhoneFilled, SearchOutlined } from "@ant-design/icons";
import { Outlet } from "react-router-dom";

const { Header, Content } = Layout;

const MainLayout: React.FC = () => {
  return (
    <Layout style={{ backgroundColor: "white", marginBottom: "50px" }}>
      <div className="head">
        <div className="container">
          <img src="logo.jpeg" alt="" height="80px" />
        </div>
      </div>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
          background: "#292932",
        }}
      >
        <div className="container">
          <div className="demo-logo" />
          <Flex gap="20px">
            <Button
              type="text"
              className="text-white"
              style={{
                borderRight: "1px solid gray",
                borderRadius: 0,
                textDecoration: "none",
                paddingRight: "40px",
              }}
              href="#home"
            >
              Home
            </Button>
            <Button
              type="text"
              className="text-white"
              style={{
                borderRight: "1px solid gray",
                borderRadius: 0,
                textDecoration: "none",
                paddingRight: "40px",
              }}
              href="#tentang"
            >
              Tentang
            </Button>
            <Button
              type="text"
              className="text-white"
              style={{
                borderRight: "1px solid gray",
                borderRadius: 0,
                textDecoration: "none",
                paddingRight: "40px",
              }}
              href="#layanan"
            >
              Layanan
            </Button>
            <Button
              type="text"
              className="text-white"
              style={{
                borderRight: "1px solid gray",
                borderRadius: 0,
                textDecoration: "none",
                paddingRight: "40px",
              }}
              href="#prosedur"
            >
              Prosedur
            </Button>
            <Button
              type="text"
              className="text-white"
              style={{
                borderRight: "1px solid gray",
                borderRadius: 0,
                textDecoration: "none",
                paddingRight: "40px",
              }}
              href="#kontak"
            >
              Kontak Kami
            </Button>
            <Button
              type="text"
              className="text-white ms-auto fs-2 me-3"
              icon={<PhoneFilled />}
              style={{
                borderRight: "1px solid gray",
                borderLeft: "1px solid gray",
                borderRadius: 0,
                paddingRight: "40px",
                paddingLeft: "40px",
              }}
            />
            <Button
              type="text"
              className="text-white fs-2"
              icon={<SearchOutlined />}
              style={{
                borderRight: "1px solid gray",
                borderRadius: 0,
                paddingRight: "40px",
              }}
            />
          </Flex>
        </div>
      </Header>
      <Content>
        <Outlet />
      </Content>
    </Layout>
  );
};

export default MainLayout;
