$(function(){
    debugger;
    console.info('hello jquery!');
    var dateSet = [
        {
            data: $('499'), value: 499
        },
        {
            data: $('d180'), value: 180            
        },
        {
            data: $('120'), value: 120            
        },
        {
            data: $('105'), value: 105            
        },
        {
            data: $('90'), value: 90            
        },
        {
            data: $('75'), value: 75            
        },
        {
            data: $('60'), value: 60            
        },
        {
            data: $('45'), value: 45            
        },
        {
            data: $('30'), value: 30            
        }
    ]


    $('button').on('click', function(event) {
        event.preventDefault();
        var day = $('#day').val();
        var year = $('#year').val();
        var month = $('#month').val();
        var currentDate = new Date(year, month, day, 2);
        
        debugger;
        $.each(dateSet, function(index, element) {
            var newDate = new Date(year,month, day, 2);
            newDate.setTime(currentDate.getTime() - element.value * 86400000);
            var dateDisplay = (newDate.getMonth() + 1) + '/' + newDate.getDate() + '/' + newDate.getFullYear();
            $('#' + element.value).text(dateDisplay);            
        });

        // d180.val(currentDate.getDate()-180);
        // d120.val(currentDate.getDate()-120);
        // d105.val(currentDate.getDate()-105);
        // d90.val(currentDate.getDate()-90);
        // d75.val(currentDate.getDate()-75);
        // d60.val(currentDate.getDate()-60);
        // d45.val(currentDate.getDate()-45);
        // d30.val(currentDate.getDate()-30);
        
        console.log("Oh you want to calculate");


        return true;
    });
});