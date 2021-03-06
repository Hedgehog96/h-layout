/*
 * @Description: ts接口文件
 * @Author: Hedgehog96
 * @Date: 2022-05-24 14:43:03
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-07-21 16:25:08
 */
import { Component } from "vue";
import { InputProps as $_InputProps } from "element-plus";

// 拖曳组件实例
export interface ComponentConfig {
    id: number;
    pid: number;
    uniqueKey: string;
    title: string;
    label: string;
    showTitle: boolean;
    component: Component;
    props: object;
    evt: object;
    children?: ComponentConfig[];
}

export interface ComponentsStore {
    snapshotIdx: number,
    snapshotcomponents: ComponentConfig[][]
    components: ComponentConfig[]
}

export interface InputProps extends $_InputProps {
    readonly minlength: number;
    readonly maxlength: number;
}

type MESSAGE_TYPE = "success" | "info" | "warning" | "error";
// 消息提示框
export interface MessageBox {
    title: string;
    content?: string;
    type: MESSAGE_TYPE;
    confirmButtonText: string;
    cancelButtonText: string;
    confirmMessageType: MESSAGE_TYPE;
    confirmMessageText: string;
}
