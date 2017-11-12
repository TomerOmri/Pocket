import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Tile from './Tile.js';


class Pocket extends React.Component {

    render(){
        const websLinks = this.props.webSites.map((website) => {
            return (
                <Col xs="6" sm="4" className="tileWrapper">
                    <Tile tileTitle={website.tileTitle}
                            tileSubtitle={website.tileSubtitle}
                            tileUrl={website.tileUrl}/>
                </Col>
            )
        });

        return(

        <Container className="itemContainer">
            <Row>
            {websLinks}
            </Row>
        </Container>
        );
    }
}

export default Pocket;