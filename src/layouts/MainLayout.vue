<template>
  <div class="fixed-full fullscreen container">
    <div class="column">
      <header>{{ title }}</header>
      <router-view @setTitle="changeTitle" />
    </div>
  </div>
  <aside>
    <router-link to="/">
      <span class="material-icons"> home </span>
    </router-link>
    <div class="absolute-bottom">
      <router-link to="setting">
        <span class="material-icons"> settings </span>
      </router-link>
    </div>
  </aside>
</template>
<script>
export default {
  name: "main-layout",
  data() {
    return {
      title: "",
    };
  },
  methods: {
    changeTitle(t) {
      this.title = t;
    },
  },
};
</script>