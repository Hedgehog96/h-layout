<!--
 * @Description: 组件配置组件
 * @Author: Hedgehog96
 * @Date: 2022-05-11 14:08:14
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-07-28 15:46:23
-->
<template>
    <div
        v-if="Object.keys(state.currentElem).length"
        class="h-component-config"
    >
        <el-form
            size="small"
            class="h-component-config-form"
            @submit.prevent
        >
            <el-collapse v-model="state.activeNames">
                <el-collapse-item
                    title="常见属性"
                    name="common"
                >
                    <template
                        v-for="(editorName, propName) in COMMON_PROPERTIES"
                        :key="propName"
                    >
                        <component
                            :is="getPropEditor(propName, editorName)"
                            v-if="hasPropEditor(editorName)"
                            :elem="state.currentElem"
                        />
                    </template>
                </el-collapse-item>
            </el-collapse>
        </el-form>
    </div>
</template>

<script setup lang="ts">
import { inject, reactive, defineAsyncComponent } from "vue";
import { ElForm } from "element-plus";
import { ComponentConfig } from "@/config/interfaces";
import widgetProperties from "@/config/propertyRegister";
import PropertyEditor from "./PropertyEditor/index";
import { pa } from "element-plus/lib/locale";

const { COMMON_PROPERTIES } = widgetProperties;

const state: { currentElem: any, activeNames: string } = reactive({
    currentElem: {},
    activeNames: "common",
});

const EVENT_BUS: any = inject("eventBus");
EVENT_BUS.on("clickComponent", (elem: ComponentConfig) => {
    state.currentElem = elem;
});

const getPropEditor = (propName: string, editorName: string) => {
    if (propName === "uniqueKey") {
        return PropertyEditor.UniqueKeyEditor;
    }

    if (state.currentElem.component.props[propName]) {
        const path = `./PropertyEditor/${editorName}.vue`;
        const components = import.meta.glob("./PropertyEditor/*.vue");
        return defineAsyncComponent(components[path]);
    }
    else {
        return null;
    }
};
const hasPropEditor = (editorName: string) => {
    if (!editorName) {
        return false;
    }
    return true;
};
</script>

<style lang="scss" scoped>
.h-component-config {
    height: 100%;
    overflow-y: auto;

    :deep(.el-collapse) {
        border-top: none;
    }
    :deep(.el-collapse-item) {
        & > div {
            border-top: 1px solid #fff !important;
        }

        .el-collapse-item__content {
            padding-bottom: 0;
        }
    }
    :deep(.el-collapse-item__header) {
        padding-left: 8px;
        font-size: 16px;
    }
}
</style>
