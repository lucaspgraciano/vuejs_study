<template>
	<div id="app">
		<h1>Filtros & Mixins (Desafio)</h1>
		<p>{{  frase | espacoVirgula}}</p>
		
		<p>{{ frase | contaPalavras}}</p>

		<p>{{ fraseComVirgulas }}</p>
		<p>{{ fraseComTamanhos }}</p>

		<!-- Exercício 4 -->
		<!-- Compartilhe a propriedade computada via mixin -->
	</div>
</template>
	
<script>
import MixIn from './mixIn'
export default {
	mixins: [MixIn],
	filters: {
		espacoVirgula(valor) {
			return valor.replace(/\s/g, ',')
		}
	},
	data() {
		return{
			frase: 'Frase de teste do desafio.'
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
</style>
