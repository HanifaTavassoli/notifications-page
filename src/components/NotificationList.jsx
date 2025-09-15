import NotificationContent from './NotificationContent';
import NotificationDetails from './NotificationDetails';
import NotificationImage from './NotificationImage';

function NotificationList({ item, style, readHandler }) {
	const { fullName, picture, activity, read } = item;
	return (
		<>
			<li className={`p-3 ${style} mb-2 flex hover:cursor-pointer `} onClick={() => readHandler(item)}>
				<NotificationImage picture={picture} name={fullName} className="h-9 mr-3" />
				<div className="w-full">
					<div className="flex justify-between">
						<NotificationContent fullName={fullName} read={read} activity={activity} />
						{activity.picture && <NotificationImage picture={activity.picture} className="h-8 self-start" />}
					</div>
					{activity.message && (
						<NotificationDetails
							style="border border-navy-basic tracking-normal font-medium text-sm text-navy-dark hover:bg-navy-light hover:cursor-pointer"
							message={activity.message}
						/>
					)}
				</div>
			</li>
		</>
	);
}

export default NotificationList;
