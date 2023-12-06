const pantalla = document.querySelector('.pantalla');
const btn = document.querySelectorAll('.btn');


btn.forEach(btn => {
    btn.addEventListener("click" , () => {
        const btnApretado = btn.textContent;

        if(btn.id === "c") {
            pantalla.textContent = "0";
            return;
        }

        if(btn.id === "borrar") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "Error!") {
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = pantalla.textContent.slice (0, -1);
            }
            return;
        }

        if(btn.id === "igual"){
            try {
                pantalla.textContent = eval(pantalla.textContent)
            } catch {
                pantalla.textContent = "Error!" ;
            }

            return;
        }



        if (pantalla.textContent === "0" || pantalla.textContent === "Error!") {

            pantalla.textContent = btnApretado
        } else  {
            pantalla.textContent += btnApretado;
        }

    })
});