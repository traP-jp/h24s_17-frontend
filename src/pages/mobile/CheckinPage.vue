<template>
  <v-dialog
    v-model="showMordal"
    transition="dialog-bottom-transition"
    persistent
  >
    <v-card>
      <div :class="$style.mordal">
        <h1>{{ userId }}さん！ ハッカソンへようこそ！</h1>
        <div>rasberryPiを操作して記念撮影をしてね！</div>
      </div>
    </v-card>
  </v-dialog>
  <div v-if="!showMordal" :class="$style.container">
    <div :class="$style.text">
      <h2>チェックイン中です……</h2>
      <div>待っててね</div>
    </div>
    <v-progress-circular model-value="20" indeterminate></v-progress-circular>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const showMordal = ref(false);
const { query } = useRoute();
const router = useRouter();
const token = query.token;
const userId = ref("");
(async () => {
  const respBody = await fetch(`/api/checkin?token=${token}`, {
    method: "POST",
  }).then((v) => v.json());
  userId.value = respBody["userID"];
  showMordal.value = true;
  await new Promise((resolve) => setTimeout(resolve, 5000));

  router.push("/");
})();
</script>

<style module lang="scss">
.container {
  display: grid;
  justify-items: center;
  gap: 32px;
}
.text {
  display: grid;
  justify-items: center;
}
.mordal {
  padding: 64px;
}
</style>
