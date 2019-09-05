import React, { Component } from 'react';
import './cardlist.css'
class CardList extends Component {
    render() {
        return (
            <div >

                <div className="row m-0 p-2 mt-3">
                    {
                        this.props.monster.length ?

                        this.props.monster.map((monster, index) => {
                            return <div className="card-list p-2 col-sm-3 p-0 m-0" key={index}>
                                <img src={`https://robohash.org/${monster.id}`} className="monsImg" />
                                <h1 key={monster.id} className="mt-3">{monster.name}</h1>
                                <p className="text-white mt-3">{monster.email}</p>
                            </div>

                        })
                        :
                        <h5>No Monster Found</h5>

                    }
                </div>
            </div >
        )
    }
}
export default CardList;