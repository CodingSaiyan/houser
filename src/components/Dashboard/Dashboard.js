import React, { Component } from 'react';
import House from '../House/House';
import { Link } from 'react-router-dom';
import axios from 'axios';


class Dashboard extends Component {
    constructor() {
        super()

        this.state = {
            houses: []
        }

        this.deleteHouse = this.deleteHouse.bind(this)
    }

    componentDidMount() {
        axios.get('/houses').then(response => {
            this.setState({
                houses: response.data
            })
        }).catch(err => {console.log(`You didn't get anything from db ${err}`)})
    }

    deleteHouse = (id) => {
        axios.delete(`/houses/${id}`).then(response => {


            this.componentDidMount()
        }).catch(err => {console.log(`You didn't delete from Dash ${err}`)})
    }

    render(){
        //destructing houses in state
        let { houses } = this.state;
        //mapping over houses
        let housesList = houses.map((house, i) => {
        // Returning House Component with props to House to be displayed
            return <House 
                key={i}
                house={house}
                deleteHouse={this.deleteHouse}
                 />
        })
        return(
            <div>
                Dashboard Component
                <Link to={'/wizard'} ><button>Add New Property</button></Link>
                <br />
                <br />
                {housesList}
            </div>
        )
    }
}

export default Dashboard