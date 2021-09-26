import _ from 'lodash';
export default {
    name: 'counter-mixin',
    created() {
        this.GetStorage();
    },
    data() {
        return {
            counter_name: [],
        }
    },
    methods: {
        GetStorage() {
            if (!_.isEmpty(sessionStorage.CounterName))
                this.counter_name = _.split(sessionStorage.CounterName, ',')
        },
        Number_forEach(maxNum, func) {
            for (var num = 0; num < maxNum; num++) {
                func(num)
            }
        }
    }
}