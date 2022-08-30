function testGS(e) {

    e.preventDefault();

    const url = 'https://script.google.com/macros/s/AKfycbzOSHQIq69wpQtBqGOiEkm--NZJ-Po8vs6LaaFAjGwfV2c9o_l5Y0mJJIvqG6FTTNSp/exec';

    fetch(url)
        .then(d => d.json())
        .then(d => {
            document.getElementById('app').textContent = d[0].status;
            alert(d[0].status);
        });
}

document.getElementById('btn').addEventListener('click', testGS);
