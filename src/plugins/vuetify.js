import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: "#FFCD00",
                white: "#ffffff",
                secondary: '#313031',
                accent: "#f5f5f5",
            }
        }
    }
});
