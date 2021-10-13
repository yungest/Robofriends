

import React from 'react'


const Card = ({name,email,id}) => {

    return(
    
        <div className="ma3 dib bg-light-green grow">
            <img src={`https://robohash.org/${id}`} alt="robotsCard" />
            <div className="tc">
                <h1> {name} </h1>
                <p>{email}</p>
            </div>
        </div>
    
    );
}


export default Card;
