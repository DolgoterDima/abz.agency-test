import Vue from "vue";
import VueTippy from "vue-tippy";

import "tippy.js/themes/light.css";
import "tippy.js/themes/light-border.css";
import "tippy.js/themes/google.css";
import "tippy.js/themes/translucent.css";

export default Vue.use(VueTippy, {
  directive: "tippy", // => v-tippy
  flipDuration: 0,
  placement: "bottom",
  popperOptions: {
    modifiers: {
      preventOverflow: {
        enabled: false,
      },
    },
  },
});
