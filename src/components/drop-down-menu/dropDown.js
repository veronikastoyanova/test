import React from 'react';
import { Link } from 'gatsby';
import './dropDown.scss';

const productMenu = [
  { name: "Calcatron", where: "/" },
  { name: "Shipper TMS", where: "/" },
  { name: "Market Load Board", where: "/" },
  { name: "Carrier TMS", where: "/" },
  { name: "Driver ePOD", where: "/" }
];

const useCaseMenu = [
  { name: "Brokers & Shippers", where: "/" },
  { name: "Carriers & Drivers", where: "/" }
];

const companyMenu = [
  { name: "About", where: "/" },
  { name: "Prices", where: "/" },
  { name: "Careers", where: "/" },
  { name: "Contact", where: "/" }
];

class Dropdown extends React.Component {
  render() {
    let menu;
    switch (this.props.item) {
      case "productMenu": menu = productMenu; break;
      case "useCaseMenu": menu = useCaseMenu; break;
      case "companyMenu": menu = companyMenu; break;
    }

    return (
      <div className="dropdown">
        <button className="nav-item">{this.props.name}</button>
        <div className="dropdown-content">
          <div className="transp">
            {menu.map((item, i) => {
              return <Link key={i} to={item.where} className="menu-item">{item.name}</Link>
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Dropdown;
