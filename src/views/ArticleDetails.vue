<template>
    <section>
        <ibr-header-component></ibr-header-component>
        <div class="main-content">
            <i-row>
                <i-col span="5">&nbsp;</i-col>
                <i-col span="14">
                        <div class="content">
                            <h1>手把手教你用手机修旅行大片——Snapseed（速成版）</h1>
                            <p>好了，应大家要求，业余选手来给大家讲解一下如何用手机app后期修图啦！</p>
                            <p>需要声明的是，我自己并不是摄影师，<strong>相当的不专业</strong>，那些具体参数我一窍不通，以下所有言论纯粹来自个人经验，说的不对还前辈们请轻拍！</p>
                            <P>
                                作为互联网大海里的一只产品汪，我必须认同现在的app都做的特别强大，对于小图的处理从视觉上完全满足基本出图的需求，手机拍摄+手机修图，才是快节奏生活里的装逼王道。
                            </P>
                            <P>
                                另外，今天的内容主要是针对旅行风景图，“人在情境中”的旅行照也通用。如果是要修自拍大头照，让眼睛变大睫毛变长之类的，可以直接关掉页面了，这个超出了我的兴趣和能力范围哈。
                                另外，今天的内容主要是针对旅行风景图，“人在情境中”的旅行照也通用。如果是要修自拍大头照，让眼睛变大睫毛变长之类的，可以直接关掉页面了，这个超出了我的兴趣和能力范围哈。
                                另外，今天的内容主要是针对旅行风景图，“人在情境中”的旅行照也通用。如果是要修自拍大头照，让眼睛变大睫毛变长之类的，可以直接关掉页面了，这个超出了我的兴趣和能力范围哈。
                                另外，今天的内容主要是针对旅行风景图，“人在情境中”的旅行照也通用。如果是要修自拍大头照，让眼睛变大睫毛变长之类的，可以直接关掉页面了，这个超出了我的兴趣和能力范围哈。
                                作为互联网大海里的一只产品汪，我必须认同现在的app都做的特别强大，对于小图的处理从视觉上完全满足基本出图的需求，手机拍摄+手机修图，才是快节奏生活里的装逼王道。
                            </P>
                            <pre v-highlight><code class="javascript">/**
 * Created by mr.yang on 2017/8/13.
 */
import Vue from 'vue';
const store = require('./store/store')(Vue);
const router = require('./router')(Vue);
import App from './views/App.vue';

const app = new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app');</code></pre>
                            <p>好了，应大家要求，业余选手来给大家讲解一下如何用手机app后期修图啦！</p>
                            <p>需要声明的是，我自己并不是摄影师，<strong>相当的不专业</strong>，那些具体参数我一窍不通，以下所有言论纯粹来自个人经验，说的不对还前辈们请轻拍！</p>
                            <P>
                                作为互联网大海里的一只产品汪，我必须认同现在的app都做的特别强大，对于小图的处理从视觉上完全满足基本出图的需求，手机拍摄+手机修图，才是快节奏生活里的装逼王道。
                            </P>
                            <P>
                                另外，今天的内容主要是针对旅行风景图，“人在情境中”的旅行照也通用。如果是要修自拍大头照，让眼睛变大睫毛变长之类的，可以直接关掉页面了，这个超出了我的兴趣和能力范围哈。
                                另外，今天的内容主要是针对旅行风景图，“人在情境中”的旅行照也通用。如果是要修自拍大头照，让眼睛变大睫毛变长之类的，可以直接关掉页面了，这个超出了我的兴趣和能力范围哈。
                                另外，今天的内容主要是针对旅行风景图，“人在情境中”的旅行照也通用。如果是要修自拍大头照，让眼睛变大睫毛变长之类的，可以直接关掉页面了，这个超出了我的兴趣和能力范围哈。
                                另外，今天的内容主要是针对旅行风景图，“人在情境中”的旅行照也通用。如果是要修自拍大头照，让眼睛变大睫毛变长之类的，可以直接关掉页面了，这个超出了我的兴趣和能力范围哈。
                                作为互联网大海里的一只产品汪，我必须认同现在的app都做的特别强大，对于小图的处理从视觉上完全满足基本出图的需求，手机拍摄+手机修图，才是快节奏生活里的装逼王道。
                            </P>
                            <p style="text-align: center"><img src="http://upload-images.jianshu.io/upload_images/6160220-9622743331858de5?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" /></p>
                        </div>
                </i-col>
                <i-col span="5">&nbsp;</i-col>
            </i-row>
        </div>
    </section>
</template>

<script>
    import {Row as iRow, Col as iCol} from 'iview/src/components/grid';
    import ibrHeaderComponent from '../components/header.vue';
    export default {
        components: {
            ibrHeaderComponent,
            iRow,
            iCol
        }
    }
</script>

<style lang="scss">
    .main-content {
        border-top: 75px solid #fff;
        &:before, &:after {
            clear: both;
        }
        .content {
            p {
                padding: 15px 0;
                line-height: 24px;
                font-size: 13px;
            }

            pre {
                border-radius: 5px;
                padding-left: 15px;
            }

        }
    }
</style>


