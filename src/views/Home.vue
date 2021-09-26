<template>
  <div>
    <table class="table-counter" cellpadding="10">
      <thead>
        <tr>
          <th style="left: 0px; width: 75px">counter</th>
          <th style="left: 75px">processing</th>
          <th>processed</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in Object.keys(counter)" :key="counter[item].index">
          <td style="left: 0px; width: 75px">
            <span class="text-ellipsis" :title="item">
              {{ item }}
            </span>
          </td>
          <td style="left: 75px">
            <span
              class="text-ellipsis"
              :title="counter[item].processing ?? 'idle'"
            >
              {{ counter[item].processing ?? "idle" }}
            </span>
          </td>
          <td style="width: 100%">
            <span
              class="chip"
              v-for="(process, i) in counter[item].processed"
              :key="i"
            >
              {{ process }}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="row margin-auto">
      waitings:{{ waitings }}
      <div class="space"></div>
      <button
        class="button-primary"
        type="button"
        @click.prevent="
          next += 1;
          SetCounter();
        "
      >
        NEXT {{ next }}
      </button>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import _ from "lodash";
import counterMixin from "../mixins/counter";
export default {
  name: "Home",
  mixins: [counterMixin],
  mounted() {
    this.$emit("setTitle", "Counter Assignment");
    this.GetCounter();
  },
  data() {
    return {
      processed: 0,
      waitings: 0,
      next: 1,
    };
  },
  setup() {
    const counter = reactive({});
    return {
      counter, // 导出响应式数组
    };
  },
  methods: {
    GetCounter() {
      let arr = _.split(this.counter_name, ",");
      _.forEach(arr, (name, index) => {
        this.counter[name] = reactive({
          index: index + 1,
          processing: null,
          processed: [],
        });
      });
    },
    async SetCounter() {
      let keys = _.keys(this.counter);
      let idle_index = _.findIndex(
        _.values(this.counter),
        (item) => item.processing == null
      );
      if (idle_index > -1) {
        this.counter[keys[idle_index]].processing =
          this.next - this.waitings - 1;
        await this.SetProcessing(keys[idle_index]).then(async (v) => {
          if (!v) await this.SetCounter();
        });
      } else {
        this.waitings += 1;
      }
    },
    async SetProcessing(name) {
      return new Promise((resolve) => {
        let me = this;
        setTimeout(() => {
          me.counter[name].processed.push(this.counter[name].processing);
          me.counter[name].processing = null;
          if (me.waitings > 0) {
            me.waitings -= 1;
            resolve(false);
          }
          resolve(true);
        }, Math.random() * 1000 + 500);
      });
    },
  },
};
</script>
