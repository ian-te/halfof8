import React, {Component} from 'react';
import throttle from 'lodash/throttle'

export const MouseMoveContext = React.createContext('mousemove')

class MouseMoveProvider extends Component {
    constructor(props) {
        super(props)
    }
    state = {
        mouseState: 0
    }
    onMouseMove() {
        this.setState({mouseState: this.state.mouseState++})
    }
    render() {
        return (
            <MouseMoveContext
                value={this.state}
                >
                {this.props.children}
            </MouseMoveContext>
        )
    }
}