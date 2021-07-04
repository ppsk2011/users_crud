import React from 'react';

const Card = (props) => {
    console.log(props.user)
    return (
        <div>
            <div className='card'>
                <div className='card-body'>
                <h5 className='card-title'>{props.user.id}    </h5>
                <h5 className='card-title'>{props.user.company.name}    </h5>
                <h5 className='card-title'>{props.user.company.tag}    </h5>
                </div>
            </div>
        </div>
    )
}

export default Card;