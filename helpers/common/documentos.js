exports.hbsHelper = function (hbs, req, res) {

    hbs.registerHelper('documentos', function (data, columnas) {
        var options = arguments[arguments.length - 1];
        var str  = '<table class="table table-hover">';
        var th   = '';
        
        var cols   = columnas.split(' ');
        for (var j = 0; j<cols.length; j++){
            th += '<th>' + cols[j].replace(/-/g, ' ') + '</th>';
        }

        str +='<thead><tr>'+ th+
              '</thead>';

        for (var i = 0; i < data.length; i++ ) {
            str += '<tr>';

            var file, name, size;

            for (var key in data[i]) {

                if(key == 'file'){
                    file =  '<td> <a href="#" onClick="showOverlay(\'/viewer/doc?file='+ data[i]['file'] + '\');">'+ data[i]['file'] + '</a></td>';
                }

                if(key == 'name'){
                    name =  '<td>' + data[i]['name'] + '</td>';
                }

                if(key == 'size'){
                    size =  '<td>' + data[i]['size'] + ' Mb </td>';
                }
            }
            str += file + name + size+ '</tr>';
        }

        str += '</table>';

        return new hbs.SafeString (str);
    });
};
