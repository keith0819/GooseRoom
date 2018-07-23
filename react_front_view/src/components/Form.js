import React, { Component } from 'react';
import axios from 'axios';
import update from 'immutability-helper';

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            offerType: '',
            roomType: '',
            monthlyFee: '',
            deposit: ''
            // streetAddress: '',
            // cityAddress: '',
            // postalCode: '',
            // aboutFloor: '',
            // aboutBed: '',
            // aboutFurniture: '',
            // aboutLaundry: '',
            // aboutWifi: '',
            // utilityExpenses: '',
            // aboutPets: '',
            // aboutSmoking: '',
            // aboutDrugs: '',
            // aboutParking: ''
        }

        this.handleInput = this.handleInput.bind(this)
    }

    handleInput(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit(event) {
        event.preventDefault();

        var postForm = document.getElementById('postForm');
        var formData = new FormData(postForm);

        axios({
            method: 'post',
            url: 'http://localhost:3000/posts',
            data: formData
        })
        .then((result) => {
            console.log(result)
            const newData = update(formData, {$push:[result.data]})
            this.setState({formData: newData})
        })
        .catch((data) => {
            console.log(data)
        })
    }

    render() {
        return(
            <div>
                <form id="postForm">
                    <label>First name:
                        <input
                            type="text" name="firstName" placeholder="Enter your first name"
                            value={this.state.firstName} onChange={this.handleInput}/>
                    </label>
                    <label>Last name:
                        <input
                            type="text" name="lastName" placeholder="Enter your last name"
                            value={this.state.lastName} onChange={this.handleInput}/>
                    </label>
                    <label>Email address:
                        <input
                            type="text" name="email" placeholder="Enter your email"
                            value={this.state.email} onChange={this.handleInput}/>
                    </label>
                    <label>Phone number:
                        <input
                            type="text" name="phoneNumber" placeholder="Enter your phone number"
                            value={this.state.phoneNumber} onChange={this.handleInput}/>
                    </label>
                    <label>Select a offer type:
                        <select name="offerType" value={this.state.offerType} onChange={this.handleInput}>
                            <option value="homestay">Homestay</option>
                            <option value="rent">Rent</option>
                        </select>
                    </label>
                    <label>Select a room type:
                        <select name="roomType" value={this.state.roomType} onChange={this.handleInput}>
                            <option value="private">Private</option>
                            <option value="sharing">Sharing</option>
                        </select>
                    </label>
                    <label>Monthly fee:
                        <input
                            type="text" name="monthlyFee" placeholder="Enter a monthly fee"
                            value={this.state.monthlyFee} onChange={this.handleInput}/>
                    </label>
                    <label>Deposit:
                        <input
                            type="text" name="deposit" placeholder="Enter a deposit"
                            value={this.state.deposit} onChange={this.handleInput}/>
                    </label>
                </form>
                <button type="submit" onClick={this.handleSubmit}>Submit</button>
            </div>
        )
    }
}

export default Form