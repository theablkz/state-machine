<template>
  <div>
    <h2>card form</h2>
    <form @submit.prevent="machine.run('VALIDATE_CARD_FORM', card)">
      <label for="card">
      <p>card</p>
      <input type="text" id="card" />
    </label>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    machine: {
      type: Object,
      required: true,
    },
  },
}
</script>