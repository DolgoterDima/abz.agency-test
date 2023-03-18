import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@/assets/scss/index.scss";

/* vue tippy start*/

import VueTippy from "vue-tippy";

Vue.use(VueTippy, {
  directive: "tippy", // => v-tippy
  flipDuration: 0,
  popperOptions: {
    modifiers: {
      preventOverflow: {
        enabled: false,
      },
    },
  },
});

import "tippy.js/themes/light.css";
import "tippy.js/themes/light-border.css";
import "tippy.js/themes/google.css";
import "tippy.js/themes/translucent.css";
/* vue tippy end*/

/* vee-validate start*/
import { ValidationProvider, extend } from "vee-validate";

//   rules
extend("name", {
  validate: (value) => /^[а-яА-ЯёЁіІїЇєЄa-zA-Z ]{2,60}$/.test(value),
  message: "Only 2-60 characters",
});

extend("email", {
  validate: (value) =>
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value),
  message: "Email not valid",
});

extend("phone", {
  validate: (value) => /^\+380\d{9}$/.test(value),
  message: "Phone not valid",
});

extend("ext", {
  validate: (value) => {
    if (!value) {
      return false;
    }
    const acceptedFormats = ["jpeg", "jpg"];

    return acceptedFormats.includes(value.type.split("/")[1]);
  },
  message: "The photo format must be jpeg/jpg type",
});
extend("size", {
  validate: (value) => {
    if (!value) {
      return false;
    }

    const CB_TO_MB_MULTIPLIER = 0.000001;
    const ALLOWED_FILE_SIZE_MB = 5;
    const size = value.size * CB_TO_MB_MULTIPLIER;

    return ALLOWED_FILE_SIZE_MB > size;
  },
  message: "The photo size must not be greater than 5 Mb",
});
extend("dimensions", {
  validate: (value) => {
    if (!value) {
      return false;
    }
    const REQUIRED_HEIGHT = 70;
    const REQUIRED_WIDTH = 70;
    return new Promise((resolve) => {
      const image = new Image();
      let width, height; // объявляем переменные
      image.src = URL.createObjectURL(value);
      image.onload = () => {
        ({ width, height } = image); // присваиваем значения переменным
        resolve({
          valid: width >= REQUIRED_WIDTH && height >= REQUIRED_HEIGHT,
        });
      };
    });
  },
  message: "Minimum size of photo 70px x 70px",
});

Vue.component("ValidationProvider", ValidationProvider);
/* vee-validate end*/

/* register ui components globally start */
import UiInput from "@/components/ui/UiInput.vue";
import UiRadio from "@/components/ui/UiRadio.vue";
import UiFile from "@/components/ui/UiFile.vue";
import UiPreloader from "@/components/ui/UiPreloader.vue";
Vue.component("UiInput", UiInput);
Vue.component("UiRadio", UiRadio);
Vue.component("UiFile", UiFile);
Vue.component("UiPreloader", UiPreloader);
/* register ui components globally end */

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
