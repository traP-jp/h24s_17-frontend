<template>
  <v-dialog
    v-model="showMordal"
    transition="dialog-bottom-transition"
    persistent
  >
    <v-card>
      <div>{{ userId }}さん！ ハッカソンへようこそ！</div>
      <div>rasberryPiを操作して記念撮影をしてね！</div>
    </v-card>
  </v-dialog>
  <div v-if="!showMordal">
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
  userId.value = respBody.userId;
  showMordal.value = true;
  await new Promise((resolve) => setTimeout(resolve, 5000));

  router.push("/");
})();
</script>
