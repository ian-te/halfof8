import React from 'react';
import styled from 'styled-components'


const Loader = styled.div`
    color: #F00;
    background-color: #FFF;
    margin: 50%;
    position: absolute;
`

const PlayButton = styled.button`
    color: #F0A;
    position: absolute;
    margin: 50%;
`


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
            popupVisible: true,
            playersLoaded: false,
            totalPlayersLoaded: 0
        }
    }
    componentDidMount() {
        const Player = require('@vimeo/player')
        const iframes = document.querySelectorAll('iframe');
        this.players = [];
        iframes.forEach(iframe => this.players.push(new Player(iframe)))
        this.players.forEach(player => {
            player.on('loaded', this.playerLoaded)
            player.pause();
        })
    }
    playerLoaded = (player) => {
        this.setState({ totalPlayersLoaded: this.state.totalPlayersLoaded + 1 })
        (this.state.totalPlayersLoaded == this.players.length && this.setState({
            playersLoaded: true
        }))
    }
    play = () => {
        this.players.forEach(player => player.play());
        this.setState({
            popupVisible: false
        })
    }
    render() {
        if (!this.state.popupVisible) return null;
        return (
            <Overlay>
                {
                    this.state.playersLoaded
                        ? <PlayButton onClick={this.play}>Play</PlayButton>
                        : <Loader>Loading</Loader>
                }
            </Overlay>
        )
    }
}