<template>
    <section>
        <ibr-header-component></ibr-header-component>
        <div class="main-content">
            <i-row>
                <i-col span="5">&nbsp;</i-col>
                <i-col span="14">
                    <i-col span="4">&nbsp;</i-col>
                    <i-col span="14">
                        <div id="article">
                            <ul>
                                <li v-for="res in data">
                                    <ibr-article-component :todo="res"></ibr-article-component>
                                </li>
                            </ul>
                        </div>
                    </i-col>
                    <i-col span="6">
                        <ibr-side-bar-component></ibr-side-bar-component>
                    </i-col>
                </i-col>
                <i-col span="5">&nbsp;</i-col>
            </i-row>
        </div>
    </section>
</template>

<script>
    import { Row as iRow, Col as iCol } from 'iview/src/components/grid';
    import ibrHeaderComponent from '../components/header.vue';
    import ibrArticleComponent from '../components/article.vue';
    import ibrSideBarComponent from '../components/sidebar.vue';
    export default {
        data: function () {
            return {
                data: [
                    {
                        id: 1,
                        imgUrl: 'http://upload-images.jianshu.io/upload_images/2088574-5421622746fd7c95.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/375/h/300',
                        title: '画了576张画，写了496页手帐，从此生活就像开了挂',
                        abstract: '这是我产后回归更新的第六篇文章。 每天粉丝的增长速度将近200，一直关注我的人都清楚我在怀孕期间一直坚持画画和写手帐，到了后期由于肚子比较大，坐在桌前会很难受，时不时要起来活',
                        eye: '13556',
                        msg: '243',
                        heart: '700',
                        addtime: '2017/08/14 14:11'
                    },
                    {
                        id: 2,
                        imgUrl: 'http://upload-images.jianshu.io/upload_images/6126137-49a845f051e90680.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/375/h/300',
                        title: '可笑的巨婴，不懂放手的父母精心养出的废柴',
                        abstract: '“我都27岁了，也经济独立，只是住在父母家，可父母就为自己设置门禁，不按时回家就连环夺命CALL，请问该如何沟通？”这是一位网友向《说说而已》说法家们的求助。 01/ 恭喜这',
                        eye: '5580',
                        msg: '74',
                        heart: '170',
                        addtime: '2017/08/14 14:11'
                    }
                ]
            }
        },
        components: {
            iRow,
            iCol,
            ibrHeaderComponent,
            ibrArticleComponent,
            ibrSideBarComponent
        }
    }
</script>

<style lang="scss">
    .main-content {
        border-top: 75px solid #fff;
        &:before, &:after {
            clear: both;
        }
    }
    #article {
        padding: 0 1.2rem;
    }
</style>
