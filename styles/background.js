//随机背景图片数组,图片可以换成图床链接，注意最后一条后面不要有逗号
var backimg =[
  "url(/image/girl.jpg)",
  "url(/image/night.jpg)",
  "url(/image/knight.jpg)",
  "url(/image/background.jpg)",
  "url(/image/plain.jpg)",
  "url(/image/mountain.jpg)"
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
