'use client';
import { Button } from '@/components/ui/button';
import {
	BellDot,
	ChartLine,
	ChevronsRight,
	CirclePlus,
	Home,
	Settings2,
	SquareKanban,
	Sun,
	Users,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { lazy } from 'react';
import HomePage from './home/page';

const Board = lazy(() => import('./board/page'));
const Settings = lazy(() => import('./settings/page'));
const Teams = lazy(() => import('./teams/page'));
const Analytics = lazy(() => import('./analytics/page'));

const Dashboard = () => {
	const pathname = usePathname();

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
			<aside className="border w-[285px] pt-6 px-4 pb-8">
				<div className=" flex items-center mb-2 ">
					<div className="w-[31px] h-[31px] bg-primary text-primary-foreground flex justify-center items-center">
						NG
						{/* <img
						className="w-16 h-16 rounded-full"
						src="https://randomuser.me/api/portraits/men/5.jpg"
						alt="Profile"
						width={31}
						height={31}
						/> */}
					</div>
					<h1 className=" ml-2 text-xl font-medium">
						Nishant Gaharwar
					</h1>
				</div>
				<div className="flex justify-between items-center">
					<div className="flex">
						<BellDot className="w-6 h-6 mr-5" color="#666666" />
						<Sun className="w-6 h-6 mr-5" color="#666666" />
						<ChevronsRight className="w-6 h-6" color="#666666" />
					</div>
					<div>
						<Button className="bg-primary">Logout</Button>
					</div>
				</div>
				<div className="mt-4 text-xl ">
					<ul className="flex flex-col gap-1">
						<Link href="/dashboard">
							<li className="p-2 border rounded flex">
								<Home
									className="w-6 h-6 mr-5"
									color="#666666"
								/>
								Home
							</li>
						</Link>
						<Link href="/dashboard/board">
							<li className=" p-2 border rounded flex">
								<SquareKanban
									className="w-6 h-6 mr-5"
									color="#666666"
								/>
								Board
							</li>
						</Link>
						<Link href="/dashboard/settings">
							<li className=" p-2 border rounded flex">
								<Settings2
									className="w-6 h-6 mr-5"
									color="#666666"
								/>
								Settings
							</li>
						</Link>
						<Link href="/dashboard/teams">
							<li className=" p-2 border rounded flex">
								<Users
									className="w-6 h-6 mr-5"
									color="#666666"
								/>
								Teams
							</li>
						</Link>
						<Link href="/dashboard/analytics">
							<li className=" p-2 border rounded flex">
								<ChartLine
									className="w-6 h-6 mr-5"
									color="#666666"
								/>
								Analytics
							</li>
						</Link>
					</ul>
				</div>
				<div>
					<Button className="mt-4 w-full">
						Create New Task <CirclePlus className="ml-2" />
					</Button>
				</div>
			</aside>
			<section>
				<h1>Dashboard</h1>
				{renderComponent()}
			</section>
		</main>
	);
};

export default Dashboard;
