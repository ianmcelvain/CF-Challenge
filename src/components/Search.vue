<template>
    <b-container class="departments mt-5">
        <b-row>
            <b-col lg="8" offset-lg="2">
                <form @submit="searchDirectory">
                    <div>
                    <input type="text" name="name" placeholder="Search for employee..." v-model="name">
                    <fa-icon class="icon search-icon" icon="search" />
                    </div>
                </form>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import results from '../assets/results.json';

export default {
    name: "Search",
    data() {
        return {
            name: '',
            directory: results.results,
        }
    },
    methods: {
        searchDirectory(e) {
            e.preventDefault();
            
            var results = this.directory.filter(employee => { return employee.name.first.toLowerCase().includes(this.name.toLowerCase()) });
            
            var searchData = {
                searchedName: this.name,
                results,
            }

            this.$emit('query-search', searchData);
        }
    }
}
</script>

<style scoped>
input[type=text]{
    box-sizing: content-box;
    width: 280px;
    position: relative;
    padding: 15px 40px 15px 20px;
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 100;
    letter-spacing: 2px;
    border: none;
    border-radius: 5px;
    background: linear-gradient(to right, #FFFFFF 0%,#464747 #F9F9F9 100%);
    transition: width 0.4s ease;
    outline: none;
}

.icon{
  position: relative;
  left: -37px;
  color: #DFA928
;
}
</style>