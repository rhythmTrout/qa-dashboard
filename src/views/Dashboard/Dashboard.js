import React, { Component } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Badge,
  Button,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  Progress,
  Row,
  Table,
} from 'reactstrap';
import Widget01 from '../../views/Widgets/Widget01'
import Widget03 from '../../views/Widgets/Widget03'
import ListGroups from '../../views/Base/ListGroups/ListGroups'
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'
import ScrollIntoView from 'react-scroll-into-view'
import MockData from '../../data/mockData.json'


const brandPrimary = getStyle('--primary')
const brandSuccess = getStyle('--success')
const brandInfo = getStyle('--info')
const brandWarning = getStyle('--warning')
const brandDanger = getStyle('--danger')


class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.handleLogin = this.handleLogin.bind(this);
    this.handleOverview = this.handleOverview.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
      login: false,
      overview: false
    };
  }

  handleLogin() {
    this.setState({
      login: true,
      overview: false
    });
  }

  handleOverview() {
    this.setState({
      overview: true,
      login: false
    });
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }

  openNewTab() {
    window.open("/title", "_blank")
  }

  render() {
    const loadLogin = this.state.login;
    const loadOverview = this.state.overview;

    return (
      <div className="animated fadeIn">
      <Row>
        <Widget01 tag="button" color="success" value = "30" header="3/10" mainText="Login" smallText="Testing in progress..." onClick={this.handleLogin} action/>
        <Widget01 tag="button" color="success" value = "30" header="3/10" mainText="Overview" smallText="Testing in progress..." onClick={this.handleOverview} action/> 
      </Row>


          {MockData.map((mockDetail, index)=>{
            if (this.state.login) {
              if (mockDetail.title == "Login") {
                return <ListGroups name={mockDetail.title} />
              }
            }
            if (this.state.overview) {
              if (mockDetail.title == "Overview") {
                return <ListGroups name={mockDetail.title} />
              }
            }
          })}



      </div>
    );
  }
}

export default Dashboard;
