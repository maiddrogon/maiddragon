var body=document.body;body.onclick=function(e){var n,i,l=(e=e||window.event).target||window.target,t=document.querySelector(".content-shopcar"),r=document.getElementsByName("checked"),o=document.querySelector('[name="all1"]'),d=document.querySelector('[name="all2"]');document.querySelectorAll(".goods-li");if("加入购物车"==l.innerHTML&&((e=document.createElement("ul")).innerHTML=`<li><input type="checkbox" name="checked"></li>
        <li>
            <img src="${l.parentNode.firstElementChild.firstElementChild.src}" width="80px" height="80px">
            <p>${l.parentNode.firstElementChild.nextElementSibling.innerHTML}</p>
        </li>
        <li>
            <span>￥</span>
            <span>${l.previousElementSibling.previousElementSibling.lastChild.innerHTML}</span>
        </li>
        <li>
            <span>￥</span>
            <span>${l.previousElementSibling.previousElementSibling.lastChild.innerHTML}</span>
        </li>
        <li>
            <button>-</button>
            <button>1</button>
            <button>+</button>
        </li>
        <li>
            <span>￥</span>
            <span>${l.previousElementSibling.previousElementSibling.lastChild.innerHTML}</span>
        </li>
        <li>
            <span>删除</span>
        </li>`,t.appendChild(e)),"all1"==l.name)for(var a=0;a<r.length;a++)l.checked?(r[a].checked=!0,d.checked=!0):(r[a].checked=!1,d.checked=!1);if("all2"==l.name)for(a=0;a<r.length;a++)l.checked?(r[a].checked=!0,o.checked=!0):(r[a].checked=!1,o.checked=!1);if("checked"==l.name&&function(){for(var e=0,n=0;n<r.length;n++)r[n].checked&&e++;e==r.length?(o.checked=!0,d.checked=!0):(o.checked=!1,d.checked=!1)}(),"+"==l.innerHTML&&(n=l.previousElementSibling.innerHTML,l.previousElementSibling.innerHTML=++n,i=l.parentNode.previousElementSibling.lastElementChild.innerHTML,c=n*parseFloat(i),l.parentNode.nextElementSibling.lastElementChild.innerHTML=c.toFixed(2)),"-"==l.innerHTML&&((n=l.nextElementSibling.innerHTML)<=1?n=1:n--,l.nextElementSibling.innerHTML=n,i=l.parentNode.previousElementSibling.lastElementChild.innerHTML,c=n*parseFloat(i),l.parentNode.nextElementSibling.lastElementChild.innerHTML=c.toFixed(2)),"删除"==l.innerHTML&&l.parentNode.parentNode.remove(),"X 批量删除"==l.innerHTML)for(let e=0;e<r.length;e++)r[e].checked&&(r[e].parentNode.parentNode.remove(),e--);if("去结算"==l.innerHTML){for(var c=0,a=0;a<r.length;a++)r[a].checked&&(c+=parseFloat(r[a].parentNode.parentNode.lastElementChild.previousElementSibling.lastElementChild.innerHTML));console.log(c),l.parentNode.previousElementSibling.firstElementChild.lastElementChild.innerHTML="¥"+c.toFixed(2)}if("去结算"==l.innerHTML){for(c=0,a=0;a<r.length;a++)r[a].checked&&(c+=parseFloat(r[a].parentNode.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.lastElementChild.previousElementSibling.innerHTML));console.log(c),l.parentNode.previousElementSibling.previousElementSibling.lastElementChild.previousElementSibling.lastElementChild.innerHTML=c}};