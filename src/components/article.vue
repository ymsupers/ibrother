<template>
    <div class="article-item">
        <a href="#" class="warp-img">
            <img :src="todo.imgUrl" alt="" width="150" height="120">
        </a>
        <h3 class="title">{{todo.title}}</h3>
        <p class="abstract">{{todo.abstract}}</p>
        <div class="meta">
            <span>{{todo.addtime}}</span>
            <a href="#"><icon type="ios-eye" size="18"></icon>{{todo.eye}}</a>
            <a href="#"><icon type="chatbox-working" size="18">{{todo.msg}}</icon></a>
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