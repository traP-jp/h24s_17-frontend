<template>
  <div style="height: 100vw; width: 100vw">
    <LMap v-model:zoom="zoom" :center="center" :use-global-leaflet="false">
      <LTileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      ></LTileLayer>
      <LMarker :lat-lng="[35.606895, 139.684874]">
        <LPopup>
          <v-card>
            <v-card-title>春ハッカソン会場</v-card-title> 
            <v-card-subtitle>大岡山キャンパス</v-card-subtitle>
            <v-card-text>Raspberry Pi No.1</v-card-text>
          </v-card> 
        </LPopup>
      </LMarker>
    </LMap>
  </div>
</template>


<script setup lang="ts">
import { LMap, LTileLayer, LMarker, LPopup } from "@vue-leaflet/vue-leaflet";
import { type PointTuple } from "leaflet";
import "leaflet/dist/leaflet.css";
import { ref } from "vue";

const zoom = ref(20);
const center = ref<PointTuple>([35.606895, 139.684874]);

</script>

<style>
@import 'vuetify/styles';
</style>