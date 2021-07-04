import React from "react";
import Card from "./Card.jsx"
import contacts from "./contacts.jsx"

function App() {

    return (

        <div>
            {contacts.map(props => <Card {...props} />)}
            <h1 className="heading">My mindset</h1>
            <Card
                name={contacts[0].name}
                imgurl={contacts[0].imgurl}
                email={contacts[0].email}
                karma={contacts[0].karma}
            />
            <Card
                name={contacts[1].name}
                imgurl={contacts[1].imgurl}
                email={contacts[1].email}
                karma={contacts[1].karma}
            />
            <Card
                name={contacts[2].name}
                imgurl={contacts[2].imgurl}
                email={contacts[2].email}
                karma={contacts[2].karma}
            />
        </div>)
}

export default App