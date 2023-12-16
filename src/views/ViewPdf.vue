<template>
    <div>
        <!-- Your content here -->
    </div>
</template>
  
<script>
export default {
    name: 'ViewPdf',
    mounted() {
        this.fetchAndOpenPDF();
    },
    methods: {
        fetchAndOpenPDF() {
            const pdfId = this.$route.params.id; // Assuming the ID is part of the URL

            // Fetch the PDF base64 string from your backend
            fetch(`https://musang-server-8d173f42ebdb.herokuapp.com/get-pdf/${pdfId}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => {
                    const base64 = data.base64;
                    const pdfBlob = this.base64ToBlob(base64, 'application/pdf');
                    const pdfUrl = URL.createObjectURL(pdfBlob);
                    window.open(pdfUrl, '_blank'); // Opens the PDF in a new tab
                })
                .catch(error => {
                    console.error('Error fetching PDF:', error);
                    // Handle errors appropriately (e.g., show a user-friendly message)
                });
        },
        base64ToBlob(base64, mimeType) {
            const byteCharacters = atob(base64);
            const byteNumbers = new Array(byteCharacters.length);
            for (let i = 0; i < byteCharacters.length; i++) {
                byteNumbers[i] = byteCharacters.charCodeAt(i);
            }
            const byteArray = new Uint8Array(byteNumbers);
            return new Blob([byteArray], { type: mimeType });
        },
    }
};
</script>
  