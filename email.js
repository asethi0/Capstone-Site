window.onload = function() {
    document.getElementById("form").onsubmit = function(e) {
        e.preventDefault();
    
        let form = document.getElementById("form");
        let subject = document.getElementById("subject").value;
        let body = document.getElementById("body").value;
    
        window.location.assign('mailto:mcraney129@gmail.com?subject='+ subject  + '&body=' + body);
    }
}
