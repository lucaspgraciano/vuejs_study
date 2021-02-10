<template>
	<div id="app">
		<h1>Diretivas</h1>
		<hr>
		<!-- <p v-nome:argumento.modificador1.modificadorN="...valores..."> </p>-->
		<p v-text="'Usando diretivas v-text'"></p>
		<p v-html="'Usando diretivas <strong>v-html</strong>'"></p>
		<p v-destaque>Usando diretiva personalizada 1</p>
		<p v-destaque2="cor">Usando diretiva personalizada 2</p>
		<p v-destaque2="'blue'">Usando diretiva personalizada 2</p>
		<p v-destaque3:fundo.atrasar="'yellow'">Usando diretiva personalizada 3</p>
		<p v-destaque3="'yellow'">Usando diretiva personalizada 3</p>
		<p v-diretiva-local="'purple'">Usando diretiva personalizado 4</p>
		<p v-diretiva-local:fundo.atrasa.alternar="cor">Usando diretiva personalizada 5</p>
		<p v-diretiva-local.atrasa.alternar="cor">Usando diretiva personalizada 5</p>
		<p v-diretiva-local.atrasa.alternar="{cor1: 'green', cor2: 'red', atraso: 2000, intervalo: 200}">Usando diretiva personalizada 5</p>


	</div>
</template>

<script>
export default {
	directives: {
		'diretiva-local':{
			bind(el, binding){
				const aplicarCor = cor => {
					if(binding.arg === 'fundo'){
						el.style.backgroundColor = cor
					} else {
						el.style.color = cor
					}
				}	

				let atraso = 0
				if(binding.modifiers['atrasa']) atraso = binding.value.atraso
				
				let cor1 = binding.value.cor1
				let cor2 = binding.value.cor2
				let corAtual = cor1

				setTimeout(() => {
					if(binding.modifiers['alternar']){
						setInterval(() => {
							corAtual = corAtual === cor1 ? cor2 : cor1
							aplicarCor(corAtual)
						}, binding.value.intervalo)
					} else {
						aplicarCor(binding.value)
					}
				}, atraso)
				
			}
		}
	},
	data() {
		return {
			cor: 'red'
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
