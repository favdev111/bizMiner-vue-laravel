<template>
  <footer class="footer">
    <div class="container">
      <nav>
        <ul>
          <!-- <li>
            <a v-if="$route.meta.rtlActive" href="https://www.creative-tim.com" target="_blank">
              منزل
            </a>
            <a v-else href="https://www.creative-tim.com" target="_blank">
              Creative Tim
            </a>
          </li>
          <li>
            <a href="https://www.updivision.com/" target="_blank">
              UPDIVISION
            </a>
          </li>
          <li>
            <a v-if="$route.meta.rtlActive" href="http://blog.creative-tim.com" target="_blank">
              شركة
            </a>
            <a v-else href="https://creative-tim.com/presentation">
              About Us
            </a>
          </li>
          <li>
            <a v-if="$route.meta.rtlActive" href="http://blog.creative-tim.com" target="_blank">
              محفظة
            </a>
            <a v-else href="http://blog.creative-tim.com" target="_blank">
              Blog
            </a>
          </li>
          <li>
            <a v-if="$route.meta.rtlActive" href="https://www.creative-tim.com/license" target="_blank">
              بلوق
            </a>
            <a v-else href="https://www.creative-tim.com/license" target="_blank">
              Licenses
            </a>
          </li> -->
        </ul>
      </nav>
      <div class="copyright text-center">
        &copy; {{ new Date().getFullYear() }} Bizminer. All Rights Reserved.<br>
        {{devDate}}
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return{
      devDate: null
    }
  },
  methods: {
    makeRequest: function (url) {
      return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open("get", url, true);
        xhr.responseType = "document";
        xhr.onload = function () {
          var status = xhr.status;
          if (status == 200) {
            resolve(xhr);
          } else {
            reject(status);
          }
        };
        xhr.send();
      });
    },
  },
  async mounted() {
    await this.makeRequest("/img/logo-md.png").then((res) => {
      let deployDate = new Date(
        res.getResponseHeader("Date")
      ).toLocaleDateString();

      let deployTime = new Date(res.getResponseHeader("Date")).toLocaleString(
        "en-US",
        {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        }
      );

      this.devDate = `Last deployed: ${deployDate} ${deployTime}`
    });
  },
};
</script>
<style></style>
