function(data) {
    $.log('stats/_init/data.js: ' + JSON.stringify(data.rows));

    var entry = [];
    var count = [];

    var rows = data.rows;
    var len=rows.length;
    for(var i=0; i<len; i++) {
        var row = rows[i];
        if (row.key == 'entry white') {
            entry.push({ label: row.key, data: row.value});
        };
        if (row.key == 'entry grey') {
            entry.push({ label: row.key, data: row.value});
        };
        if (row.key == 'count white') {
            count.push({ label: row.key, data: row.value});
        };
        if (row.key == 'count grey') {
            count.push({ label: row.key, data: row.value});
        };
    };

    var options;
    options = {
        series: {
            pie: {
                show: true
            }
        }
    };

    $.plot($("#entry-pie"),
           entry,
           options);

    $.plot($("#count-pie"),
           count,
           options);

    return { 'stats': data.rows };
}
