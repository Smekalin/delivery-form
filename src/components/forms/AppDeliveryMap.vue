<template>
  <div class="app-delivery-map">
    <div class="app-delivery-map__places">
      <a-radio-group>
        <a-radio v-for="point in geoPoints" :key="point.name" :value="point.id">
          {{ point.name }}
        </a-radio>
      </a-radio-group>
    </div>
    <div class="app-delivery-map__map-container">
      <div ref="map" style="width: 100%; height: 500px"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { loadYmap } from 'vue-yandex-maps';
import { createPoint, YandexMapPersonal } from '@/helpers';
import { getDeliveryPointCoordinates } from '@/api/delivery';
import { GeoPoint } from '@/models/GeoPoint.model';

export default Vue.extend({
  data(): {
    settings: { [key: string]: string | number | boolean };
    map: any;
    geoPoints: GeoPoint[];
  } {
    return {
      settings: {
        apiKey: new YandexMapPersonal().apiKey,
      },
      map: null,
      geoPoints: [],
    };
  },

  async mounted() {
    await loadYmap({ ...this.settings });
    if (window.ymaps) {
      window.ymaps.ready(() => {
        this.map = new window.ymaps.Map(this.$refs.map, {
          center: [55.76, 31.642],
          zoom: 7,
          scrollZoom: false,
          controls: ['zoomControl'],
        });
        this.initMap();
      });
    }
  },

  methods: {
    async initMap() {
      this.map.behaviors.disable('scrollZoom');
      const points = await getDeliveryPointCoordinates();
      if (points?.length) {
        this.geoPoints = points;
        this.initGeoPoints(points);
      }
    },

    initGeoPoints(points: GeoPoint[]) {
      points.forEach((item) => {
        const point = createPoint(item);
        this.map.geoObjects.add(point);
      });
      this.map.setBounds(this.map.geoObjects.getBounds());
    },
  },
});
</script>

<style lang="less">
.app-delivery-map {
  background-color: white;
  padding: 30px 20px;

  &__places {
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 20px;

    @media (max-width: 650px) {
      flex-direction: column;
    }
  }
}
</style>
