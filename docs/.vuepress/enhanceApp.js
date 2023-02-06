import foolUI from '../../packages';
import components from './config/component';

export default async ({
  Vue
}) => {
  if (typeof process === 'undefined') {
    Vue.use(foolUI);
    components.forEach(({ name, component }) => {
      console.log(name, component);
      Vue.component(name, component)
    })
  }
}