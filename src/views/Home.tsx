
import { Breadcrumb, Layout, Button, message, Modal} from 'antd';
import React, { useState} from 'react';
import { Outlet,useNavigate } from "react-router-dom"
import MainMenu from "@/components/MainMenu"
const { Header, Content, Footer, Sider } = Layout;
const View: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [collapsed, setCollapsed] = useState(false);

  const naviToLog = useNavigate()
  const LogOut = () => {
    localStorage.setItem("SFL-management-token","")
    naviToLog("/login")
    message.warn("已登出")
  
  };
  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* 左边侧边栏 */}
      <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
        <div className="logo"></div>
        <MainMenu></MainMenu>
        <Button style={{ bottom:'52px',position:'absolute' }} type="primary" danger block onClick={LogOut}>退出登录</Button>
      </Sider>
      {/* 右边内容 */}
      <Layout className="site-layout">
        {/* 右边头部 */}
        <Header className="site-layout-background" style={{ paddingLeft: '16px' }} >
          {/* 面包屑 */}
          <Breadcrumb style={{ lineHeight:'64px' }}>
              <Breadcrumb.Item>园区大数据看板</Breadcrumb.Item>
              <Breadcrumb.Item>汇总看板</Breadcrumb.Item>
            </Breadcrumb>
        </Header>
        {/* 右边内容部分-白色底盒子 */}
        <Content style={{ margin: '16px 16px 0' }} className="site-layout-background">
            {/* 窗口部分 */}
            <Outlet />
        </Content>
        {/* 右边底部 */}
        <Footer style={{ textAlign: 'center', padding:0, lineHeight:"48px" }}>SFL&nbsp;·&nbsp;©2022 Created by Odysseus200</Footer>
      </Layout>
    </Layout>
  );
};

export default View;

function token(arg0: string, token: any) {
  throw new Error('Function not implemented.');
}
