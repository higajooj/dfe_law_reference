// Whole-document view: "<documento>/index.html?completo" shows every page of
// the document being read as a single page. The pages are the ones listed
// under the document in the sidebar (i.e. in SUMMARY.md), fetched and joined
// here, so nothing is generated twice at build time.
(() => {
    const chapters = document.querySelector('mdbook-sidebar-scrollbox > ol.chapter');
    const main = document.querySelector('#mdbook-content main');
    if (!chapters || !main) {
        return;
    }

    const [home, ...items] = Array.from(chapters.children);
    const activeItem = items.find(item => item.querySelector('.active'));
    const coverLink = activeItem && activeItem.querySelector(':scope > .chapter-link-wrapper > a[href]');
    if (!coverLink) {
        return;
    }

    const pageKey = url => {
        const { origin, pathname } = new URL(url);
        return origin + pathname.replace(/\/$/, '/index.html');
    };
    const coverUrl = pageKey(coverLink.href);
    const docRoot = coverUrl.slice(0, coverUrl.lastIndexOf('/') + 1);
    const fullUrl = coverUrl + '?completo';
    const isFull = new URLSearchParams(location.search).has('completo') && pageKey(location.href) === coverUrl;

    const toggle = document.createElement('li');
    toggle.className = 'chapter-item full-doc-toggle';
    const toggleLink = document.createElement('a');
    toggleLink.href = isFull ? coverUrl : fullUrl;
    toggleLink.textContent = isFull ? 'Ver por seções' : 'Documento completo';
    toggle.appendChild(toggleLink);
    home.after(toggle);

    if (!isFull) {
        return;
    }

    // "03-eventos/03-01-tipos-de-evento.html" -> "03-eventos-03-01-tipos-de-evento"
    const sectionId = key => key.slice(docRoot.length)
        .replace(/\.html$/, '')
        .replace(/(^|\/)index$/, '')
        .replace(/\//g, '-') || 'capa';

    const links = Array.from(activeItem.querySelectorAll('a[href]:not(.chapter-fold-toggle):not(.header-in-summary)'));
    const pages = [];
    const sections = new Map();
    for (const link of links) {
        const key = pageKey(link.href);
        if (!key.startsWith(docRoot) || sections.has(key)) {
            continue;
        }
        const id = sectionId(key);
        sections.set(key, id);
        pages.push({ key, id });
        link.href = fullUrl + '#' + id;
    }
    for (const item of [activeItem, ...activeItem.querySelectorAll('li.chapter-item')]) {
        item.classList.add('expanded');
    }

    document.documentElement.classList.add('full-doc');
    const status = document.createElement('p');
    status.className = 'full-doc-status';
    status.textContent = 'Carregando documento completo…';
    main.replaceChildren(status);

    const loadPage = async ({ key, id }) => {
        const response = await fetch(key);
        if (!response.ok) {
            throw new Error(`${response.status} ${key}`);
        }
        const page = new DOMParser().parseFromString(await response.text(), 'text/html');
        const section = document.createElement('section');
        section.className = 'full-doc-page';
        section.id = id;
        section.append(...document.adoptNode(page.querySelector('main')).childNodes);

        // Ids repeat across pages, so they are scoped to the page's section.
        for (const el of section.querySelectorAll('[id]')) {
            el.id = id + '--' + el.id;
        }
        for (const el of section.querySelectorAll('[src]')) {
            el.setAttribute('src', new URL(el.getAttribute('src'), key).href);
        }
        // Links to pages of this document become anchors into this page.
        for (const a of section.querySelectorAll('a[href]')) {
            const target = new URL(a.getAttribute('href'), key);
            const targetId = /^https?:$/.test(target.protocol) && sections.get(pageKey(target.href));
            if (targetId) {
                const fragment = decodeURIComponent(target.hash.slice(1));
                a.setAttribute('href', '#' + targetId + (fragment ? '--' + fragment : ''));
            } else {
                a.setAttribute('href', target.href);
            }
        }
        return section;
    };

    Promise.all(pages.map(loadPage)).then(loaded => {
        main.replaceChildren(...loaded);

        if (typeof hljs !== 'undefined') {
            for (const block of main.querySelectorAll('pre code:not(.language-mermaid)')) {
                hljs.highlightBlock(block);
                block.classList.add('hljs');
            }
        }
        if (typeof mermaid !== 'undefined') {
            mermaid.run({ nodes: main.querySelectorAll('.mermaid') });
        }

        const target = location.hash && document.getElementById(decodeURIComponent(location.hash.slice(1)));
        if (target) {
            target.scrollIntoView();
        }
    }).catch(error => {
        console.error(error);
        status.textContent = 'Não foi possível carregar o documento completo.';
    });
})();
