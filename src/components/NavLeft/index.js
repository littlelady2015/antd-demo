import React from 'react';
import { Menu, Icon } from 'antd';
import MenuConfig from '../../config/menuConfig';
import './index.less';
const { SubMenu } = Menu;

export default class NavLeft extends React.Component {
  componentWillMount() {
    const MenuTreeNode = this.renderMenu(MenuConfig);
    this.setState({
      MenuTreeNode: MenuTreeNode,
    })
  }
  // 渲染树
  renderMenu = (data) => {
   return data.map(item => {
    if(item.children) 
     {
       this.renderMenu(item.children);
       return <SubMenu title={item.title} >
                {this.renderMenu(item.children)}
              </SubMenu>
     }
     return <Menu.Item title={item.title} key={item.key}>{item.title}</Menu.Item>
   }) 
  }
  render() {
    return (
      <div>
        <div className="logo-wrapper">
          <img className="logo" src="https://b-gold-cdn.xitu.io/v3/static/img/flutter-xiaoce.f59b99e.png" />
          <span className="logo-title">Antd MS</span>
        </div>
        <Menu mode="vertical" mode="inline">
          {this.state.MenuTreeNode}
        </Menu>
      </div>
    );
  }
}
