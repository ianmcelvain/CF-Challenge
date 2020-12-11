<template>
  <div class="hero fullheight center-content">
      <Search v-on:query-search="onSearch" />
      <b-container class="departments mt-5">
        <b-row>
            <b-col md="8" offset-md="2">
              <b-container>
              <ul class="is-horizontal block">
                <li v-bind:key="department.id" v-for="department in departments" class="mr-5 mt-3">
                  <DepartmentCard v-on:department-filter="filterByDepartment" v-bind:department="department" />
                </li>
              </ul>
              </b-container>
            </b-col>
        </b-row>
    </b-container>
  </div>
</template>

<script>
import Search from "../components/Search";
import DepartmentCard from "../components/DepartmentCard";
import departmentsJson from "../assets/departments.json";
import results from '../assets/results.json';

export default {
  name: 'Home',
  components: {
    Search,
    DepartmentCard
  },
  data() {
    return {
      departments: departmentsJson
    }
  },
  methods: {
    onSearch(searchData) {
      this.$router.push({ name: 'Results', params: { outsideResults: searchData.results, searchedName: searchData.searchedName } });
    },
    filterByDepartment(department) {
      var directory = results.results;
      var filteredDirectory;
      if (department.name == 'All Departments') {
        filteredDirectory = directory;
      } else {
        filteredDirectory = directory.filter(employee => { return employee.department.toLowerCase().includes(department.name.toLowerCase()) });
      }
      this.$router.push({ name: 'Results', params: { outsideResults: filteredDirectory } });
    }
  }
}
</script>
