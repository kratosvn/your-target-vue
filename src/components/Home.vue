<template>
    <div class="home">
        <h1>{{title}} for {{typeTarget}}</h1>
        <form @submit.prevent="handleSubmit">
            <div class="form-group row">
                <div class="col-sm-10">
                    <input type="text" v-model="form.name" class="form-control" id="target"
                           placeholder="Enter your target">
                </div>
            </div>
        </form>
        <div class="list-target">
            <ul>
                <li v-for="target in targets">
                    <target :name="target.name" :point="target.point"></target>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
  import { mapState, mapActions } from 'vuex'
  import Target from './Target'

  export default {
    name: "home",
    data () {
      return {
        form: {
          name: ''
        }
      }
    },
    computed: {
      ...mapState([
        'title',
        'targets',
        'typeTarget'
      ])
    },
    methods: {
      ...mapActions([
        'addTarget',
      ]),
      handleSubmit () {
        this.addTarget(this.form.name)
        this.form.name = ""
      }
    },
    components: {
      Target
    }
  }
</script>
<style>
    .list-target ul {
        list-style: none;
        padding: 0;
    }
</style>
