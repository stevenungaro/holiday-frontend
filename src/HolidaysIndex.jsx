/* eslint-disable react/prop-types */
export function HolidaysIndex(props) {
  return (
    <div>
      <h1>Holidays aww yea</h1>
      {props.holidays.map((holiday) => (
        <div key={holiday.name}>
          <h2>{holiday.name}</h2>
          <h3>{holiday.date}</h3>
        </div>
      ))}
    </div>
  );
}
