// Cabeçalho
let cab = document.querySelector("#header-container");
cab.style.backgroundColor = '#0c6';

// Listas
for (let i of document.querySelectorAll(".emergency-tasks h3"))
    i.style.backgroundColor = '#d8d';

UT_BG = document.querySelector(".emergency-tasks");
UT_BG.style.backgroundColor = '#fbb';

for (let i of document.querySelectorAll(".no-emergency-tasks h3"))
    i.style.backgroundColor = '#111';

NU_BG = document.querySelector(".no-emergency-tasks");
NU_BG.style.backgroundColor = '#fc4';

//Footer
let fot = document.querySelector("#footer-container");
fot.style.backgroundColor = 'green';
