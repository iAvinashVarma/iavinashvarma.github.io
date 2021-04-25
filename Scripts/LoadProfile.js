$().ready(function(){
    var year = $('#year');
    var date = new Date();
    var currentYear = date.getFullYear();
    if(currentYear < 1900) currentYear = currentYear + 1900;
    year.html(currentYear);
});