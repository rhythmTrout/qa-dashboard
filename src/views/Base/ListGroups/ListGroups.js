import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Row, TabContent, TabPane } from 'reactstrap';

class ListGroups extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: 1
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    var {name} = this.props;
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <strong>{name}</strong>
              </CardHeader>
              <CardBody>
                <ListGroup>
                <ListGroupItem tag="button" action>Cras justo odio <Badge className="float-right" color="success" pill>Success</Badge></ListGroupItem>
                <ListGroupItem tag="button" action>Dapibus ac facilisis in<Badge className="float-right" color="success" pill>Success</Badge></ListGroupItem>
                <ListGroupItem tag="button" action>Morbi leo risus<Badge className="float-right" color="success" pill>Success</Badge></ListGroupItem>
                <ListGroupItem tag="button" action>Porta ac consectetur ac<Badge className="float-right" color="success" pill>Success</Badge></ListGroupItem>
                <ListGroupItem tag="button" action>Vestibulum at eros<Badge className="float-right" color="success" pill>Success</Badge></ListGroupItem>
                </ListGroup>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ListGroups;
