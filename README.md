# vue3-odometer-plus

## Install
```sh
pnpm add vue3-odometer-plus
```
## Example
- preview image:
-  ![ui](https://github.com/user-attachments/assets/7f17e210-6e7d-4daf-a066-c999de39d7d2)

- 简单的
```vue
<template>
    <button @click="updateValue()">update</button>
    <hr>
    <div class="test">
        <Vue3OdometerTs :value="count"></Vue3OdometerTs>
        <Vue3OdometerTs :value="count" animation="count"></Vue3OdometerTs>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import Vue3OdometerTs from 'vue3-odometer-plus';

const count = ref(1000);
function updateValue() {
    count.value = Math.random() * 1200;
}
</script>

<style scoped>
.test {
    color: rgb(0, 137, 223);
    font-size: 20px;
    display: inline-flex;
    align-items: center;
    gap: 20px;
}
</style>
```

- odometer内置Style
```vue
<template>
    <div class="test">
        <button @click="updateValue()">update</button>
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
import Vue3OdometerTs from 'vue3-odometer-plus';
// css 对应 template 中 的theme 按需引入即可
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

- Props
```ts
type Props = {
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
    theme?: 'car' | 'default' | 'digital' | 'minimal' | 'plaza' | 'slot-machine' | 'train-station';
    formatFunction?: (v: number) => number;
    animation?: 'count' | 'default';
    /**
     * @default '.odometer'
     */
    selector?: string;
    /**
     * @default false
     */
    auto?: boolean;
    /**
     * @default 1000
     */
    duration?: number;
};
```