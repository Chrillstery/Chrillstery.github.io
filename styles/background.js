//随机背景图片数组,图片可以换成图床链接，注意最后一条后面不要有逗号
var backimg =[
  "url(https://img2.imgtp.com/2024/03/28/iGOm8tKH.jpg)",
  "url(/image/https://img2.imgtp.com/2024/03/28/2LL6R5OS.jpg)",
  "url(https://img2.imgtp.com/2024/03/28/3kV6yXd1.jpg)",
  "url(https://img2.imgtp.com/2024/03/28/OCDAolKo.jpg)",
  "url(https://img2.imgtp.com/2024/03/28/xuK6ReuV.jpg)",
  "url(https://img2.imgtp.com/2024/03/28/st4AMPCl.jpg)"
];
//获取背景图片总数，生成随机数
var bgindex =Math.floor(Math.random() * (backimg.length));
//重设背景图片
document.getElementById("web_bg").style.backgroundImage = backimg[bgindex];
//重设banner图片,但是文章的页面保持封面图像
var theclasspage = document.getElementById("body-wrap");
if(theclasspage.className == "page"){
  document.getElementById("page-header").style.backgroundImage = backimg[bgindex];
}
