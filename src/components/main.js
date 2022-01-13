Vue.component('task-list', {
    template: `<div><task v-for="task in tasks">{{ task.description }}</task></div>`,
    data() {
        return {
            tasks: [
                { description: "Go to the store.", complete: true },
                { description: "Go to the bank.", complete: false },
                { description: "Go to the mall.", complete: true },
                { description: "Go to the farm.", complete: false },
                { description: "Go to the office.", complete: true },
            ]
        }
    }
});

Vue.component('task', {
    template: '<li><slot></slot></li>'
});

const app = new Vue({
    el: "#root"
});