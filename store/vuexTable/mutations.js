export default {
  add (state, { text }) {
    state.list.push({
      text,
      done: false
    })
  },
  pushRow (state, row) {
    state.list.push(
      row
    )
  },

  toggle (state, todo) {
    todo.done = !todo.done
  }
}
