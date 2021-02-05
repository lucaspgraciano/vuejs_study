new Vue({
    el: '#desafio',
    data:{
        nome: 'Lucas',
        idade: 20,
        link: "https://image.freepik.com/vetores-gratis/guerreiro-samurai_157713-74.jpg",
        
    },
    methods: {
        numRand: function(){
            return Math.random()
        }
    }
})