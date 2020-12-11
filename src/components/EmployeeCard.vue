<template>
<div class="employee-card">
    <div class="employee-card-dept-tag color-accent">
        <p>{{ employee.department }}</p>
    </div>
    <span class="clickable" @click="onEmployeeClick">
        <div class="employee-thumbnail" :style="thumbnailStyle">

        </div>
    </span>
    <div class="employee-card-content">
        <h4>{{ employee.name.first }} {{ employee.name.last }}</h4>
        <p>{{ employee.job_title }}</p>
    </div>
    <div class="employee-card-attributes">
        <small class="bold">Skills</small>
        <ul class="is-horizontal seperated p-0">
            <li class="attribute" v-bind:key="attribute.key" v-for="attribute in attributes">
                <small>{{ attribute.id }}</small>
            </li>
        </ul>
    </div>
</div>
</template>


<script>
import { v4 as uuidv4 } from 'uuid';
import EmployeeModal from './EmployeeModal';

export default {
    name: "EmployeeCard",
    data() {
        return {
            attributes: []
        }
    },
    props: {
        employee: {
            type: Object,
            required: true
        }
    },
    methods: {
        onEmployeeClick() {
            this.$modal.show(
                EmployeeModal,
                { employee: this.employee },
                { adaptive: true, width: 600, height: 200 }
            )
        }
    },
    computed: {
        thumbnailStyle() {
            return 'background-image: url(' + this.employee.headshot.large + ');';
        }
    },
    mounted() {
        this.attributes = this.employee.skills;

        // Applying a unique key field to each attribute object
        // to then feed into v-for so there are no duplicates.
        this.attributes.forEach(function(item, value) {
            value = uuidv4();
            item.key = value;
        });
    }
}
</script>

<style scoped>
.employee-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
    background-color: #f5f6f7;
    box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.201);
    border-radius: 5px;
}

.employee-thumbnail {
    height: 100px;
    width: 100px;
    background-size: cover;
    background-position: center;
    border-radius: 100px;
}

.employee-card-content {
    padding: 1rem;
}

.employee-card-dept-tag {
    background-color: #002D40;
    width: 100%;
    margin-bottom: 1rem;
}

.employee-card-dept-tag p {
    margin: revert;
}

.employee-card-attributes {
    width: 100%;
    background-color: #e2e3e4;
    text-align: left;
    padding: 1rem;
}

.attribute {
    margin-bottom: .5rem;
    margin-right: .5rem;
    list-style-type: square;
}
</style>