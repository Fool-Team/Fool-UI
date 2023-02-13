import basicLayout from '../../examples/layout/basic-layout';
import columnSpacing from '../../examples/layout/column-spacing';
import columnOffset from '../../examples/layout/column-offset.vue';
import alignment from '../../examples/layout/alignment.vue';
import responsiveLayout from '../../examples/layout/responsive-layout.vue';
import basicCarousel from '../../examples/carousel/basic-carousel.vue';
import toggleArrows from '../../examples/carousel/toggle-arrows.vue';
import verticalCarousel from '../../examples/carousel/vertical-carousel.vue';
import basicIcon from '../../examples/icon/basic.icon.vue';
import badgeIcon from '../../examples/icon/badge-icon.vue';
import iconCollections from '../../examples/icon/icon-collections.vue';
import basicCard from '../../examples/card/basic-card.vue';
import easyCard from '../../examples/card/easy-card.vue';
import cardWithContent from '../../examples/card/card-with-content.vue';
import shadowCard from '../../examples/card/shadow-card.vue';
import layoutHm from '../../examples/container/layout-hm.vue';
import layoutHmf from '../../examples/container/layout-hmf.vue';
import layoutAm from '../../examples/container/layout-am.vue';
import layoutHam from '../../examples/container/layout-ham.vue';
import layoutHamf from '../../examples/container/layout-hamf.vue';
import layoutAhm from '../../examples/container/layout-ahm.vue';
import layoutAhmf from '../../examples/container/layout-ahmf.vue';

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
  iconCollections,
  basicCard,
  easyCard,
  cardWithContent,
  shadowCard,
  layoutHm,
  layoutHmf,
  layoutAm,
  layoutHam,
  layoutHamf,
  layoutAhm,
  layoutAhmf
].forEach(component => {
  components.push({ name: component.name, component })
})

export default components;