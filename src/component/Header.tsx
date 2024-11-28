import { NavLink } from "react-router-dom";
export default function Header() {
	return (
		<header className="bg-slate-800">
			<nav className="flex justify-center ">
				<ul className="flex flex-row gap-8 text-l bg-black text-white p-2 mt-8">
					<li>
						<NavLink to={""} className="hover:text-sky-400">
							Accueil
						</NavLink>
					</li>
					<li>
						<NavLink to={""} className="hover:text-sky-400">
							Profil
						</NavLink>
					</li>
					<li>
						<NavLink to={""} className="hover:text-sky-400">
							Projet
						</NavLink>
					</li>
					<li>
						<NavLink to={""} className="hover:text-sky-400">
							Contact
						</NavLink>
					</li>
				</ul>
			</nav>
			<div className=" flex flex-col items-center p-8 gap-2">
				<h2 className="text-2xl font-bold text-white">Benjamin Deknuydt</h2>
				<h1 className="text-2xl font-bold text-white">Developpeur Web</h1>
			</div>
		</header>
	);
}
