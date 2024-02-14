import React, { useState } from 'react';
import CityForm from './CityForm';
import Watches from './TimeZones';
import { nanoid } from 'nanoid';

export default function TimeZones() {
  const [clocks, setClocks] = useState([]);

  const addClock = ({ title, zone }) => {
    setClocks((prevClocks) => [...prevClocks, { id: nanoid(), title, zone }]);
  };

  const deleteClock = (id) => () => {
    setClocks((prevClocks) => prevClocks.filter((clock) => clock.id !== id));
  };

  return (
    <div className="time-zones">
      <CityForm addClock={addClock} />
      <div className="time-zones-clockscontainer">
        {clocks.map((clock) => (
          <Watches
            key={clock.id}
            title={clock.title}
            zone={+clock.zone}
          >
            <div
              className="time-zones-delete"
              onClick={deleteClock(clock.id)}
            />
          </Watches>
        ))}
      </div>
    </div>
  );
}
