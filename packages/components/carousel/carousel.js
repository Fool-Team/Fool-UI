import { arrayInclude, limitScope, throttling } from '../../utils'

/// 跑马灯类
export default class Carousel {
  constructor(carouselVNode, childClassName, indicatorsVNode, initialIndex = 0, autoplay = false, interval = 300, direction = 'horizontal') {
    this.carouselVNode = carouselVNode;
    this.containerNode = carouselVNode.children[0];
    this.activeIndex = initialIndex;
    this.isAutoplay = autoplay;
    this.interval = interval;
    this.direction = direction;

    this.indicatorElements = [...indicatorsVNode.children]; // 所有指示器元素
    this.carouselItemElements = []; // 所有 carousel-item 元素
    this.containerNode.children.forEach((ele) => {
      if (arrayInclude(ele.classList, childClassName)) this.carouselItemElements.push(ele);
    })

    this.isInit = true;
    this.init();
  }

  init() {
    this.animationLength = this.getVNodeClient(this.carouselVNode, this.direction); // 获取 carousel 组件宽度
    this.animationTo(this.activeIndex);
    this.isAutoplay && this.autoPlay(this.interval);
    this.isInit = false;

    // 开启节流
    this.animationTo = throttling(this.animationTo, 300).bind(this);
  }

  animationStep(step) {
    const oldActivedIndex = this.activeIndex
    let newActiveIndex = this.activeIndex + step;

    if (newActiveIndex >= this.carouselItemElements.length) newActiveIndex -= this.carouselItemElements.length;
    else if (newActiveIndex < 0) newActiveIndex += this.carouselItemElements.length;

    this.animationTo(newActiveIndex, oldActivedIndex)
  }

  /**
   * 跑马灯切换状态伪 is-active 的 item
   * @param {number} to 结束位置索引，即状态为 is-active 的目标 item 索引
   * @param {number} from 开始位置索引，即原状态为 is-active 的 item 索引
   */
  animationTo(to, from) {
    this.activeIndex = to;

    const translateDirection = this.animationDirection(this.direction);
    this.carouselItemElements.forEach((ele, i) => {
      if (!from && arrayInclude(ele.classList, 'is-active')) from = i;
      ele.style.transform = `${translateDirection}(${this.animationLength * limitScope(i - to, (this.carouselItemElements.length - 1))}px) scale(1)`;
    })

    this.changeState(this.carouselItemElements, 'is-active', to);
    this.changeState(this.indicatorElements, 'is-active', to);
    this.changeState(this.carouselItemElements, 'is-animating', ...this.fillTransitionArr(to, from));
  }

  animationDirection(direction) {
    let translateDirection;
    if (direction === 'horizontal') { translateDirection = 'translateX' }
    else if (direction === 'vertical') { translateDirection = 'translateY' }
    else { translateDirection = 'translateX' }

    return translateDirection;
  }

  /**
   * 自动播放，开启定时器
   */
  autoPlay() {
    this.timer = setInterval(() => {
      this.animationStep(1);
    }, this.interval);
  }

  /**
   * 暂停播放，清空定时器
   */
  pausePlay() {
    clearInterval(this.timer);
  }

  /**
   * 更换 元素 的类名状态
   * @param {Array} elementList 包含子元素的数组，不能提供一个 HTMLCollection 或者 NodeList，因为里面直接使用 elementList.find，限制了必须为数组。(后期若改可接受参数类型为 HTMLCollection或者NodeList，则可以在utils中定一个遍历伪数组的方法进行优化 )
   * @param {string} className 需要添加的状态名
   * @param {Array} indexArr 需添加状态的 carousel-item 元素索引数组
   */
  changeState(elementList, className, ...indexArr) {
    // 删除 elementList 中所有元素中的 className
    elementList.forEach(ele => { if (arrayInclude(ele.classList, className)) ele.classList.remove(className) });
    // 向指定索引位置对应的元素添加 className
    indexArr.forEach(index => {
      elementList[index].classList.add(className)
    });
  }

  /**
   * 返回一个两束之间所有数字的数组
   * @param {number} firstIndex 第一个位置索引
   * @param {number} secondIndex 第二个位置索引
   * @returns {Array} 包含 firstIndex ~ secondIndex 之间所有数字的数组
   */
  fillTransitionArr(firstIndex, secondIndex) {
    if (secondIndex === undefined) secondIndex = firstIndex;

    [secondIndex, firstIndex] = secondIndex - firstIndex < 0 ? [secondIndex, firstIndex] : [firstIndex, secondIndex];
    const rangeArr = [secondIndex, firstIndex];

    if (!(secondIndex === 0 && firstIndex === this.carouselItemElements.length - 1)) {
      for (let i = secondIndex + 1; i < firstIndex; i++) {
        rangeArr.push(i);
      }
    }

    return rangeArr;
  }

  /**
   * 获取虚拟节点的 client 属性
   * @param {VNode} VNode 虚拟节点
   * @param {String} direction 轮播图滚动方向：horizontal | clientHeight
   * @returns 对应节点的 clientWidth | clientHeight
   */
  getVNodeClient(VNode, direction) {
    let AttrName;
    switch (direction) {
      case 'horizontal':
        AttrName = 'clientWidth';
        break;
      case 'vertical':
        AttrName = 'clientHeight';
        break;
      default:
        AttrName = 'clientWidth';
        break;
    }
    return VNode[AttrName];
  }
}