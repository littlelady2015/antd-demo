import React from 'react';
import { Row, Col } from 'antd';
import Header from './components/Header';
import Footer from './components/Footer';
import NavLeft from './components/NavLeft';
import './style/common.less';

export default class Admin extends React.Component {
  render() {
    return (
      <Row className="container">
        <Col className="nav-left" span={3}>
          <NavLeft />
        </Col>
        <Col className="main" span={21}>
          <Header />
          <Row className="content">content</Row>
          <Footer className="footer" />
        </Col>
      </Row>
    );
  }
}
