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
        if(!props[i]) continue;
        body[props[i]] = this.elements[i].value;
    }

    console.log(body);

    const url = 'https://script.google.com/macros/s/AKfycbzOSHQIq69wpQtBqGOiEkm--NZJ-Po8vs6LaaFAjGwfV2c9o_l5Y0mJJIvqG6FTTNSp/exec';

    fetch(url, {
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        credentials: 'omit',
        headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow',
        // referrerPolicy: 'no-referrer',
        body: JSON.stringify(body)
    });
}

document.getElementById('form').addEventListener('submit', testGS);
