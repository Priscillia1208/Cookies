let nomCookie = document.querySelector('#name');
let valeurCookie= document.querySelector('#valeur');
let btnCreer = document.querySelector('#btn-creer');
let btnAfficher= document.querySelector('#btn-afficher');




/*-----------Creation de la fonction affichage du cookie----------*/

/*seule bouton creer la première fois fonctionne pourquoi ? Le bouton semble apparaitre tjrs sur la meme div
crééer un changement d'id pour chaque nouvelle div crééer et relier ce tableau d'id au bouton
* tant que il y a creation de div, il y a creation de bouton*/

let id = document.body.children.length

function afficher (){
        let stockageId = [];
        //let id = document.body.children.length //ne se met pas à jour
        let newDiv = document.createElement('div');
        //newDiv.style.background = 'red';
        newDiv.setAttribute('id', 'newDivId' + id)
        stockageId.push(id);
        newDiv.classList.add('newDivCookie');
        newDiv.innerText= 'Nom: ' + nomCookie.value + ' ' + '\nValeur: '+ valeurCookie.value;
        let button= document.createElement('button');
        button.setAttribute('id', 'closeButton' + id);
        button.classList.add('closeButton');
        button.innerText= 'Fermer';

        document.querySelector('.main').appendChild(newDiv);
        document.querySelector('#newDivId' + id).appendChild(button);
        closeCookie(id)
        console.log(stockageId)
        id++;
        console.log(id)



}

/*-----------Creation de la fonction fermer du cookie----------*/
function closeCookie(id) {
    let btnFermetureCookie = document.querySelector('#closeButton'+ id);
    btnFermetureCookie.addEventListener('click', () => {
        //btnFermetureCookie.parentElement.remove()
        document.querySelector('#newDivId' +id).remove()
    })
}


/*-----------Creation de la fonction créer un cookie qui dure qq secondes, un message affiche cookie créer
 puis cookie supprimer----------*/

function createCookie (name, value) {
    btnCreer.addEventListener('click', () => {
        let date1Timestramp = Date.now()
        console.log(date1Timestramp)
        let date1 = new Date(date1Timestramp)
        console.log(date1)

        let date2Timestramp= date1Timestramp + 30000
        console.log(date2Timestramp)
        let date2 = new Date(date2Timestramp)
        console.log(date2)
        let newCookie = document.cookie = '${nomCookie.value}=${valeurCookie.value}; expires =${date2}; samesite=strict';
        let MessageCookie = document.createElement('p')
        MessageCookie.classList.add('messageCookie')
        while (newCookie.expires === true){
            MessageCookie.innerText += '\n Félicitation vous avez créez un cookie'
        }
        MessageCookie.innerText += '\n Votre cookie est arrivé à expiration'
    })

}



/*-------------Lancement du programme-------------------*/

function handleForm(e) {
    e.preventDefault();
    afficher()



}
btnAfficher.addEventListener('click', handleForm)







/*<button type="button" class="btn cancel" onclick="closeForm()">Fermer</button>*/





