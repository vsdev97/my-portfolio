import React, { useRef, useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  HomeOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps, MenuTheme, TourProps } from "antd";
import {
  Carousel,
  Flex,
  Menu,
  Switch,
  Layout,
  theme,
  Typography,
  Image,
  Button,
  Tour,
  Card,
  Rate,
} from "antd";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const { Title } = Typography;

const items: MenuItem[] = [
  getItem("Home", "1", <HomeOutlined />),
  getItem("About Us", "2", <DesktopOutlined />),
  getItem("User", "sub1", <UserOutlined />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
  getItem("Team", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("Files", "9", <FileOutlined />),
];

export const LayoutComponent: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [menuTheme, setMenuTheme] = useState<MenuTheme>("dark");

  const titleColor = menuTheme === "dark" ? "whitesmoke" : "#000";

  const changeTheme = (value: boolean) => {
    setMenuTheme(value ? "dark" : "light");
  };

  const contentStyle: React.CSSProperties = {
    height: "60px",
    color: titleColor,
    textAlign: "start",
    background: menuTheme === "dark" ? "#033e5d" : "#ffff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
  };
  const ref = useRef(null);

  const [open, setOpen] = useState<boolean>(false);

  const steps: TourProps["steps"] = [
    {
      title: "Center",
      description: "Displayed in the center of screen.",
      target: null,
    },
    {
      title: "Right",
      description: "On the right of target.",
      placement: "right",
      target: () => ref.current,
    },
    {
      title: "Top",
      description: "On the top of target.",
      placement: "top",
      target: () => ref.current,
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        theme={menuTheme}
      >
        <Flex
          justify="flex-start"
          align="center"
          style={{
            padding: 10,
            background: menuTheme === "dark" ? undefined : colorBgContainer,
          }}
        >
          <Image
            alt="logo"
            src="https://devxinitiative.org/images/devX-logo.svg"
            height={70}
            width={150}
          />
        </Flex>
        <Menu
          theme={menuTheme}
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout style={{ margin: 0 }}>
        <Header
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: menuTheme === "dark" ? undefined : colorBgContainer,
          }}
        >
          <Title
            level={4}
            style={{ fontFamily: "serif", color: titleColor }}
          ></Title>
          <Switch
            checked={menuTheme === "dark"}
            onChange={changeTheme}
            checkedChildren="Dark"
            unCheckedChildren="Light"
          />
        </Header>
        <Content
          style={{
            background: menuTheme === "dark" ? "#131f3b" : "#f8f9fa",
          }}
        >
          <Carousel
            arrows
            dots
            dotPosition="bottom"
            autoplay
            style={{
              margin: "15px",
              background: menuTheme === "dark" ? "#033e5d" : "#ffff",
              borderRadius: "10px",
            }}
          >
            <div>
              <Flex
                justify="space-between"
                align="center"
                style={{ padding: "0 20px" }}
              >
                <h2 style={{ ...contentStyle, flex: 1 }}>
                  Good Evening, Venu Madhav Sheshabhattar !!!
                </h2>
                <Image
                  src="https://png.pngtree.com/png-vector/20240309/ourmid/pngtree-developers-are-coding-programs-on-computers-programmers-are-analyzing-data-png-image_11902650.png"
                  width={200}
                  height={200}
                />
              </Flex>
            </div>
            <div>
              <Flex
                justify="space-between"
                align="center"
                style={{ padding: "0 20px" }}
              >
                <h2 style={{ ...contentStyle, flex: 1 }}>
                  Good Evening, Venu Madhav Sheshabhattar !!!
                </h2>
                <Image
                  src="https://png.pngtree.com/png-vector/20240309/ourmid/pngtree-developers-are-coding-programs-on-computers-programmers-are-analyzing-data-png-image_11902650.png"
                  width={200}
                  height={200}
                />
              </Flex>
            </div>
            <div>
              <Flex
                justify="space-between"
                align="center"
                style={{ padding: "0 20px" }}
              >
                <h2 style={{ ...contentStyle, flex: 1 }}>
                  Good Evening, Venu Madhav Sheshabhattar !!!
                </h2>
                <Image
                  src="https://png.pngtree.com/png-vector/20240309/ourmid/pngtree-developers-are-coding-programs-on-computers-programmers-are-analyzing-data-png-image_11902650.png"
                  width={200}
                  height={200}
                />
              </Flex>
            </div>
          </Carousel>
          <div style={{ margin: "15px", justifyContent: "center" }}>
            <Button type="primary" onClick={() => setOpen(true)} ref={ref}>
              Begin Tour
            </Button>
            <Tour open={open} onClose={() => setOpen(false)} steps={steps} />
          </div>
          <div style={{ margin: "15px", textAlign: "center" }}>
            <Title
              style={{
                fontFamily: "Palatino, URW Palladio L, serif",
                color: "rgb(244 205 42)",
                fontWeight: "300",
                fontSize: "28px",
              }}
            >
              My Projects
            </Title>
            <Flex gap={"large"} justify="center" style={{ paddingTop: "10px" }}>
              <Card
                style={{
                  width: 150,
                  height: 150,
                  background: menuTheme === "dark" ? "rgb(10 20 41)" : "#ffff",
                  borderWidth: 1,
                  borderColor: "rgb(51 65 85)",
                }}
              >
                <Image
                  src="https://dsbnn82jadubl.cloudfront.net/images/platforms/optix/OptiX_logo.svg"
                  width={100}
                  height={100}
                ></Image>
              </Card>
              <Card
                style={{
                  width: 150,
                  height: 150,
                  background: menuTheme === "dark" ? "rgb(10 20 41)" : "#ffff",
                  borderWidth: 1,
                  borderColor: "rgb(51 65 85)",
                }}
              >
                <Image
                  src="https://dsbnn82jadubl.cloudfront.net/images/platforms/cim/updated_vantagex_logo.svg"
                  width={100}
                  height={100}
                ></Image>
              </Card>
              <Card
                style={{
                  width: 150,
                  height: 150,
                  background: menuTheme === "dark" ? "rgb(10 20 41)" : "#ffff",
                  borderWidth: 1,
                  borderColor: "rgb(51 65 85)",
                }}
              >
                <Image
                  src="https://dsbnn82jadubl.cloudfront.net/images/platforms/optix/customer-logo/pepsiCo.svg"
                  width={100}
                  height={100}
                ></Image>
              </Card>
            </Flex>
            <Flex gap="middle" vertical style={{ paddingTop: "20px" }}>
              <Title
                style={{
                  fontSize: "24px",
                  color: "rgb(155 160 172)",
                  fontFamily: "Palatino, URW Palladio L, serif",
                  fontWeight: "300",
                }}
              >
                Rate My Work
              </Title>
              <Rate />
            </Flex>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
            background: menuTheme === "dark" ? "#002140" : colorBgContainer,
            height: "40px",
            color: titleColor,
            fontFamily: "serif",
          }}
        >
          DevX ©{new Date().getFullYear()} Created by @VsDev
        </Footer>
      </Layout>
    </Layout>
  );
};
