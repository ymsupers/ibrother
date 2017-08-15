<template>
    <div id="header">
        <i-menu mode="horizontal"  active-name="1">
            <i-row>
                <i-col span="4" class="ibr-logo">
                    <icon type="ios-paperplane" size="42" style="line-height: 60px; font-size: 42px;"></icon>
                </i-col>
                <i-col span="15" class="ibr-nav" >
                    <router-link to="/"><i-menu-item name="1">首页</i-menu-item></router-link>
                    <router-link to="/article">
                        <i-menu-item name="2">
                            <icon type="ios-keypad"></icon>
                            文章
                        </i-menu-item>
                    </router-link>
                    <i-menu-item name="3"> 关于我</i-menu-item>
                    <div class="ibr-serach">
                        <i-input icon="ios-search-strong" placeholder="搜索" size="large"></i-input>
                    </div>
                </i-col>
                <i-col span="5" class="ibr-other">
                    <i-button type="text" size="large">登录</i-button>
                    <i-button type="ghost" size="large">注册</i-button>
                    <i-button type="success" icon="edit" size="large">写文章</i-button>
                </i-col>
            </i-row>
        </i-menu>
    </div>
</template>

<script>
    import { Row as iRow, Col as iCol } from 'iview/src/components/grid';
    import iMenu from 'iview/src/components/menu';
    import Icon from 'iview/src/components/icon';
    import iInput from 'iview/src/components/input';
    import iButton from 'iview/src/components/button';
    export default {
        components: {
            iRow,
            iCol,
            iMenu,
            iMenuItem: iMenu.Item,
            Icon,
            iInput,
            iButton
        }
    }
</script>