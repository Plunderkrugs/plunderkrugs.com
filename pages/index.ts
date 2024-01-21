import { Route, html, meta } from "gateway";
import { footer } from "../templates/footer";
import { nav } from "../templates/nav";

export default class implements Route {
	head() {
		return html`
			${meta({
				title: "Plunderkrugs",
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
			<header class="hero">
				<h1>Plunderkrugs</h1>
				<h3>MOBA game characters, created by students.</h3>
			</header>
			<main>
				<section>
					<h2>Character Highlights</h2>
					<p>TODO</p>
				</section>
			</main>
			${footer}
		`;
	}
}
