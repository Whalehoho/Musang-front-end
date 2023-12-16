<template>
  <div class="flex justify-center items-center space-x-32">
    <div class="relative" ref="qrCodeDiv">
      <!-- QR Code -->
      <vue-qrcode ref="qrcode" :value="qrCodeUrl" :options="{ errorCorrectionLevel: 'H' }" class="w-32 h-32"></vue-qrcode>
      <!-- Overlay Image -->
      <img :src="picture" alt="Profile" class="profile-image" />
    </div>
    <button @click="downloadQRCodeWithProfile"
      class="text-lg bg-gradient-to-b from-slate-200 to-slate-400 font-inder
     px-4 py-4 rounded shadow-2xl hover:bg-gradient-to-b hover:from-slate-300 hover:to-slate-500 transition-colors duration-300 ease-in-out">
      &lt;&lt; Download QR Code, share your portfolio around.
    </button>
  </div>
</template>
  
<script>
import VueQrcode from '@chenfengyuan/vue-qrcode';
import html2canvas from 'html2canvas';

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
      picture: this.$store.state.user?.picture,
    };
  },
  methods: {
    downloadQRCode() {
      this.$nextTick(() => {
        const qrcodeComponent = this.$refs.qrcode;
        if (qrcodeComponent && qrcodeComponent.$el) {
          const canvas = qrcodeComponent.$el; // Directly accessing the canvas
          if (canvas) {
            const imageUrl = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.href = imageUrl;
            link.download = 'qrcode.png';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          } else {
            console.error('Canvas element is not accessible');
          }
        } else {
          console.error('QR Code component reference is not accessible');
        }
      });
    },
    downloadQRCodeWithProfile() {
      html2canvas(this.$refs.qrCodeDiv, { useCORS: true }).then(canvas => {
        let image = new Image();
        // It's important to set the crossOrigin attribute before the src
        image.crossOrigin = 'anonymous';
        image.onload = () => {
          // Now that the image is loaded, draw it onto the canvas
          const ctx = canvas.getContext('2d');
          // Assuming the profile image is square, calculate the size and position
          const size = Math.floor(canvas.width / 5); // Example: profile image size as 1/5th of the QR code
          const x = (canvas.width - size) / 2;
          const y = (canvas.height - size) / 2;
          // Clear the area where the profile image will be placed to ensure QR code readability
          ctx.clearRect(x, y, size, size);
          // Draw the profile image onto the canvas
          ctx.drawImage(image, x, y, size, size);

          // Convert the canvas to a data URL and trigger the download
          const imageUrl = canvas.toDataURL('image/png');
          const link = document.createElement('a');
          link.href = imageUrl;
          link.download = 'qr-code-with-profile.png';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        };
        // Set the src attribute last, after setting crossOrigin and onload
        image.src = this.picture; // Use the picture prop as the image source
      });
    }
  },
  computed: {
    qrCodeUrl() {
      return `https://whalehoho.github.io/Musang-front-end/view-pdf/${this.id}`;
    }
  },
  mounted() {
    // Generate uniqueId and set qrCodeUrl
  }
};
</script>
  
<style>
.profile-image {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 25%;
  /* Size of the image - should be small enough not to obstruct the QR code */
  transform: translate(-50%, -50%);
  /* Center the image */
  border-radius: 0rem;
  /* Circular image */
  background-color: white;
  /* White background to maintain QR code readability */
  padding: 0.1rem;
  /* Space around the image */
}
</style>