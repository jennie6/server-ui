<template>
    <div :class="itemClasses">
        <div class="hz-collapse-header" @click="toggle">
            <hz-icon name="ios-arrow-forward" v-if="!hideArrow"></hz-icon>
            <slot></slot>
        </div>
        <collapse-transition v-if="mounted">
            <div class="hz-collapse-content" v-show="isActive">
                <div class="hz-collapse-content-box">
                    <slot name="content"></slot>
                </div>
            </div>
        </collapse-transition>
    </div>
</template>
<script>
    import CollapseTransition from './transition';

    export default {
        name: 'Panel',
        components: { CollapseTransition },
        props: {
            name: {
                type: String
            },
            hideArrow: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                index: 0, // use index for default when name is null
                isActive: false,
                mounted: false
            };
        },
        computed: {
            itemClasses() {
                return [
                    `hz-collapse-item`,
                    {
                        'hz-collapse-item-active': this.isActive
                    }
                ];
            },
        },
        methods: {
            toggle() {
                this.$parent.toggle({
                    name: this.name || this.index,
                    isActive: this.isActive
                });
            }
        },
        mounted() {
            this.mounted = true;
            this.$parent.setActive();
        }
    };
</script>

<style lang="less" scoped>
    .hz-collapse {
        & > &-item {
            border-top: 1px solid #dcdee2;
            &:first-child {
                border-top: 0;
            }

            > .hz-collapse-header {
                height: 38px;
                line-height: 38px;
                padding-left: 16px;
                color: #666;
                cursor: pointer;
                position: relative;
                border-bottom: 1px solid transparent;
                transition: all 0.2s ease-in-out;

                > i {
                    transition: transform 0.2s ease-in-out;
                    margin-right: 14px;
                }
            }
        }
        & > &-item&-item-active > &-header {
            border-bottom: 1px solid #dcdee2;
        }
        &-simple > &-item&-item-active > &-header {
            border-bottom: 1px solid transparent;
        }
        & > &-item&-item-active > &-header > i {
            transform: rotate(90deg);
        }

        &-content {
            color: #515a6e;
            padding: 0 16px;
            background-color: #fff;

            & > &-box {
                padding-top: 16px;
                padding-bottom: 16px;
            }
        }
        &-simple > &-item > &-content > &-content-box {
            padding-top: 0;
        }
        &-item:last-child {
            > .hz-collapse-content {
                border-radius: 0 0 3px 3px;
            }
        }
    }
    .collapse-transition {
        transition: 0.2s height ease-in-out, 0.2s padding-top ease-in-out,
            0.2s padding-bottom ease-in-out;
    }
</style>
