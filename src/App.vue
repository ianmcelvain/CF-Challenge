<template>
  <div id="app">
    <Header />
    <vue-page-transition name="fade">
      <router-view/>
    </vue-page-transition>
  </div>
</template>

<script>
import Header from "./components/layout/Header";

export default {
  name: "App",
  components: {
    Header
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;700&display=swap');

body {
  margin: 0;
}

ul.is-horizontal li {
  display: inline;
}

ul.is-horizontal.block li {
  display: inline-block;
}

/* Redundant but this fixes not having 'inline-list item' for all browsers */
ul.is-horizontal.seperated li {
  display: inline-block;
}

ul.is-horizontal.seperated li:before {
  content: '\ffed';
  margin-right: 0.5em;
}

#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.bold {
  font-weight: bold;
}

.color-accent {
  color: #DFA928;
}

.clickable {
  cursor: pointer;
}

.hero {
  background: rgb(0,45,64);
  background: linear-gradient(327deg, rgba(0,45,64,1) 0%, rgba(78,154,146,1) 100%);
}

.hero.fullheight {
  min-height: 100vh;
}

.hero.medium {
  min-height: 30vh;
}

.hero.large {
  min-height: 70vh;
}

.hero.center-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.btn-secondary {
  color: white !important;
  background-color: rgba(0, 0, 0, 0) !important;
  border: 2px solid #DFA928 !important;
}

.btn-secondary:hover {
  background-color: #DFA928 !important;
}

.show > .btn-secondary.dropdown-toggle {
  background-color: #DFA928 !important;
}

.vm--modal {
  overflow: initial !important;
}

@media (max-width: 700px) {
  ul.is-horizontal.collapsable li {
    display: block !important;
  }
}

@media (max-width: 420px) {
  .search-icon {
    display: none !important;
  }
}
</style>
