import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
  } from '@ant-design/icons';
  import type { MenuProps } from 'antd';
  import { Breadcrumb, Layout, Menu } from 'antd';
  import React, { useState } from 'react';
  import {useNavigate,Outlet} from 'react-router-dom'

  const { Header, Content, Footer, Sider } = Layout;
  
  type MenuItem = Required<MenuProps>['items'][number];

  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
    } as MenuItem;
  }
  const items: MenuItem[] = [
    getItem('栏目1', 'page1 ', <PieChartOutlined />),
    getItem('栏目2', 'page2', <DesktopOutlined />),
    getItem('User', 'sub1', <UserOutlined />, [
      getItem('Tom', '3'),
      getItem('Bill', '4'),
      getItem('Alex', '5'),
    ]),
    getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined />),
  ];
  const View: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const navigateTo =useNavigate();
    //侧边菜单点击事件
    const menuClick =(e:{key:string})=>{
      console.log(e.key)
      // 编程式跳转
      navigateTo(e.key)
    }
    return (
      <Layout style={{ minHeight: '100vh' }}>
        {/* 左侧边栏 */}
        <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} onClick={menuClick} />
        </Sider>
        {/* 右边header */}
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ paddingLeft:'20px' }} >
            {/* 面包屑 */}
          <Breadcrumb style={{lineHeight:'64px', margin: '20px 20px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
           </Header>
        {/* 右边主内容 */}
          <Content style={{ margin: '20px 20px 0'}}  className="site-layout-background">
          {/* 主视窗 用子组件在这里显示 所以用Outlet*/}
          <Outlet/>
          </Content>
          {/* 底部 */}
          <Footer style={{ textAlign: 'center',lineHeight:'50px',padding:'0'}}>SFL(安全/快速/轻量)后台管理系统 ©2022 Created by Odysseus200</Footer>
        </Layout>
      </Layout>
    );
  };
  export default View;