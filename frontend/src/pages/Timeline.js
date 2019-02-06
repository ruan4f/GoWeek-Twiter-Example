import React, { Component } from 'react';

// import { Container } from './styles';

import twitterLogo from '../twitter.svg';
import './Timeline.css';

export default class Timeline extends Component {
    state = {
        newTweet: '',
    };

    handleNewTeet = e => {
        if (e.keyCode !== 13) return;

        const content = this.state.newTweet;
        const author = localStorage.getItem('@GoTwitter:username');
    }

    handleInputChange = e => {
        this.setState({ newTweet: e.target.value });
    }

    render() {
        return (
            <div className="timeline-wrapper">
                <img height={24} src={twitterLogo} alt="Go Twitter" />

                <form>
                    <textarea
                        value={this.state.newTweet}
                        onChange={this.handleInputChange}
                        onKeyDown={this.handleNewTeet}
                        placeholder="O que está acontecendo?" />
                </form>

                <ul>

                </ul>
            </div>
        );
    }
}
