<template>
  <div class="column">
    Counter Name:
    <textarea class="margin-auto" rows="10" cols="50" v-model="counter_name" />
    <button
      :disabled="CheckSavaDisabled"
      class="button-primary margin-auto"
      type="button"
      @click.prevent="Save"
    >
      Set
    </button>
  </div>
</template>
<script>
import _ from "lodash";
import counterMixin from "../mixins/counter";

export default {
  name: "setting",
  mixins: [counterMixin],
  mounted() {
    this.$emit("setTitle", "Setting");
  },
  data() {
    return {};
  },
  computed: {
    CheckSavaDisabled() {
      return (
        sessionStorage.CounterName == this.counter_name ||
        this.counter_name == ""
      );
    },
  },
  methods: {
    Save() {
      sessionStorage.CounterName = _.replace(
        this.counter_name,
        /[^A-Za-z0-9\u4e00-\u9fa5]+/g,
        ","
      );
      alert("Set success!");
    },
  },
};
</script>