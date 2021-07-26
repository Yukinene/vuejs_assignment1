<template>
  <div class="home">
        <AccountForm></AccountForm>
        <AccountTable></AccountTable>
  </div>
</template>

<script>
// @ is an alias to /src
import AccountTable from '@/components/AccountTable.vue'
import AccountForm from '../components/AccountForm.vue'

export default {
  name: 'Home',
  components: {
    AccountTable,
    AccountForm
  }
}
</script>
