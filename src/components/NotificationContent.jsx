function NotificationContent({ fullName, read, activity }) {
	const { title, details, time } = activity;
	return (
		<div className="flex flex-col">
			<div className="text-xs sm:text-sm">
				<a href={`/user/${fullName}`} className="inline font-bold mr-2 hover:text-navy-blue">
					{fullName}
				</a>
				<p className="inline text-navy-normal  font-medium">{title}</p>
				{details && (
					<a
						href={details}
						className={`ml-2  tracking-tighter font-bold hover:text-navy-blue ${details == 'Chess Club' ? 'text-navy-blue tracking-tightest font-extrabold' : 'text-navy-dark'} `}
					>
						{details}
					</a>
				)}
				{!read && <span className="h-[6px] w-[6px] rounded-full bg-navy-red inline-block ml-1"></span>}
			</div>
			<span className="text-xs text-navy-normal">{time}</span>
		</div>
	);
}

export default NotificationContent;
