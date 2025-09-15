import avatar from '../public/assets/images/image-chess.webp';
import avatar1 from '../public/assets/images/avatar-mark-webber.webp';
import avatar2 from '../public/assets/images/avatar-angela-gray.webp';
import avatar3 from '../public/assets/images/avatar-jacob-thompson.webp';
import avatar4 from '../public/assets/images/avatar-rizky-hasanuddin.webp';
import avatar5 from '../public/assets/images/avatar-kimberly-smith.webp';
import avatar6 from '../public/assets/images/avatar-nathan-peterson.webp';
import avatar7 from '../public/assets/images/avatar-anna-kim.webp';

export const notifData = [
	{
		id: 1,
		fullName: 'Mark Webber',
		picture: avatar1,
		activity: {
			title: 'reacted to your recent post',
			details: 'My first tournament today!',
			time: '1m ago',
		},
		read: false,
	},
	{
		id: 2,
		fullName: 'Angela Gray',
		picture: avatar2,
		activity: {
			title: 'followed you',
			time: '5m ago',
		},
		read: false,
	},
	{
		id: 3,
		fullName: 'Jacob Thompson',
		picture: avatar3,
		activity: {
			title: 'has joined your group ',
			details: 'Chess Club',
			time: '1 day ago',
		},
		read: false,
	},
	{
		id: 4,
		fullName: 'Rizky Hasanuddin',
		picture: avatar4,
		activity: {
			title: 'sent you a private message',
			message:
				"Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
			time: '5 days ago',
		},
		read: true,
	},
	{
		id: 5,
		fullName: 'Kimberly Smith',
		picture: avatar5,
		activity: {
			title: 'commented on your picture',
			picture: avatar,
			time: '1 week ago',
		},
		read: true,
	},
	{
		id: 6,
		fullName: 'Nathan Peterson',
		picture: avatar6,
		activity: {
			title: 'reacted to your recent post',
			details: '5 end-game strategies to increase your win rate',
			time: '2 weeks ago',
		},
		read: true,
	},
	{
		id: 7,
		fullName: 'Anna Kim',
		picture: avatar7,
		activity: {
			title: 'left the group',
			details: 'Chess Club',
			time: '2 weeks ago',
		},
		read: true,
	},
];
