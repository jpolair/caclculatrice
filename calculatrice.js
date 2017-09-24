let screenView = '';

/**
 * All the key numbers
 */
let number1 = document.getElementById('number1');
let number2 = document.getElementById('number2');
let number3 = document.getElementById('number3');
let number4 = document.getElementById('number4');
let number5 = document.getElementById('number5');
let number6 = document.getElementById('number6');
let number7 = document.getElementById('number7');
let number8 = document.getElementById('number8');
let number9 = document.getElementById('number9');
let number0 = document.getElementById('number0');
let leftParenthesis = document.getElementById('leftParenthesis');
let rightParenthesis = document.getElementById('rightParenthesis');

let view = document.getElementById('view');

/**
 * Reset method - with this method 'addEventListener' there is no javascript in the HTML Sheet.
 */
let reset = document.getElementById('reset');
reset.addEventListener('click', init);


let content = document.getElementById('content');
/**
 * All the operators and the separator
 */

let plus = document.getElementById('plus');
let moins = document.getElementById('moins');
let divise = document.getElementById('divise');
let multiply = document.getElementById('multiply');
let equal = document.getElementById('equal');
let separator = document.getElementById('separator');


function pressKey(element) {
    if (element != plus && element != moins && element != divise && element != multiply) {
     screenView += element.innerHTML;
        view.innerHTML = screenView;
        content.innerHTML = 'on ajoute à la string screenView ' + element.innerHTML ;
    } else {
     screenView = screenView + ' ' + element.innerHTML + ' ';
        view.innerHTML = screenView;
        content.innerHTML = 'on ajoute à la string screenView l\'opérateur ' + element.innerHTML;
    }
    return screenView;
}

function calcul() {
    let result;
    if  (screenView == '' ) {
     screenView = 0;
    } else if  (screenView[1] == '/' || screenView[1] == '*') {
        result = 'Erreur de saisie';
        view.innerHTML = result;
        content.innerHTML = 'Je vois que screenView commence par / ou * il y a donc une erreur je l\'affiche dans screenView';
     screenView  = '';
        return result;
    }
    result = eval(screenView);
    view.innerHTML = result;
    content.innerHTML  = 'On applique la méthode eval() à la string screenView ce qui donne ' + result;
    return result;
}

function init() {
 screenView = '';
    view.innerHTML = screenView + 0;
    content.innerHTML = 'la string screenView vaut \' \'\ + 0 j\'affiche donc un 0 dans la vue mais screenView reste une string'; 
}

function deleteLastKey() {
    let lastKey = screenView.length - 1;
    let deleted = screenView[screenView.length-1];
 screenView = screenView.substr(0,lastKey);
    view.innerHTML = screenView;
    content.innerHTML = 'On fait un substr sur la string screenView on enlève le dernier élément ' + deleted;
}