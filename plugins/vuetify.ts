import { type VuetifyOptions, createVuetify } from 'vuetify';
import '@mdi/font/css/materialdesignicons.css';

export const vuetifyOptions: VuetifyOptions = {
  ssr: false,
};

export const vuetify = createVuetify(vuetifyOptions);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(vuetify);
});
