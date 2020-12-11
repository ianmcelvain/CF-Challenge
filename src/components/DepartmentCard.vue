<template>
    <div class="department-card clickable" @click="onDepartmentClick">
        <span class="department-name p-2">{{ department.name }}</span>
    </div>
</template>

<script>
export default {
    name: "DepartmentCard",
    props: {
        department: {
            type: Object,
            required: true
        }
    },
    methods: {
        onDepartmentClick() {
            this.$emit('department-filter', this.department);
        }
    }
}
</script>

<style scoped>
.department-card {
    display: inline-flex;
    border-radius: 5px;
    border: 2px solid #DFA928;
    box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.201);
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}

.department-card:hover {
    background-color: #DFA928;
}

.department-name {
    font-weight: 100600;
    letter-spacing: 2px;
    color: white;
}
</style>