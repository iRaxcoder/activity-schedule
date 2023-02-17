import "./style.css";
import {
  Box,
  Paper,
  Table,
  TableContainer,
  TableHead,
  Typography,
} from "@mui/material";
import { ScheduleItem } from "../ScheduleItem/ScheduleItem";

const days = [
  { id: 0, name: "Lunes" },
  { id: 1, name: "Martes" },
  { id: 2, name: "Miércoles" },
  { id: 3, name: "Jueves" },
  { id: 4, name: "Viernes" },
  { id: 5, name: "Sábado" },
  { id: 6, name: "Domingo" },
];

const scheduleHours = [
  "07:00 - 07:50",
  "08:00 - 08:50",
  "09:00 - 09:50",
  "10:00 - 10:50",
  "11:00 - 11:50",
  "12:00 - 12:50",
  "13:00 - 13:50",
  "14:00 - 14:50",
  "15:00 - 16:50",
  "16:00 - 16:50",
  "17:00 - 17:50",
  "18:00 - 18:50",
  "19:00 - 19:50",
  "20:00 - 20:50",
  "21:00 - 21:50",
  "22:00 - 22:50",
];

const timePeriod = (() => {
  const periods = {};
  for (let i = 0; i < scheduleHours.length; i++) {
    periods[i] = [];
    for (let j = 0; j < days.length; j++) {
      periods[i].push({
        id: i + "" + j,
        hour: scheduleHours[i],
        day: days[j].id,
      });
    }
  }
  return periods;
})();

export const Schedule = () => {
  return (
    <>
      <TableContainer elevation={3} component={Paper}>
        <table className="schedule_header">
          <TableHead>
            <tr>
              <th className="schedule_days_item">Horas</th>
              {days.map((day, index) => (
                <th key={index} className="schedule_days_item">
                  {day.name}
                </th>
              ))}
            </tr>
          </TableHead>
          <tbody>
            {scheduleHours.map((hour, index) => (
              <tr key={index}>
                <th className="schedule_days_item">{hour}</th>
                {timePeriod[index].map((period) => (
                  <ScheduleItem key={period.id} {...period} />
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </TableContainer>
    </>
  );
};
