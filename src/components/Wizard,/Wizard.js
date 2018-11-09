import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



class Wizard extends Component {
    constructor() {
        super()

    //Setting intial value of state
        this.state = {
            name: "",
            address: "",
            city: "",
            state: "",
            zip: 0
        }
        //binding the functions that did NOT use ES6 Arrow functions
        this.handleProperty = this.handleProperty.bind(this)
        this.handleAddress = this.handleAddress.bind(this)
        this.handleCity = this.handleCity.bind(this)
        this.handleState = this.handleState.bind(this)
    }

    // Event handling of Input
    handleProperty(e) {
        this.setState({
            name: e.target.value
        })
    }

    handleAddress(e) {
        this.setState({
            address: e.target.value
        })
    }

    handleCity(e) {
        this.setState({
            city: e.target.value
        })
    }

    handleState(e) {
        this.setState({
            state: e.target.value
        })
    }
    
    // User Arrow Function ES6 which I will not use bind.
    handleZip = (e) => {
        this.setState({
            zip: e.target.value
        })
    }

    addANewHouse = () => {
        let { name, address, city, state, zip } = this.state;
        axios.post('/houses', {name, address, city, state, zip}).then(response => {
            

        }).catch(err => { console.log(`Error! Didn't add to houses fromtend ${err}`)})
    }


    render() {
        let { name, address, city, state, zip } = this.state;
        return (
            <div>
                Wizard Component
                <h1>Add New Listing</h1>
               <Link to={'/'} ><button>Cancel</button></Link>
               <label>Property Name</label>
               <input value={name} type="text" onChange={this.handleProperty} />

               <label>Address</label>
               <input value={address} type="text" onChange={this.handleAddress} />

               <label>City</label>
               <input value={city} type="text" onChange={this.handleCity} />

               <label>State</label>
               <input value={state} type="text" onChange={this.handleState} />

               <label>Zip</label>
               <input value={zip} type="number" onChange={this.handleZip} />

              <Link to={'/'} ><button onClick={this.addANewHouse}>Complete</button></Link>

            </div>
        )
    }
}

export default Wizard