function NotificationDetails({ style, message }) {
	return <p className={`text-xs sm:text-sm p-3 mt-2  rounded-sm ${style}`}>{message}</p>;
}

export default NotificationDetails;
