<?php
include "./database.php";
//获取传入的参数
$name=$_POST['username'];
$psw=$_POST['password'];

//编写SQL语句
$sql="insert into user(name,password)values('$name','$psw')";
//执行SQL语句
$result=mysqli_query($link,$sql);
//判断当前数据是否添加成功
if($result){
    echo "
    <script>
        alert('注册成功');
        location.href='../main-page.html'
    </script>
";
}else{
    // echo "<script>alert('注册失败');location.href='./zhuce.html'</script>";
    echo "注册失败";
}
//关闭数据库连接
mysqli_close($link);
?>