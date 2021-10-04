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
      waitings:{{ waitings.length }}
      <div class="space"></div>
      <button class="button-primary" type="button" @click.prevent="SetCounter">
        NEXT {{ next }}
      </button>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import _ from "lodash";
import { Subject } from "rxjs";
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
      waitings: [],
      next: 1,
      counter_subject: null,
      waitings_subject: null,
      processing: [],
      counter_available: [],
    };
  },
  setup() {
    const counter = reactive({});
    return {
      counter,
    };
  },
  methods: {
    GetCounter() {
      this.counter_available = _.split(this.counter_name, ",");
      _.forEach(this.counter_available, (name, index) => {
        this.counter[name] = reactive({
          index: index + 1,
          processing: null,
          processed: [],
        });
      });
      this.SetSubject();
    },
    SetSubject() {
      let subject = new Subject(null);
      this.counter_subject = subject.subscribe({
        next: (v) => {
          let index = this.counter_available.findIndex((i) => i == v);
          if (index > -1) this.counter_available.splice(index, 1);
          else this.counter_available.push(v);
        },
      });
      this.waitings_subject = subject.subscribe({
        next: (v) => {
          let index = this.waitings.findIndex((i) => i == v);
          if (index > -1) this.waitings.splice(index, 1);
          else this.waitings.push(v);
        },
      });
    },
    SetCounter() {
      if (this.counter_available.length > 0) {
        this.SetProcessing(this.counter_available[0], this.next);
        this.counter_subject.next(this.counter_available[0]);
      } else this.waitings_subject.next(this.next);
      this.next += 1;
    },
    SetProcessing(name, num) {
      let me = this;
      this.counter[name].processing = num;
      setTimeout(() => {
        me.counter[name].processed.push(this.counter[name].processing);
        me.counter[name].processing = null;
        if (me.waitings.length > 0) {
          me.counter[name].processing = me.waitings[0];
          me.SetProcessing(name, me.waitings[0]);
          me.waitings_subject.next(me.waitings[0]);
        } else me.counter_subject.next(name);
      }, Math.random() * 1000 + 500);
    },
  },
};
</script>
