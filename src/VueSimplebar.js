import Simplebar from 'simplebar'
import ScrollMovement from './ScrollMovement'

export default {
    name: 'vue-simplebar',

    props: {
        options: {
            type: Object,
            required: false,
            default: () => {}
        },

        tag: {
            type: String,
            required: false,
            default: 'section'
        }
    },

    data: () => ({
        sb: null,
    }),

    computed: {
        el () {
            return this.sb.getScrollElement()
        }
    },

    render (h) {
        return h(this.tag, {
            ref: 'container',
            on: this.$listeners
        }, this.$slots.default)
    },

    mounted() {
        this.init()
        this.scroll = new ScrollMovement(this.el, this)
    },

    beforeDestroy() {
        this.destroy()
    },

    methods: {
        /**
         * Initializes the simplebar
         *
         * @return {void}
         */
        init () {
            if (!(this.sb && this.$isServer)) {
                this.sb = new Simplebar(this.$refs.container, this.options);
                this.el.addEventListener('scroll', this.scrollListener);
            }
        },

        /**
         * Listens for the scroll event
         *
         * @return {void}
         */
        scrollListener () {
            this.scroll.onScroll()
        },

        /**
         * Removes all listeners and unmounts the simplebar plugin
         *
         * @return {void}
         */
        destroy () {
            if (this.sb) {
                this.el.removeEventListener('scroll', this.scrollListener);
                this.sb.unMount()
                this.sb = null
            }
        },

        /**
         * Helper method to set the scroll at top of the container
         *
         * @return {void}
         */
        scrollTop () {
           this.el.scrollTop = 0
        },

        /**
         * Helper method to set the scroll at the bottom of the container
         *
         * @return {void}
         */
        scrollBottom () {
           this.el.scrollTop = this.el.scrollHeight
        },

        /**
         * Helper method to set the scroll in the given position
         *
         * @param  {Number} position
         * @return {void}
         */
        scrollTo(position = 0) {
           this.el.scrollTop = position
        }
    }
}
