var url = 'http://littlelamb.book.ci/'

//获取首页文章
function indexList() {
    var lang = localStorage.getItem("lang")
    $.ajax({
        type: "get",
        url: url + 'api/user/list?num=3&lang=' + lang,
        async: false, // 使用同步方式
        // 1 需要使用JSON.stringify 否则格式为 a=2&b=3&now=14...
        // 2 需要强制类型转换，否则格式为 {"a":"2","b":"3"}
        data: {},
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            var data = data.data
            var html = ''
            for (var i = 0; i < data.length; i++) {

                /* html += '<div class=" col-md-4 section-grid-wthree one">\n' +
                     '\t\t\t\t\t<div class="services-info-w3-agileits">\n' +
                     '\t\t\t\t\t\t<h5 class="sub-title"><a href="article.html?id=' + data[i].id + '" >' + data[i].title + '</a></h5>\n' +
                     '\t\t\t\t\t\t<h6>' + data[i].time + ' | By <a href="#">' + data[i].author + '</a></h6>\n' +
                     '\t\t\t\t\t\t<p class="para-w3" id="article1PId"></p>\n' +
                     '\t\t\t\t\t</div>\n' +
                     '\t\t\t\t\t<div class="services-img-agileits-w3layouts">\n' +
                     '\t\t\t\t\t\t<a href="single.html"><img src="' + data[i].img + '" alt="service-img"></a>\n' +
                     '\t\t\t\t\t</div>\n' +
                     '\t\t\t\t</div>'*/

                html +=
                    '                <!-- Post Item #1 -->\n' +
                    '                <div class="col-sm-12 col-md-6 col-lg-4">\n' +
                    '                    <div class="post-item">\n' +
                    '                        <div class="post__img">\n' +
                    '                            <a href="event-single.html?id=' + data[i].id + '">\n' +
                    '                                <img  src="' + data[i].img + '" alt="post image">\n' +
                    '                            </a>\n' +
                    '                        </div><!-- /.post__img -->\n' +
                    '                        <div class="post__content">\n' +
                    '                            <div class="post__meta">\n' +
                    '                            </div><!-- /.post-meta -->\n' +
                    '                            <h4 class="post__title"><a href="event-single.html?id=' + data[i].id + '">' + data[i].title + '</a></h4>\n' +
                    '                            <span class="post__meta-date">' + data[i].time + '</span>\n' +
                    '                            <p class="post__desc">' + data[i].desc + '...</p>\n' +
                    '                            <a href=href="article.html?id=' + data[i].id + '" class="btn btn__secondary btn__link"\n' +
                    '                               data-i18n="slide__btn03"></a>\n' +
                    '                        </div><!-- /.post__content -->\n' +
                    '                    </div><!-- /.post-item -->\n' +
                    '                </div>'

            }
            $("#news-grids").html(html);
        }
    });
}

//活动页文章
function list() {
    var lang = localStorage.getItem("lang")
    $.ajax({
        type: "get",
        url: url + 'api/user/list?num=100&lang=' + lang,
        async: false, // 使用同步方式
        // 1 需要使用JSON.stringify 否则格式为 a=2&b=3&now=14...
        // 2 需要强制类型转换，否则格式为 {"a":"2","b":"3"}
        data: {},
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            var data = data.data
            var html = ''
            for (var i = 0; i < data.length; i++) {

                /*  html += '<div class="col-md-4">\n' +
                      '                    <article><a href="article.html?id=' + data[i].id + '" ><img class="img-responsive" src="' + data[i].img + '" alt=""></a>\n' +
                      '                        <div class="post-info">\n' +
                      '                            <div class="post-in">\n' +
                      '                                <div class="extra"><span><i class="icon-calendar"></i>' + data[i].time + '</span></div>\n' +
                      '                               <a href="article.html?id=' + data[i].id + '" class="tittle-post"> ' + data[i].title + ' </a></div>\n' +
                      '                        </div>\n' +
                      '                    </article>\n' +
                      '                </div>'*/

                html += '<div class="col-sm-12 col-md-6 col-lg-4">\n' +
                    '            <div class="post-item">\n' +
                    '              <div class="post__img">\n' +
                    '                <a href="event-single.html?id=' + data[i].id + '">\n' +
                    '                  <img src="' + data[i].img + '" alt="post image">\n' +
                    '                </a>\n' +
                    '              </div><!-- /.post__img -->\n' +
                    '              <div class="post__content">\n' +
                    '                <div class="post__meta">\n' +
                    '                  <span class="post__meta-date">' + data[i].time + '</span>\n' +
                    '                  \n' +
                    '                </div><!-- /.post-meta -->\n' +
                    '                <h4 class="post__title"><a href="event-single.html?id=' + data[i].id + '">' + data[i].title + '</a></h4>\n' +
                    '                <a href="event-single.html?id=' + data[i].id + '" class="btn btn__link btn__secondary" data-i18n="slide__btn03"></a>\n' +
                    '              </div><!-- /.post__content -->\n' +
                    '            </div><!-- /.post-item -->\n' +
                    '          </div>'
            }


            $("#container").html(html);
        }
    });
}

//文章详情
function info() {
    var lang = localStorage.getItem("lang")
    var id = getQueryString("id")
    $.ajax({
        type: "get",
        url: url + 'api/user/info?id=' + id,
        async: false, // 使用同步方式
        // 1 需要使用JSON.stringify 否则格式为 a=2&b=3&now=14...
        // 2 需要强制类型转换，否则格式为 {"a":"2","b":"3"}
        data: {},
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            var data = data.data
            $("#article_title").html(data.title);
            $("#article_img").html(data.img);
            $("#article_time").html(data.time);
            $("#article_author").html(data.author);
            $("#article_content").html(data.content);
        }
    });
}

function getQueryString(name) {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    let r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return decodeURIComponent(r[2]);
    }
    return null;
}

//获取菜单
function getMenu() {
    var lang = localStorage.getItem("lang")
    $.ajax({
        url: url + "api/user/getMenu", success: function (result) {
            var timestamp = Date.parse(new Date()) / 1000;
            localStorage.setItem("list_add_time", timestamp)
            localStorage.setItem("list", JSON.stringify(result.data))
            var testHtml = ''
            /*onclick="filter('all')"*/
            if (lang == "zh") {
                var classHtml = '<li onclick="filter(\'all\')" class="active"><a href="#" data-filter="all">所有</a></li>'
            } else {
                var classHtml = '<li onclick="filter(\'all\')" class="active"><a href="#" data-filter="all">All</a></li>'
            }
            Object.keys(result.data.class).forEach(function (key) {
                /*onclick=filter(\''+result.data.class[key].class_name_en+'\')*/
                var class_name = ""
                if (lang == "zh") {
                    class_name = result.data.class[key].class_name
                } else {
                    class_name = result.data.class[key].class_name_en
                }

                classHtml += ' <li><a onclick=filter("' + result.data.class[key].id + '") class="waves-effect waves-dark" href="#" data-filter=".' + result.data.class[key].class_name_en + '">' + class_name + '</a></li>'
            });
            $("#filter").html(classHtml);
            //testHtml += classHtml
            testHtml = ''
            var menuHtml = ''
            Object.keys(result.data.menu).forEach(function (key) {
                var name = ""
                if (lang == "zh") {
                    name = result.data.menu[key].name
                } else {
                    name = result.data.menu[key].name_en
                }


                /*    menuHtml += '<div class="col-md-2 col-sm-6 col-xs-12 gallery-item-wrapper artwork ' + result.data.menu[key].class_name_en + '">\n' +
                        '                    <div class="gallery-item">\n' +
                        '                        <div class="gallery-thumb">\n' +
                        '                            <img src="' + result.data.menu[key].img + '" class="img-responsive" alt="1st gallery Thumb">\n' +
                        '                        </div>\n' +
                        '                    </div>\n' +
                        '                    <div class="atbd_add"><a  onclick="addCart(' + result.data.menu[key].id + ',\'' + result.data.menu[key].img + '\')">+</a></div>\n' +
                        '                    <div class="gallery-details">\n' +
                        '                        <div class="editContent">\n' +
                        '                            <h5>' + name + '</h5>\n' +
                        '                            <div class="atbd">\n' +
                        '                                <span class="atbd_orange">$' + result.data.menu[key].money / 100 + '</span>\n'*/
                menuHtml += '<div class="col-sm-6 col-md-6 col-lg-3 mix ' + result.data.menu[key].class_name_en + '">\n' +
                    '                    <div class="product-item">\n' +
                    '                        <div class="product__img">\n' +
                    '                            <img src="' + result.data.menu[key].img + '" alt="Product">\n' +
                    '                            <div class="product__action">\n' +
                    '                                <a onclick="addCart(' + result.data.menu[key].id + ',\'' + result.data.menu[key].img + '\')" class="btns btn__primary btn__hover2">+</a>\n' +
                    '                            </div>\n' +
                    '                        </div>\n' +
                    '                        <div class="product__content">\n' +
                    '\n' +
                    '                            <h4 class="product__title"><a href="#">' + name + '</a></h4>\n' +
                    '                            <span class="product__price">$' + result.data.menu[key].money / 100 + '</span>\n' +
                    '                        </div>\n' +
                    '                    </div>\n' +
                    '                </div>'

            });
            testHtml += menuHtml

            //$("#isotope-gallery-container").html(menuHtml);
            $("#test").html(testHtml);
            localStorage.setItem("testHtml", testHtml)
        }
    });
}


//获取购物车详情
function getCartInfo() {
    var cart = localStorage.getItem("cart")
    var cartInfo = {
        ids: [],
        num: {}
    }
    if (cart == null) {
        cart = {
            ids: [],
            num: {}
        }
        cart = JSON.stringify(cart)
    }
    cart = JSON.parse(cart)
    cartInfo.ids = cart.ids
    cartInfo.lang = localStorage.getItem("lang")
    for (var i = 0; i < cart.ids.length; i++) {
        var obj = {
            id: cart.ids[i],
            num: cart.num[i]
        }
        cartInfo.num[i] = obj
    }

    cartInfo = JSON.stringify(cartInfo)
    console.log(cartInfo)
    $.ajax({
        type: "post",
        url: url + 'api/user/getCartInfo',
        async: false, // 使用同步方式
        // 1 需要使用JSON.stringify 否则格式为 a=2&b=3&now=14...
        // 2 需要强制类型转换，否则格式为 {"a":"2","b":"3"}
        data: cartInfo,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            var data = data.data
            console.log(data)
            var html = ''
            var lang = localStorage.getItem("lang")
            var name = ""
            for (var i = 0; i < data.list.length; i++) {
                if (lang == 'en') {
                    name = data.list[i].name_en
                } else {
                    name = data.list[i].name
                }
                /* html += '<tr>\n' +
                     '                                    <td class="product-thumbnail">\n' +
                     '                                        <a href="#"><img src="' + data.list[i].img + '" alt=""></a>\n' +
                     '                                    </td>\n' +
                     '                                    <td class="product-name"><a href="#">' + name + '</a></td>\n' +
                     '                                    <td class="product-price-cart"><span class="amount">$' + data.list[i].money / 100 + '</span></td>\n' +
                     '                                    <td class="product-quantity">\n' +
                     '                                        <div class="cart-plus-minus">\n' +
                     '                                            <div class="dec qtybutton" onclick="subCartNum(\'' + data.list[i].id + '\')">-</div>\n' +
                     '                                            <input class="cart-plus-minus-box" type="text" name="qtybutton" value="' + data.num[i] + '">\n' +
                     '                                            <div class="inc qtybutton" onclick="addCartNum(\'' + data.list[i].id + '\')">+</div>\n' +
                     '                                        </div>\n' +
                     '                                    </td>\n' +
                     '                                    <td class="product-subtotal">$' + data.list[i].money * data.num[i] / 100 + '</td>\n' +
                     '                                    <td class="product-remove">\n' +
                     '                                        <a href="#" onclick="delCart(\'' + data.list[i].id + '\')"><i class="fa fa-times"></i></a>\n' +
                     '                                    </td>\n' +
                     '                                </tr>'*/

                html += ' <tr class="cart__product ">\n' +
                    '                                <td class="cart__product-item">\n' +
                    '                                    <div class="cart__product-img">\n' +
                    '                                        <img src="' + data.list[i].img + '" alt="">\n' +
                    '                                    </div>\n' +
                    '                                    <div class="cart__product-title">\n' +
                    '                                        <h6>' + name + '</h6>\n' +
                    '                                    </div>\n' +
                    '                                </td>\n' +
                    '                                <td class="cart__product-price">$ ' + data.list[i].money / 100 + '</td>\n' +
                    '                                <td class="cart__product-quantity">\n' +
                    '                                    <div class="product-quantity">\n' +
                    '                                        <div class="quantity__input-wrap">\n' +
                    '                                            <i class="fa fa-minus decrease-qty" onclick="subCartNum(\'' + data.list[i].id + '\')"></i>\n' +
                    '                                            <input type="number" value="' + data.num[i] + '" class="qty-input">\n' +
                    '                                            <i class="fa fa-plus increase-qty" onclick="addCartNum(\'' + data.list[i].id + '\')"></i>\n' +
                    '                                        </div>\n' +
                    '                                    </div>\n' +
                    '                                </td>\n' +
                    '                                <td class="cart__product-total">$ ' + data.list[i].money * data.num[i] / 100 + '</td>\n' +
                    '                                <td class="cart__product-operating">\n' +
                    '                                   <a href="#" onclick="delCart(\'' + data.list[i].id + '\')"> <div class="cart__product-remove">\n' +
                    '                                        <i class="fa fa-close" ></i>\n' +
                    '                                    </div></a>\n' +
                    '                                </td>\n' +
                    '                            </tr>'
            }
            $("#cart_list").html(html);
            $("#tax").html("$" + data.tax / 100);
            $("#ship").html(data.ship);
            $("#money").html("$" + data.money / 100);
            $("#total").html("$" + data.total / 100);
            $("#paynow_total").html("$" + data.total / 100);
        }
    });
}


function addOrder() {
    var cart = localStorage.getItem("cart")
    var cartInfo = {
        ids: [],
        num: {}
    }
    if (cart == null) {
        cart = {
            ids: [],
            num: {}
        }
        cart = JSON.stringify(cart)
    }
    cart = JSON.parse(cart)
    cartInfo.ids = cart.ids
    cartInfo.lang = localStorage.getItem("lang")
    for (var i = 0; i < cart.ids.length; i++) {
        var obj = {
            id: cart.ids[i],
            num: cart.num[i]
        }
        cartInfo.num[i] = obj
    }

    //cartInfo = JSON.stringify(cartInfo)
    var errMsg = ""
    var code = $("input[name='code']").val() ? $("input[name='code']").val() : errMsg = "code不能为空"
    var obj = {
        phone: $("input[name='phone']").val() ? $("input[name='phone']").val() : errMsg = "电话不能为空",
        name: $("input[name='name']").val() ? $("input[name='name']").val() : errMsg = "姓名不能为空",
        address: $("input[name='address']").val() ? $("input[name='address']").val() : errMsg = "地址不能为空",
        people: $("input[name='people']").val() ? $("input[name='people']").val() : errMsg = "用餐人数不能为空",
        time: $("input[name='time']").val() ? $("input[name='time']").val() : errMsg = "送货时间不能为空",
        remark: $("input[name='remark']").val() ? $("input[name='remark']").val() : "无",
        cart: cartInfo,
        pay_type: $("input[name='payment_method']:checked").val()
    };
    obj.address += code
    obj = JSON.stringify(obj)
    console.log($("select[name='time']").val())
    if (errMsg != "") {
        alert(errMsg)
        return
    }
    $.ajax({
        type: "post",
        url: url + 'api/user/addOrder',
        async: false,
        data: obj,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            console.log(data)
            alert(data.message)
            localStorage.setItem("cart", null)
            window.location = "/"
        }
    });
}