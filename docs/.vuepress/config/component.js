import basicLayout from '../../examples/layout/basic-layout';
import columnSpacing from '../../examples/layout/column-spacing';
import columnOffset from '../../examples/layout/column-offset.vue'
import alignment from '../../examples/layout/alignment.vue'
import responsiveLayout from '../../examples/layout/responsive-layout.vue'
import basicCarousel from '../../examples/carousel/basic-carousel.vue'
import toggleArrows from '../../examples/carousel/toggle-arrows.vue'
import verticalCarousel from '../../examples/carousel/vertical-carousel.vue'
import basicIcon from '../../examples/icon/basic.icon.vue'
import badgeIcon from '../../examples/icon/badge-icon.vue'
import iconCollections from '../../examples/icon/icon-collections.vue'

const components = [];
[
  basicLayout,
  columnSpacing,
  columnOffset,
  alignment,
  responsiveLayout,
  basicCarousel,
  toggleArrows,
  verticalCarousel,
  basicIcon,
  badgeIcon,
  iconCollections
].forEach(component => {
  components.push({ name: component.name, component })
})

export default components;