<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    <h1>ghrtyt467678
      <span>afadfadf
        <p>65656565</p>
      </span>
    </h1>
  </div>
</template>
 <script>
   
 </script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#app{
  h1{
    color: red;
    span{
      background: darkcyan;
      font-size: 35px;
      p{
        color: darkgoldenrod;
        font-size: 25px;
      }
    }
  }

}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
