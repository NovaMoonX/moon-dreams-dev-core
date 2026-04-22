import { Outlet } from 'react-router-dom';

function Layout() {
	return (
		<div className='min-h-dvh w-full bg-background text-foreground transition-colors duration-200'>
			<Outlet />
		</div>
	);
}

export default Layout;
