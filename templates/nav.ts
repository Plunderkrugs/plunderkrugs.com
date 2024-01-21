import { html } from "gateway";

const links = [
	{
		title: "Home",
		url: "/",
	},
	{
		title: "Gallery",
		url: "/gallery",
	},
	{
		title: "Teams",
		url: "/teams",
	},
	{
		title: "Contact",
		url: "/contact",
	},
];

export const nav = html`
	<nav>
		<a href="/">
			<img src="/img/logo.webp" />
		</a>
		${links.map((link) => html`<a href="${link.url}">${link.title}</a>`)}
	</nav>
`;
