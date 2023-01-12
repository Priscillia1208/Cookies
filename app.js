let nomCookie = document.querySelector('#name');
let valeurCookie= document.querySelector('#valeur');
let btnCreer = document.querySelector('#btn-creer');
let btnAfficher= document.querySelector('#btn-afficher');

function afficher (){
        let newDiv = document.createElement('div');
        newDiv.style.background = 'red';
        newDiv.setAttribute('id', 'newDivId')
        newDiv.setAttribute('className', 'newDivCookie')
        newDiv.innerText= 'Nom: ' + nomCookie.value + ' ' + '\nValeur: '+ valeurCookie.value;
        let button= document.createElement('button');
        button.setAttribute('id', 'closeBUtton');
        button.setAttribute('className', 'closeButton');
        button.innerText= 'Fermer';
        document.querySelector('body').appendChild(newDiv);
        document.querySelector('#newDivId').appendChild(button);

}

function handleForm(e) {
    e.preventDefault();
    afficher()
}
btnAfficher.addEventListener('click', handleForm)

/*<button type="button" class="btn cancel" onclick="closeForm()">Fermer</button>*/





