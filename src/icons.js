import Vue from "vue"
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faSearch, faMapPin, faEnvelope, faPhone, faFilter, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

library.add(faSearch, faMapPin, faEnvelope, faPhone, faFilter, faArrowLeft);

Vue.component('fa-icon', FontAwesomeIcon);