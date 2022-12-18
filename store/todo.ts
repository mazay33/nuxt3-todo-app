import { defineStore } from "pinia";
import { v4 as uuid } from "uuid"

export interface Todo {
  id: string;
  title: string;
  done: boolean;
  createdAt: Date;
  updatedAt: Date;
}
export type Todos = Todo[] | undefined[];

export interface TodoAdd {
  title: string
}
export interface TodoUpdate {
  title?: string;
  done?: boolean;
}
export interface TodoState {
  items: Todos;
}

const state = (): TodoState => ({
  items: [],
});

const getters = {
  getById: (state: TodoState) => {
    return (id: string) =>
      state.items.find((item) => !!item && (item as Todo).id === id);
  },
  getOrderedTodos: (state: TodoState) => {
    return [...state.items].sort(
      (a, b) =>
        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    );
  },
};

const actions = {
  add(partialTodo: TodoAdd) {
    const todo: Todo = {
      id: uuid(),
      ...partialTodo,
      done: false,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.items.push(todo)
  },
  remove(id: string) {
    this.items = this.items.filter(todo => todo.id !== id)
  },
  update(id: string, update: TodoUpdate) {
    const index = this.items.findIndex((item) => item.id === id);
    this.items[index] = {
      ...this.items[index],
      ...update,
      updatedAt: new Date()
    }
  }
};

export const useTodoStore = defineStore('todoStore', {
  state,
  getters,
  actions
});