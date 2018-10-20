import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'underscore';
import 'antd/dist/antd.css';
import './App.css';
import { Layout, Input, Select, Card, Row, Col, Skeleton, Slider } from 'antd';
import { productActions } from '../../redux/ducks/products';
const Search = Input.Search;
const Option = Select.Option;
const { Content, Footer } = Layout;

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      search: '',
      category: 0,
      brand: '',
      price: 0,
    };

    props.fetchAllProducts();
    this.onSearch = this.onSearch.bind(this);
    this.onCategoryChange = this.onCategoryChange.bind(this);
    this.onBrandChange = this.onBrandChange.bind(this);
    this.filterProducts = this.filterProducts.bind(this);
  }

  onSearchChange = (e) => {
    this.setState({
      search: e.target.value
    })
  }

  onCategoryChange = (value) => {
    this.setState({
      category: value === 'all' ? '' : value,
    }, () => {
      this.filterProducts();
    });
  }

  onBrandChange = (value) => {
    this.setState({
      brand: value === 'all' ? '' : value,
    }, () => {
      this.filterProducts();
    })
  }

  onSearch = () => {
    this.filterProducts();
  }

  onSliderAfterChange = (value) => {
    console.log('onAfterChange: ', value);
    this.setState({
      price: {
        min: value[0],
        max: value[1]
      },
    }, () => {
      this.filterProducts();
    });
  }

  filterProducts= () => {
    const { filterProducts } = this.props;
    filterProducts({
      search: this.state.search,
      category: this.state.category,
      brand: this.state.brand,
      price: this.state.price
    });
  }

  render() {
    const { products, loading } = this.props;
    const categories = products.map(product => product.category).filter((obj, pos, arr) => {
      return arr.map(mapObj => mapObj.id).indexOf(obj.id) === pos;
    });
    const brands = _.uniq(products.map(product => product.brand));
    return (
      <Layout>
        <Content style={{ padding: '0 50px' }}>
          <Layout style={{ margin: '32px 0', padding: '24px 0', background: '#fff' }}>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>
              <Row gutter={4}>
                <Col style={{padding: '20px'}} sm={12} lg={4}>
                  <Search
                    placeholder="input search text"
                    onChange={this.onSearchChange}
                    onSearch={this.onSearch}
                    value={this.state.search}
                  />
                </Col>
                <Col style={{padding: '20px'}} sm={12} lg={6}>
                  <Select defaultValue="all" onChange={this.onCategoryChange}>
                    <Option value="all">All Categories</Option>
                    {categories.map(category => (
                      <Option key={category.id} value={category.id}>{category.name}</Option>
                    ))}
                  </Select>
                </Col>
                <Col style={{padding: '20px'}} sm={12} lg={6}>
                  <Select defaultValue="all" onChange={this.onBrandChange}>
                    <Option value="all">All Brands</Option>
                    {brands.map(brand => (
                      <Option key={brand} value={brand}>{brand}</Option>
                    ))}
                  </Select>
                </Col>
                <Col sm={12} lg={8}>
                  <label>Price Range</label>
                  <Slider range step={5} defaultValue={[0, 7240]} max={7240}
                   onChange={this.onSliderChange} onAfterChange={this.onSliderAfterChange} />
                </Col>
              </Row>
              <Row gutter={8}>
                {products.map(product => (
                  <Col key={product.name} xs={24} sm={12} lg={8}>
                    <Card
                      style={{ margin: '6px 0' }}
                      hoverable
                      cover={
                        <img
                          style={{ display: 'block', width: '100%', height: '250px', objectFit: 'contain' }}
                          alt={product.name}
                          src={product.image}
                        />}
                    >
                      <Skeleton loading={loading} avatar active>
                        <Card.Meta
                          title={product.name}
                          description={`${product.brand} $${product.price}`}
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
const mapStateToProps = state => {
  const { products, loading } = state.products;
  return {
    products,
    loading,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchAllProducts: () => dispatch(productActions.fetchAllProducts()),
  filterProducts: (filters) => dispatch(productActions.filterProducts(filters))
});

const connectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
export default connectedApp;

