import React, { Component } from 'react';
import './cardlist.css'
class Card extends Component {
    render() {
        return (
            <div >
                <div className="row"></div>
                {

                    this.props.monster.map((monster,index) => {
                        return <div className="card-list" key={index}>
                            <h1 key={monster.id}>{monster.name}</h1>
                        </div>

                    })

                }
            </div >
        )
    }
}
export default CardList;