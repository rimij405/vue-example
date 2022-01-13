Vue.component('modal', {
    props: [ 'title', 'body' ],
    template: `
    <div class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-content">
            <div class="box">
                <h1>{{ title }}</h1>
                <p>{{ body }}</p>
            </div>
            <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
        </div>
    </div>
    `
})

const app = new Vue({
    el: "#root",
    data: {
        showModal: false
    }
});