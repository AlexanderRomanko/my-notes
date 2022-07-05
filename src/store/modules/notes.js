export default ({
    state: {
        notes: JSON.parse(localStorage.getItem('notes') || '[]').map(n => {
            if (new Date(n.date) < new Date() && n.status !== 'completed') {
                n.status = 'outdated'
            }
            return n
        })
    },
    getters: {
        noteList: s => s.notes,
        noteById: s => id => s.notes.find(n => n.id === id)
    },
    mutations: {
        createNote(state, note) {
            state.notes.push(note)
            localStorage.setItem('notes', JSON.stringify(state.notes))
        },
        updateNote(state, {id, description, date}) {
            const index = state.notes.findIndex(i => i.id === id)
            state.notes[index].description = description
            state.notes[index].date = date
            state.notes[index].status = new Date(date) < new Date() ? 'outdated' : 'active'
            localStorage.setItem('notes', JSON.stringify(state.notes))
        },
        completeTask(state, id) {
            const index = state.notes.findIndex(i => i.id === id)
            state.notes[index].status = 'completed'
            localStorage.setItem('notes', JSON.stringify(state.notes))
        }
    },
    actions: {
        createNote({commit}, note) {
            commit('createNote', note)
        },
        updateNote({commit}, {id, description, date}) {
            commit('updateNote', {id, description, date})
        },
        completeTask({commit}, id) {
            commit('completeTask', id)
        }
    },
    modules: {
    }
})
