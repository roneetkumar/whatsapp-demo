import React, { Component } from "react";
import ChatScreen from "./ChatScreen/ChatScreen";
import "./chatter.css"
import { ReactComponent as SearchIcon } from '../../../svg/search.svg';
import { ReactComponent as MenuIcon } from '../../../svg/menu.svg';
import { ReactComponent as AttachIcon } from '../../../svg/attach.svg';
import { ReactComponent as EmojiIcon } from '../../../svg/emoji.svg';
import { ReactComponent as MicIcon } from '../../../svg/mic.svg';


export default class Chatter extends Component {
	render() {
		return (
			<div className="chatter">
				<header>
					<img src="https://thispersondoesnotexist.com/image" alt="img" />
					<h1>
						{this.props.contact.name}
					</h1>
					<SearchIcon title="Search" fill="rgba(0,0,0,0.4)" height="24px" width="24px" />
					<AttachIcon title="Attach" fill="rgba(0,0,0,0.4)" height="24px" width="24px" />
					<MenuIcon title="Menu" fill="rgba(0,0,0,0.4)" height="24px" width="24px" />
				</header>
				<ChatScreen messages={this.props.contact.messages} />
				<form>
					<EmojiIcon title="Menu" fill="rgba(0,0,0,0.4)" height="24px" width="24px" />
					<div className="input-wrapper">
						<div className="input" contentEditable="true" type="text" placeholder="Type a message" ></div>
					</div>
					<MicIcon title="Menu" fill="rgba(0,0,0,0.4)" height="24px" width="24px" />
				</form>
			</div>
		)
	}
}