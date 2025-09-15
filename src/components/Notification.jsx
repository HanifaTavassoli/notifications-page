import { useState, useEffect } from 'react';
import { notifData } from '../data';
import Button from './common/Button';
import NotificationHeader from './NotificationHeader';
import NotificationTitle from './NotificationTitle';
import NotificationCount from './NotificationCount';
import NotificationList from './NotificationList';

function Notification({ style }) {
	return (
		<div className={style}>
			<NotificationHeader>
				<div>
					<NotificationTitle as="h1" style="inline text-lg sm:text-xl ">
						Notifications
					</NotificationTitle>
					{unRead ? (
						<NotificationCount
							as="span"
							style="font-jakarta text-white bg-navy-blue px-2  rounded-sm ml-3 text-xs sm:text-sm font-semibold "
						>
							{unRead}
						</NotificationCount>
					) : (
						''
					)}
				</div>
				{unRead ? (
					<Button style="text-xs text-navy-dark tracking-tight hover:text-navy-blue font-semibold">
						Mark all as read
					</Button>
				) : (
					''
				)}
			</NotificationHeader>
			<ul>
				{notifList.map((item) => (
					<NotificationList
						item={{ ...item }}
						key={item.id}
						style={`${item.read ? '' : 'bg-navy-lighter'} rounded-md relative`}
					/>
				))}
			</ul>
		</div>
	);
}

export default Notification;
