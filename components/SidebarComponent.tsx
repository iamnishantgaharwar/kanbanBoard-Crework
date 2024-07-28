import React from 'react';
import {
	BellDot,
	ChartLine,
	ChevronsRight,
	CirclePlus,
	Home,
	Menu,
	Settings2,
	SquareKanban,
	Sun,
	Users,
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

interface SidebarComponentProps {
	pathname: string;
}

const SidebarComponent = (props: SidebarComponentProps) => {
	function SheetDemo() {
		return (
			<Sheet>
				<SheetTrigger asChild>
					<Button variant="outline" className="md:hidden mx-4 mt-6">
						<Menu />
					</Button>
				</SheetTrigger>
				<SheetContent side={'left'}>
					<div className="flex items-center mb-2">
						<div className="w-[31px] h-[31px] bg-primary text-primary-foreground flex justify-center items-center">
							NG
						</div>
						<h1 className="ml-2 text-xl font-medium">
							Nishant Gaharwar
						</h1>
					</div>
					<div className="flex justify-between items-center">
						<div className="flex">
							<BellDot className="w-6 h-6 mr-5" color="#666666" />
							<Sun className="w-6 h-6 mr-5" color="#666666" />
							<ChevronsRight
								className="w-6 h-6"
								color="#666666"
							/>
						</div>
						<div>
							<Button className="bg-primary">Logout</Button>
						</div>
					</div>
					<div className="mt-4 text-xl">
						<ul className="flex flex-col gap-1">
							<Link href="/dashboard">
								<li
									className={`${
										props?.pathname == '/dashboard'
											? 'font-bold'
											: ''
									} p-2 border rounded flex`}
								>
									<Home
										className="w-6 h-6 mr-5"
										color="#666666"
									/>
									Home
								</li>
							</Link>
							<Link href="/dashboard/board">
								<li
									className={`${
										props?.pathname == '/dashboard/board'
											? 'font-bold'
											: ''
									} p-2 border rounded flex`}
								>
									<SquareKanban
										className="w-6 h-6 mr-5"
										color="#666666"
									/>
									Board
								</li>
							</Link>
							<Link href="/dashboard/settings">
								<li
									className={`${
										props?.pathname == '/dashboard/settings'
											? 'font-bold'
											: ''
									} p-2 border rounded flex`}
								>
									<Settings2
										className="w-6 h-6 mr-5"
										color="#666666"
									/>
									Settings
								</li>
							</Link>
							<Link href="/dashboard/teams">
								<li
									className={`${
										props?.pathname == '/dashboard/teams'
											? 'font-bold'
											: ''
									} p-2 border rounded flex`}
								>
									<Users
										className="w-6 h-6 mr-5"
										color="#666666"
									/>
									Teams
								</li>
							</Link>
							<Link href="/dashboard/analytics">
								<li
									className={`${
										props?.pathname ==
										'/dashboard/analytics'
											? 'font-bold'
											: ''
									} p-2 border rounded flex`}
								>
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
					<footer className="mt-4 absolute bottom-2 left-2 right-0">
						<p className="text-xs text-gray-500">
							Made with ❤️ by{' '}
							<a
								target="_blank"
								href="https://nishantgaharwar.com"
								className="underline"
							>
								Nishant Gaharwar
							</a>
						</p>
					</footer>
				</SheetContent>
			</Sheet>
		);
	}

	return (
		<>
			<aside className="border w-[285px] pt-6 px-4 pb-8 hidden md:block">
				<div className="flex items-center mb-2">
					<div className="w-[31px] h-[31px] bg-primary text-primary-foreground flex justify-center items-center">
						NG
					</div>
					<h1 className="ml-2 text-xl font-medium">Nishant Gaharwar</h1>
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
				<div className="mt-4 text-xl">
					<ul className="flex flex-col gap-1">
						<Link href="/dashboard">
							<li
								className={`${
									props?.pathname == '/dashboard'
										? 'font-bold'
										: ''
								} p-2 border rounded flex`}
							>
								<Home className="w-6 h-6 mr-5" color="#666666" />
								Home
							</li>
						</Link>
						<Link href="/dashboard/board">
							<li
								className={`${
									props?.pathname == '/dashboard/board'
										? 'font-bold'
										: ''
								} p-2 border rounded flex`}
							>
								<SquareKanban
									className="w-6 h-6 mr-5"
									color="#666666"
								/>
								Board
							</li>
						</Link>
						<Link href="/dashboard/settings">
							<li
								className={`${
									props?.pathname == '/dashboard/settings'
										? 'font-bold'
										: ''
								} p-2 border rounded flex`}
							>
								<Settings2
									className="w-6 h-6 mr-5"
									color="#666666"
								/>
								Settings
							</li>
						</Link>
						<Link href="/dashboard/teams">
							<li
								className={`${
									props?.pathname == '/dashboard/teams'
										? 'font-bold'
										: ''
								} p-2 border rounded flex`}
							>
								<Users className="w-6 h-6 mr-5" color="#666666" />
								Teams
							</li>
						</Link>
						<Link href="/dashboard/analytics">
							<li
								className={`${
									props?.pathname == '/dashboard/analytics'
										? 'font-bold'
										: ''
								} p-2 border rounded flex`}
							>
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
				<footer className="mt-4 absolute bottom-2 left-2 right-0">
					<p className="text-xs text-gray-500">
						Made with ❤️ by{' '}
						<a
							target="_blank"
							href="https://nishantgaharwar.com"
							className="underline"
						>
							Nishant Gaharwar
						</a>
					</p>
				</footer>
			</aside>
			{SheetDemo()}
		</>
	);
};

export default SidebarComponent;
