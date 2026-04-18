import { apiInitializer } from "discourse/lib/api";

const LINKS_CONTAINER_CLASS = "codex-header-links";

const HEADER_LINKS = [
  { href: "https://discord.gg/P8rSwN4s", label: "Discord" },
  { href: "https://boosty.to/neueerde", label: "Boosty" },
  { href: "https://forum.swall.space/", label: "Наш Сайт!" },
  { href: "https://www.google.com/maps", label: "Карта мира!" },
];

function buildLinksContainer(documentRef) {
  const container = documentRef.createElement("nav");
  container.className = LINKS_CONTAINER_CLASS;
  container.setAttribute("aria-label", "External links");

  HEADER_LINKS.forEach(({ href, label }) => {
    const link = documentRef.createElement("a");
    link.href = href;
    link.textContent = label;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    container.appendChild(link);
  });

  return container;
}

function ensureHeaderLinks() {
  const logo = document.querySelector("#site-logo");

  if (!logo) {
    return;
  }

  const logoWrapper = logo.closest(".title");

  if (!logoWrapper || logoWrapper.querySelector(`.${LINKS_CONTAINER_CLASS}`)) {
    return;
  }

  logoWrapper.appendChild(buildLinksContainer(document));
}

export default apiInitializer("1.8.0", (api) => {
  api.onPageChange(() => ensureHeaderLinks());
  queueMicrotask(() => ensureHeaderLinks());
});
