import React from "react";
import * as styles from "./MyCalendar.module.css";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "!css-loader!react-big-calendar/lib/css/react-big-calendar.css";
import "moment/locale/en-gb";

interface ICalendarProps {}
const localizer = momentLocalizer(moment);
export default function MyCalendar(props: ICalendarProps) {
	const {} = props;

	const events = [
		{
			start: moment().toDate(),
			end: moment().add(50, 'minutes').toDate(),
			title: "Some title",
			
		},
		{
			start: moment().toDate(),
			end: moment().toDate(),
			title: "Some title 2",
		},
	];
	return (
		<div className={styles.MyCalendar}>
			<Calendar
				localizer={localizer}
				defaultDate={new Date()}
				defaultView="month"
				events={events}
				formats={{
					timeGutterFormat: (date, culture, localizer) =>
						moment(date).format("HH:mm"), // 24-hour format
					eventTimeRangeFormat: (
						{ start, end },
						culture,
						localizer
					) =>
						`${moment(start).format("HH:mm")} - ${moment(
							end
						).format("HH:mm")}`, // Event time range in 24-hour format
					agendaTimeRangeFormat: (
						{ start, end },
						culture,
						localizer
					) =>
						`${moment(start).format("HH:mm")} - ${moment(
							end
						).format("HH:mm")}`, // Agenda time range in 24-hour format
				}}
			/>
		</div>
	);
}
