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
import './theme-thalk/fonts/iconfont.css'

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
    Col
]
// 定义install方法
const install = function (Vue) {
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
