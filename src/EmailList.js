import React from "react";
import "./EmailList.css";
import EmailRow from "./EmailRow";
import { Checkbox, IconButton } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import RedoIcon from "@material-ui/icons/Redo";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import SettingsIcon from "@material-ui/icons/Settings";
import KeyboardHideIcon from "@material-ui/icons/KeyboardHide";
import InboxIcon from "@material-ui/icons/Inbox";
import GroupIcon from "@material-ui/icons/Group";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import Section from "./Section";
import { db } from "./firebase";
import { useEffect, useState } from "react";
import { selectedMail } from "./features/mailSlice";
function EmailList() {
	const [emails, setEmails] = useState([]);
	useEffect(() => {
		db.collection("emails")
			.orderBy("timestamp", "desc")
			.onSnapshot((snapshot) => {
				setEmails(
					snapshot.docs.map((doc) => ({
						id: doc.id,
						data: doc.data(),
					})),
				);
			});
	}, []);
	return (
		<div className="emailList">
			<div className="emailList__settings">
				<div className="emailList__settingLeft">
					<Checkbox />
					<IconButton>
						<ArrowDropDownIcon />
					</IconButton>
					<IconButton>
						<RedoIcon />
					</IconButton>
					<IconButton>
						<MoreVertIcon />
					</IconButton>
				</div>
				<div className="emailList__settingRight">
					<IconButton>
						<ChevronLeftIcon />
					</IconButton>
					<IconButton>
						<ChevronRightIcon />
					</IconButton>
					<IconButton>
						<KeyboardHideIcon />
					</IconButton>
					<IconButton>
						<SettingsIcon />
					</IconButton>
				</div>
			</div>
			<div className="emailList__sections">
				<Section Icon={InboxIcon} title="Primary" color="red" selected={true} />
				<Section
					Icon={GroupIcon}
					title="Social"
					color="blue"
					// selected="{true}"
				/>
				<Section
					Icon={LocalOfferIcon}
					title="Promotion"
					color="green"
					// selected="selected={true}"
				/>
			</div>
			<div className="emailList__list">
				{emails.map(({ id, data }) => (
					<EmailRow
						key={id}
						title={data.to}
						time={new Date(data.timestamp?.seconds * 1000).toUTCString()}
						description={data.message}
						subject={data.subject}
					/>
				))}
			</div>
		</div>
	);
}

export default EmailList;
