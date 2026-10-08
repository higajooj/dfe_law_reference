// Fills the home page's #doc-catalog with the list of documents, read from the
// sidebar (i.e. from SUMMARY.md), so there is no second list to maintain.
(() => {
    const catalog = document.getElementById('doc-catalog');
    const chapters = document.querySelector('mdbook-sidebar-scrollbox > ol.chapter');
    if (!catalog || !chapters) {
        return;
    }

    const normalize = text => text.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

    const filter = document.createElement('input');
    filter.type = 'search';
    filter.className = 'doc-catalog-filter';
    filter.placeholder = 'Filtrar documentos…';
    filter.setAttribute('aria-label', 'Filtrar documentos');
    catalog.appendChild(filter);

    const groups = [];
    let group = null;
    const startGroup = title => {
        group = { heading: null, list: document.createElement('ul'), entries: [] };
        if (title) {
            group.heading = document.createElement('h2');
            group.heading.textContent = title;
            catalog.appendChild(group.heading);
        }
        catalog.appendChild(group.list);
        groups.push(group);
    };

    // The first item is the link to this page itself.
    for (const item of Array.from(chapters.children).slice(1)) {
        if (item.classList.contains('part-title')) {
            startGroup(item.textContent);
            continue;
        }
        const link = item.querySelector(':scope > .chapter-link-wrapper > a[href]');
        if (!link) {
            continue;
        }
        if (!group) {
            startGroup(null);
        }
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = link.href;
        a.textContent = link.textContent;
        li.appendChild(a);
        group.list.appendChild(li);
        group.entries.push({ li, key: normalize(link.textContent) });
    }

    filter.addEventListener('input', () => {
        const terms = normalize(filter.value).split(/\s+/).filter(Boolean);
        for (const g of groups) {
            let visible = 0;
            for (const entry of g.entries) {
                const match = terms.every(term => entry.key.includes(term));
                entry.li.hidden = !match;
                if (match) {
                    visible++;
                }
            }
            g.list.hidden = visible === 0;
            if (g.heading) {
                g.heading.hidden = visible === 0;
            }
        }
    });
})();
