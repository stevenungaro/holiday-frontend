import axios from "axios";
import { useState, useEffect } from "react";
import { HolidaysIndex } from "./HolidaysIndex";

export function Content() {
  const [holidays, setHolidays] = useState([]);

  const handleIndexHolidays = () => {
    axios.get("http://localhost:3000/holidays.json").then((response) => {
      setHolidays(response.data);
    });
  };

  useEffect(handleIndexHolidays, []);

  return (
    <div>
      <main>
        <h1>Welcome to React!</h1>
      </main>
      <HolidaysIndex holidays={holidays} />
    </div>
  );
}
