import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import AppsIcon from "@material-ui/icons/Apps";
import Avatar from "@material-ui/core/Avatar";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";

function Header() {
	const dispatch = useDispatch();

	const user = useSelector(selectUser);
	const signOut = () => {
		auth.signOut().then(() => {
			dispatch(logout());
		});
	};
	return (
		<div className="header">
			<div className="header__left">
				<IconButton>
					<MenuIcon />
				</IconButton>
				<img
					src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png"
					alt=""
				/>
			</div>
			<div className="header__middle">
				<SearchIcon />
				<input placeholder="Search mail" type="text" />
				<ArrowDropDownIcon className="header__inputCaret" />
			</div>

			<div className="header__right">
				<IconButton>
					<HelpOutlineIcon />
				</IconButton>
				<IconButton>
					<SettingsOutlinedIcon />
				</IconButton>
				<IconButton>
					<AppsIcon />
				</IconButton>
				<IconButton>
					<Avatar onClick={signOut} src={user?.photoUrl} />
				</IconButton>
			</div>
		</div>
	);
}

export default Header;
