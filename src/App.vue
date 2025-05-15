<template>
    <button @click="updateValue()">update</button>
    <hr>
    <div class="test">
        <Vue3OdometerTs :value="count"></Vue3OdometerTs>
        <Vue3OdometerTs :value="count" animation="count"></Vue3OdometerTs>
        <Vue3OdometerTs :value="count" theme="car"></Vue3OdometerTs>
        <Vue3OdometerTs :value="count" theme="digital"></Vue3OdometerTs>
        <Vue3OdometerTs :value="count" theme="minimal"></Vue3OdometerTs>
        <Vue3OdometerTs :value="count" theme="plaza"></Vue3OdometerTs>
        <Vue3OdometerTs :value="count" theme="slot-machine"></Vue3OdometerTs>
        <Vue3OdometerTs :value="count" theme="train-station"></Vue3OdometerTs>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Vue3OdometerTs, { type OdometerInstanceType } from 'vue3-odometer-plus';
// css 对应 theme 按需引入即可
import 'odometer/themes/odometer-theme-default.css';
import 'odometer/themes/odometer-theme-car.css';
import 'odometer/themes/odometer-theme-digital.css';
import 'odometer/themes/odometer-theme-minimal.css';
import 'odometer/themes/odometer-theme-plaza.css';
import 'odometer/themes/odometer-theme-slot-machine.css';
import 'odometer/themes/odometer-theme-train-station.css';

const count = ref(1000);

function updateValue() {
    count.value = Math.random() * 1200;
}
</script>

<style scoped>
.test {
    width: 100%;
    color: rgb(0, 137, 223);
    font-size: 20px;
}
</style>