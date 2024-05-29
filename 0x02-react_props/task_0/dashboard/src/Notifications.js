import React from 'react'
import close from './close.png'
import './Notifications.css'
import { getLatestNotification } from './utils'

export const Notifications = () => {
	return (
		<div className='Notifications'>
			<button aria-label='Close' style={{float: 'right'}} onClick={() => console.log("Close button has been clicked")}><img src={close} alt="Close"/></button>
			<p>Here is the list of notifications</p>
			<ul>
				<li data-priority="default">New course available</li>
				<li data-priority="urgent">New course available</li>
				<li data-priority="urgent" dangerouslySetInnerHTML={getLatestNotification()}></li>
			</ul>
		</div>
	);
}