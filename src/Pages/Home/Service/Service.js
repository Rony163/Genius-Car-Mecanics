import React from 'react';

const Service = ({ service }) => {
    // const {service} = props;
    const { name, img, price, description } = service;
    return (
        <div>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5>{price}</h5>
            <p>{description}</p>
        </div>
    );
};

export default Service;