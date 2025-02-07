import React from "react";
import { Button, Dropdown, Flex, Layout } from "antd";
import {
  MenuUnfoldOutlined,
  PhoneFilled,
  SearchOutlined,
} from "@ant-design/icons";
import { Outlet } from "react-router-dom";
import "./index.css";

const { Header, Content } = Layout;

const MainLayout: React.FC = () => {
  const items = [
    {
      key: "1",
      label: (
        <a style={{ textDecoration: "none" }} href="#home">
          Home
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a style={{ textDecoration: "none" }} href="#tentang">
          Tentang
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a style={{ textDecoration: "none" }} href="#layanan">
          Layanan
        </a>
      ),
    },
    {
      key: "4",
      label: (
        <a style={{ textDecoration: "none" }} href="#prosedur">
          Prosedur
        </a>
      ),
    },
    {
      key: "5",
      label: (
        <a style={{ textDecoration: "none" }} href="#kontak">
          Kontak
        </a>
      ),
    },
  ];
  return (
    <Layout style={{ backgroundColor: "white", marginBottom: "50px" }}>
      <div className="head">
        <div className="container d-flex align-items-center">
          <img src="logo.jpeg" alt="" height="80px" />
          <div className="header-mobile ms-auto">
            <Dropdown menu={{ items }}>
              <Button icon={<MenuUnfoldOutlined />} size="large" />
            </Dropdown>
          </div>
        </div>
      </div>
      <Header
        className="header-menu"
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
          <Flex gap={"20px"}>
            {items.map((item, _index) => (
              <Button
                type="text"
                className="text-white"
                style={{
                  borderRight: "1px solid gray",
                  borderRadius: 0,
                  textDecoration: "none",
                  paddingRight: "40px",
                }}
              >
                {item.label}
              </Button>
            ))}
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
