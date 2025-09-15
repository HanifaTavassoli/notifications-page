import Notification from '../components/Notification';
function Home() {
	return (
		<div className="h-auto flex justify-center tracking-tight items-center p-0 sm:p-10 font-jakarta bg-navy-lightest">
			<Notification style="rounded-lg shadow-lg shadow-navy-light w-150 px-5 pt-6 bg-white  text-sm/6 sm:text-sm" />
		</div>
	);
}

export default Home;
