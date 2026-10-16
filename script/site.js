document.addEventListener('DOMContentLoaded', function () {
    var header = document.getElementById('site-header');
    var toggle = document.getElementById('nav-toggle');
    var nav = document.getElementById('site-nav');

    // Mobile menu
    function setMenu(open) {
        header.classList.toggle('nav-open', open);
        toggle.setAttribute('aria-expanded', open);
        toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
        toggle.innerHTML = '<i class="fa-solid ' + (open ? 'fa-xmark' : 'fa-bars') + '" aria-hidden="true"></i>';
    }

    toggle.addEventListener('click', function () {
        setMenu(!header.classList.contains('nav-open'));
    });

    nav.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () { setMenu(false); });
    });

    // Header starts see-through over the hero and turns solid once scrolled
    if (header.classList.contains('is-transparent')) {
        var onScroll = function () {
            header.classList.toggle('is-transparent', window.scrollY < 40);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }

    // Highlight the nav link for the section currently on screen
    var sectionLinks = nav.querySelectorAll('a[data-section]');
    if ('IntersectionObserver' in window && sectionLinks.length) {
        var spy = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;
                sectionLinks.forEach(function (link) {
                    link.classList.toggle('active', link.dataset.section === entry.target.id);
                });
            });
        }, { rootMargin: '-45% 0px -50% 0px' });

        document.querySelectorAll('main section[id]').forEach(function (section) {
            spy.observe(section);
        });
    }

    // Fade content in as it scrolls into view
    var reveals = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
        var revealer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('is-visible');
                revealer.unobserve(entry.target);
            });
        }, { rootMargin: '0px 0px -10% 0px' });

        reveals.forEach(function (el) { revealer.observe(el); });
    } else {
        reveals.forEach(function (el) { el.classList.add('is-visible'); });
    }
});
