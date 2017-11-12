import React from 'react';
import { Button } from 'reactstrap';


class tileButton extends React.Component {
    render(){
        return <Button
        className={this.props.btnClass}
        onClick={this.props.onBtnClick}
        type="button">
            {this.props.btnText} </Button>
    }
}

export default tileButton;