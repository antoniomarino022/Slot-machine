// PUNTO I SEGUENTI TAG HTML
const result = document.getElementById('risultato');
const btnGioca = document.getElementById('gioca');
const btnRestart = document.getElementById('restart');


function slotMachine() {

    let array = ['🍒', '🍊', '🍇', '🍉'];
    
    btnGioca.addEventListener('click', () => {

        // ASSEGNO AI SIMBOLI UN'ELEMENTO CASSUALE DELL'ARRAY
            const symbol1 = array[Math.floor(Math.random() * array.length)];
            const symbol2 = array[Math.floor(Math.random() * array.length)];
            const symbol3 = array[Math.floor(Math.random() * array.length)];
    
            // PUNTO I SEGUENTI TAG HTML E GLI ASSEGNO IL CONTENUTO DELLE SEGUENTI VARIABILI
            document.getElementById('simbolo1').textContent = symbol1;
            document.getElementById('simbolo2').textContent = symbol2;
            document.getElementById('simbolo3').textContent = symbol3;
    
            // FACCIO LA COMBINAZIONE VINCENTE
            if (symbol1 === symbol2 && symbol2 === symbol3) {
                result.textContent = 'Hai vinto ';
            } else {
                result.textContent = 'Hai perso, ritenta';
            }
         
       
       
    });

    // EVENTO PER FAR RIPARTIRE IL GIOCO
    btnRestart.addEventListener('click', () => {


        // PUNTO I SEGUENTI TAG HTML E GLI ASSEGNO IL CONTENUTO DELLE SEGUENTI VARIABILI
        document.getElementById('simbolo1').textContent = '🍊';
        document.getElementById('simbolo2').textContent = '🍉';
        document.getElementById('simbolo3').textContent = '🍒';

        result.textContent = '';
    });
    
}
slotMachine();

