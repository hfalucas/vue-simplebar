import VueSimplebar from './VueSimplebar'

const install = (Vue, options) => {
    if (options) {
        if (options.name && typeof options.name === 'string') {
            VueSimplebar.name = options.name
        }

        if (options.options && typeof options.options === 'object') {
            VueSimplebar.props.options.default = () => {
                return options.options
            }
        }

        if (options.tag && typeof options.tag === 'string') {
            VueSimplebar.props.tag.default = options.tag
        }
    }

    Vue.component(VueSimplebar.name, VueSimplebar)
}

export { VueSimplebar }
export default install

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(install)
}
