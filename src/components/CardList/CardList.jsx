import React, { Component } from 'react';
import CardBlock from  '../CardBlock/CardBlock';

import './style.css';

class CardList extends Component {
    constructor(props) {
        super(props);
        this.list = [];
    }
    createList = (list) => {
        let row = [];

        for (let i = 0, maxi = list.length; i < maxi; i++) {
            row[i] = <CardBlock
                key={i}
                index={i}
                id={list[i].id}
                open={list[i].open}
            />;
        }

        return row;
    }
    componentWillMount() {
        this.list = this.createList(this.props.list);
    }
    render() {
        return (
            <div className="Cards-Wrapper">
                {this.list}
            </div>
        );
    }
}

export default CardList;
