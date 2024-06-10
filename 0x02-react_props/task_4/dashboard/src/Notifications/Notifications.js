import React from 'react'
import close from '../close.png'
import NotificationItem from './NotificationItem'
import './Notifications.css'
import { getLatestNotification } from '../utils'

export const Notifications = () => {
	return (
		<div className='Notifications'>
			<button aria-label='Close' style={{float: 'right'}} onClick={() => console.log("Close button has been clicked")}><img src={close} alt="Close"/></button>
			<p>Here is the list of notifications</p>
			<ul>
				<NotificationItem type="default" value="New course available"/>
				<NotificationItem type="default" value="New course available"/>
				<NotificationItem type="urgent" html={getLatestNotification()}/>
				<li data-priority="urgent" dangerouslySetInnerHTML={getLatestNotification()}></li>
			</ul>
		</div>
	);
}