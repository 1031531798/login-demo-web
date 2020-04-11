
var trText;

//标签页逻辑
var menu_sm = document.getElementById("menu-two");
$('#menu a').click(function (e) {
    //获取a标签的各种属性
    let id = this.id;
    let local = this.href;
    let href = local.split("/").pop();
    //获取li标签
    let nav_li = this.parentNode;
    console.log(this)
    $(this).tab('show');//激活显示页
    //添加active
    setActive('#menu',  nav_li)
    //判断是否已经存在标签
    let li_list = $('#menu-two a');
    for (let i = 0; i < li_list.length; i++) {
        if (li_list[i].innerText == this.innerText) {
            setActive("#menu-two" , li_list[i].parentNode)
            return false;
        }
    }
    //添加标签页小窗口
    let l = document.createElement("li");
    let aa = document.createElement("a");
    let sp = document.createElement("span");
    let li = menu_sm.appendChild(l);
    let a = li.appendChild(aa);
    let span = li.appendChild(sp);
    a.setAttribute("href", href); 
    a.setAttribute("id", "nav_"+id);
    a.setAttribute("data-toggle", "tab");
    a.setAttribute("data-addtab", "tab" + id);
    a.innerText = this.innerText;
    span.setAttribute('class', 'close-tab glyphicon glyphicon-remove');
    setActive("#menu-two", l);
    //绑定显示关闭按钮事件
    $('#menu-two li').mouseover(function () {
        let span = this.lastChild;
        span.style.display = "block";
    })
    //绑定隐藏关闭按钮事件
    $('#menu-two li').mouseout(function () {
        let span = this.lastChild;
        span.style.display = "none";
    })
    //编辑关闭标签事件
    $('.close-tab').click(function () {
        let li = this.parentElement;
        li.remove();
        //关闭后显示最后一个标签页
        let liList = $('#menu-two li');
        let lastLi = liList[liList.length - 1];
        let a = lastLi.firstChild;
        $(a).tab('show')
    })
})
//设置标签页选中状态
function setActive(par, obj) {
    let a = par;
    let b = " li"
    let ab = $( a + b);
    ab.removeClass('active');
    obj.setAttribute('class', 'active');
}
//去除home span文本节点
var nodeText = document.querySelector('.aaa').lastChild;
document.querySelector('.aaa').removeChild(nodeText);
document.querySelector('.aaa').removeChild(document.querySelector('.aaa').firstChild);
