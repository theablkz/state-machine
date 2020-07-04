<template>
  <div>
    <form @submit.prevent="machine.run('VALIDATE_USER_DATA', machine.userForm)">
      <label v-for="item in machine.userForm" :key="item.id" :for="item.id">
        <p :class="{ field_error: item.error }">{{ item.id }}</p>
        <input v-model="item.value" type="text" :id="item.id" />
      </label>

      <input type="submit" value="next" />
    </form>
  </div>
</template>

<script>
export default {
  name: 'userForm',
  props: {
    machine: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
.field_error {
  color: red;
}
</style>
