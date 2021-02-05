new Vue({
    el: '#app',
    data: {
        running: false,
        playerLife: 100,
        enemyLife: 100,
        qteCura: 3,
        logs:[]
    },
    computed: {
        hasResult(){
            return this.playerLife == 0 || this.enemyLife == 0
        }
    },
    methods: {
        startGame(){
            this.running = true
            this.playerLife = 100
            this.enemyLife = 100 
            this.qteCura = 3
            this.logs = []
        },
        attack(especial){
            this.hurt('enemyLife',7, 12, especial, 'Jogador', 'Inimigo', 'player')
            if(this.enemyLife > 0){
                this.hurt('playerLife',10, 15, false, 'Inimigo', 'Jogador', 'enemy')
            }
        },
        hurt(atr, min, max, especial, source, target, cls){
            const plus = especial ? 5 : 0
            const hurt = this.getRandom(min + plus, max + plus)
            this[atr] = Math.max(this[atr] - hurt, 0)
            this.registerLog(`${source} atingiu ${target} com ${hurt}.`, cls)
        },
        healAndHurt(){
            if(this.playerLife >= 100){
                this.registerLog(`Sua vida está cheia`, 'heal')
            }else if(this.qteCura){
                this.heal(5, 10)
                this.hurt('playerLifer', 10, 15, false, 'Inimigo', 'Jogador', 'enemy')
                --this.qteCura
            }else{
                this.registerLog(`Sua cura acabou!`, 'alert')
            }
        },
        heal(min, max){
            const heal = this.getRandom(min, max)
            this.playerLife = Math.min(this.playerLife + heal, 100)
            this.registerLog(`O jogador recuperou ${heal}.`, 'heal')
            
        },
        getRandom(min, max){
            const value = Math.random() * (max - min) + min
            return Math.round(value)
        },
        registerLog(text, cls){
            this.logs.unshift({text, cls})
        }
    },
    watch: {
        hasResult(value){
            if(value) this.running = false
        }
    }
})