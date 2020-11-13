<template>
  <div class="delivery-page">
    <h1>Выберите способ доставки</h1>
    <a-tabs class="delivery-page__tabs" type="card" default-active-key="2">
      <a-tab-pane key="1" tab="Доставка">
        <app-delivery-form> </app-delivery-form>
      </a-tab-pane>
      <a-tab-pane key="2" tab="Самовывоз">
        <div ref="map" style="width: 100%; height: 500px"></div>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import { ymapMarker, loadYmap } from 'vue-yandex-maps';
import { createPoint, YandexMapPersonal } from '@/helpers';
import { getDeliveryPointCoordinates } from '@/api/delivery';

export default Vue.extend({
  components: {
    // ymapMarker,
  },

  data(): {
    settings: { [key: string]: string | number | boolean };
    map: any;
  } {
    return {
      settings: {
        apiKey: new YandexMapPersonal().apiKey,
      },
      map: null,
    };
  },

  async mounted() {
    await loadYmap({ ...this.settings });
    if (window.ymaps) {
      window.ymaps.ready(() => {
        this.map = new window.ymaps.Map(this.$refs.map, {
          center: [55.76, 37.64],
          zoom: 7,
          scrollZoom: false,
        });
        this.initMap();
      });
    }
  },

  methods: {
    async initMap() {
      this.map.behaviors.disable('scrollZoom');
      const points = await getDeliveryPointCoordinates().then((res) => {
        return res.map(createPoint);
      });

      points.forEach((item) => {
        this.map.geoObjects.add(item);
      });
      this.map.setBounds(this.map.geoObjects.getBounds());
    },
  },
});
</script>

<style lang="less">
.delivery-page {
  padding: 50px 0px;
  .ant-tabs-bar {
    margin-bottom: 0;
    border: none;
  }

  &__tabs {
    .ant-tabs-tab {
      border: none !important;
    }
  }
}
</style>
