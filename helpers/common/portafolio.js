exports.hbsHelper = function (hbs, req, res) {

    hbs.registerHelper('portafolio', function (data) {
        var options = arguments[arguments.length - 1];
        var str  = '';
        var th   = '';
        
        // var cols   = columnas.split(' ');
        // for (var j = 0; j<cols.length; j++){
        //     th += '<th>' + cols[j].replace(/-/g, ' ') + '</th>';
        // }



        for (var i = 0; i < data.length; i++ ) {

            var carnet;
            var lastname;
            var name;

            str += '<div class="col-12 sm-col-6 lg-col-4 xl-col-3 p3 item">';
            str += '<div>';



            for (var key in data[i]) {

                if(key == 'carne'){
                    carnet =  data[i]['carne'];
                }

                if(key == 'apellido'){
                    lastname =  data[i]['apellido'];
                }

                if(key == 'nombre'){
                    name = data[i]['nombre'];
                }


            }
            
            str += '<a  class="ifx" title="Portafolio" onClick="showOverlay(\'/slide/user?carne=' + carnet +'\');">';
            str += '<div class="ifx-inner">';
            str +=  '<iframe src="/slide/user?carne=' + carnet + '" tabindex="-1" frameborder="no"></iframe>';
            str += '</div>';
            str += '</a>';
            str += '<h3 class="h4 caps mb0">';
            str += ' <p class="color-inherit text-decoration-none">';
            str +=  lastname;
            str +=  '<br>';
            str +=  name;
            str += '</p>';
            str += '</h3>';

            str += '</div>';
            str += '</div>';
        }

        str += '';

        return new hbs.SafeString (str);
    });
};
