<template>
  <main class="app">
    <div>
      <router-link to="/">
        Home
      </router-link>
      <router-link to="/about">
        About
      </router-link>
    </div>

    <transition name="route">
      <router-view />
    </transition>
  </main>
</template>

<style lang="scss">
html {
  height: 100%;

  body {
    display: contents;
    height: 100%;
  }
}

main.app {
  height: 100%;
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  &,
  * {
    box-sizing: border-box;
    display: grid;
    transition: all cubic-bezier(0.16, 1, 0.29, 0.99) 0.667s;
  }
}

.route-enter-active {
  animation: route-in cubic-bezier(0.16, 1, 0.29, 0.99) 0.667s;
}

@keyframes route-in {
  from {
    opacity: 0;
    transform: translateX(33%);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
