import { defineStore } from "pinia";

const state = () =>({
  items: []
})

const getters = {};

const actions = {};

export const useTodoStore = defineStore('todoStore', {
  state,
  getters,
  actions
});