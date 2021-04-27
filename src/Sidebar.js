import React from "react";
import "./Sidebar.css";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import SidebarOption from "./SidebarOption";
import StarIcon from "@material-ui/icons/Star";
import PersonIcon from "@material-ui/icons/Person";
import InboxIcon from "@material-ui/icons/Inbox";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import SendIcon from "@material-ui/icons/Send";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DuoIcon from "@material-ui/icons/Duo";
import PhoneIcon from "@material-ui/icons/Phone";
import IconButton from "@material-ui/core/IconButton";
import { useDispatch } from "react-redux";
import { openSendMessage } from "./features/mailSlice";
function Sidebar() {
	const dispatch = useDispatch();
	return (
		<div className="sidebar">
			<Button
				startIcon={<AddIcon fontSize="large" />}
				className="sidebar__compose"
				onClick={() => dispatch(openSendMessage())}>
				Compose
			</Button>
			<SidebarOption
				Icon={InboxIcon}
				title="Inbox"
				number={54}
				selected={true}
			/>
			<SidebarOption
				Icon={StarIcon}
				title="Starred"
				number={54}
				// selected={true}
			/>
			<SidebarOption Icon={WatchLaterIcon} title="Snoozed" number={5} />
			<SidebarOption Icon={LabelImportantIcon} title="Important" number={5} />
			<SidebarOption Icon={SendIcon} title="Sent" number={5} />
			<SidebarOption Icon={InsertDriveFileIcon} title="Drafts" number={5} />
			<SidebarOption Icon={ExpandMoreIcon} title="More" />
			<div className="sidebar__footer">
				<div className="sidebar__footerIcons">
					<IconButton>
						<PersonIcon />
					</IconButton>
					<IconButton>
						<DuoIcon />
					</IconButton>
					<IconButton>
						<PhoneIcon />
					</IconButton>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;
