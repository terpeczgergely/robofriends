import React from 'react';

const Card = ({name, email, id}) => {
    return(
    <div className='bg-light-green dib br4 pa2 m1 grow bw2 shadow-5'>
        <div>
            <img alt='robots' src={`https://robohash.org/${id}`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    </div>
    );
}

export default Card;