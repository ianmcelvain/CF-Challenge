<template>
    <b-container class="search-results">
      <b-row>
          <b-col md="4" class="employee-card-col" v-bind:key="result.id" v-for="result in results">
            <b-container>
              <EmployeeCard v-bind:employee="result" />
            </b-container>
          </b-col>
      </b-row>
    </b-container>
</template>

<script>
import EmployeeCard from '../components/EmployeeCard';

export default {
    name: "EmployeesResult",
    components: {
        EmployeeCard
    },
    props: {
        results: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
.search-results {
  margin-top: -3.5rem;
}
</style>