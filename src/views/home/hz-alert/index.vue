<template>
    <div>
        <h3>Alert 警告提示</h3>
        <div class="alert-box">
            <hz-alert title="消息提示的文案" class="alert-item" type="info" effect="linear" close-text="关闭" show-icon>
            </hz-alert>
            <hz-alert title="消息提示的文案" class="alert-item" type="info" effect="linear" close-text="关闭" show-icon description="文字说明文字说明文字说明文字说明文字说明文字说明">
            </hz-alert>
        </div>
        <div class="alert-box">
            <hz-alert title="成功提示的文案" class="alert-item" type="success" close-text="关闭" show-icon>
            </hz-alert>
            <hz-alert title="成功提示的文案" class="alert-item" type="success" close-text="关闭" show-icon description="文字说明文字说明文字说明文字说明文字说明文字说明">
            </hz-alert>
        </div>
        <div class="alert-box">
            <hz-alert title="错误提示的文案" class="alert-item" type="error" close-text="关闭" show-icon>
            </hz-alert>
            <hz-alert title="错误提示的文案" class="alert-item" type="error" close-text="关闭" show-icon description="文字说明文字说明文字说明文字说明文字说明文字说明">
            </hz-alert>
        </div>
        <div class="alert-box">
            <hz-alert class="alert-item" title="错误提示的文案" type="warning" show-icon close-text="关闭">
            </hz-alert>
            <hz-alert class="alert-item" title="错误提示的文案" type="warning" show-icon close-text="关闭" description="文字说明文字说明文字说明文字说明文字说明文字说明">
            </hz-alert>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>
<style lang="less" scoped>
    .alert-box {
        margin: 20px 0;
    }
</style>

