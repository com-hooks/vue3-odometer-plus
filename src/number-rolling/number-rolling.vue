<template>
    <span class="vue3-number-roll" :class="theme" ref="odometerEl"></span>
</template>
<script lang="ts" setup>
import Odometer from 'odometer';
import './theme-default.css';
import { onMounted, shallowRef, useTemplateRef, watchPostEffect } from 'vue';
import { type OdometerProps } from './types';
const renderElRef = useTemplateRef("odometerEl");
const old = shallowRef();
const {
    start = 0,
    value = 0,
    format = '(d).dd',
    auto = false,
    selector = '.odometer',
    animation = 'default',
    formatFunction,
    theme = 'default',
    duration = 1000,
} = defineProps<OdometerProps>();
onMounted(() => {
    old.value = new Odometer({
        auto,
        selector,
        animation,
        el: renderElRef.value,
        value: start,
        format,
        duration,
        theme,
        formatFunction,
    });
    watchPostEffect(() => {
        old.value.update(value);
    });
});

function update(v: number) {
    old.value?.update(v);
}
defineExpose({
    old,
    update,
});
</script>
<style lang="scss" scoped>
.vue3-number-roll {
    font-size: inherit;
    font-weight: inherit;
    color: inherit;
    font-style: inherit;
    white-space: nowrap;
}
</style>