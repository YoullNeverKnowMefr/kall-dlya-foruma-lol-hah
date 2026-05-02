import { apiInitializer } from "discourse/lib/api";

const LINKS_CONTAINER_CLASS = "codex-header-links";
const TOPIC_LINKS_CLASS = "codex-topic-links";
const MIKOR_BLOCK_CLASS = "codex-mikor-card";
const CATEGORY_HINT_PREFIX = "Create topics here";
const HIDDEN_CATEGORY_PATH = "/c/5-category/5";

const HEADER_LINKS = [
  { href: "https://discord.gg/P8rSwN4s", label: "Discord" },
  { href: "https://boosty.to/neueerde", label: "Boosty" },
  { href: "https://forum.swall.space/", label: "Наш Сайт!" },
  { href: "https://www.google.com/maps", label: "Карта мира!" },
];

const TOPIC_LINKS = [
  { href: "https://forum.swall.space/t/about-the-general-category/3", label: "про катягориб" },
  { href: "https://forum.swall.space/c/5-category/5", label: "New" },
  { href: "https://forum.swall.space/c/5-category/5", label: "правила" },
  { href: "/top", label: "Top" },
];

function buildLinksContainer(documentRef, links, className, isExternal = false) {
  const container = documentRef.createElement("nav");
  container.className = className;
  container.setAttribute("aria-label", "External links");

  links.forEach(({ href, label }) => {
    const link = documentRef.createElement("a");
    link.href = href;
    link.textContent = label;
    if (isExternal) {
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    }
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

  logoWrapper.appendChild(
    buildLinksContainer(document, HEADER_LINKS, LINKS_CONTAINER_CLASS, true)
  );
}

function replaceCategoryHintWithTopicLinks() {
  const hintSpan = Array.from(document.querySelectorAll(".category-description span"))
    .find((node) => node.textContent?.trim().startsWith(CATEGORY_HINT_PREFIX));

  if (!hintSpan) {
    return;
  }

  const container = hintSpan.parentElement;

  if (!container || container.querySelector(`.${TOPIC_LINKS_CLASS}`)) {
    return;
  }

  hintSpan.remove();
  container.appendChild(
    buildLinksContainer(document, TOPIC_LINKS, TOPIC_LINKS_CLASS, false)
  );
}

function hideCategoryOnHomepage() {
  if (window.location.pathname !== "/") {
    return;
  }

  document
    .querySelectorAll(`a[href="${HIDDEN_CATEGORY_PATH}"]`)
    .forEach((link) => {
      const categoryContainer = link.closest("tr, li, .category, .category-box, .category-list-item");
      if (categoryContainer) {
        categoryContainer.remove();
      }
    });
}

function ensureMikorCardOnHomepage() {
  const existingCard = document.querySelector(`.${MIKOR_BLOCK_CLASS}`);
  if (window.location.pathname !== "/") {
    existingCard?.remove();
    return;
  }

  if (existingCard) {
    return;
  }

  const mainOutlet = document.querySelector("#main-outlet");
  if (!mainOutlet) {
    return;
  }

  const card = document.createElement("section");
  card.className = MIKOR_BLOCK_CLASS;
  card.innerHTML = `
    <div class="codex-mikor-card__image" role="img" aria-label="mikor"></div>
    <div class="codex-mikor-card__caption">mikor</div>
  `;

  mainOutlet.prepend(card);
}

export default apiInitializer("1.8.0", (api) => {
  const applyCodexEnhancements = () => {
    ensureHeaderLinks();
    replaceCategoryHintWithTopicLinks();
    hideCategoryOnHomepage();
    ensureMikorCardOnHomepage();
  };

  api.onPageChange(() => applyCodexEnhancements());
  queueMicrotask(() => applyCodexEnhancements());
});
