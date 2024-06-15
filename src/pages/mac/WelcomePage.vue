<script setup lang="ts">
import { ref } from 'vue'
import QrcodeVue from 'qrcode.vue'
import type { Level, RenderAs } from 'qrcode.vue'

const value = ref('qrcode')
const level = ref<Level>('M')
const renderAs = ref<RenderAs>('svg')
</script>

<template>
    <div>QRコードを読み取ってチェックイン</div>
    <qrcode-vue :value="value" :level="level" :render-as="renderAs" />
</template>