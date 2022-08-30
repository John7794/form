function testGS(e) {

    e.preventDefault();
    console.log();
    const body = {};
    var len = this.elements.length;
    var props = [
       'theme_report',
        'name_report',
        'surname',
        'name',
        'patronymic',
        'job',
        'job_post',
        'degree',
        'rank',
        'address',
        'phone',
        'email'
    ]

    for ( var i = 0; i < len - 1; i++ ) {
        body[props[i]] = this.elements[i].value;
    }

    console.log(body);

    const url = 'https://script.google.com/macros/s/AKfycbzOSHQIq69wpQtBqGOiEkm--NZJ-Po8vs6LaaFAjGwfV2c9o_l5Y0mJJIvqG6FTTNSp/exec';

    fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        // mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(body)
    });
}

document.getElementById('form').addEventListener('submit', testGS);
