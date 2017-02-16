<!DOCTYPE html>
<html lang="en">
<head>
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
    <meta charset="UTF-8">
    <title>地图</title>
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/index.css">
    <script src="js/jquery-3.1.1.min.js"></script>
    <script src="js/index.js"></script>
    <script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=LTqCYH5OsxDXuPREC7tYCrgRGjVtaLQw"></script>
    <script src="js/map.js"></script>
</head>
<body>
<div id="container">
</div>
<div id="header">
    <img src="images/logo-new.png" alt="">
    <div class="second-house">
        <p>二手房</p>
        <ul class="none">
            <li><a href="#">二手房</a></li>
            <li><a href="#">租房</a></li>
        </ul>
    </div>
    <div class="search">
        <div class="search-text">
            <input type="text" placeholder="输入小区或地铁站开始找房">
            <button><i></i></button>
        </div>
        <ul class="search-condition">
            <li>
                <span>售价</span>
                <i></i>
                <ul class="none">
                    <li>不限</li>
                    <li>100万以下</li>
                    <li>100-150万</li>
                    <li>150-200万</li>
                    <li>200-250万</li>
                    <li>250-300万</li>
                    <li>300-500万</li>
                    <li>500-1000万</li>
                    <li>1000万以上</li>
                </ul>
            </li>
            <li>
                <span>面积</span>
                <i></i>
                <ul class="none">
                    <li>不限</li>
                    <li>50平以下</li>
                    <li>50-70平</li>
                    <li>70-90平</li>
                    <li>90-110平</li>
                    <li>110-130平</li>
                    <li>130-150平</li>
                    <li>150-200平</li>
                    <li>200平以上</li>
                </ul>
            </li>
            <li>
                <span>房型</span>
                <i></i>
                <ul class="none">
                    <li>不限</li>
                    <li>一室</li>
                    <li>二室</li>
                    <li>三室</li>
                    <li>四室</li>
                    <li>五室</li>
                    <li>五室以上</li>
                </ul>
            </li>
            <li>
                <span>更多</span>
                <i></i>
                <div class="more">
                    <p>朝向</p>
                    <div>
                        <span>不限</span>
                        <i></i>
                        <ol class="none">
                            <li>不限</li>
                            <li>朝东</li>
                            <li>朝南</li>
                            <li>朝西</li>
                            <li>朝北</li>
                            <li>南北</li>
                        </ol>
                    </div>
                    <p>楼龄</p>
                    <div>
                        <span>不限</span>
                        <i></i>
                        <ol class="none">
                            <li>不限</li>
                            <li>5年以内</li>
                            <li>10年以内</li>
                            <li>10-20年</li>
                            <li>20年以上</li>
                        </ol>
                    </div>
                    <p>朝向</p>
                    <div>
                        <span>不限</span>
                        <i></i>
                        <ol class="none">
                            <li>不限</li>
                            <li>低楼层</li>
                            <li>中楼层</li>
                            <li>高楼层</li>
                        </ol>
                    </div>
                    <p>其他</p>
                    <div>
                        <span>不限</span>
                        <i></i>
                        <ol class="none">
                            <li>不限</li>
                            <li>新上</li>
                            <li>不限购</li>
                        </ol>
                    </div>
                </div>
            </li>
            <li>
                <i></i>
                <span>清除全部条件</span>
            </li>
        </ul>
    </div>
    <div class="right">
        <a href="#">注册</a>
        <span>|</span>
        <a href="#">登录</a>
    </div>
</div>
<div id="left">
    <div class="left">
        <div id="bg"></div>
        <ul id="myul">
            <li class="region">
                <i></i>
                <span>区域</span>
            </li>
            <li class="subway">
                <i></i>
                <span>地铁</span>
            </li>
            <li class="commute">
                <i></i>
                <span>通勤</span>
            </li>
        </ul>
    </div>
    <div class="right">
        <p class="total">为您找到<span>28897</span>套房源</p>
        <ul>
            <li>默认</li>
            <li>按总价↑</li>
            <li>按面积↑</li>
            <li>最新</li>
        </ul>
        <div class="content">
            <div class="city"></div>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    </div>
</div>
</body>
</html>