import React, { useState } from "react";
import * as styles from "./Event.module.css";
import * as Yup from "yup";

interface IEventProps {
	title: string;
	notes: string;
	start: Date;
	end: Date;
}

const schema = Yup.object<IEventProps>().shape({
	title: Yup.string().required("This filed is required"),
	notes: Yup.string().required(),
	start: Yup.date().required(),
	end: Yup.date().required(),
});

export default function Event(props: IEventProps) {
	const {} = props;
	// const [event, setEvent] = useState<IEventProps>();
	// const {
	// 	register,
	// 	formState: { errors: errors },
	// 	handleSubmit,
	// 	reset,
	// } = useForm({ resolver: yupResolver(schema) });

	return <div className={styles.Event}></div>;
}

