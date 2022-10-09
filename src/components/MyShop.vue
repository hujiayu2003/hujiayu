<template>
    <div>
        <section class="shortcut">
            <div class="w">
                <div class="fl">
                    <ul>
                        <li>尊敬的{{username}}，省钱欢迎您！&nbsp;</li>
                    </ul>
                </div>
                <div class="fr">
                    <ul>
                        <li>我的订单</li>
                        <li></li>
                        <li class="arrow-icon">我的品优购</li>
                        <li></li>
                        <li>品优购会员</li>
                        <li></li>
                        <li>企业采购</li>
                        <li></li>
                        <li class="arrow-icon">关注品优购</li>
                        <li></li>
                        <li class="arrow-icon">客户服务</li>
                        <li></li>
                        <li class="arrow-icon">网站导航</li>
                    </ul>
                </div>
            </div>
        </section>
        <!-- 快捷导航模块 end -->
        <!-- header头部模块制作 start -->
        <header class="header w">
            <!-- logo -->
            <div class="logo">
                <h1>
                    <img src="../assets/title.png" alt="">
                </h1>
            </div>
            <!-- search搜索模块 -->
            <div class="search">
                <input type="search" name="" id="" placeholder="请输入你想要搜索的内容">
                <button>搜索</button>
            </div>
            <!-- 购物车模块 -->
            <div class="shopcar">
                我的关注
                <i class="count">8</i>
            </div>
        </header>
        <!-- header头部模块制作 end -->
        <!-- nav模块制作 start -->
        <div class="nav">
            <img src="../assets/shop.png" alt="">
        </div>
        <div class="lunbo-box">
            <el-carousel indicator-position="outside">
                <el-carousel-item v-for="item in abc_img" :key="item.id">
                    <img :src="item.img" />
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>
<style>
.el-carousel {
    width: 805px !important;
    left: 50% !important;
    transform: translateX(-50%) !important;
}
.lunbo-box img {
    width: 100%!important;
    height: 100%!important;
}
.el-carousel__container {
    left: 50% !important;
    transform: translateX(-50%) !important;
    height: 450px !important;
    width: 805px !important;
}

* {
    margin: 0;
    padding: 0;
    /* css3盒子模型 */
    box-sizing: border-box;
}

/* em 和 i 斜体的文字不倾斜 */
em,
i {
    font-style: normal
}

/* 去掉li 的小圆点 */
li {
    list-style: none
}

img {
    /* border 0 照顾低版本浏览器 如果 图片外面包含了链接会有边框的问题 */
    border: 0;
    /* 取消图片底侧有空白缝隙的问题 */
    vertical-align: middle
}

button {
    /* 当我们鼠标经过button 按钮的时候，鼠标变成小手 */
    cursor: pointer
}

a {
    color: #666;
    text-decoration: none
}

a:hover {
    color: #c81623
}

button,
input {
    /* "\5B8B\4F53" 就是宋体的意思 这样浏览器兼容性比较好 */
    font-family: Microsoft YaHei, Heiti SC, tahoma, arial, Hiragino Sans GB, "\5B8B\4F53", sans-serif;
    /* 默认有灰色边框我们需要手动去掉 */
    border: 0;
    outline: none;
}

body {
    /* CSS3 抗锯齿形 让文字显示的更加清晰 */
    -webkit-font-smoothing: antialiased;
    background-color: #fff;
    font: 12px/1.5 Microsoft YaHei, Heiti SC, tahoma, arial, Hiragino Sans GB, "\5B8B\4F53", sans-serif;
    color: #666
}

.hide,
.none {
    display: none
}

/* 清除浮动 */
.clearfix:after {
    visibility: hidden;
    clear: both;
    display: block;
    content: ".";
    height: 0
}

.clearfix {
    *zoom: 1
}

.w {
    width: 1200px;
    margin: 0 auto;
}

.fl {
    float: left;
}

.fr {
    float: right;
}

.style_red {
    color: #c81623;
}

/* 快捷导航模块 */
.shortcut {
    height: 31px;
    line-height: 31px;
    background-color: #f1f1f1;
}

.shortcut ul li {
    float: left;
}

/* 选择所有的偶数的小li */
.shortcut .fr ul li:nth-child(even) {
    width: 1px;
    height: 12px;
    background-color: #666;
    margin: 9px 15px 0;
}

.arrow-icon::after {
    content: '\e91e';
    font-family: 'icomoon';
    margin-left: 6px;
}

/* header 头部制作 */
.header {
    position: relative;
    height: 105px;

}

.logo {
    position: absolute;
    top: 0px;
    left: 50px;
    width: 200px;
    height: 95px;
}

.logo img {
    display: block;
    /*overflow: hidden;*/
    width: 200px;
    height: 95px;
    /*text-indent: -999px;*/
    font-size: 0;
}

.search {
    position: absolute;
    left: 346px;
    top: 35px;
    width: 538px;
    height: 36px;
    border: 2px solid #b1191a;
}

.search input {
    float: left;
    width: 454px;
    height: 32px;
    padding-left: 10px;
}

.search button {
    float: left;
    width: 80px;
    height: 32px;
    background-color: #b1191a;
    font-size: 16px;
    color: #fff;
}

.hotwords {
    position: absolute;
    top: 66px;
    left: 346px;
}

.hotwords a {
    margin: 0 10px;
}

.shopcar {
    position: absolute;
    right: 60px;
    top: 25px;
    width: 140px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    border: 1px solid #dfdfdf;
    background-color: #f7f7f7;
}

.shopcar::before {
    content: '\e93a';
    font-family: 'icomoon';
    margin-right: 5px;
    color: #b1191a;
}

.shopcar::after {
    content: '\e920';
    font-family: 'icomoon';
    margin-left: 10px;
}

.count {
    position: absolute;
    top: -5px;
    left: 105px;
    height: 14px;
    line-height: 14px;
    color: #fff;
    background-color: #e60012;
    padding: 0 5px;
    border-radius: 7px 7px 7px 0;
}
</style>
<script>
export default {
    name: 'MyShop',
    data() {
        return {
            username: '',
            abc_img: [
                { img: require("@/assets/0.jpg") },
                { img: require("@/assets/1.jpg") },
                { img: require("@/assets/2.jpg") },
            ],
        }
    },
    created() {
        this.$bus.$on('send', val => {
            this.username=val 
            console.log(val)
            console.log(this.username)
        })
    },
}
</script>
