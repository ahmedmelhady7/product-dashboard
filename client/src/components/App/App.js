import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './App.css';
import { Layout, Menu, Icon, Card, Row, Col, Skeleton } from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const products = [
  {
    "name": "Speck Products Presidio Metallic Case for iPhone 8 (Also Fits 7/6S/6), Rose Gold Metallic/Dahlia Peach",
    "image": "https://images-na.ssl-images-amazon.com/images/I/61niBwB2yYL._SL1500_.jpg",
    "price": 44.95,
    "category": {
      "id": 1,
      "name": "Phone Accessories"
    },
    "brand": "Speck"
  },
  {
    "name": "iPhone 8 Plus Case, SUPCASE Unicorn Beetle Style Premium Hybrid Protective Clear Bumper Case [Scratch Resistant] for Apple iPhone 7 Plus 2016 / iPhone 8 Plus 2017 Releas",
    "image": "https://images-na.ssl-images-amazon.com/images/I/41%2BMZ4466KL.jpg",
    "price": 11.96,
    "category": {
      "id": 1,
      "name": "Phone Accessories"
    },
    "brand": "SUPCASE"
  },
  {
    "name": "OtterBox DEFENDER SERIES Case for iPhone 8 Plus & iPhone 7 Plus (ONLY) - Frustration Free Packaging - BESPOKE WAY (BLAZER BLUE/STORMY SEAS BLUE)",
    "image": "https://images-na.ssl-images-amazon.com/images/I/9164-eI%2B%2BlL._SX679_.jpg",
    "price": 33.75,
    "category": {
      "id": 1,
      "name": "Phone Accessories"
    },
    "brand": "OtterBox"
  },
  {
    "name": "Speck Products Presidio Grip Case for iPhone 8 Plus (Also fits 7 Plus and 6S/6 Plus), Black/Black",
    "image": "https://images-na.ssl-images-amazon.com/images/I/71hKR23wmIL._SX679_.jpg",
    "price": 21.26,
    "category": {
      "id": 1,
      "name": "Phone Accessories"
    },
    "brand": "Speck"
  },
  {
    "name": "Samsung Galaxy J7 Pro (32GB) J730G/DS - 5.5 inch Full HD Dual SIM Unlocked Phone with Finger Print Sensor (US & Latin 4G LTE) (Pink)",
    "image": "https://images-na.ssl-images-amazon.com/images/I/71pIqBH5qtL._SY741_.jpg",
    "price": 232,
    "category": {
      "id": 2,
      "name": "Mobile Phones"
    },
    "brand": "Samsung"
  },
  {
    "name": "Samsung Galaxy S9 Unlocked Smartphone - Midnight Black - US Warranty",
    "image": "https://images-na.ssl-images-amazon.com/images/I/61562OkQd3L._SX679_.jpg",
    "price": 719,
    "category": {
      "id": 2,
      "name": "Mobile Phones"
    },
    "brand": "Samsung"
  },
  {
    "name": "Apple iPhone 6 a1549 16GB Space Gray Unlocked (Certified Refurbished)",
    "image": "https://images-na.ssl-images-amazon.com/images/I/51bvItLxhqL.jpg",
    "price": 173.97,
    "category": {
      "id": 2,
      "name": "Mobile Phones"
    },
    "brand": "Apple"
  },
  {
    "name": "ASUS VivoBook S Thin & Light Laptop, 14 inch FHD, Intel Core i7-8550U up to 4.00 GHz, GeForce MX150, 8GB RAM, 256GB SSD, NanoEdge Bezel, Backlit Keyboard, FP Sensor - S410UN-NS74",
    "image": "https://images-na.ssl-images-amazon.com/images/I/81CXyTkBjWL._SX679_.jpg",
    "price": 799,
    "category": {
      "id": 3,
      "name": "Laptops"
    },
    "brand": "Asus"
  },
  {
    "name": "HIDevolution Aorus X9 DT 17.3” FHD 144Hz G-Sync Gaming Laptop | 2.9 GHz i9-8950H, GTX 1080, 64GB DDR4/2666MHz RAM, PCIe 2TB SSD + 4TB SSD | Authorized Performance Upgrades & Warranty",
    "image": "https://images-na.ssl-images-amazon.com/images/I/61t6xBAVFrL._SX679_.jpg",
    "price": 7239,
    "category": {
      "id": 3,
      "name": "Laptops"
    },
    "brand": "HIDevolution"
  },
  {
    "name": "MSI GS73VR Stealth Pro-225 17.3 inch 120Hz 5ms Display Thin and Light Gaming Laptop Core i7-7700HQ GTX 1060 16GB 256GB + 2TB VR Ready",
    "image": "https://images-na.ssl-images-amazon.com/images/I/81JcBcbQOdL._SX679_.jpg",
    "price": 1732.99,
    "category": {
      "id": 3,
      "name": "Laptops"
    },
    "brand": "MSI"
  },
  {
    "name": "Alienware AW17R4-7005SLV-PUS 17 inch Laptop (7th Generation Intel Core i7, 16GB RAM, 1TB HDD, Silver) with NVIDIA GTX 1060",
    "image": "https://images-na.ssl-images-amazon.com/images/I/71BSO8m6I4L._SX679_.jpg",
    "price": 1378.08,
    "category": {
      "id": 3,
      "name": "Laptops"
    },
    "brand": "Alienware"
  },
  {
    "name": "The Razer Blade 14 inch Thin & Light Gaming Laptop - Full HD, Core i7-7700HQ, 16GB RAM, 512GB SSD, GeForce GTX 1060 - VR Ready",
    "image": "https://images-na.ssl-images-amazon.com/images/I/61Vu7mdGclL._SX679_.jpg",
    "price": 1999.99,
    "category": {
      "id": 3,
      "name": "laptops"
    },
    "brand": "Razer"
  }
];

class App extends Component {
  render() {
    return (
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Layout style={{ margin: '32px 0', padding: '24px 0', background: '#fff' }}>
            <Sider width={200} style={{ background: '#fff' }}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%' }}
              >
                <SubMenu key="sub1" title={<span><Icon type="user" />subnav 1</span>}>
                  <Menu.Item key="1">option1</Menu.Item>
                  <Menu.Item key="2">option2</Menu.Item>
                  <Menu.Item key="3">option3</Menu.Item>
                  <Menu.Item key="4">option4</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="laptop" />subnav 2</span>}>
                  <Menu.Item key="5">option5</Menu.Item>
                  <Menu.Item key="6">option6</Menu.Item>
                  <Menu.Item key="7">option7</Menu.Item>
                  <Menu.Item key="8">option8</Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" title={<span><Icon type="notification" />subnav 3</span>}>
                  <Menu.Item key="9">option9</Menu.Item>
                  <Menu.Item key="10">option10</Menu.Item>
                  <Menu.Item key="11">option11</Menu.Item>
                  <Menu.Item key="12">option12</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>
              <Row gutter={8}>
                {products.map(product => (
                  <Col span={8}>
                    <Card
                      style={{ margin: '6px 0' }}
                      hoverable
                      cover={<img alt="example" src={product.image} />}
                    >
                      <Skeleton loading={false} avatar active>
                        <Card.Meta
                          title={product.name}
                          description={product.brand}
                        />
                      </Skeleton>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    );
  }
}

export default App;
