<template>
    <div id="app">
        <h4 class="bg-primary text-white text-center p-2">
            {{name}}'s To Do List
        </h4>
        <div class="container-fluid p-4">
            <div class="row">
                <div class="col font-weight-bold">Task</div>
                <div class="col-2 font-weight-bold">Done</div>
            </div>
            <div class="row" v-for="t in tasks" v-bind:key="t.action">
                <div class="col">{{t.action}}</div>
                <div class="col-2">{{t.done}}</div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'app',
        data() {
            return {
                name: "Lucas",
                tasks: [{action: "Study Frontend", done: false},
                    {action: "Study Backend", done: false},
                    {action: "Study DevOps", done: false},
                    {action: "Study Machine Learning", done: true}]
            }
        }
    }
</script>