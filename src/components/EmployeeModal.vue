<template>
    <div class="employee-modal">
        <div class="employee-modal-thumbnail" :style="thumbnailStyle"></div>
        <div class="employee-modal-contact">
            <ul class="is-horizontal color-accent collapsable">
                <li class="mr-4"><fa-icon class="icon" icon="map-pin"/> {{ contactDetails.state }}</li>
                <li class="mr-4"><fa-icon class="icon" icon="envelope"/> {{ contactDetails.email }}</li>
                <li><fa-icon class="icon" icon="phone"/> {{ contactDetails.phone }}</li>
            </ul>
        </div>
        <div class="employee-model-content">
            <p class="p-3">{{ employee.name.first }}'s start date was {{ employee.date_started }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "EmployeeModal",
    data() {
        return {
            contactDetails: {
                state: '-',
                timezone: '-',
                phone: '-',
                email: '-'
            }
        }
    },
    props: {
        employee: {
            type: Object,
            required: true
        }
    },
    computed: {
        thumbnailStyle() {
            return 'background-image: url(' + this.employee.headshot.large + ');';
        }
    },
    mounted() {
        const { location, phone, email } = this.employee;
        const contact = {
            state: location.state ?? '-',
            timezone: location.timezone.description ?? '-',
            phone: phone ?? '-',
            email: email ?? '-'
        }
        this.contactDetails = contact;
    }
}
</script>

<style scoped>
.employee-modal {
    text-align: center;
}

.employee-modal-thumbnail {
    position: absolute;
    left: 50%;
    height: 100px;
    width: 100px;
    background-size: cover;
    background-position: center;
    border-radius: 100px;
    margin-top: -4rem;
    margin-left: -50px;
}

.employee-modal-contact {
    padding-top: 3rem;
    text-align: center;
}

.employee-model-content {
    background-color: #e2e3e4;
}
</style>