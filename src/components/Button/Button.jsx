import React, { Component } from 'react';
import './style.css';

// action start or finish game
class Button extends Component {
    render() {
        return (
          <div class="title-text">
            <button
                className={(this.props.class) ? this.props.class : 'button'}
                onClick={this.props.handleClick}>
                <h3>Тестовое задание</h3>
            </button>
          </div>
        );
    }
}

export default Button;
