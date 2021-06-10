<?php
include "./database.php";
//获取传入的参数
$u=$_POST['user1'];
$p=$_POST['psw1'];
//SQL语句
$sql="select * from user where name='$u' and password=$p";
//执行SQL语句
$result=mysqli_query($link,$sql);
//判断结果集中是否有数据
if($row=mysqli_fetch_row($result)){
    echo "
        <script>
            alert('登录成功');
            location.href='../main-page.html'
        </script>
    ";
}else{
    echo "
        <script>
            alert('登录失败');
            location.href='./login.html'
        </script>
    ";
}
//关闭数据库连接
mysqli_close($link);

?>