# vue3-odometer-ts

## Install
```sh
pnpm add odometer vue3-number-odometer -S
# or
npm install odometer vue3-number-odometer -S
```
## Example
- preview image:
-  ![ui](https://github.com/user-attachments/assets/ec692488-3b78-4c4b-acde-ed1ec115c848)

```vue
<template>
    <div class="test">
        <button @click="updateValue()">update</button>
        <hr>
        <Vue3OdometerTs :value="count"></Vue3OdometerTs>
        <hr>
        <Vue3OdometerTs :value="count" animation="count"></Vue3OdometerTs>
        <hr>
        <Vue3OdometerTs :value="count" theme="car"></Vue3OdometerTs>
        <hr>
        <Vue3OdometerTs :value="count" theme="digital"></Vue3OdometerTs>
        <hr>
        <Vue3OdometerTs :value="count" theme="minimal"></Vue3OdometerTs>
        <hr>
        <Vue3OdometerTs :value="count" theme="plaza"></Vue3OdometerTs>
        <hr>
        <Vue3OdometerTs :value="count" theme="slot-machine"></Vue3OdometerTs>
        <hr>
        <Vue3OdometerTs :value="count" theme="train-station"></Vue3OdometerTs>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Vue3OdometerTs from 'vue3-number-odometer';
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
    color: rgb(0, 137, 223);
    font-size: 20px;
}
</style>
```