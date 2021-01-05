import React, { useState, useEffect } from 'react';
import "./styles.css";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import { Button, Dropdown, Menu } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

const App = () => {

  const [contacts, setContacts] = useState([]);
  const [faculty, setFaculty] = useState([]); 

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=3")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setContacts(data.results);
      });

      fetch("http://host:8000/facultyMemberDetails/19")
      .then(response => response.json())
      .then(mydata => {
        console.log(mydata);
        console.log(mydata);
        setFaculty(mydata);
      });

  }, []);


  return (
    <>
      {contacts.map(contact => (
        <ContactCard
          avatar={contact.picture.large}
          name={contact.name.first + " " + contact.name.last}
          email={contact.email}
          age={contact.dob.age}
        />
      ))}

    {faculty.map(member => (
        <MemberCard
          ResearchInterest={ReactHtmlParser(member.ResearchInterest)}
        />
      ))} 
      

      <Menu size='massive'>
        <Menu.Item
          name='home'
        />
        <Menu.Item
          name='messages'
        />

        <Menu.Menu position='right'>
          <Dropdown item text='Language'>
            <Dropdown.Menu>
              <Dropdown.Item>
                  <Dropdown item text='Style'>
                    <Dropdown.Menu>
                      <Dropdown.Item>Russian</Dropdown.Item>   
                      <Dropdown.Item>Russian</Dropdown.Item> 
                      <Dropdown.Item>Russian</Dropdown.Item>            
                    </Dropdown.Menu>
                  </Dropdown>
              </Dropdown.Item>
              <Dropdown.Item>Russian</Dropdown.Item>
              <Dropdown.Item>Spanish</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Item>
            <Button primary>Sign Up</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </>
  );
};

const ContactCard = props => {
  const [showAge, setShowAge] = useState(true);

  return (
    <div className="contact-card">
      <img src={props.avatar} alt="profile" />
      <div className="user-details">
        <p>Name: {props.name}</p>
        <p>Email: {props.email}</p>
        <button onClick={() => setShowAge(!showAge)}>  Toggle Age </button>
        {showAge ? <p>Age: {props.age}</p> : null}
      </div>
    </div>
  );
}

const MemberCard = props => {
  
  return (
    <div className="contact-card">
      <div className="user-details">
        <p>Name: {props.ResearchInterest}</p>
      </div>
    </div>
  );
}

export default App;