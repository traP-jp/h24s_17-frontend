<script setup lang="ts">
import QrcodeVue from "qrcode.vue";
import { useRoute } from "vue-router";

const { query } = useRoute();
const secret = query.secret as string;
const resp = await fetch(`/api/stand`, {
  headers: {
    "X-Mac-Secret": secret,
  },
}).then((v) => v.json());
const token = resp["token"];
// const token = "hoge";
const checkInLink = `https://h24s17.trap.show/checkin?token=${token}`;
</script>

<template>
  <h1>24年度春ハッカソン会場 sponserd by Engineer guildへようこそ！</h1>
  <h2>QRコードを読み取ってチェックイン</h2>

  <h3>{{ checkInLink }}</h3>
  <qrcode-vue :value="checkInLink" level="M" render-as="svg" :size="280" />
</template>

<style module lang="scss"></style>
