<template>
    <div class="layout">
        <div class='header'>Serve UI</div>
        <div class="main-wrapper">
            <div class="left clearfix">
                <div class="title">组件列表</div>
                <div class="items" @click="itemHandle">
                    <div class="items-list" @click="$router.push({ name: 'hz-button' })">Button 按钮</div>
                    <div class="items-list" @click="$router.push({name:'hz-icon'})">Icon 图标</div>
                    <div class="items-list" @click="$router.push({name:'hz-card'})">Card 卡片</div>
                    <div class="items-list" @click="$router.push({name:'hz-alert'})">Alert 警告提示</div>
                    <div class="items-list" @click="$router.push({name:'hz-collapse'})">Collapse 折叠面板</div>
                </div>

            </div>
            <div class="content clearfix">
                <router-view></router-view>
            </div>
        </div>

    </div>

</template>

<script>
    export default {
        data() {
            return {
                isActive: false,
            }
        },
        methods: {
            itemHandle(name) {
                console.log(name)
                switch (name) {
                    case '1':
                        this.$router.push({ name: 'hz-button' })
                        this.isActive = !this.isActive
                        console.log('1')
                        break
                }
            }
        }

    }
</script>

<style lang="less" scoped>
    .layout {
        height: 100vh;
        .header {
            font-size: 24px;
            padding-left: 40px;
            box-sizing: border-box;
            font-weight: bold;
            height: 60px;
            line-height: 60px;
            border-bottom: 1px solid #eee;
        }
        .main-wrapper {
            height: calc(100% - 60px);
            // overflow: hidden;
            .left {
                float: left;
                width: 240px;
                padding: 20px;
                box-sizing: border-box;
                font-size: 20px;
                height: 100%;
                line-height: 40px;
                background-color: #fff;
                .items {
                    font-size: 16px;
                    color: #999999;
                    padding-left: 20px;
                    box-sizing: border-box;
                    .items-list {
                        &:hover {
                            cursor: pointer;
                            color: cornflowerblue;
                        }
                    }
                    .active {
                        color: cornflowerblue;
                    }
                }
            }
            .content {
                float: left;
                width: calc(100% - 240px);
                padding: 20px;
                border-left: 1px solid #eee;
                box-sizing: border-box;
            }
        }
    }
</style>
