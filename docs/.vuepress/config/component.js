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
  shadowCard
].forEach(component => {
  components.push({ name: component.name, component })
})

export default components;