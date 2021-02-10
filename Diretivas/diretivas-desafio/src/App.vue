<template>
	<div id="app">
		<h1>Diretivas (Desafio)</h1>
		<hr>
		<!-- Exercício -->
		<!-- Escreva uma diretiva que funcione com o v-on (escute eventos) -->
		<button v-quando:click="acao">EXECUTAR DIRETIVA</button>
		<p v-quando:mouseenter="mouseEnter" 
			v-quando:mouseleave="mouseLeave">TESTE MOUSE EVENT</p>
	</div>
</template>

<script>
export default {
	directives: {
		quando: {
			bind(el, bindig){
				//el.onclick = function(e) {
				//	bindig.value()
				//}

				const tipo = bindig.arg
				const fn = bindig.value
				el.addEventListener(tipo, fn)
			}
		}
	},
	methods: {
		acao(){
			alert('AÇÃO EXECUTADA')
		},
		mouseEnter(){
			alert('AÇÃO EXECUTADA')
		},
		mouseLeave(){
			alert('AÇÃO EXECUTADA 2')
		}
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}

button {
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	color: #FFF;
	background-color: #2196F3;
}
</style>
