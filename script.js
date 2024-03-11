const { createApp } = Vue;

createApp({

    data(){
        return{
            messaggio: 'Ciao',
            // BONUS 
            immagine: './gargantua.jpg',
            testo: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, rem.',
            contatore: 0,
            cambiaGiallo: 'giallo',
            isViola: true,
            isEven: false
        }
    },

methods:{
    incrementaContatore(){
        this.contatore++;
        if (this.contatore % 2 === 0){
            this.isEven = true;
           }else {
            this.isEven = false;
           }
    },

    cambiaColore(){
        this.isViola = !this.isViola;
    },

    
}

}).mount('#app');


