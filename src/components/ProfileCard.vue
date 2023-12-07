<template>
    <div class="flex flex-col w-full space-y-20">
        <div class="flex flex-col space-x-4">
            <div class="flex justify-center mt-10 space-x-4">
                <div
                    class="profile-card w-1/2 min-h-[800px] flex flex-col items-start glassmorphic-frame rounded-lg shadow-2xl h-fit">
                    <div class="flex top-0 w-full items-start space-x-4 p-4">
                        <img :src="getUserPicture()"
                            class="ProfileImage rounded-lg w-1/4 opacity-90 flex-shrink-0 flex-grow-0" />
                        <!-- <img :src="def_profile" class="ProfileImage rounded-full w-1/6" /> -->
                        <div class="flex flex-col">
                            <span v-if="!loggedIn" class="text-2xl font-cardo_bold">--</span>
                            <div v-else>
                                <!-- Content shown after the user has logged in -->
                                <p class="text-2xl font-cardo_bold">{{ user_data.value?.name }}</p>
                            </div>
                            <span v-if="!loggedIn" class="text-2xl font-cardo_bold">--</span>
                            <div v-else>
                                <!-- Content shown after the user has logged in -->
                                <p class="text-2xl font-cardo text-gray-900 mb-4">{{ user_data.value?.email }}</p>
                                <p class="text-xl font-cardo  text-gray-800 text-justify">"{{ user_data.value?.self_intro}}"</p>
                                <div class="w-full flex justify-end">
                                    <button  class="text-xs bg-emerald-300 font-inder px-2 py-1 rounded hover:bg-emerald-500">add description</button>  
                                </div>

                            </div>
                        </div>

                    </div>

                    <div class="w-full glassmorphic-frame-top-sharp shadow-2xl h-full min-h-[200px] font-fatface">
                        <div class="flex steps space-x-auto text-2xl font-cardo_bold shadow-sm rounded-t-lg">
                            <button type="button" @click="currentStep = index; selectButton(steps[index])"
                                v-for="(step, index) in steps" :key="index"
                                class="flex justify-center items-center w-full shadow-md   hover:bg-teal-400"
                                :class="{ 'rounded-t-lg': currentStep === index, '': currentStep !== index, 'active-button': selectedButton === steps[index] }">
                                <!-- <img v-if="currentStep === index" :src="pin"
                                    style="width:25px; height:25px; margin-right: 10px;"> -->
                                <img :src=step.svg style="width:25px; height:25px; margin-right: 10px;">
                                <span class="text-center p-4 ">{{ step.label }}</span>
                            </button>
                        </div>

                        <div class="flex flex-col h-[500px]">
                            <div class="flex flex-col items-center  overflow-auto">
                                <div v-if="currentStep===0" class="flex flex-col items-center space-y-10 mb-10">
                                    <!-- <p>{{ user_data.value }}</p> -->
                                    <JobCard v-for="job in jobs" :key="job['id']" :title="job['Project Title']"
                                        :description="job['Description']" :deadline="job['Closing Date']"
                                        :payment="job['Payment Method']" :tags="job['Tags']" :location="job['Location']"
                                        :rewards="Math.floor(job['Rewards'])" :requirements="job['Requirements']" :status="job['Status']" :client="job['Client']"/>
                                </div>

                                <div v-if="currentStep===1" class="flex flex-col items-center space-y-10 mb-10">
                                    <!-- <p>{{ user_data.value }}</p> -->
                                    <MyProjectCard v-for="job in projects" :key="job['id']" :title="job['Project Title']"
                                        :description="job['Description']" :deadline="job['Closing Date']"
                                        :payment="job['Payment Method']" :tags="job['Tags']" :location="job['Location']"
                                        :rewards="Math.floor(job['Rewards'])" :requirements="job['Requirements']" :status="job['Status']" 
                                        :appliers="job['Appliers']" :job_taker="job['Job Taker']"/>
                                </div>

                                <div v-if="currentStep===2" class="flex flex-col items-center space-y-10 mb-10">
                                    <!-- <p>{{ user_data.value }}</p> -->
                                    <JobCard v-for="job in bookmarks" :key="job['id']" :title="job['Project Title']"
                                        :description="job['Description']" :deadline="job['Closing Date']"
                                        :payment="job['Payment Method']" :tags="job['Tags']" :location="job['Location']"
                                        :rewards="Math.floor(job['Rewards'])" :requirements="job['Requirements']" :status="job['Status']" :client="job['Client']"/>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import { mapState } from 'vuex';
import axios from 'axios';
import def_profile from '../assets/profile-user-svgrepo-com.svg';
import svg1 from '../assets/inbox-svgrepo-com.svg';
import svg2 from '../assets/file-document-svgrepo-com.svg';
import svg3 from '../assets/bookmark-svgrepo-com.svg';
import JobCard from '../components/JobCard.vue';
import MyProjectCard from '../components/MyProjectCard.vue';

export default {
    name: 'ProfileCard',
    components: {
        JobCard, MyProjectCard,
    },
    data() {
        return {
            def_profile,
            selectedButton: '',
            steps: [
                {
                    label: 'My Jobs',
                    svg: svg1,
                    component: 'jobs',
                },
                {
                    label: 'Project Posted',
                    svg: svg2,
                    component: 'projects',
                },
                {
                    label: 'Bookmarks',
                    svg: svg3,
                    component: 'bookmarks',
                }
            ],
            currentStep: ref(0),
            user_data: ref({}),
            jobs: [],
            bookmarks:[],
            projects:[],
        }
    },
    created() {
        // this.fetchUser();
        this.fetchUser(this.user?.email);

    },
    mounted() {
        this.fetchUser(this.user?.email);

    },
    methods: {
        getUserPicture() {
            return this.user && this.user.picture ? this.user.picture : def_profile;
        },
        selectButton(button) {
            this.selectedButton = button;
        },
        fetchUser(userEmail) {
            // Encode the email to handle special characters
            const encodedEmail = encodeURIComponent(userEmail);
            // const encodedEmail = userEmail;
            axios.get(`https://musang-server-8d173f42ebdb.herokuapp.com/musang-users/${encodedEmail}`)
                // axios.get(`http://localhost:3000/musang-users/${userEmail}`)
                .then(response => {
                    this.user_data.value = response.data;
                    if (Array.isArray(this.user_data.value.jobs)) {
                        const jobIds = this.user_data.value.jobs.map(job => job._id);
                        this.fetchJobs(jobIds);
                    }
                    if (Array.isArray(this.user_data.value.bookmarks)) {
                        const jobIds = this.user_data.value.bookmarks;
                        this.fetchBookmarks(jobIds);
                    }
                    if (Array.isArray(this.user_data.value.posted_projects)) {
                        const jobIds = this.user_data.value.posted_projects.map(job => job._id);
                        this.fetchProjects(jobIds);
                    }
                })
                .catch(error => {
                    console.error('Error fetching user data:', error);
                });
        },
        fetchJobs(jobIds) {
            console.log(jobIds);
            // Convert the array of job IDs into a comma-separated string
            jobIds = Array.isArray(jobIds) ? jobIds : ['-'];
            const idsParam = jobIds.join(',');
            console.log(idsParam);

            axios.get(`https://musang-server-8d173f42ebdb.herokuapp.com/jobs/${idsParam}`)
                .then(response => {
                    this.jobs = response.data.map(job => ({
                        ...job,
                    }));

                })
                .catch(error => {
                    console.error('Error fetching jobs:', error);
                });
        },
        fetchBookmarks(jobIds) {
            console.log(jobIds);
            // Convert the array of job IDs into a comma-separated string
            jobIds = Array.isArray(jobIds) ? jobIds : ['-'];
            const idsParam = jobIds.join(',');
            console.log(idsParam);

            axios.get(`https://musang-server-8d173f42ebdb.herokuapp.com/jobs/${idsParam}`)
                .then(response => {
                    this.bookmarks = response.data.map(job => ({
                        ...job,
                    }));

                })
                .catch(error => {
                    console.error('Error fetching bookmarks:', error);
                });
        },
        fetchProjects(jobIds) {
            console.log(jobIds);
            // Convert the array of job IDs into a comma-separated string
            jobIds = Array.isArray(jobIds) ? jobIds : ['-'];
            const idsParam = jobIds.join(',');
            console.log(idsParam);

            axios.get(`https://musang-server-8d173f42ebdb.herokuapp.com/jobs/${idsParam}`)
                .then(response => {
                    this.projects = response.data.map(job => ({
                        ...job,
                    }));

                })
                .catch(error => {
                    console.error('Error fetching projects:', error);
                });
        },
    },
    computed: {
        ...mapState(['user', 'loggedIn']) // 'user' and 'otherState' are Vuex state properties
    },
}
</script>

<style scoped>
.active-button {
    /* Define your active button styles here */
    /* Add a solid black bottom border */
    border-bottom: 8px solid DarkSlateGray;

    /* Remove other borders */
    border-top: none;
    border-left: none;
    border-right: none;


}
</style>