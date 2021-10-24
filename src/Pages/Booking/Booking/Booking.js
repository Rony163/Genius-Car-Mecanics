import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Rony163/Genius-Car-Mecanics/main/public/services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    console.log(services.length);

    return (
        <div>
            <h1>This is Booking {serviceId}</h1>
        </div>
    );
};

export default Booking;