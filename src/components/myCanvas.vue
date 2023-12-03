<template>
  <div class="process-bg">
    <div class="canvas-container">
      <canvas
        id="myCanvas4"
        class="my-canvas"
        width="382"
        height="685"
      ></canvas>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  drawCanvas4();
});
const drawCanvas4 = () => {
  let c = document.getElementById("myCanvas4");
  let context = c.getContext("2d");
  let width = 382; //画布宽度
  let height = 685; //画布高度
  let fPoints = [
    { x: 20, y: 142, r: 3 },
  ]; //初始点坐标
  let posMap = new Map();
  posMap.set("point1", true);
  posMap.set("point2", false);
  posMap.set("point3", false);
  posMap.set("point4", false);
  posMap.set("point5", false);
  function drawCircle() {
    for (let i = 0; i < fPoints.length; i++) {
      context.lineWidth = 0; //线条宽度-空心圆
      // context.strokeStyle = 'rgba(2, 179, 253,0.02)'; //颜色
      context.shadowBlur = 0; // 设置或返回用于阴影的颜色
      context.shadowColor = "rgba(2, 179, 253,1)"; // 设置或返回用于阴影的模糊级别
      context.fillStyle = "rgba(2, 179, 253,1)"; //填充颜色-实心圆
      context.fill(); //画实心圆
      context.beginPath();
      context.arc(fPoints[i].x, fPoints[i].y, fPoints[i].r, 0, Math.PI * 2);
      context.closePath();
    }

    if (fPoints[0].x >= 20 && fPoints[0].y === 142 && fPoints[0].x <= 355) {
      fPoints[0].x += 2.5;
      if( fPoints[0].x >= 355 ){
        posMap.set('point2', true) // 已经走到了第二个点
      }
    }

    if( posMap.get('point2') && fPoints[0].y < 472 ){
        fPoints[0].x -= 2.2;
        fPoints[0].y += 2.03;
        if( fPoints[0].x <= 0 && fPoints[0].y >= 472 ){
            posMap.set('point3', true) // 已经走到了第三个点
            fPoints[0].y = 472
        }
    }

    if( posMap.get('point3') && !posMap.get('point4') && fPoints[0].y == 472 ){
        fPoints[0].x += 2.5;
        fPoints[0].y = 472;
        if( fPoints[0].x >= 382 && fPoints[0].y === 472 ){
            posMap.set('point4', true) // 已经走到了第四个点
            fPoints[0].y += 1
        }
    }

    if( posMap.get('point4') && fPoints[0].y >= 472 ){
        fPoints[0].x -= 2.2;
        fPoints[0].y += 2.53;
        if( fPoints[0].y >= 685 ){
            posMap.set('point5', true) // 已经走到了第五个点
        }
    }

    if( posMap.get('point5') ){
        fPoints = [{ x: 20, y: 142, r: 3 }];
        posMap.set("point1", true);
        posMap.set("point2", false);
        posMap.set("point3", false);
        posMap.set("point4", false);
        posMap.set("point5", false);
    }  
    
  }

  function render() {
    //默认值为source-over
    let prev = context.globalCompositeOperation;
    //只显示canvas上原图像的重叠部分
    context.globalCompositeOperation = "destination-in";
    //设置主canvas的绘制透明度
    context.globalAlpha = 0.9;
    //这一步目的是将canvas上的图像变的透明
    context.fillRect(0, 0, width, height);
    //在原图像上重叠新图像
    context.globalCompositeOperation = prev;
    //在主canvas上画新圆
    drawCircle();
    if (width !== 0) {
      //在动画没有结束前，递归渲染
      window.requestAnimationFrame(render);
    }
  }
  window.requestAnimationFrame(render);
};
</script>

<style lang="scss" scoped>
.process-bg {
  width: calc(100% - 128px);
  max-width: 1792px;
  margin: 0 auto;
  height: 920px;
  background-image: url("../assets/images/huashan-3@2x.png");
  background-repeat: no-repeat;
  background-position: top;
  background-size: contain;
  .canvas-container {
    width: 382px;
    margin: 0 auto;
    // background-color: pink;
    border: 1px solid #fff;
    .my-canvas {
      width: 382px;
      height: 685px;
    }
  }
}
</style>
