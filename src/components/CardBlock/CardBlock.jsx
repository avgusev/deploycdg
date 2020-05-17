import React, { Component } from 'react';
import { connect } from "react-redux";
import { toggleCard, addMatch } from "../../actions";
import './style.css';

class CardBlock extends Component {
    handleCardClick = (event) => {
        if (event.currentTarget.classList.contains('shown')) {
            event.preventDefault();
        } else {
            this.props.toggleCard(this.props.id, this.props.index);
        }
    }

    render() {
        const backText   = "?";

        const cardFrontClasses =
              `card-front card-front${this.props.num}`;     // add card-front1, card-front2, etc colors or something

        let class_name = (this.props.classname !== undefined) ? "card " + this.props.classname : "card";
        class_name = (this.props.state.list[this.props.index].open) ? class_name + " shown " : class_name;

        return (
            <div className={class_name} onClick={this.handleCardClick.bind(this)} >
                <div className="card-back">{backText}</div>
                <span className={cardFrontClasses}>{this.props.id}</span>
            </div>
        );
    }
}

// state
const mapStateToProps = state => ({
    state: state.cards,
});

// dispatch props
const mapDispatchToProps = dispatch => ({
    toggleCard: (id, index) => dispatch(toggleCard(id, index)),
    addMatch: (id) => dispatch(addMatch(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CardBlock);
