<!--
 * @Description: 
 * @Author: Hedgehog96
 * @Date: 2022-07-28 15:37:41
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-07-28 15:38:35
-->
<template>
    <el-form-item class="h-editor">
        <span
            class="h-editor-title"
            title="默认值"
        >默认值</span>
        <div
            class="h-editor-container"
        >
            <el-input
                v-model="props.elem.defaultValue"
                type="text"
            />
        </div>
    </el-form-item>
</template>

<script setup lang="ts">
import { defineProps }  from "vue";
import { ElFormItem, ElInput } from "element-plus";

const props = defineProps({
    elem: {
        type: Object,
        default: () => Object
    },
});
</script>
