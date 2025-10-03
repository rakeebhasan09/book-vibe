import { Link, NavLink } from "react-router";

const Navbar = () => {
	const links = (
		<>
			<li>
				<NavLink
					to={"/"}
					className="text-[rgba(19,19,19,0.80)] text-[18px] py-[10px] px-5 hover:bg-transparent focus:!bg-transparent"
				>
					Home
				</NavLink>
			</li>
			<li>
				<NavLink
					to={"/listed-books"}
					className="text-[rgba(19,19,19,0.80)] text-[18px] py-[10px] px-5 hover:bg-transparent focus:!bg-transparent"
				>
					Listed Books
				</NavLink>
			</li>
			<li>
				<NavLink
					to={"/listed-books"}
					className="text-[rgba(19,19,19,0.80)] text-[18px] py-[10px] px-5 hover:bg-transparent focus:!bg-transparent"
				>
					Pages to Read
				</NavLink>
			</li>
		</>
	);
	return (
		<header className="bg-base-100 shadow-sm">
			<div className="container">
				<div className="navbar ">
					<div className="navbar-start">
						<div className="dropdown">
							<div
								tabIndex={0}
								role="button"
								className="mr-3 lg:hidden cursor-pointer"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-10 w-10"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h8m-8 6h16"
									/>
								</svg>
							</div>
							<ul
								tabIndex={0}
								className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
							>
								{links}
							</ul>
						</div>
						<Link
							to={"/"}
							className="text-[20px] md:text-[28px] font-bold"
						>
							Book Vibe
						</Link>
					</div>
					<div className="navbar-center hidden lg:flex">
						<ul className="menu menu-horizontal px-1 flex gap-2">
							{links}
						</ul>
					</div>
					<div className="navbar-end">
						<Link
							to={"/"}
							className="py-[12px] px-7 bg-[#23BE0A] rounded-lg text-white"
						>
							Sign In
						</Link>
						<Link
							to={"/"}
							className="py-[12px] px-7 bg-[#59C6D2] ml-4 rounded-lg text-white hidden md:block"
						>
							Sign Up
						</Link>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
