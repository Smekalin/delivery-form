<template>
  <div>
    <div ref="map" style="width: 100%; height: 500px"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { loadYmap } from 'vue-yandex-maps';
import { createPoint, YandexMapPersonal } from '@/helpers';
import { getDeliveryPointCoordinates } from '@/api/delivery';

export default Vue.extend({
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
