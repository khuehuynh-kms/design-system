import Vue from 'vue';
import Language from '@padi/language';
import messages from './translations';

Vue.use(Language, {
  messages,
});

const i18n = new Vue();

export default i18n;
