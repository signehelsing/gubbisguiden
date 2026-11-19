// Hämtar alla bilder i bildspelet
let bilder = document.querySelectorAll (".bild");

// Håller reda på vilken bild som visas 
let aktuellBild = 0; 

// Vid klick på nästa pil 
document.getElementById ("nasta") .onclick = function() {
    bilder[aktuellBild].style.display = "none";
    aktuellBild = (aktuellBild + 1) % bilder.length;
    bilder[aktuellBild].style.display = "block";
};

// Vid klick på föregående pil 
document.getElementById ("forra") .onclick = function() {
    bilder[aktuellBild].style.display = "none";
    aktuellBild = (aktuellBild - 1 + bilder.length) % bilder.length;
    bilder[aktuellBild].style.display = "block";
};
