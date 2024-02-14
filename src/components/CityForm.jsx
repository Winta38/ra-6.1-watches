import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function CityForm({ addClock }) {
    const [title, setTitle] = useState('');
    const [zone, setZone] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        addClock({ title, zone });
        setTitle('');
        setZone('');
    };

    return (
        <form className="time-zones__form" onSubmit={handleSubmit}>
            <label>
                <div>Название</div>
                <input
                    type="text"
                    name="title"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    required
                />
            </label>
            <label>
                <div>Временная зона (GMT)</div>
                <input
                    type="number"
                    min="-12"
                    max="12"
                    name="zone"
                    value={zone}
                    onChange={(event) => setZone(event.target.value)}
                    required
                />
            </label>
            <button>Добавить</button>
        </form>
    );
}

CityForm.propTypes = {
    addClock: PropTypes.func.isRequired,
};
