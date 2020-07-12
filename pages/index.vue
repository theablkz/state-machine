<template>
  <div class="container">
    <div>
      <h2>тeкущее состояние: {{machine.state}}</h2>
    </div>
    <component :is="machine.component" :machine="machine" />
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
