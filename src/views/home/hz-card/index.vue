<template>
    <div>
        <hz-card linear="info">
            <!-- <div slot="header">提示</div> -->
            <div v-for="o in 4" :key="o" class="text item">
                {{'消息面板 ' + o }}
            </div>
        </hz-card>
        <hz-card linear="success">
            <div v-for="o in 4" :key="o" class="text item">
                {{'列表内容 ' + o }}
            </div>
        </hz-card>
        <hz-card linear="warning">
            <div v-for="o in 4" :key="o" class="text item">
                {{'列表内容 ' + o }}
            </div>
        </hz-card>
        <hz-card linear="error">
            <div v-for="o in 4" :key="o" class="text item">
                {{'列表内容 ' + o }}
            </div>
        </hz-card>
    </div>
</template>

<script>
    export default {

    }
</script>

<style>
</style>
