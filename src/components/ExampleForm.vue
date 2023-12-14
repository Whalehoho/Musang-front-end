<template>
    <div class="post-job w-full   flex flex-col overflow-auto items-center">
        <!-- The outer container should be the full width and height of the viewport and allow for overflow content to scroll -->
        <div class="flex justify-center m-4 space-x-4 w-1/2">
            <div class="w-full flex flex-col glassmorphic-frame rounded-lg shadow-2xl p-4 h-fit font-fatface">
                <FormKit type="form" :actions="false" @submit="submitForm" class="flex h-fit w-full">

                    <!-- <template v-if="currentStep === 2" #submit>
                        <div class="flex items-center justify-center">
                            <button type="submit"
                                class="mx-auto  text-2xl bg-teal-300 hover:bg-teal-400 text-black font-grover font-normal break-words rounded-lg shadow-md py-4 px-4 disabled:opacity-50 disabled:cursor-not-allowed">
                                Submit
                            </button>
                        </div>
                    </template> -->

                    <div class="flex steps space-x-auto text-2xl font-cardo_bold shadow-sm rounded-t-lg">
                        <button type="button" @click="currentStep = index" v-for="(step, index) in steps" :key="index"
                            class="flex justify-center items-center w-full shadow-md   hover:bg-teal-400"
                            :class="{ 'rounded-t-lg': currentStep === index, '': currentStep !== index }">
                            <img v-if="currentStep === index" :src="pin"
                                style="width:25px; height:25px; margin-right: 10px;">
                            <span class="text-center p-4 ">{{ step.label }}</span>
                        </button>
                    </div>

                    <!-- Project Info -->
                    <div v-if="currentStep === 0" class="flex flex-col  font-fatface  text-2xl m-4 px-16 space-y-4 h-fit">
                        <FormKit type="text" placeholder="Give your project a title." validation="required"
                            v-model="formData.projectInfo.title"
                            input-class="flex p-4 font-cardo w-full rounded-lg shadow-lg" :validation-messages="{
                                required: '*The project title is required.'
                            }" validation-visibility="live" message-class="text-red-600 font-bold text-lg m-2" />

                        <FormKit v-model="formData.projectInfo.tags" type="checkbox" :options="tags"
                            help="Select at least 1 and up to 10 tags for your project:" validation="required|min:1|max:10"
                            help-class="mb-2" options-class="grid grid-cols-3 text-gray-800 text-lg" :validation-messages="{
                                required: '*Please select at least one tag.',
                                min: '*At least one tag must be selected.',
                                max: '*No more than 10 tags can be selected.'
                            }" validation-visibility="live" message-class="text-red-600 font-bold text-lg m-2" />

                        <div class="flex flex-col">
                            <span class="mb-2">Requirements:</span>
                            <div v-for="(requirement, index) in requirements" :key="index" class="flex flex-col w-full">
                                <FormKit type="text" :placeholder="'Requirement ' + (index + 1)"
                                    v-model="requirements[index]" input-class="p-2 font-cardo w-full rounded-lg shadow-lg"
                                    validation="required" :validation-messages="{
                                        required: '*Please fill in the requirements.'
                                    }" validation-visibility="live"
                                    message-class="text-red-600 font-bold text-lg m-2" />
                                <div class="flex justify-end">
                                    <button type="button" @click="removeRequirement(index)"
                                        class="text-lg text-gray-700 hover:text-cyan-700"> &lt;Remove&gt;</button>
                                </div>
                            </div>
                            <button type="button" @click="addRequirement" class="text-xl text-gray-700 hover:text-cyan-700">
                                &lt;Add Requirement&gt;</button>
                        </div>

                        <div class="flex flex-col overflow-auto">
                            <span class="mb-2">Description:</span>
                            <FormKit type="textarea" validation="required" v-model="formData.projectInfo.description"
                                placeholder="Enter your description here. (!Do not use '//')"
                                input-class="w-full font-cardo p-2 border rounded-lg shadow-lg min-h-[400px]"
                                :validation-messages="{
                                    required: '*The description is required.'
                                }" validation-visibility="live" message-class="text-red-600 font-bold text-lg" />
                        </div>

                        <div class="flex items-center justify-center">
                            <button @click="currentStep++"
                                class="mx-auto text-2xl bg-teal-300 hover:bg-teal-400 text-black font-grover font-normal break-words rounded-lg shadow-md py-4 px-4 disabled:opacity-50 disabled:cursor-not-allowed">
                                Next
                            </button>
                        </div>
                    </div>

                    <!-- Remuneration Info -->
                    <div v-if="currentStep === 1" class="flex flex-col font-fatface  text-2xl m-4 px-16 space-y-16">

                        <div class="flex flex-col">
                            <span class="mb-2">Choose a Payment Method:</span>
                            <FormKit type="select" v-model="formData.ReInfo.payment" :options="paymentMethods"
                            placeholder=" "
                                input-class="w-full font-cardo p-2 border rounded-lg shadow-lg" />
                        </div>

                        <div class="flex flex-col">
                            <span class="mb-2">The rewards you offer(MYR):</span>
                            <FormKit type="text" placeholder="Example: 6000.00" validation="required|number"
                                v-model="formData.ReInfo.rewards"
                                input-class="flex p-2 font-cardo w-full rounded-lg shadow-lg" :validation-messages="{
                                    required: '*Rewards is required.',
                                    number: '*Rewards must be a number.'
                                }" validation-visibility="live" message-class="text-red-600 font-bold text-lg m-2" />
                        </div>
                        <div class="flex items-center justify-center">
                            <button @click="currentStep++"
                                class="mx-auto text-2xl bg-teal-300 hover:bg-teal-400 text-black font-grover font-normal break-words rounded-lg shadow-md py-4 px-4 disabled:opacity-50 disabled:cursor-not-allowed">
                                Next
                            </button>
                        </div>
                    </div>

                    <div v-if="currentStep === 2" class="flex flex-col font-fatface  text-2xl m-4 px-16 space-y-16">
                        <div class="flex flex-col">
                            <span class="mb-2">Project location:</span>
                            <FormKit type="select" v-model="formData.application.location" :options="workplace"
                            placeholder="City/Remote"
                                input-class="w-full font-cardo p-2 border rounded-lg shadow-lg" />
                        </div>

                        <div class="flex flex-col">
                            <span class="mb-2">Withdraw project before:</span>
                            <FormKit type="date" :min="today" v-model="formData.application.deadline" validation="required"
                                input-class=" w-[240px] font-cardo p-2 border rounded-lg shadow-lg" :validation-messages="{
                                    required: 'Please select a date.'
                                }" validation-visibility="live" message-class="text-red-600 font-bold text-lg m-2" />
                        </div>

                        <div class="flex items-center justify-center">
                            <button type="submit" :disabled="!formIsValid"
                                class="mx-auto text-2xl bg-teal-300 hover:bg-teal-400 text-black font-grover font-normal break-words rounded-lg shadow-md py-4 px-4 disabled:opacity-50 disabled:cursor-not-allowed">
                                Submit
                            </button>
                        </div>
                    </div>

                    <div class="text-lg"></div>

                </FormKit>
            </div>
        </div>
    </div>
</template> 
    
<script setup>
import axios from 'axios';
import { ref, reactive, computed } from 'vue';
import { FormKit } from '@formkit/vue';
import { useStore } from 'vuex';
import pin from '../assets/pin.svg';

const store = useStore()
const currentStep = ref(0)


const formIsValid = computed(() => {
    // Add logic here to check if all form fields in all steps are valid
    // For example, check if all required fields are filled
    const validity = formData.projectInfo.title.trim() !== '' &&
        formData.projectInfo.tags.length > 0 &&
        requirements.value.every(req => req.trim() !== '') &&
        formData.projectInfo.description.trim() !== '' &&
        formData.ReInfo.payment.trim() !== '' &&
        formData.ReInfo.rewards && !isNaN(Number(formData.ReInfo.rewards)) &&
        formData.application.location.trim() !== '' &&
        formData.application.deadline.trim() !== '';
    const titleValid = formData.projectInfo.title.trim() !== '';
    console.log('Title valid:', titleValid);

    const tagsValid = formData.projectInfo.tags.length > 0;
    console.log('Tags valid:', tagsValid);

    const requirementsValid = requirements.value.every(req => req.trim() !== '');
    console.log('Requirements valid:', requirementsValid);
    console.log(requirements.value);

    const descriptionValid = formData.projectInfo.description.trim() !== '';
    console.log('Description valid:', descriptionValid);

    const rewardsValid = formData.ReInfo.rewards && !isNaN(Number(formData.ReInfo.rewards));
    console.log('Rewards valid:', rewardsValid);

    const locationValid = formData.application.location.trim() !== '';
    console.log('Location valid:', locationValid);

    const deadlineValid = formData.application.deadline.trim() !== '';
    console.log('Deadline valid:', deadlineValid);
    return validity;
});

const formData = reactive({
    projectInfo: {
        title: '', tags: '', requirements: '', description: '',
    },
    ReInfo: {
        payment: '', rewards: '',
    },
    application: {
        location: '', deadline: '',
    }
})

const steps = [
    {
        label: 'Project Info',
        component: 'project-info',
    },
    {
        label: 'Remuneration Info',
        component: 'remuneration-info',
    },
    {
        label: 'Post Project    ',
        component: 'application',
    }
]



const tags =
    [
        'Graphic Design', 'Visual Arts', 'Branding', 'Marketing', 'SEO', 'Digital Marketing', 'Copywriting',
        'Content Writing', 'Frontend Development', 'Backend Development', 'Software Engineering',
        'Web Development', 'UI/UX Design', 'Photography', 'Videography', 'Data Analysis',
        'Machine Learning', 'Artificial Intelligence', 'Project Management', 'Human Resources',
        'Finance', 'Accounting', 'Legal Services', 'Customer Support', 'Sales', 'E-commerce',
        'Public Relations', 'Event Planning', 'Social Media Management', 'Translation', 'Education',
        'Training', 'Healthcare', 'Wellness', 'Fitness', 'Nutrition', 'Environmental Science',
        'Biotechnology', 'Pharmaceuticals', 'Chemical Engineering', 'Civil Engineering',
        'Electrical Engineering', 'Mechanical Engineering', 'Architecture', 'Interior Design',
        'Real Estate', 'Construction', 'Manufacturing', 'Logistics', 'Supply Chain',
        'Agriculture', 'Food & Beverage', 'Hospitality', 'Travel & Tourism', 'Aerospace',
        'Automotive', 'Energy', 'Renewable Energy', 'Sustainability', 'Art & Craft', 'Fashion Design',
        'Textile Design', 'Jewelry Design', 'Game Development', 'Animation', '3D Modeling',
        'Graphic Novels', 'Creative Writing', 'Scriptwriting', 'Storytelling', 'Journalism',
        'Broadcast Media', 'Film Production', 'Music Production', 'Sound Engineering',
        'Podcasting', 'Radio Broadcasting', 'Voice Acting', 'Theater', 'Dance', 'Performance Art',
        'Astrophotography', 'Landscape Photography', 'Portrait Photography', 'Street Photography',
        'Wildlife Photography', 'Photo Editing', 'Video Editing', 'Drone Videography',
        '3D Animation', 'Motion Graphics', 'Visual Effects', 'Augmented Reality', 'Virtual Reality',
        'Logo Design', 'Infographics', 'Typography', 'Print Design', 'Packaging Design',
        'Mobile App Design', 'Android Development', 'iOS Development', 'Cross-platform Development',
        'E-commerce Development', 'WordPress Development', 'Shopify Development', 'Magento Development',
        'Web Analytics', 'Search Engine Optimization', 'Search Engine Marketing', 'Email Marketing',
        'Affiliate Marketing', 'Digital Advertising', 'Influencer Marketing',
    ]


const paymentMethods = [
    'Cash',
    'Credit/Debit Cards',
    'Bank Transfers',
    'Online Payment Services',
    'Mobile Payments',
    'Cryptocurrency',
    'Checks',
    'Money Orders',
    'Pay on Delivery',
    'E-Wallets',
    'Direct Debit',
    'Buy Now, Pay Later',
    'Gift Cards and Prepaid Cards',
    'Invoice/Billing',
    'Layaway Plans'
];


const workplace = [
    'Johor',
    'Kedah',
    'Kelantan',
    'Malacca', // Alternatively 'Melaka'
    'Negeri Sembilan',
    'Pahang',
    'Penang', // Alternatively 'Pulau Pinang'
    'Perak',
    'Perlis',
    'Sabah',
    'Sarawak',
    'Selangor',
    'Terengganu',
    'Putrajaya',
    'Kuala Lumpur',
    'Labuan',
    'Remote',
];


// const nextStep = () => {
//   if (currentStep.value < steps.length - 1) {
//     currentStep.value++
//   }
// }

// const prevStep = () => {
//   if (currentStep.value > 0) {
//     currentStep.value--
//   }
// }

// Compute today's date in YYYY-MM-DD format
const today = computed(() => {
    const now = new Date()
    const year = now.getFullYear()
    const month = String(now.getMonth() + 1).padStart(2, '0')
    const day = String(now.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
})

const requirements = ref(['']) // Start with one empty requirement

const addRequirement = () => {
    requirements.value.push('') // Add an empty requirement
}

const removeRequirement = (index) => {
    requirements.value.splice(index, 1) // Remove the requirement at the given index
}


const submitForm = async () => {
    // e.preventDefault();
    // Submit form data to a server or handle it as needed
    try {
        if (formIsValid.value && currentStep.value === 2) {
            // Prepare the data you want to send
            const jobData = {
                title: formData.projectInfo.title,
                tags: formData.projectInfo.tags,
                requirements: requirements.value,
                description: formData.projectInfo.description,
                paymentMethod: formData.ReInfo.payment,
                rewards: formData.ReInfo.rewards,
                location: formData.application.location,
                deadline: formData.application.deadline,
                client: store.state.user.email,
                // ... include any other fields you need for the job posting ...
            };

            // Send the job data to the backend
            const response = await axios.post('https://musang-server-8d173f42ebdb.herokuapp.com/post-job', jobData);
            // Handle the response
            console.log('Job posted successfully!', response.data)
            alert("Job posted successfully!");
            // ... additional success handling ...
        } else {
            alert("Forms not completed");
        }

    } catch (error) {
        console.error('Error posting job:', error);
        if(store.state.user === null){
            alert('Only logged-in user can post job.', error);
        }
        alert('Error posting job.', error);
        // ... error handling ...
    }
}



</script>
    
<style scoped></style>
    