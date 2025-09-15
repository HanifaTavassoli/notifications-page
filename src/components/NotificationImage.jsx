function NotificationImage({ name = '', picture, className }) {
	return (
		<a href={`/${name}`}>
			<img src={picture} alt="avatar" className={className} />
		</a>
	);
}

export default NotificationImage;
