import SimplebarVue from './SimplebarVue'

export function install (Vue, options) {
    if (options) {
        if (options.name && typeof options.name === 'string') {
            SimplebarVue.name = options.name
        }

        if (options.options && typeof options.options === 'object') {
            SimplebarVue.props.options.default = () => {
                return options.options
            }
        }

        if (options.tag && typeof options.tag === 'string') {
            SimplebarVue.props.tag.default = options.tag
        }
    }

    Vue.component(SimplebarVue.name, SimplebarVue)
}

export { SimplebarVue }
export default install
