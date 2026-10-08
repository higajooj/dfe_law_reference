// Document catalog, read from the sidebar (i.e. from SUMMARY.md) so there is no
// second list to maintain. SUMMARY.md part titles are "<Categoria> · <Tipo>"
// and each category lives in its own folder, whose name is the category id.
(() => {
    const chapters = document.querySelector('mdbook-sidebar-scrollbox > ol.chapter');
    if (!chapters) {
        return;
    }

    const root = new URL(typeof path_to_root === 'string' && path_to_root ? path_to_root : './', document.baseURI);
    const normalize = text => text.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
    const documentLink = item => item.querySelector(':scope > .chapter-link-wrapper > a[href]');
    const splitPartTitle = title => {
        const [category, ...type] = title.split(' · ');
        return { category: category.trim(), type: type.join(' · ').trim() };
    };
    // First path segment below the book root, e.g. "nfe" for nfe/nt2026-010/index.html.
    const categoryId = link => {
        const path = new URL(link.href).pathname;
        return path.startsWith(root.pathname) ? path.slice(root.pathname.length).split('/')[0] : '';
    };

    // The first item is the link to the catalog itself.
    const [home, ...items] = Array.from(chapters.children);

    // While reading a document, the link back to the catalog names the
    // document's category and opens the catalog on it.
    const activeItem = items.find(item => item.querySelector('.active'));
    if (activeItem) {
        let part = activeItem.previousElementSibling;
        while (part && !part.classList.contains('part-title')) {
            part = part.previousElementSibling;
        }
        const homeLink = home && documentLink(home);
        const id = categoryId(documentLink(activeItem));
        if (part && homeLink && id) {
            homeLink.href = new URL('index.html#' + id, root).href;
            homeLink.textContent = splitPartTitle(part.textContent).category;
        }
    }

    const catalog = document.getElementById('doc-catalog');
    if (!catalog) {
        return;
    }

    // categories -> groups (one per document type) -> entries
    const categories = [];
    let category = null;
    let group = null;
    const startGroup = title => {
        const { category: name, type } = splitPartTitle(title);
        category = categories.find(c => c.name === name);
        if (!category) {
            category = { name, id: '', groups: [], panel: document.createElement('div'), tab: null };
            categories.push(category);
        }
        group = { heading: null, list: document.createElement('ul'), entries: [] };
        if (type) {
            group.heading = document.createElement('h2');
            group.heading.textContent = type;
            category.panel.appendChild(group.heading);
        }
        category.panel.appendChild(group.list);
        category.groups.push(group);
    };

    for (const item of items) {
        if (item.classList.contains('part-title')) {
            startGroup(item.textContent);
            continue;
        }
        const link = documentLink(item);
        if (!link) {
            continue;
        }
        if (!group) {
            startGroup('Documentos');
        }
        category.id = category.id || categoryId(link);
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = link.href;
        a.textContent = link.textContent;
        li.appendChild(a);
        group.list.appendChild(li);
        group.entries.push({ li, key: normalize(link.textContent) });
    }

    const tabs = document.createElement('div');
    tabs.className = 'doc-catalog-tabs';
    tabs.setAttribute('role', 'tablist');
    tabs.hidden = categories.length < 2;
    catalog.appendChild(tabs);

    const filter = document.createElement('input');
    filter.type = 'search';
    filter.className = 'doc-catalog-filter';
    filter.placeholder = 'Filtrar documentos…';
    filter.setAttribute('aria-label', 'Filtrar documentos');
    catalog.appendChild(filter);

    const applyFilter = () => {
        const terms = normalize(filter.value).split(/\s+/).filter(Boolean);
        for (const c of categories) {
            for (const g of c.groups) {
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
        }
    };
    filter.addEventListener('input', applyFilter);

    const select = selected => {
        for (const c of categories) {
            c.panel.hidden = c !== selected;
            c.tab.setAttribute('aria-selected', c === selected);
        }
    };
    const selectFromHash = () => {
        const id = decodeURIComponent(location.hash.slice(1));
        select(categories.find(c => c.id === id) || categories[0]);
    };

    for (const c of categories) {
        c.tab = document.createElement('button');
        c.tab.type = 'button';
        c.tab.setAttribute('role', 'tab');
        c.tab.textContent = c.name;
        c.tab.addEventListener('click', () => {
            history.replaceState(null, '', '#' + c.id);
            select(c);
        });
        tabs.appendChild(c.tab);
        c.panel.setAttribute('role', 'tabpanel');
        catalog.appendChild(c.panel);
    }

    if (categories.length) {
        selectFromHash();
        window.addEventListener('hashchange', selectFromHash);
    }
})();
