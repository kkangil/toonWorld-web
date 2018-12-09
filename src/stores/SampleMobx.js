// Sample Mobx store

import { observable, computed, action } from 'mobx'

class SampleMobxStore {
  @observable todos = []

  @computed
  get unfinishedTodoCount() {
    return this.todos.filter(todo => !todo.finished).length
  }

  @action
  addTodo(task) {
    this.todos.push({
      task: task,
      completed: false,
      assignee: null
    })
  }
}

export default SampleMobxStore
