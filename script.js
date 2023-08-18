function loadAndDisplayJson() {
    $.ajax({
        url: 'data.json',
        dataType: 'json',
        success: function(data) {
            $("#jsonTree").empty();
            traverse(data, $("#jsonTree"));
            bindClickEvents();
        },
        error: function() {
            alert('Errore nel caricamento del JSON!');
        }
    });
}
function traverse(obj, parent) {
    if (Array.isArray(obj)) {
        for (let i = 0; i < obj.length; i++) {
            const li = $('<li>').appendTo(parent);
            if (typeof obj[i] === 'object') {
                if (Array.isArray(obj[i])) {
                    li.html(`<span class="bracket-icon">[]</span> Elemento ${i}`);
                } else {
                    li.html(`<span class="brace-icon">{}</span> Elemento ${i}`);
                }
                const ul = $('<ul>').appendTo(li);
                traverse(obj[i], ul);
            } else {
                li.html(`<i class="fas fa-tag"></i> Elemento ${i}: ${obj[i]}`);
            }
        }
    } else {
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                const value = obj[key];
                const li = $('<li>').appendTo(parent);
                if (typeof value === 'object') {
                    if (Array.isArray(value)) {
                        li.html(`<span class="bracket-icon">[]</span> ${key}`);
                    } else if (typeof value === 'object') {
                        li.html(`<span class="brace-icon">{}</span> ${key}`);
                        const ul = $('<ul>').appendTo(li);
                        traverse(value, ul);
                    } else {
                        li.html(`<i class="fas fa-tag"></i> ${key}: ${value}`);
                    }
                    const ul = $('<ul>').appendTo(li);
                    traverse(value, ul);
                } else {
                    li.html(`<i class="fas fa-tag"></i> ${key}: ${value}`);
                }
            }
        }
    }
}



function bindClickEvents() {
    $("#jsonTree li:has(ul)").on('click', function(event) {
        event.stopPropagation();
        $(this).toggleClass('expanded')
               .children('ul').slideToggle('fast');
    });
}
