<template>
     <div class="pdf-wrapper">
        <div v-if="pdfData" class="pdf-container">
            <iframe :src="pdfSrc" class="pdf-iframe"></iframe>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios';
export default {
    name: 'ViewPdf',
    data(){
        return{
            pdfData: null, // Store the base64 PDF data
        }
    },
    mounted() {
        this.fetchPDF();
    },
    computed:{
        pdfSrc() {
            return `data:application/pdf;base64,${this.pdfData}`;
        },
    },
    methods: {
        async fetchPDF() {
            try {
                const userEmail = this.$route.params.id;
                console.log(userEmail);
                const response = await axios.get(`https://musang-server-8d173f42ebdb.herokuapp.com/get-portfolio/${userEmail}`);
                this.pdfData = response.data; // Assuming the response contains the base64 PDF data
                console.log('pdf', this.pdfData);
            } catch (error) {
                console.error('Error fetching PDF', error);
            }
        },
        // fetchAndOpenPDF() {
        //     const pdfId = this.$route.params.id; // Assuming the ID is part of the URL

        //     // Fetch the PDF base64 string from your backend
        //     fetch(`https://musang-server-8d173f42ebdb.herokuapp.com/get-pdf/${pdfId}`)
        //         .then(response => {
        //             if (!response.ok) {
        //                 throw new Error(`HTTP error! Status: ${response.status}`);
        //             }
        //             return response.json();
        //         })
        //         .then(data => {
        //             const base64 = data.base64;
        //             const pdfBlob = this.base64ToBlob(base64, 'application/pdf');
        //             const pdfUrl = URL.createObjectURL(pdfBlob);
        //             window.open(pdfUrl, '_blank'); // Opens the PDF in a new tab
        //         })
        //         .catch(error => {
        //             console.error('Error fetching PDF:', error);
        //             // Handle errors appropriately (e.g., show a user-friendly message)
        //         });
        // },
        // base64ToBlob(base64, mimeType) {
        //     const byteCharacters = atob(base64);
        //     const byteNumbers = new Array(byteCharacters.length);
        //     for (let i = 0; i < byteCharacters.length; i++) {
        //         byteNumbers[i] = byteCharacters.charCodeAt(i);
        //     }
        //     const byteArray = new Uint8Array(byteNumbers);
        //     return new Blob([byteArray], { type: mimeType });
        // },
    }
};
</script>
  
<style>
.pdf-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* Full viewport height */
    width: 100%; /* Full viewport width */
    padding: 20px; /* Add some padding if needed */
}

.pdf-container {
    width: 100%; /* Adjust width as needed, e.g., 80% for a centered view */
    max-width: 1000px; /* Maximum width */
    height: 100%; /* Full container height */
    overflow: hidden; /* Hide overflow */
    border-radius: 15px; /* Rounded corners for aesthetics */
}

.pdf-iframe {
    width: 100%; /* Full width of the container */
    height: 100%; /* Full height of the container */
    border: none; /* Remove iframe border */
    border-radius: 15px; /* Match container's rounded corners */
}
</style>
