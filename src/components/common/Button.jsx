function Button({ style, clearHandler, children }) {
	return (
		<button className={`${style}  hover:cursor-pointer`} onClick={() => clearHandler()}>
			{children}
		</button>
	);
}

export default Button;
