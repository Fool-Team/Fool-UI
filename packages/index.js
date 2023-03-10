// 整个包的入口
// 统一导出
// 导出颜色选择器组件
import Button from './components/button/button.vue'
import Dialog from './components/dialog/dialog.vue'
import Input from './components/input/input.vue'
import Checkbox from './components/checkbox/checkbox.vue'
import Radio from './components/radio/radio.vue'
import RadioGroup from './components/radio-group/radio-group.vue'
import Switch from './components/switch/switch.vue'
import CheckboxGroup from './components/CheckBox-group/checkbox-group.vue'
import Form from './components/form/form.vue'
import FormItem from './components/form-item/form-item.vue'
import Row from './components/row/row.vue'
import Col from './components/col/col.vue'
import Carousel from './components/carousel/carousel.vue'
import CarouselItem from './components/carousel/carousel-item.vue'
import Icon from './components/icon/icon.vue'
import Card from './components/card/card.vue'
import Container from './components/container/container.vue'
import Header from './components/container/header.vue'
import Aside from './components/container/aside.vue'
import Main from './components/container/main.vue'
import Footer from './components/container/footer.vue'
import FoolDateTimePicker from '../packages/components/datetime/fool-dateTimePicker.vue'
import UsePicker from '../packages/components/datetime/usePicker.vue'
import DatePicker from '../packages/components/datetime/DatePicker.vue'
import DatePicker1 from '../packages/components/datetime/DatePicker1.vue'
import './theme-thalk/fonts/iconfont.css'
import './theme-thalk/fonts/iconfont.scss'
import './theme-thalk/common/reset.scss'

const components = [
  Button,
  Dialog,
  Input,
  Checkbox,
  Radio,
  RadioGroup,
  Switch,
  CheckboxGroup,
  Form,
  FormItem,
  Row,
  Col,
  Carousel,
  CarouselItem,
  Icon,
  Card,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  FoolDateTimePicker,
  UsePicker,
  DatePicker,
  DatePicker1
]
// 定义install方法
const install = function(Vue) {
  // 注册所有的组件
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}
// 判断是否直接引入文件，如果是，就不用调用Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
// 导出install方法
export default {
  install
}
