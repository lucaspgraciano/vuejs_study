<template>
  <div class="usuario-detalhe">
      <h3>Usuário Detalhe</h3>
      <hr>
      <p><strong>Código:</strong> {{ id }}</p>
      <router-link tag="button" primario 
        :to="{ name: 'editarUsuario', params: {id}, query: {completo: true, lingua: 'pt-br'}, hash: '#rodape'}">Editar</router-link>
  </div>
</template>

<script>
export default {
    props: ['id'],
    beforeRouteEnter(to, from, next) {
        const autenticar = true
        autenticar ? next() : next(false)
    } 
    // data() {
    //     return {
    //         id: this.$route.params.id
    //     }
    // },
    // watch: {
    //     $route(to) {
    //         this.id = to.params.id
    //     }
    // },
}
</script>

<style>

</style>