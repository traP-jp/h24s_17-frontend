<template>
  <div>oisu</div>
  {{ token }}
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";

const { query } = useRoute();
const router = useRouter();
const token = query.token;
await fetch(`/api/checkin?token=${token}`, {
  method: "POST",
});
router.push("/");
</script>
