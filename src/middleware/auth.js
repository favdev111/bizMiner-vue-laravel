import store from '../store';

export default async function auth({ next, router }) {
  if (!store.getters.isAuthenticated) {
    return router.push({ name: "Login" });
  }
  // let token = await localStorage.getItem(
  //   'vue-authenticate.vueauth_access_token'
  // );

  // if (token === null) {
  //   return router.push({ name: 'Login' });
  // }

  return next();
}
