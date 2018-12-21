import Vue from 'vue'

export default Vue.extend({
    props: {
        id: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            playground: {}
        }
    }
})