import photo from "../assets/image/benjamin.jpg";
export default function Profil() {
	return (
		<section className="flex items-center mr-10 ml-10 mt-5">
			<h2>PROFIL</h2>
			<img src={photo} alt=" benjamin" className="w-16" />
			<div>
				<p>
					Bonjour, je m'appelle Benjamin Deknuydt, Je suis actuellement en
					reconversion professionnelle et je me spécialise dans le développement
					web. Passionné par l'informatique et les nouvelles technologies, j'ai
					décidé de me lancer dans ce domaine afin de combiner ma rigueur et ma
					créativité pour résoudre des problèmes concrets.
				</p>

				<p>
					Actuellement en formation Developpeur Web, je développe des
					compétences solides en HTML, CSS, JavaScript, ainsi que dans des
					technologies modernes comme React, Node.js, etc. Mon objectif est de
					mettre à profit mes connaissances théoriques en situation réelle,
					c'est pourquoi je recherche activement une alternance à partir de
					février 2024.
				</p>

				<p>
					Dynamique, curieux et motivé, je suis prêt à apprendre et à m'investir
					pleinement dans un projet web, tout en apportant ma polyvalence et mon
					esprit d'équipe. Travailler en alternance serait pour moi une
					excellente occasion de consolider mes compétences et d'acquérir une
					expérience professionnelle enrichissante.
				</p>

				<p>
					Si vous êtes à la recherche d'un alternant passionné et déterminé pour
					rejoindre votre équipe, n'hésitez pas à me contacter. Je serai ravi de
					discuter plus en détail de la manière dont je peux contribuer à vos
					projets !{" "}
				</p>
			</div>
		</section>
	);
}
