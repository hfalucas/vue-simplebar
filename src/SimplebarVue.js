import Simplebar from 'simplebar'

export default {
    name: 'simplebar-vue',

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
        lastScrollY: 0,
        lastScrollX: 0,
        reach: {}
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

        this.lastScrollY = Math.floor(this.el.scrollTop)
        this.lastScrollX = this.el.scrollLeft
        this.reach = {
            x: this.el.scrollLeft <= 0 ? 'start' : (this.el.scrollLeft >= this.contentWidth - this.containerWidth) ? 'end' : null,
            y: this.el.scrollTop <= 0 ? 'start' : (this.el.scrollTop >= this.contentHeight - this.containerHeight) ? 'end' : null
        }
    },

    beforeDestroy() {
        this.destroy()
    },

    methods: {
        init () {
            if (!(this.sb && this.$isServer)) {
                this.sb = new Simplebar(this.$refs.container, this.options);
                this.el.addEventListener('scroll', this.scrollListener);
            }
        },

        update () {
            if (this.sb) {
                this.sb.recalculate()
            }
        },

        scrollListener (event) {
            this.scrolling('y', this.el.scrollTop - this.lastScrollY)
            this.scrolling('x', this.el.scrollLeft - this.lastScrollX)


            this.lastScrollY = Math.floor(this.el.scrollTop)
            this.lastScrollX = this.el.scrollLeft
        },

        scrolling (axis, diff) {
            if (axis === 'y') {
                return this.processScrollDiff(diff, ['scrollHeight', 'clientHeight', 'scrollTop', 'y', 'up','down'])
            }

            return this.processScrollDiff(diff, ['scrollWidth', 'clientWidth', 'scrollLeft', 'x', 'left','right'])
        },

        processScrollDiff (diff, [contentHeight, containerHeight, scrollDirection, axis, start, end]) {
            this.reach[axis] = null;

            if (this.el[scrollDirection] < 1) {
                this.reach[axis] = 'start';
            }

            if (this.el[scrollDirection] >= this.el[contentHeight] - this.el[containerHeight]) {
                this.reach[axis] = 'end';
            }

            if (this.reach[axis] && diff) {
                this.$emit(`scroll-${axis}-reach-${this.reach[axis]}`)
            }
        },

        destroy () {
            if (this.sb) {
                this.el.removeEventListener('scroll', this.scrollListener);
                this.sb.unMount()
                this.sb = null
            }
        },

        scrollTop () {
           this.el.scrollTop = 0
        },

        scrollBottom () {
           this.el.scrollTop = this.$refs.container.scrollHeight
        },

        scrollTo(position = 0) {
           this.el.scrollTop = position
        }
    }
}
