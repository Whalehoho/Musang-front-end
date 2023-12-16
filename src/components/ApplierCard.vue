<template>
    <div
        class="applier-profile-card w-full min-h-[900px] flex flex-col items-start glassmorphic-frame rounded-lg shadow-2xl h-full">
        <div class="flex top-0 w-full items-start space-x-4 p-4">
            <img :src="getUserPicture()" class="ProfileImage rounded-full w-1/6 opacity-90 flex-shrink-0 flex-grow-0" />
            <div class="flex flex-col">
                <p class="text-xl font-cardo_bold">{{ user_data.value?.name }}</p>
                <p class="text-xl font-cardo text-gray-900 mb-4">{{ user_data.value?.email }}</p>
                <p class="text-lg font-cardo  text-gray-800 text-justify">{{ user_data.value?.self_intro }}</p>
            </div>

        </div>
        <div v-if="pdfData" class="pdf-container rounded-lg w-full h-[900px]">
            <iframe :src="pdfSrc" class="w-full h-full p-5 mb-10 rounded-lg"></iframe>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import axios from 'axios';
import def_profile from '../assets/profile-user-svgrepo-com.svg';

export default {
    name: 'ApplierCard',
    props: {
        email: { type: String, default: '-' },

    },
    data() {
        return {
            def_profile,
            user_data: ref({}),
            jobs: [],
            bookmarks: [],
            projects: [],
            pdfData: null, // Store the base64 PDF data
        }
    },
    created() {
        this.fetchUser(this.email);
    },
    mounted() {
        this.fetchUser(this.email);
        this.fetchPDF();
    },
    computed: {
        pdfSrc() {
            return `data:application/pdf;base64,${this.pdfData}`;
        },
    },
    methods: {
        getUserPicture() {
            let pictureUrl =  this.user_data.value?.picture;
            if (pictureUrl != null) {
                pictureUrl = pictureUrl.replace(/=s\d+-c/, '=s2048-c');
                if (!pictureUrl.includes('=s')) {
                    pictureUrl += '=s2048-c';
                }
            }
            return this.user_data && this.user_data.value?.picture ? pictureUrl : def_profile;
            // return this.user_data && this.user_data.value?.picture ? this.user_data.value?.picture : def_profile;
        },
        fetchUser(userEmail) {
            if(userEmail === null){
                return;
            }
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
        async fetchPDF() {
            try {
                const userEmail = this.email;
                console.log(userEmail);
                const response = await axios.get(`https://musang-server-8d173f42ebdb.herokuapp.com/get-portfolio/${userEmail}`);
                this.pdfData = response.data; // Assuming the response contains the base64 PDF data
                console.log('pdf', this.pdfData);
            } catch (error) {
                console.error('Error fetching PDF', error);
            }
        },
    },
}
</script>

<style scoped></style>