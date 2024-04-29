<template>
  <v-app id="app">
    <v-main>
      <v-container fill-height fluid>
        <v-row align="center" justify="center">
          <v-col cols="4" md="5">
            <v-card class="pa-4" outlined tile>
              <v-card-title class="headline rounded-title">scegli tra 50 OGGETTI IL TUO PREFERITO</v-card-title>
              <v-card-subtitle>multi rounds dove scegliere</v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <TerceSelection />
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import TerceSelection from './components/TerceSelection.vue'
export default {
  name: 'App',
  components: {
    TerceSelection
  }
}
</script>

<style>
#app {
  font-family: 'Roboto', sans-serif;
  text-align: center;
  color: #2c3e50;
  background-color: #ADD8E6; /* Imposta il colore dello sfondo azzurro celeste */
}

.rounded-title {
  background-color: #B0E0E6; /* Imposta il colore dello sfondo azzurro più chiaro */
  border-radius: 15px; /* Imposta il bordo arrotondato */
  padding: 20px; /* Aggiunge spazio intorno al testo */
}

#app img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 2%;
}
</style>