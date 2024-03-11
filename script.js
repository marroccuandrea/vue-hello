const { createApp } = Vue;

createApp({

    data(){
        return{
            messaggio: 'Ciao',
            // BONUS 
            immagine: './gargantua.jpg'
        }
    }

}).mount('#app');