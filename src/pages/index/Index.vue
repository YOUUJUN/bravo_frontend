<template>
    <main id="app">
        <header>
            <div class="header-wrap">
                <div class="start">
                    <img
                        class="logo"
                        src="~@assets/controlPanel/images/logo.png"
                    />
                </div>

                <div class="center">
                    <i class="el-icon-s-fold toggle"></i>

                    <el-breadcrumb separator-class="el-icon-arrow-right">
                        <el-breadcrumb-item :to="{ path: '/' }"
                            >首页</el-breadcrumb-item
                        >
                        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
                        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>

                <div class="end"></div>
            </div>
        </header>

        <main class="main-content">
            <aside class="navigation">
                <div class="menu-wrap">
                    <el-scrollbar style="height: 100%; overflex-x: hidden">
                        <el-menu
                            default-active="2"
                            class="el-menu-vertical-demo"
                            @open="handleOpen"
                            @close="handleClose"
                        >
                            <el-submenu index="1">
                                <template slot="title">
                                    <i class="el-icon-location"></i>
                                    <span>导航一</span>
                                </template>
                                <el-menu-item-group>
                                    <template slot="title">分组一</template>
                                    <el-menu-item index="1-1"
                                        >选项1</el-menu-item
                                    >
                                    <el-menu-item index="1-2"
                                        >选项2</el-menu-item
                                    >
                                </el-menu-item-group>
                                <el-menu-item-group title="分组2">
                                    <el-menu-item index="1-3"
                                        >选项3</el-menu-item
                                    >
                                </el-menu-item-group>
                                <el-submenu index="1-4">
                                    <template slot="title">选项4</template>
                                    <el-menu-item index="1-4-1"
                                        >选项1</el-menu-item
                                    >
                                </el-submenu>
                            </el-submenu>
                            <el-menu-item index="2">
                                <i class="el-icon-menu"></i>
                                <span slot="title">导航二</span>
                            </el-menu-item>
                            <el-menu-item index="3" disabled>
                                <i class="el-icon-document"></i>
                                <span slot="title">导航三</span>
                            </el-menu-item>
                            <el-menu-item index="4">
                                <i class="el-icon-setting"></i>
                                <span slot="title">导航四</span>
                            </el-menu-item>
                        </el-menu>
                    </el-scrollbar>
                </div>
            </aside>

            <article class="root-wrap">
                <div class="root"></div>
            </article>
        </main>

        <footer></footer>
    </main>
</template>
<script>
export default {
    components: {},
    data() {},
    methods: {},

    created() {},

    mounted() {},
};
</script>

<style>
@import url("~@/assets/controlPanel/css/global.css");
</style>

<style scoped>
#app {
    display: flex;
    flex-direction: column;
    height: 100%;
}

header {
    flex: none;
}

.header-wrap {
    display: flex;
    flex-direction: row;
    height: var(--toolbar-height, 60px);
    background-color: #fff;
}

.header-wrap .start {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: none;
    width: var(--drawer-width, 240px);
}

.header-wrap .center{
    display:flex;
    flex-direction:row;
    justify-content:start;
    align-items:center;
    padding:0 10px;
}

.header-wrap .center .toggle{
    margin-right: 15px;
}

.main-content {
    display: flex;
    flex-direction: row;
    flex: auto;
}

.navigation {
    position: relative;
    flex: none;
    width: var(--drawer-width, 240px);
    background-color: #fff;
}

.menu-wrap {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    overflow: hidden;
}

/deep/ .el-scrollbar__wrap {
    overflow-x: hidden;
}

/deep/ .el-menu {
    border-right: none;
}

.root-wrap {
    position: relative;
    flex: auto;
}

.root {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: auto;
}

.logo {
    height: 100%;
    width: auto;
}
</style>
