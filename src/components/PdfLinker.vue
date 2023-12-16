<template>
    <div>
      <vue-qrcode :value="qrCodeUrl"></vue-qrcode>
    </div>
  </template>
  
  <script>
  import VueQrcode from '@chenfengyuan/vue-qrcode';
  
  export default {
    name: 'PdfLinker',
    components: {
      VueQrcode
    },
    props: {
    id: { type: String, default: '-' },
  },
    data() {
      return {
        qrCodeUrl: `https://whalehoho.github.io/Musang-front-end/view-pdf/${this.id}`,
      };
    },
    mounted() {
      // Generate uniqueId and set qrCodeUrl
    }
  };
  </script>
  