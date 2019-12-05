const app = new Vue({
    el: '#app',

    data: {
        YStart: 0,
        YEnd: 0
    },

    methods: {
        scrollTop () {
            this.$refs.scroll.scrollTop()
        },

        scrollBottom () {
            this.$refs.scroll.scrollBottom()
        }
    }
})
