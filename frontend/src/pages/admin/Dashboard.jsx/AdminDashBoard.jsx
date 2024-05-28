import React, { useState } from "react";
import "../../../index.css";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import User from "../Users/User";
import ProfileVerification from "../ProfileVerification/ProfileVerification";
import FeaturedAccount from "../FeaturedAccount/FeaturedAccount";

const menuItems = [
  {
    key: "1",
    icon: <UserOutlined />,
    label: "User Management",
    href: "/user",
  },
  {
    key: "2",
    icon: <VideoCameraOutlined />,
    label: "Profile Verification",
  },
  // {
  //   key: "3",
  //   icon: <UploadOutlined />,
  //   label: "Featured Account",
  // },
  {
    key: "3",
    icon: <UploadOutlined />,
    label: "Logout",
  },
];


const { Header, Sider, Content } = Layout;
const AdminDashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState("User Management");

  const handleMenuClick = ({ key }) => {
    const selectedItem = menuItems.find((item) => item.key === key);
    setSelectedMenuItem(selectedItem.label);
  };

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Sider
        className="h-screen"
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          onClick={handleMenuClick}
          items={menuItems}
          style={{ marginBottom: '50px', paddingTop:"10px" }} 
        
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <div>
            {selectedMenuItem === "User Management" && <User />}
            {selectedMenuItem === "Profile Verification" && (
              <ProfileVerification />
            )}
             {selectedMenuItem === "Featured Account" && (
              <FeaturedAccount />
            )}
            
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminDashboard;
