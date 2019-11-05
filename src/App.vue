<template>
  <div id="app">
    <div id="unindo">

      <div id="cabecalho">
        CANDIDATOS
        <button> 
          <router-link to="cadastrarCandidato">
            + Adicionar
          </router-link>
        </button>
      </div>

      <div id="dados">
        <table>
          <thead>
            <tr>
              <th>Candidato</th>
              <th>Idade</th>
              <th>Cidade</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="dado of dados" :key="dado.id_candidates">
              <td>{{ dado.name }}</td>
              <td>{{ dado.date_of_birth }}</td>
              <td>{{ dado.city }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default{
  data () {
    return {
      dados: {}
    }
  },
  mounted () {
    axios.get('http://127.0.0.1:8000/api/candidates')
      .then(response => {this.dados = response.data})
      .catch(e => {this.errors.push(e)})
  }
}
</script>

<style>
#cabecalho {
  font-family: Helvetica;
  text-align: left;
  font-size: 20px;
  color: #8DB5C1;
}
button{
  background-color: #8DB5C1;
  border-style: solid;
  color: aliceblue;
  border-radius: 8px; 
  padding: 5px;
  padding-right: 8px;
  padding-left: 8px;
}
</style>
