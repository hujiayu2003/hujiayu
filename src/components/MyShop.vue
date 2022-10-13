<template>
    <div>
        <section class="shortcut">
            <div class="w">
                <div class="fl">
                    <ul>
                        <li>尊敬的{{username}}用户，省钱欢迎您！&nbsp;</li>
                    </ul>
                </div>
                <div class="fr">
                    <ul>
                        <li>我的关注</li>
                        <li></li>
                        <li>会员专享</li>
                        <li></li>
                        <li>客户服务</li>
                        <li></li>
                        <li>问题反馈</li>
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
                我的购物车
                <i class="count">8</i>
            </div>
        </header>
        <!-- header头部模块制作 end -->
        <!-- nav模块制作 start -->
        <div class="nav">
            <div class="w">
                <div class="dropdown fl">
                    <div class="dt"> 全部商品分类 </div>
                    <div class="dd">
                        <ul>
                            <li class="menu_item"><a href="#">清洁用品</a> <i>  </i> </li>
                            <li class="menu_item"><a href="#">新鲜蔬果</a> <i>  </i> </li>
                            <li class="menu_item"><a href="#">休闲速食</a> <i>  </i> </li>
                            <li class="menu_item"><a href="#">厨房用品</a> <i>  </i> </li>
                            <li class="menu_item"><a href="#">生鲜</a> <i>  </i> </li>
                            <li class="menu_item"><a href="#">冷冻食品</a> <i>  </i> </li>
                            <li class="menu_item"><a href="#">酒水饮料</a> <i>  </i> </li>
                            <li class="menu_item"><a href="#">新鲜肉类</a> <i>  </i> </li>
                            <li class="menu_item"><a href="#">大米面粉小麦</a> <i>  </i> </li>
                            <li class="menu_item"><a href="#">进口食品</a> <i>  </i> </li>
                            <li class="menu_item"><a href="#">休闲零食</a> <i>  </i> </li>
                            <li class="menu_item"><a href="#">厨房调料</a> <i> </i> </li>
                            <li class="menu_item"><a href="#">母婴用品</a> <i> </i> </li>
                            <li class="menu_item"><a href="#">生活用品</a> <i>  </i> </li>
                            <li class="menu_item"><a href="#">其他商品</a> <i>  </i> </li>
                        </ul>
                    </div>
                </div>
                <!-- 中间导航 -->
                <div class="navitems fl">
                    <ul>
                        <li><a href="#">品质好货</a></li>
                        <li><a href="#">超低折扣</a></li>
                        <li><a href="#">新鲜直购</a></li>
                        <li><a href="#">近期爆款</a></li>
                        <li><a href="#">进口好物</a></li>
                        <li><a href="#">热门商品</a></li>
                    </ul>
                </div>

            </div>
            <div class="rr">
                <img src="../assets/shop.png" alt="">
                <div class="bd">
                    <ul>
                        <li>
                            <h4>新鲜砂糖橘一筐19.9限时秒杀</h4>
                        </li>
                        <li>
                            <h4>土豆限时低价2元一斤</h4>
                        </li>
                        <li>
                            <h4>特价土鸡蛋低至8毛一枚</h4>
                        </li>
                        <li>
                            <h4>东北大米全场满100减20</h4>
                        </li>
                        <li>
                            <h4>散装零食低至6折起</h4>
                        </li>
                        <li>
                            <h4>蒙牛全场满200-50</h4>
                        </li>
                        <li>
                            <h4>月饼礼盒39.9限时秒杀</h4>
                        </li>
                    </ul>
                    <!-- <a href="#" class="more">更多好物</a>        -->
                    <span class="more">查看更多</span>
                </div>
            </div>
        </div>

        <div class="lunbo-box">
            <el-carousel indicator-position="outside">
                <el-carousel-item v-for="item in abc_img" :key="item.id">
                    <img :src="item.img" />
                </el-carousel-item>
            </el-carousel>

        </div>

        <div class="w day">
            <img src="../assets/nav.jpg" alt="">
        </div>
        <div class="box w">
            <div class="box-bd">
                <ul class="clearfix">
                    <li>
                        <a href="http://localhost:8080/#/home">
                            <img src="../assets/commodity1.webp" alt="">
                        </a>
                        <h4>
                            汰渍全效洗衣液12斤
                        </h4>
                        <div class="info">
                            3kgx2
                            <h3>￥64.8</h3>
                        </div>

                    </li>
                    <li>
                        <img src="../assets/commodity2.webp" alt="">
                        <h4>
                            洁柔抽纸巾24包
                        </h4>
                        <div class="info">
                            120抽x24包
                            <h3>￥59.9</h3>
                        </div>
                    </li>
                    <li>
                        <img src="../assets/commodity3.webp" alt="">
                        <h4>
                            云南白药牙膏435g
                        </h4>
                        <div class="info">
                            435gx1套
                            <h3>￥58.8</h3>
                        </div>
                    </li>
                    <li>
                        <img src="../assets/commodity4.webp" alt="">
                        <h4>
                            日本vape防叮咬喷雾
                        </h4>
                        <div class="info">
                            200mlx1瓶
                            <h3>￥45</h3>
                        </div>
                    </li>
                    <li>
                        <img src="../assets/commodity5.webp" alt="">
                        <h4>
                            银鹭八宝粥五色组合装
                        </h4>
                        <div class="info">
                            280gx10罐
                            <h3>￥39.9</h3>
                        </div>
                    </li>
                    <li>
                        <img src="../assets/commodity6.webp" alt="">
                        <h4>
                            田园土鸡蛋40枚
                        </h4>
                        <div class="info">
                            40gx40枚
                            <h3>￥42.8</h3>
                        </div>
                    </li>
                    <li>
                        <img src="../assets/commodity7.webp" alt="">
                        <h4>
                            多芬樱花沐浴露1kg*2
                        </h4>
                        <div class="info">
                            1套
                            <h3>￥89.9</h3>
                        </div>
                    </li>
                    <li>
                        <img src="../assets/commodity8.webp" alt="">
                        <h4>
                            海底捞牛肉小火锅2盒
                        </h4>
                        <div class="info">
                            435kgx2
                            <h3>￥59.9</h3>
                        </div>
                    </li>
                    <li>
                        <img src="../assets/commodity9.webp" alt="">
                        <h4>
                            初萃非转基因玉米油
                        </h4>
                        <div class="info">
                            5.4Lx1组
                            <h3>￥99.9</h3>
                        </div>
                    </li>
                    <li>
                        <img src="../assets/commodity10.webp" alt="">
                        <h4>
                            旺仔牛奶+O泡组合装
                        </h4>
                        <div class="info">
                            245mLx8罐
                            <h3>￥76</h3>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<style>
.day {
    margin-top: 40px !important;
}

.el-carousel {
    width: 750px !important;
    left: 50% !important;
    top: 15px;
    transform: translateX(-50%) !important;
}

.lunbo-box img {
    width: 100% !important;
    height: 100% !important;
}

.el-carousel__container {
    left: 50% !important;
    transform: translateX(-50%) !important;
    height: 450px !important;
    width: 750px !important;
}

.rr {
    margin-top: 15px;
    margin-left: 1130px;
    width: 250px;
    height: 100px;
}

.rr img {
    width: 100%;
    height: 100%;
}

.navitems a:hover {
    text-decoration: none;
    color: #c81623;
}

.box-bd ul li {
    border: 1px solid #eee;
    height: 350px !important;
}

.box-bd ul li a img {
    width: 100%;
}

.bd ul li h4 {
    text-decoration: none !important;
}

.box-bd ul li h3 {
    color: #c81623;
    margin: 10px 0px 6px -8px !important;
}

.box-bd ul li h4 {
    font-size: 18px !important;
    margin: 20px 20px 6px 25px !important;
}

.box-bd ul li:hover {
    border: 1px solid #c81623;
    height: 350px !important;
}

.bd {
    border: 1px solid rgb(220, 220, 220);
    padding: 0 20px;
}

.bd ul li {
    padding: 14px 0 6px 0;
    border-bottom: 1px solid #ccc;
}

.bd ul li h4:hover {
    cursor: pointer;
    color: #c81623;
}

.bd ul li h4 {
    font-size: 15px;
    color: #808080;
}

.bd .more {
    display: block;
    height: 28px;
    margin-top: -8px;
    margin-left: 120px;
    margin-bottom: 3px;
    text-align: center;
    line-height: 28px;
    color: #fd3f31;
    font-size: 14px;
    font-weight: 700;
}

.bd .more:hover {
    cursor: pointer;
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


.nav {
    height: 45px;
    border-bottom: 2px solid #b1191a;
}

.dropdown {
    width: 209px;
    height: 45px;
}

.dropdown .dt {
    height: 100%;
    background-color: #b1191a;
    font-size: 16px;
    color: #fff;
    text-align: center;
    line-height: 45px;
}

.dropdown .dd {
    height: 465px;
    background-color: #c81623;
    /* margin-top: 2px; */
}

.menu_item:hover {
    background-color: #fff;
}

/*鼠标经过li 里面的 a变颜色*/
.menu_item:hover a {
    color: #c81623;
}

.menu_item {
    height: 31px;
    line-height: 31px;
    margin-left: 1px;
    padding: 0 10px;
    transition: all .5s;
}

.menu_item:hover {
    padding-left: 20px;
}

.menu_item a {
    font-size: 14px;
    color: #fff;
}

.menu_item i {
    float: right;
    font-family: 'icomoon';
    font-size: 18px;
    color: #fff;
}

.navitems {
    margin-left: 10px;
}

.navitems li {
    float: left;
}

.navitems li a {
    display: block;
    height: 45px;
    padding: 0 25px;
    line-height: 45px;
    font-size: 16px;
}

.fr {
    float: right;
}

.box {
    margin-top: 30px;
}

.box-hd {
    height: 45px;
}

.box-hd h3 {
    float: left;
    font-size: 20px;
    color: #494949;
}

.box-hd a {
    float: right;
    font-size: 12px;
    color: #a5a5a5;
    margin-top: 10px;
    margin-right: 30px;
}

.box-bd ul {
    width: 1225px;
}

.box-bd ul li {
    position: relative;
    float: left;
    width: 228px;
    height: 270px;
    background-color: #fff;
    margin-right: 15px;
    margin-bottom: 15px;

}

.box-bd ul li>img {
    width: 100%;
}

.box-bd ul li h4 {
    margin: 20px 20px 20px 25px;
    font-size: 14px;
    color: #050505;
    font-weight: 400;
}

.box-bd ul li em {
    position: absolute;
    top: 4px;
    right: -4px;
}

.box-bd .info {
    margin: 0 20px 0 25px;
    font-size: 12px;
    color: #999;
}

.box-bd .info span {
    color: #ff7c2d;
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
            this.username = val
            console.log(val)
            console.log(this.username)
        })
    },
}
</script>
