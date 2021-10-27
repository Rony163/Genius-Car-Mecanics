import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();

    const [service, setService] = useState({});
    useEffect(() => {
        fetch(`https://warm-lowlands-30921.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    // console.log(services.length);

    return (
        <div>
            <h1>This is Booking {serviceId}</h1>
            <h2>Details of: {service.name}</h2>
        </div>
    );
};

export default Booking;