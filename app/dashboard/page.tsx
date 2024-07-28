'use client';
import { usePathname } from 'next/navigation';
import React, { lazy } from 'react';
import HomePage from './home/page';
import SidebarComponent from '@/components/SidebarComponent';
const Board = lazy(() => import('./board/page'));
const Settings = lazy(() => import('./settings/page'));
const Teams = lazy(() => import('./teams/page'));
const Analytics = lazy(() => import('./analytics/page'));

const Dashboard = () => {
	const pathname: string = usePathname();

	const renderComponent = () => {
		switch (pathname) {
			case '/dashboard':
				return <HomePage />;
			case '/dashboard/board':
				return <Board />;
			case '/dashboard/teams':
				return <Teams />;
			case '/dashboard/analytics':
				return <Analytics />;
			case '/dashboard/settings':
				return <Settings />;
			default:
				return <Dashboard />;
		}
	};
	return (
		<main className="flex min-h-full">
			<SidebarComponent pathname={pathname} />
			<section className=' p-6'>{renderComponent()}</section>
		</main>
	);
};

export default Dashboard;
