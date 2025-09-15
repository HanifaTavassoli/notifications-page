function NotificationCount({ as: Tag, style, children }) {
	return <Tag className={`font-jakarta ${style} `}>{children}</Tag>;
}

export default NotificationCount;
