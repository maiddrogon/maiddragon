<?php
    header("content-type:text/html;charset=utf-8");
    //连接数据库
    $link=mysqli_connect("localhost","root","","shop");
    mysqli_set_charset($link,"utf8");
?>