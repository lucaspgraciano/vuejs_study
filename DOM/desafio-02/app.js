new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods:{
        alert(){
            alert('Estou te alertando')
        },
        des2(event){
            this.valor = event.target.value
        }
    }
})