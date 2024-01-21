import { Route, html, meta } from "gateway";
import { footer } from "../templates/footer";
import { nav } from "../templates/nav";

const filters = [
	"Concept Art",
	"Software Engineering",
	"Marketing",
	"Sound Design",
	"Illustration",
	"UX/UI",
	"VFX",
	"Game Design",
	"Leads",
	"Producer",
].map(
	(filter) => html`
		<label>
			<input type="checkbox" id="${filter}" />
			${filter}
		</label>
	`
);

export default class implements Route {
	head() {
		return html`
			${meta({
				title: "Meet Our Team • Plunderkrugs",
				description: "MOBA game characters, created by students.",
			})}
			<link rel="preload" as="image" href="/img/hero.webp" />
			<link rel="preload" as="image" href="/img/logo.webp" />
			<link rel="stylesheet" href="/css/style.css" />
		`;
	}

	body() {
		return html`
			${nav}
			<header class="hero half">
				<h2>Meet Our Team</h2>
			</header>
			<main>
				<section>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
						dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
						ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
						nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
						anim id est laborum.
					</p>
					<hr />
					<h3>Filters</h3>
					<form class="filters">${filters}</form>
					<p>TODO</p>
				</section>
			</main>
			${footer}
		`;
	}
}
