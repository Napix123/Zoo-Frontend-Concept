const provera = () => {
    let ime = $("#ime").val().length;
    let email = $("#email").val().includes("@");
    let poruka = $("#poruka").val().length;

    poruka = poruka > 0 ? true : false;
    ime = ime > 0 ? true : false;

    if (!ime) 
    {
        alert("Niste upisali ime!");
        $("#ime").css("background-color", "red");
        $("#ime").css("color", "white");
    }
    else 
    {
        $("#ime").css("background-color", "aqua-blue");
        $("#ime").css("color", "black");
    }

    if (!email) 
    {
        alert("Niste upisali email!");
        $("#email").css("background-color", "red");
        $("#email").css("color", "white");
    }
    else 
    {
        $("#email").css("background-color", "aqua-blue");
        $("#email").css("color", "black");
    }

    if (!poruka)
    {
        alert("Niste upisali poruku!");
        $("#poruka").css("background-color", "red");
        $("#poruka").css("color", "white");
    }
    else
    {
        $("#poruka").css("background-color", "aqua-blue");
        $("#poruka").css("color", "black");
    }

    if (ime && email && poruka) alert("Kontaktiracemo vas uskoro.");
}