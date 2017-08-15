<template>
    <div class="article-item">
        <a href="#" class="warp-img">
            <img :src="todo.imgUrl" alt="" width="150" height="120">
        </a>
        <h3 class="title"><router-link :to="{path: '/article/'+todo.id+'/details'}">{{todo.title}}</router-link></h3>
        <p class="abstract">{{todo.abstract}}</p>
        <div class="meta">
            <span>{{todo.addtime}}</span>
            <a href="#"><icon type="ios-pricetags" size="18"></icon>书签名称</a>
            <a href="#"><icon type="ios-eye" size="18"></icon>{{todo.eye}}</a>
            <a href="#"><icon type="chatbox-working" size="18"></icon>{{todo.msg}}</a>
            <a href="#"><icon type="ios-heart" size="18"></icon>{{todo.heart}}</a>
        </div>
    </div>
</template>

<script>
    import Icon from 'iview/src/components/icon';
    export default {
        props: ['todo'],
        components: {
            Icon
        }
    }
</script>

<style lang="scss">
    .article-item {
        border: 1px solid #e8e8e8;
        padding-left: 170px;
        padding-right: 10px;
        position: relative;
        height: 148px;
        margin-top: -1px;
        .warp-img {
            position: absolute;
            left: 10px;
            top: 50%;
            margin-top: -60px;
            img {
                border-radius: 5px;
            }
        }
        .title a::selection, .abstract::selection {
            background-color: #27a25e;
            color: #fff;
        }
        .title a {
            color: #333;
        }
        .title {
            margin-top: 10px;
            font-size: 18px;
            overflow:hidden;
            text-overflow:ellipsis;
            -o-text-overflow:ellipsis;
            -webkit-text-overflow:ellipsis;
            -moz-text-overflow:ellipsis;
            white-space:nowrap;
        }
        .abstract {
            vertical-align: top;
            text-align: left;
            color: #666;
            line-height: 22px;
            word-break:break-all;
            display:-webkit-box;
            -webkit-line-clamp:3;
            -webkit-box-orient:vertical;
            overflow:hidden;
            &:after{
                content: '...'
            }
        }
        .meta {
            padding: 7px 0;
            text-align: right;
            span {
                float:left;
            }
            a {
                color: #a2a2a2;
                vertical-align: top;
                margin-right: 15px;
                i {
                    margin-right: 3px;
                }
            }
        }
    }
</style>