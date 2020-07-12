<template>
  <div>
    <p>500 Internal Server Error (Внутренняя ошибка сервера)</p>
    <button @click="machine.run('GO_BACK')">go back</button>
    
    <button @click="machine.run('SEND_USER_DATA')">попробовать еще раз отправить форму</button>
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