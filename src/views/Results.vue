<template>
  <div>
    <PopRouteIcon />
    <div class="hero large center-content">
      <Search v-on:query-search="onSearch" v-bind:searchedName="searchedName" />
      <div class="mt-5">
        <b-dropdown :text="filteredDepartment.name" class="m-md-2" variant="secondary">
            <b-dropdown-item @click="applyFilter(department)" v-bind:key="department.id" v-for="department in departments">{{ department.name }}</b-dropdown-item>
        </b-dropdown>
      </div>
    </div>
    <EmployeesResult v-bind:results="searchResults" />
  </div>
</template>

<script>
import EmployeesResult from '../components/EmployeesResult';
import Search from '../components/Search';
import PopRouteIcon from '../components/PopRouteIcon';
import departments from '../assets/departments.json';

export default {
  name: "Results",
  components: {
    Search,
    EmployeesResult,
    PopRouteIcon
  },
  data() {
    return {
      nameFilterResults: [],
      searchResults: [],
      departments: [],
      filteredDepartment: {
        id: 0,
        name: 'All Departments'
      }
    }
  },
  props: {
    searchedName: {
      type: String,
      default: ''
    },
    outsideResults: {
      type: Array,
      default: function() {
        return [];
      },
    }
  },
  methods: {
    onSearch(searchData) {
      this.nameFilterResults = searchData.results;

      if (this.filteredDepartment.name == 'All Departments') {
        this.searchResults = searchData.results;
      } else {
        this.searchResults = searchData.results.filter(employee => { return employee.department.toLowerCase().includes(this.filteredDepartment.name.toLowerCase()) });
      }
    },
    applyFilter(department) {
      this.filteredDepartment = department;

      if (department.name == 'All Departments') {
        this.searchResults = this.nameFilterResults;
      } else {
        this.searchResults = this.nameFilterResults.filter(employee => { return employee.department.toLowerCase().includes(department.name.toLowerCase()) });
      }
    }
  },
  mounted() {
    this.nameFilterResults = this.outsideResults;
    this.searchResults = this.outsideResults;
    this.departments = departments;
  }
}
</script>

<style scoped>
.filtered-search-bar {
  display: flex;
  align-self: center;
}
</style>