import React, { useState } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  LoadingOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Avatar, Breadcrumb, Button, Input, Layout, Menu, theme } from 'antd';

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
  getItem('Tổng Quan', '1', <PieChartOutlined />),
  getItem('Quan lí tiền lương', '2', <DesktopOutlined />),
  getItem('Quản lí nhân sự', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Quản lí đào tạo', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Quản lí tài liệu', '9', <FileOutlined />),
];

const BTTH: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
            <div className="flex items-center justify-between px-6">
            <Input style={
                {
                    width:"500px"
                }
            }></Input>
            <div>
                <Avatar></Avatar>
            </div>
        </div>
        </Header>
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }} items={[{ title: 'Quan li nhan su' }, { title: 'Quan li nhan vien' } , {title:'Danh sach nhan vien'}]} />
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
            
          >
           <div className="flex items-center justify-between">
            <h3 className='text-[24px] font-semibold'>Nhan vien</h3>
            <Button type='primary'>Them moi nhan vien</Button>
           </div>
           <div>
                <Input.Search placeholder='tim kiem nhan vien theo ten'></Input.Search>
                <LoadingOutlined className='text-[24px]'/>
           </div>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default BTTH;