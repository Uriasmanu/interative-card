

function submit(){
    
    

    //Seletor de avaliação

    var nota = document.getElementsByName("nota");

    var star = document.getElementById("miniText")

    if (nota[0].checked){
        star.innerHTML = `You selected 1 out of 5`;
        
    }
    else if (nota[1].checked){
        star.innerHTML = `You selected 2 out of 5`;
    }
    else if (nota[2].checked){
        star.innerHTML = `You selected 3 out of 5`;
    }
    else if (nota[3].checked){
        star.innerHTML = `You selected 4 out of 5`;
    }

    else if (nota[4].checked){
        star.innerHTML = `You selected 5 out of 5`;
    }

    //interações realizadas apos submeter a avaliação

    var titulo = document.getElementById("titulo").innerHTML = "Thank You!";

    var subText = document.getElementById("sub-text").innerHTML = "We appreciate you taking the time to give a rating is you ever need more support, don't hesitate to get in touch!";

    var remove1 = document.getElementById( "score");
    remove1.parentNode.removeChild( remove1 );

    var remove2 = document.getElementById( "submit");
    remove2.parentNode.removeChild( remove2 );

    var remove3 = document.getElementById( "star");
    remove3.parentNode.removeChild( remove3 );

    var remove4 = document.getElementById( "starss");
    remove4.parentNode.removeChild( remove4 );

    //Interligando as classes do card resultado e acessar a formatação

    var obg = document.querySelector("#titulo");
    obg.classList.add("obrig");

    var agrad = document.querySelector("#sub-text");
    agrad.classList.add("agrad");

    var avalia = document.querySelector("#miniText");
    avalia.classList.add("avalia");

    var imgObg = document.querySelector("#imgg");
    imgObg.classList.add("imgObg");
}

