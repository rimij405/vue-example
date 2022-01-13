Vue.component('tabs', {
    template: `
        <div>
            <div class="tabs">
                <ul>
                    <li v-for="tab in tabs" :class="{ 'is-active': tab.isActive }">
                        <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
                    </li>
                </ul>
            </div>

            <div class="tabs-details">
                <slot></slot>
            </div>
        </div>
    `,
    data() {
        return {
            tabs: []
        }
    },
    mounted() {
        console.log(this.$children);
        this.$children.forEach(tab => console.log(tab.name));
    },
    created() {
        this.tabs = this.$children;
    },
    methods: {
        selectTab(target) {
            this.tabs.forEach(tab => {
                tab.isActive = (tab.name == target.name);
            });
        }
    }
})

Vue.component('tab', {
    props: {
        name: { required: true },
        selected: { required: false },
    },
    data() {
        return {
            isActive: false
        }
    },
    mounted() {
        this.isActive = this.selected;
    },
    computed: {
        slug() { return this.name.toLowerCase().replace(/ /g, "-"); },
        href() { return '#' + this.slug; }
    },
    template: `<div v-show="isActive"><slot></slot></div>`
})

const app = new Vue({
    el: "#root"
});