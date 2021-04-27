import React from "react";
import "./SendMail.css";
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "./features/mailSlice";
import { db } from "./firebase";
import firebase from "firebase";
function SendMail() {
	const dispatch = useDispatch();
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();
	const onSubmit = (formData) => {
		db.collection("emails").add({
			to: formData.to,
			subject: formData.subject,
			message: formData.message,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		});
	};
	return (
		<div className="sendMail">
			<div className="sendMail__header">
				<h3>New Message</h3>
				<CloseIcon
					className="sendMail__close"
					onClick={() => dispatch(closeSendMessage())}
				/>
			</div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					name="to"
					type="email"
					placeholder="To"
					{...register("to", {
						required: true,
					})}
				/>
				{errors.to && <p className="sendMail__error">To is required!!</p>}
				<input
					name="subject"
					type="text"
					placeholder="Subject"
					{...register("subject", {
						required: true,
					})}
				/>
				{errors.subject && (
					<p className="sendMail__error">Subject is required!!</p>
				)}
				<input
					name="message"
					type="text"
					placeholder="Message..."
					className="sendMail__message"
					{...register("message", {
						required: true,
					})}
				/>
				{errors.message && (
					<p className="sendMail__error">Message field cannot be empty!!</p>
				)}
				<div className="sendMail__options">
					<Button
						className="sendMail__send"
						variants="contained"
						color="primary"
						type="submit">
						Send
					</Button>
				</div>
			</form>
		</div>
	);
}

export default SendMail;
