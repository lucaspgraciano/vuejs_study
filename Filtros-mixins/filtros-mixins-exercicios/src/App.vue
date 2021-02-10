<template>
	<div id="app">
		<h1>Filtros & Mixins</h1>
		<hr>
		<p>CPF: {{cpf | cpf}}</p>
		<p>RG: {{rg | rg}}</p>
		<p>FONE: {{fone | fone }}</p>
		<p>INVERTE: {{cpf | cpf | inverter}}</p>
		<input type="text" :value="cpf | cpf">
		<Frutas/>
		<div>
			<ul>
				<li v-for="fruta in frutas" :key="fruta">{{fruta}}</li>
			</ul>
			<input type="text" v-model="fruta" @keydown.enter="add">  	
		</div>
	</div>
</template>

<script>
import FrutasMix from './components/frutasMixin'
import Frutas from './components/frutas.vue'

export default {
	components: {Frutas},
	mixins: [FrutasMix],
	filters: {
		cpf(valor){
			const arr = valor.split('')
			arr.splice(3, 0, '.')
			arr.splice(7, 0, '.')
			arr.splice(11, 0, '-')
			return arr.join('')
		},
		rg(valor){
			const arr = valor.split('')
			arr.splice(2, 0, '.')
			arr.splice(6, 0, '.')
			arr.splice(9, 0, '-')
			return arr.join('')

		},
		fone(valor){
			const arr = valor.split('')
			arr.splice(2, 0, '+ (')
			arr.splice(5, 0, ') ')
			arr.splice(11, 0, '-')
			return arr.join('')
		}
	},
	data() {
		return {
			cpf: "44653864861",
			rg: "397133157",
			fone: "5517991853288",
		}
	},
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
input{
	font-size: 2rem;
}
</style>
