/*function createCookie (name, value) {
    //let date = new Date().getTime();
    let date1Timestramp = Date.now()
    console.log(date1Timestramp)
    let date1 = new Date(date1Timestramp)
    console.log(date1)

    let date2Timestramp = date1Timestramp + 30000
    console.log(date2Timestramp)
    let date2 = new Date(date2Timestramp)
    console.log(date2)
}*/

function createCookie (name, value) {
    btnCreer.addEventListener('click', () => {
        let date1Timestramp = Date.now()
        console.log(date1Timestramp)
        let date1 = new Date(date1Timestramp)
        console.log(date1)

        let date2Timestramp= date1Timestramp + 90000
        console.log(date2Timestramp)
        let date2 = new Date(date2Timestramp)
        console.log(date2)
        let newCookie = document.cookie = '${nomCookie.value}=${valeurCookie.value}; expires =${date2}; samesite=strict';
        let MessageCookie = document.createElement('p')
        MessageCookie.classList.add('messageCookie')
        MessageCookie.setAttribute('id', 'messageCookie')
        document.querySelector('body').appendChild(MessageCookie)
        while (newCookie.expires === true){
            MessageCookie.innerText += '\n Félicitation vous avez créez un cookie'
        }
        MessageCookie.innerText += '\n Votre cookie est arrivé à expiration'
    })}

createCookie('cookie', 12)


