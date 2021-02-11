<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>
		<b-alert show dismissible v-for="mensagem in mensagens" :key="mensagem" :variant="mensagem.tipo">{{ mensagem.texto }}</b-alert>
		<b-card>
			<b-form-group label="Nome:">
				<b-form-input type="text" size="lg" v-model="usuario.nome" placeholder="Infrome o nome"></b-form-input>
			</b-form-group>
			<b-form-group label="Email:">
				<b-form-input type="email" size="lg" v-model="usuario.email" placeholder="Infrome o email"></b-form-input>
			</b-form-group>
			<hr>
			<b-button @click="salvar" size="lg" variant="primary">Enviar</b-button>
			<b-button @click.prevent="obterUsuarios" size="lg" variant="secondary" class="ml-2">Obter dados</b-button>
		</b-card>
		<hr>
		<b-list-group>
			<b-list-group-item v-for="(usuario, id) in usuarios" :key="id">
				<strong>Nome: {{ usuario.nome }}</strong><br>
				<strong>Email: {{ usuario.email }}</strong><br>
				<strong>ID: {{ id }}</strong><br>
				<b-button variant="warning" size="lg" @click="carregar(id)">Carregar</b-button>
				<b-button variant="danger" size="lg" class="ml-2" @click="excluir(id)">Excluir</b-button>
			</b-list-group-item>
		</b-list-group>
	</div>
</template>

<script>
export default {
	data() {
		return {
			mensagens: [],
			usuarios: [],
			id: null,
			usuario: {
				nome: '',
				email: ''
			}
		}
	},
	methods: {
		obterUsuarios() {
			this.$http.get('usuarios.json').then(res => { this.usuarios = res.data })
		},
		limpar() {
			this.usuario.nome = ''
			this.usuario.email = ''
			this.id = null
			this.mensagens = []
		},
		carregar(id) {
			this.id = id
			this.usuario = { ...this.usuarios[id]}
		},
		excluir(id) {
			this.$http.delete(`/usuarios/${id}.json`)
			.then( ()  => {
				this.limpar() 
				this.obterUsuarios()
				this.mensagens.push({
					texto: 'Operação realizada com sucesso!',
					tipo: 'success' 
				})
			})
			.catch(err => {
				this.mensagens.push({
					texto: 'Problemas na exclusão.',
					tipo: 'danger'
				})
			})
		},
		salvar() {
			const metodo = this.id ? 'patch' : 'post'
			const finalURL = this.id ? `/${this.id}.json` : '.json'
			this.$http[metodo](`/usuarios${finalURL}`, this.usuario)
			.then(() => {
				this.limpar()
				this.mensagens.push({
					texto: 'Operação realizada com sucesso!',
					tipo: 'success' 
					})
				})
		},
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
}
</style>
