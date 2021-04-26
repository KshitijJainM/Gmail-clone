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
function EmailList() {
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
				<EmailRow
					title="Hello"
					subject="Hey Man Whats'up "
					description="test msg"
					time="10pm"
				/>
			</div>
		</div>
	);
}

export default EmailList;
