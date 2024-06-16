<script setup lang="ts">
import QrcodeVue from "qrcode.vue";
import { useRoute } from "vue-router";

const { query } = useRoute();
const secret = query.secret;
const token = await fetch(`/api/stand?secret=${secret}`)
  .then((v) => v.json())
  .then((v) => v.token);
const checkInLink = `https://h24s17.trap.show/checkin?token=${token}`;
</script>

<template>
  <h1>24年度春ハッカソン会場 sponserd by Engineer guildへようこそ！</h1>
  <!-- <h1>{{ checkInLink }}</h1> -->
  <h2>QRコードを読み取ってチェックイン</h2>
  <div :class="$style.qrContainer">
    <qrcode-vue :value="checkInLink" level="M" render-as="svg" :size="280" />
  </div>
</template>

<style module lang="scss">
.qrContainer {
  display: grid;
  justify-content: center;
}
</style>
