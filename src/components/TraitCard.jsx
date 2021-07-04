import React from "react"

function TraitCard(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <img src={props.imgurl} alt="img" />
            <p>{props.karma}</p>
            <p>{props.email}</p>
        </div>
    )
}

export default TraitCard