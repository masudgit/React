import React, { Component } from 'react';

export default class AddContacts extends Component {

    state = {
        firstName: "",
        lastName: "",
        email: ""
    };

    submitContact(event) {
        event.preventDefault();
        let contact = {
            firstName: this.refs.firstName.value,
            lastName: this.refs.lastName.value,
            email: this.refs.email.value,
        }

        fetch("http://localhost:8080/api/contacts", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(contact),
        })
        .then(reponse => reponse.json());

        window.location.reload();
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        let contact = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
        }

        fetch("http://localhost:8080/api/contacts", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(contact),
        })
        .then(reponse => reponse.json());

        window.location.reload();
    };

    render() {
        return (
            <div className="row">
                <form className="col s12" onSubmit={this.handleSubmit}>
                <div className="row">
                    <div className="input-field col s6">
                        <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} 
                            placeholder="First Name" />
                        
                    </div>
                    <div className="input-field col s6">
                        <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} 
                            placeholder="Last Name" />
                    </div>
                </div>
                
                <div className="row">
                    <div className="input-field col s12">
                    <input type="email" name="email" value={this.state.email} onChange={this.handleChange} 
                            placeholder="Email" />
                    </div>
                </div>
                <div className="row">
                    <button className="waves-effect waves-light btn" type="submit" name="action">Submit</button>
                </div>
                </form>
            </div>    
        );
        
    }
} 