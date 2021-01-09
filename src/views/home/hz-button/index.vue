<template>
    <div class="wrap">
        <!-- 默认 -->
        <h1 style="text-align:center">按钮组件</h1>
        <h3>默认</h3>
        <hz-button type="primary">primary</hz-button>
        <hz-button type="info">info</hz-button>
        <hz-button type="success">success</hz-button>
        <hz-button type="warning">warning</hz-button>
        <hz-button type="error">error</hz-button>
        <hz-button type="text">text</hz-button>
        <hz-button type="dashed">dashed</hz-button>
        <hz-button type="primary" cicle icon="md-search"></hz-button>
        <hz-button type="primary" cicle>primary</hz-button>
        <hz-button type="primary" size="large">大按钮</hz-button>
        <hz-button type="primary" size="small">小按钮</hz-button>
        <h3>禁用按钮</h3>
        <hz-button type="primary" disabled>禁用按钮</hz-button>
        <hz-button disabled>禁用按钮</hz-button>
        <h3>长按钮</h3>
        <div style="width:400px">
            <hz-button type="primary" long>长按钮</hz-button>
            <hz-button type="primary" linear long>长按钮</hz-button>
            <hz-button type="success" linear long>长按钮</hz-button>
            <hz-button type="warning" linear long>长按钮</hz-button>
        </div>
        <h3>渐变</h3>
        <hz-button type="primary" linear>primary</hz-button>
        <hz-button type="info" linear>info</hz-button>
        <hz-button type="success" linear>success</hz-button>
        <hz-button type="warning" linear>warning</hz-button>
        <hz-button type="error" linear>error</hz-button>
        <h3>加载中</h3>
        <hz-button type="primary" loading>加载中</hz-button>
        <hz-button type="primary" loading></hz-button>
        <!-- 灵魂 -->
        <h3>灵魂</h3>
        <div style="background:#222;height:60px;padding-top:20px">
            <hz-button type="primary" icon="md-search" soul>primary</hz-button>
            <hz-button type="info" soul>info</hz-button>
            <hz-button type="success" soul>success</hz-button>
            <hz-button type="warning" soul>warning</hz-button>
            <hz-button type="error" soul>error</hz-button>
            <hz-button type="text" soul>text</hz-button>
        </div>
        <h3>按钮组</h3>
        <hz-btn-group>
            <hz-button>按钮组</hz-button>
            <hz-button>按钮组</hz-button>
            <hz-button>按钮组</hz-button>
            <hz-button>按钮组</hz-button>
            <hz-button>按钮组</hz-button>
        </hz-btn-group>
        <hz-btn-group>
            <hz-button type="warning" size="large">按钮组</hz-button>
            <hz-button type="warning" size="large">按钮组</hz-button>
            <hz-button type="warning" size="large">按钮组</hz-button>
            <hz-button type="warning" size="large">按钮组</hz-button>
        </hz-btn-group>
        <hz-btn-group>
            <hz-button type="primary">按钮组</hz-button>
            <hz-button type="primary">按钮组</hz-button>
            <hz-button type="primary">按钮组</hz-button>
            <hz-button type="primary">按钮组</hz-button>
        </hz-btn-group>
        <hz-btn-group>
            <hz-button type="success" size="small">按钮组</hz-button>
            <hz-button type="success" size="small">按钮组</hz-button>
            <hz-button type="success" size="small">按钮组</hz-button>
            <hz-button type="success" size="small">按钮组</hz-button>
        </hz-btn-group>
        <hz-btn-group>
            <hz-button type="primary" linear>按钮组</hz-button>
            <hz-button type="info" linear>按钮组</hz-button>
            <hz-button type="success" linear>按钮组</hz-button>
            <hz-button type="warning" linear>按钮组</hz-button>
            <hz-button type="error" linear>按钮组</hz-button>
        </hz-btn-group>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="less" scoped>
</style>
