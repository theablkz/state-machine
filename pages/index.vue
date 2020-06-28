<template>
  <div class="container">
    <component :is="machine.component" />
    <button @click="machine.run('VALIDATE_USER_DATA')">aaa</button>


  </div>
</template>

<script>
  import { Transition, Machine } from '~/state-controller'
export default {
    data: () => ({
      machine: new Machine(Transition)
    })
}
</script>

<style lang="scss">
</style>
