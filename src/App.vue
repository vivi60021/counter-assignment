<template>
  <router-view />
</template>
<script>
import _ from "lodash";
import counterName from "./models/counterName.json";
export default {
  name: "app",
  mounted() {
    this.SetStorage();
  },
  methods: {
    SetStorage() {
      if (_.isEmpty(sessionStorage.CounterName)) {
        sessionStorage.CounterName = counterName.counters;
      }
    },
  },
};
</script>

