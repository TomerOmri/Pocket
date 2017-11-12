import React from 'react';
import { Card, CardImg, CardText, CardBlock, CardTitle, CardSubtitle } from 'reactstrap';
import TileButton from './TileButton';

class Tile extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            timer: 0
        }

        this.timerTick = this.timerTick.bind(this);
    }

    getInitialState(){
        return({
            timer: 0
        });
}

//     componentDidMount(){
//         setInterval(this.timerTick, 10000)
// }



    timerTick(){
        this.setState({
            timer: this.state.timer + 1
        });

}

    render(){
        return(
            <div>
            <Card>
              <CardBlock className="tileComponent">
                <CardTitle>{this.props.tileTitle}</CardTitle>
                <CardSubtitle>{this.props.tileSubtitle}</CardSubtitle>
                  <TileButton btnText="Go" btnClass="btn btn-info btn-sm"
                              onBtnClick={ () => {window.open(this.props.tileUrl) }} />
                  {/*<div> {this.state.timer} </div>*/}
              </CardBlock>
            </Card>
          </div>
        );
    }
}

export default Tile;