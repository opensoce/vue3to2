<template>
  <div id="app">
    <header>
      <router-link to="/">
        <h1><span>Horror</span>Hub</h1>
      </router-link>
    </header>
    <body>
      <router-view />
    </body>
  </div>
</template>
<script>
export default {};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Fira Sans", sans-serif;

  &::selection {
    background: transparentize($color: #a8b842, $amount: 0.5);
  }
}

body {
  background-color: #303030;
}

a {
  text-decoration: none;
}

header {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 16px;
  background-color: #202020;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);
}
h1 {
  color: #FFF;
  font-size: 28px;
  span {
    color: #880808;
  }
  &:active {
    background-color: #910000;
  }
}
</style>