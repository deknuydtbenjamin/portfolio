import { NavLink } from "react-router-dom";
import { navlinks } from "./index";
import type { NavLinkType } from "./index";

export default function Header() {
	return (
		<header className="bg-slate-800">
			<nav className="flex justify-center ">
				<ul className="flex flex-row gap-8 text-l bg-black text-white p-2 mt-8">
					{navlinks.map((elem: NavLinkType) => (
						<li key={elem.id}>
							<NavLink to={elem.link} className="hover:text-sky-400">
								{elem.label}
							</NavLink>
						</li>
					))}
				</ul>
			</nav>
			<div className=" flex flex-col items-center p-8 gap-2">
				<h2 className="text-2xl font-bold text-white">Benjamin Deknuydt</h2>
				<h1 className="text-2xl font-bold text-white">Developpeur Web</h1>
			</div>
		</header>
	);
}
