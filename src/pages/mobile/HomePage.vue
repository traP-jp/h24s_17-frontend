<template>
  <div style="height: 100vw; width: 100vw">
    <LMap v-model:zoom="zoom" :center="center" :use-global-leaflet="false">
      <LTileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      ></LTileLayer>
      <LMarker :lat-lng="[35.606895, 139.684874]">
        <LTooltip> 東工大大岡山キャンパス </LTooltip>
      </LMarker>
    </LMap>
  </div>
</template>

<script setup lang="ts">
import { LMap, LTileLayer, LMarker, LTooltip } from "@vue-leaflet/vue-leaflet";
import { type PointTuple } from "leaflet";
import "leaflet/dist/leaflet.css";
import { ref } from "vue";

const zoom = ref(20);
const center = ref<PointTuple>([35.606895, 139.684874]);
</script>
<style></style>
