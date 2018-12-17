$(() => {
    const main = $('#main');
    const content = {
        home: '<h2>This is the HOME page</h2>',
        about: '<h2>This is the ABOUT page</h2>',
        contact: '<h2>This is the CONTACT page</h2>'
    };

    loadContent();

    $(window).on('hashchange', loadContent)

    function loadContent() {
        let hash = location.hash.substr(2);
        if (hash === '') {
            hash = 'home';
            location.hash = '#/' + hash;
        }
        if (content.hasOwnProperty(hash)) {
            main.html(content[hash])
        } else {
            main.html('<h2>404 NOT FOUND</h2>')
        }

    }
})