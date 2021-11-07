import { createStore } from 'vuex'
export default function ({
    _modules,
    persistence
}) {
    return createStore({
        modules: _modules,
        plugins: [persistence.plugin]
    })
}

