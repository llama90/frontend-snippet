<template>
    <div id="app">
        <h4 class="bg-primary text-white text-center p-2">
            {{name}}'s To Do List
        </h4>
        <div class="container-fluid p-4">
            <div class="row" v-if="filteredTasks.length == 0">
                <div class="col text-center">
                    <b>Nothing to do. Hurrah!</b></div>
            </div>
            <template v-else>
                <div class="row m-1">
                    <div class="col-sm font-weight-bold">Task</div>
                    <div class="col-sm-1 font-weight-bold text-center">Done</div>
                    <div class="col-sm-1"></div>
                </div>
                <div class="row m-1" v-for="t in filteredTasks" v-bind:key="t.action">
                    <div class="col">{{t.action}}</div>
                    <div class="col-sm-1 text-center">
                        <input type="checkbox" v-model="t.done" class="form-check-input"/>
                    </div>
                    <div class="col-sm-1 text-center"><button class="btn-primary">Delete</button></div>
                </div>
            </template>

            <ValidationObserver tag="div" v-slot="{ handleSubmit }">
                <form @submit.prevent="handleSubmit">
                    <div class="row py-2">
                        <div class="col-sm">
                            <ValidationProvider :rules="{required: true}" v-slot="{errors, failed}">
                                <input v-model="newItemText" class="form-control" :class="{ 'is-invalid': failed}"
                                       v-on:keyup.enter="enterKeypress"/>
                                <div class="invalid-feedback">{{errors[0]}}</div>
                            </ValidationProvider>
                        </div>
                        <div class="col-sm-1 text-center">
                            <button class="btn btn-primary" v-on:click="addNewTodo">Add</button>
                        </div>
                    </div>
                </form>
            </ValidationObserver>

            <div class="row bg-secondary py-2 mt-2 text-white">
                <div class="col text-center">
                    <input type="checkbox" v-model="hideCompleted" class="form-check-input"/> <label
                        class="form-check-label font-weight-bold">
                    Hide completed tasks
                </label>
                </div>
                <div class="col-sm-2 text-right">
                    <button class="btn btn-sm btn-warning" v-on:click="deleteCompleted"> Delete Completed</button>
                </div>
                <div class="col-sm-1 text-right">
                    <button class="btn btn-sm btn-danger" v-on:click="initializeTask">initializeTask</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {ValidationProvider, ValidationObserver, extend} from "vee-validate";
    import {required} from "vee-validate/dist/rules";

    extend("required", {
        ...required,
        message: "This field is required"
    });

    export default {
        name: 'app',
        components: {ValidationProvider, ValidationObserver},
        data() {
            return {
                name: "Lucas",
                tasks: [{action: "Study Frontend", done: false},
                    {action: "Study Backend", done: false},
                    {action: "Study DevOps", done: false},
                    {action: "Study Machine Learning", done: true}],
                hideCompleted: true,
                newItemText: ""
            }
        },
        computed: {
            filteredTasks() {
                return this.hideCompleted ? this.tasks.filter(t => !t.done) : this.tasks
            }
        },
        methods: {
            initializeTask() {
                localStorage.clear();
                this.tasks = [
                    {action: "Study Frontend", done: false},
                    {action: "Study Backend", done: false},
                    {action: "Study DevOps", done: false},
                    {action: "Study Machine Learning", done: true}
                ];
                this.storeData();
            },
            addNewTodo() {
                if (this.newItemText != "") {
                    this.tasks.push({
                        action: this.newItemText, done: false
                    });
                    this.storeData();
                    this.newItemText = "";
                }
            },
            storeData() {
                localStorage.setItem("todos", JSON.stringify(this.tasks));
            },
            deleteCompleted() {
                this.tasks = this.tasks.filter(t => !t.done);
                this.storeData();
            },
            enterKeypress() {
                this.addNewTodo();
            }
        },
        created() {
            let data = localStorage.getItem("todos");
            if (data != null) {
                this.tasks = JSON.parse(data);
            }
        }
    }
</script>