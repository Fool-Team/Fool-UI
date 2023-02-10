import foolUI from '../../packages';
import components from './config/component';
import './styles/app.scss'

export default async ({
  Vue
}) => {
  if (typeof process === 'undefined') {
    Vue.use(foolUI);
    components.forEach(({ name, component }) => {
      Vue.component(name, component)
    })
  }
}