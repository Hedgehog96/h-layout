<!--
 * @Description: 
 * @Author: Hedgehog96
 * @Date: 2022-07-28 15:03:14
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-07-28 15:11:02
-->
<template>
    <el-form-item class="h-editor">
        <span
            class="h-editor-title"
            title="禁用"
        >禁用</span>
        <div
            class="h-editor-container"
        >
            <el-switch v-model="props.elem.props.disabled" />
        </div>
    </el-form-item>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { ElFormItem, ElSwitch } from "element-plus";

const props = defineProps({
    elem: {
        type: Object,
        default: () => Object
    },
});
</script>