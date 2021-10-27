import React, { useEffect, useState } from 'react';

const ManageServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://warm-lowlands-30921.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, You want a delete?');
        if (proceed) {
            const url = `https://warm-lowlands-30921.herokuapp.com/services/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Succesfuly deleted');
                        const remaining = services.filter(service => service._id !== id);
                        setServices(remaining);
                    }
                })
        }
    }

    return (
        <div>
            <h1>Thsi is manage services</h1>
            {
                services.map(service => <div key={service._id}>
                    <h3>{service.name}</h3>
                    <button onClick={() => handleDelete(service._id)}>Delete</button>
                </div>)
            }
        </div>
    );
};

export default ManageServices;