window.onload = function() {
        var button = document.getElementById("btn");
        var httpRequest = new XMLHttpRequest();
        var url = "superheroes.php";
        button.addEventListener("click", function(e) {
            e.preventDefault();
            httpRequest.onreadystatechange = request();
            httpRequest.open('GET', url);
            httpRequest.send();
        });

        function request() {
            if (httpRequest.readyState === XMLHttpRequest.DONE) {
                if (httpRequest.status === 200) {
                    var response = httpRequest.responseText;
                    alert(response);
                } else { alert('There was a problem with the request.'); }
            }
        }
    }
    /*var url = "superheroes.php?query=" + inputmessage; 
    var inputmessage = document.getElementById("query");*/