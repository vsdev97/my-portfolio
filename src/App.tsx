import React, { useRef, useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps, MenuTheme, TourProps } from "antd";
import {
  Carousel,
  Flex,
  Layout,
  Menu,
  Switch,
  theme,
  Typography,
  Image,
  Button,
  Tour,
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
  getItem("Option 1", "1", <PieChartOutlined />),
  getItem("Option 2", "2", <DesktopOutlined />),
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

const App: React.FC = () => {
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
    background: menuTheme === "dark" ? "#12213d" : "#ffff",
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
            src="https://raw.githubusercontent.com/vsdev97/my-portfolio/refs/heads/master/devx.png?token=GHSAT0AAAAAACY7BBB4EL6QOIZTRRN42QT6ZYWNELQ"
            height={"50%"}
            width={"50%"}
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
          <Title level={4} style={{ fontFamily: "serif", color: titleColor }}>
            Welcome to DevX
          </Title>
          <Switch
            checked={menuTheme === "dark"}
            onChange={changeTheme}
            checkedChildren="Dark"
            unCheckedChildren="Light"
          />
        </Header>
        <Content
          style={{
            background: menuTheme === "dark" ? "#203c64" : "#f8f9fa",
          }}
        >
          <Carousel
            arrows
            dots
            dotPosition="bottom"
            autoplay
            style={{
              margin: "15px",
              background: menuTheme === "dark" ? "#12213d" : "#ffff",
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
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
