import React, { Component } from 'react';
import axios from 'axios';
import update from 'immutability-helper';
import HeaderTop from './HeaderTop';

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
            deposit: '',
            streetAddress: '',
            cityAddress: '',
            postalCode: '',
            aboutFloor: '',
            aboutBed: '',
            aboutFurniture: '',
            aboutLaundry: '',
            aboutWifi: '',
            utilityExpenses: '',
            aboutPets: '',
            aboutSmoking: '',
            aboutDrugs: '',
            aboutParking: ''
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
            <div className="post-form-wrapper">
                <HeaderTop />
                <div className="post-form-step">
                    <p>STEP: 1<br />Input your personal information</p>
                </div>
                <form id="postForm" className="post-form">
                    <label className="post-label">First name:
                        <input className="post-input"
                            type="text" name="firstName" placeholder="Enter your first name"
                            value={this.state.firstName} onChange={this.handleInput}/>
                    </label>
                    <label className="post-label">Last name:
                        <input className="post-input"
                            type="text" name="lastName" placeholder="Enter your last name"
                            value={this.state.lastName} onChange={this.handleInput}/>
                    </label>
                    <label className="post-label">Email address:
                        <input className="post-input"
                            type="text" name="email" placeholder="Enter your email"
                            value={this.state.email} onChange={this.handleInput}/>
                    </label>
                    <label className="post-label">Phone number:
                        <input className="post-input"
                            type="text" name="phoneNumber" placeholder="Enter your phone number"
                            value={this.state.phoneNumber} onChange={this.handleInput}/>
                    </label>
                    <label className="post-label">Select a offer type:
                        <div className="select-wrapper">
                            <select className="post-select" name="offerType" value={this.state.offerType} onChange={this.handleInput}>
                                <option value="homestay">Homestay</option>
                                <option value="rent">Rent</option>
                            </select>
                        </div>
                    </label>
                    <label className="post-label">Select a room type:
                        <div className="select-wrapper">
                            <select className="post-select" name="roomType" value={this.state.roomType} onChange={this.handleInput}>
                                <option value="private">Private</option>
                                <option value="sharing">Sharing</option>
                            </select>
                        </div>
                    </label>
                    <label className="post-label">Monthly fee:
                        <input className="post-input"
                            type="text" name="monthlyFee" placeholder="Enter a monthly fee"
                            value={this.state.monthlyFee} onChange={this.handleInput}/>
                    </label>
                    <label className="post-label">Deposit:
                        <input className="post-input"
                            type="text" name="deposit" placeholder="Enter a deposit"
                            value={this.state.deposit} onChange={this.handleInput}/>
                    </label>
                    <label className="post-label">Street address:
                        <input className="post-input"
                            type="text" name="streetAddress" placeholder="Enter a deposit"
                            value={this.state.streetAddress} onChange={this.handleInput}/>
                    </label>
                    <label className="post-label">Select a city:
                        <div className="select-wrapper">
                            <select className="post-select" name="cityAddress" value={this.state.cityAddress} onChange={this.handleInput}>
                                <option value="vancouver">Vancouver</option>
                                <option value="westvancouver">West Vancouver</option>
                                <option value="northvancouver">North Vancouver</option>
                                <option value="burnaby">Burnaby</option>
                                <option value="newwestminster">New Westminster</option>
                                <option value="coquitlam">Coquitlam</option>
                                <option value="richmond">Richmond</option>
                                <option value="surrey">Surrey</option>
                            </select>
                        </div>
                    </label>
                    <label className="post-label">Postal Code:
                        <input className="post-input"
                            type="text" name="postalCode" placeholder="Enter your postal code"
                            value={this.state.postalCode} onChange={this.handleInput}/>
                    </label>
                    <label className="post-label">Level of your room:
                        <input className="post-input"
                            type="text" name="aboutFloor" placeholder="Enter level of your room / floor"
                            value={this.state.aboutFloor} onChange={this.handleInput}/>
                    </label>
                    <label className="post-label">How many bed is in your room?:
                        <input className="post-input"
                            type="text" name="aboutBed" placeholder="Enter how many bed is in room"
                            value={this.state.aboutBed} onChange={this.handleInput}/>
                    </label>
                    <label className="post-label">What funiture is in your room?:
                        <input className="post-input"
                            type="text" name="aboutFurniture" placeholder="Ex. Desk, Chair, Bookshelf"
                            value={this.state.aboutFurniture} onChange={this.handleInput}/>
                    </label>
                    <label className="post-label">About Wifi:
                        <div className="select-wrapper">
                            <select className="post-select" name="aboutWifi" value={this.state.aboutWifi} onChange={this.handleInput}>
                                <option value="sharingAndIncurCost">Sharing and incur a cost</option>
                                <option value="sharingAndConstIncluded">Sharing and a cost included</option>
                                <option value="privateAndIncurCost">Private and incur a cost</option>
                                <option value="privateAndCostIncluded">Private and a cost included</option>
                                <option value="noWifi">No Wifi</option>
                            </select>
                        </div>
                    </label>
                    <label className="post-label">How much is utility expenses:
                        <input className="post-input"
                            type="text" name="utilityExpenses" placeholder="Ex. All utility expenses is included in a monthly fee"
                            value={this.state.utilityExpenses} onChange={this.handleInput}/>
                    </label>
                    <label className="post-label">About pets:
                        <input className="post-input"
                            type="text" name="aboutPets" placeholder="Ex. We have two dogs. / We have a cat and you can have your pet."
                            value={this.state.aboutPets} onChange={this.handleInput}/>
                    </label>
                    <label className="post-label">About smoking:
                        <div className="select-wrapper">
                            <select className="post-select" name="aboutSmoking" value={this.state.aboutSmoking} onChange={this.handleInput}>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                    </label>
                    <label className="post-label">About drugs:
                        <div className="select-wrapper">
                            <select className="post-select" name="aboutDrugs" value={this.state.aboutDrugs} onChange={this.handleInput}>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                    </label>
                    <label className="post-label">About parking:
                        <input className="post-input"
                            type="text" name="aboutParking" placeholder="Ex. Street parking is okay. / Plase parking in grage."
                            value={this.state.aboutParking} onChange={this.handleInput}/>
                    </label>
                </form>
                <button className="post-form-button" type="submit" onClick={this.handleSubmit}>Post Your Room</button>
            </div>
        )
    }
}

export default Form