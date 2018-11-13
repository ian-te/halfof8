import React from 'react';
import styled from 'styled-components'


const Overlay = styled.div`
    background-color: rgba(0,0,0, 0.4);
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
`

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            popupVisible: true
        }
    }
    componentDidMount() {
        const Player = require('@vimeo/player')
        const iframes = document.querySelectorAll('iframe');
        this.players = [];
        iframes.forEach(iframe => this.players.push(new Player(iframe)))
        this.players.forEach(player => player.pause())
    }
    play = () => {
        this.players.forEach(player => player.play())
        this.setState({
            popupVisible: false
        })
    }
    render() {
        if (!this.state.popupVisible) return null;
        return (
            <Overlay>
                <button onClick={this.play}>Play</button>
            </Overlay>
        )
    }
}