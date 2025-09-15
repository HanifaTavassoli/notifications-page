function NotificationTitle({ as: Tag, style, children }) {
	return <Tag className={`font-bold tracking-tight ${style} `}>{children}</Tag>;
}

export default NotificationTitle;
