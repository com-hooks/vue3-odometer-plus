<template>
    <div class="vue3-number-roll" :class="theme" ref="odometerEl"></div>
</template>
<script lang="ts" setup>
import Odometer from 'odometer';
import { onMounted, shallowRef, useTemplateRef, watchPostEffect } from 'vue';
const renderElRef = useTemplateRef("odometerEl");
const old = shallowRef();
const {
    start = 0,
    value = 0,
    format = '(d).dd',
    auto = true,
    selector,
    animation = 'default',
    formatFunction,
    theme = 'default',
} = defineProps<{
    start?: number;
    value: number;
    /**
     * The format option allows you to configure how the digit groups are formatted, and how many digits are shown after the decimal point.
     @default '(d).dd'
     @example
        (,ddd)    -  12,345,678
        (,ddd).dd -  12,345,678.09
        (.ddd),dd -  12.345.678,09
        ( ddd),dd -  12 345 678,09
        d         -  12345678
     */
    format?: string;
    theme?: 'car' | 'default' | 'digital' | 'minimal' | 'plaza' | 'slot-machine' | 'train-station',
    formatFunction?: (v: number) => number;
    animation?: 'count' | 'default';
    selector?: '.odometer';
    auto?: boolean;
}>();
onMounted(() => {
    old.value = new Odometer({
        auto,
        selector,
        animation,
        el: renderElRef.value,
        value: start,
        format,
        duration: 1000,
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
    all: inherit;
}
</style>