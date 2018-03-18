import * as appSettings from "tns-core-modules/application-settings";

const Auth = {
  install(Vue, axios) {
    Vue.auth = {
      url: axios.defaults.baseUrl,

      login(login, password) {
        return axios
          .post(`${this.url}/api/auth/login`, {
            login,
            password,
          })
          .then((resp) => {
            appSettings.setBoolean("autenticado", true);
            appSettings.setString("credenciales", JSON.stringify(resp.data));
            axios.defaults.headers.common.Authorization = `Bearer ${resp.data.token}`;
            return resp.data;
          });
      },

      logout() {
        appSettings.clear();
        axios.defaults.headers.common.Authorization = null;
        return true;
      },

      setHeaders() {
        const credenciales = appSettings.getString("credenciales");
        if (credenciales && credenciales.token) {
          axios.defaults.headers.common.Authorization = `Bearer ${credenciales.token}`;
          return true;
        }
        return false;
      },
    };

    Object.defineProperties(Vue.prototype, {
      $auth: {
        get() {
          return Vue.auth;
        },
      },
    });
  },
};

export default Auth;
