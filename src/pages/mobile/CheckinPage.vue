<template>
  <v-dialog
    v-model="showMordal"
    transition="dialog-bottom-transition"
    persistent
  >
    <v-card>
      <div>{{ "foo" }}さん！ ハッカソンへようこそ！</div>
      <div>記念撮影をしてね！</div>
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
  const response = await fetch(`/api/checkin?token=${token}`, {
    method: "POST",
  });

  userId.value = response.headers.get("X-Forwarded-User") || "unknown";
  showMordal.value = true;
  await new Promise((resolve) => setTimeout(resolve, 5000));

  router.push("/");
})();
</script>
