<template>
  <div class="indexContainer">
    <el-row>
      <el-col :span="18">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">Slide 1</div>
            <div class="swiper-slide">Slide 2</div>
            <div class="swiper-slide">Slide 3</div>
          </div>
          <!-- 如果需要导航按钮 -->
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>

          <!-- 如果需要滚动条 -->
          <!--    <div class="swiper-scrollbar"></div>-->
        </div>
      </el-col>
      <el-col :span="6">
        <div>
          <div class="rightNavTop">
            待办事项
            <i class="el-icon-caret-right"></i>
            <i class="el-icon-caret-left"></i>
          </div>
          <div class="rightNavLine"></div>
          <div>
            <ul class="right-ul">
              <li>
                <span class="li-textContain"
                  ><span class="li-colorO">【配电】</span
                  >13F-西南强电间-线电压过电压告…</span
                >
                <span class="li-date">2022-03-03 10:05:32</span>
              </li>
              <li>
                <span class="li-textContain"
                  ><span class="li-colorY">【配电】</span
                  >-西南强电间-线电压过电压线电压过电告…</span
                >
                <span class="li-date">2022-03-03 10:05:32</span>
              </li>
              <li>
                <span class="li-textContain">
                  <span class="li-colorG">【给排水】</span
                  >8F-弱电间-水箱液位超标</span
                >
                <span class="li-date">2022-03-03 10:05:32</span>
              </li>
              <li>
                <span class="li-textContain"
                  ><span class="li-colorR">【消防】</span
                  >13F-西南强电间-线电压过线电压过电电压告…</span
                >
                <span class="li-date">2022-03-03 10:05:32</span>
              </li>
              <li>
                <span class="li-textContain"
                  ><span class="li-colorR">【消防】</span
                  >13F-西南强电间-线电压过线电压过电电压告…</span
                >
                <span class="li-date">2022-03-03 10:05:32</span>
              </li>
            </ul>
            <div class="right-ul-line"></div>
            <div class="right-seeMore">
              <span>查看更多</span
              ><img src="@/assets/index/Icon_gengduo.png" alt="" />
            </div>
          </div>
        </div>
        <div>
          <div class="rightNavTop">
            点位总数
            <i class="el-icon-caret-right"></i>
            <i class="el-icon-caret-left"></i>
          </div>
          <el-row class="zwzsBox">
            <el-col :span="8">
              <div>
                <img src="@/assets/index/Bg_zaixiandianwei.png" alt="" />
                <strong class="color-g">432</strong>
              </div>
              <span>在线点位数</span>
            </el-col>
            <el-col :span="8">
              <div>
                <img src="@/assets/index/Bg_lixiandianwei.png" alt="" />
                <strong class="color-h">22</strong>
              </div>
              <span>离线点位数</span>
            </el-col>
            <el-col :span="8">
              <div>
                <img src="@/assets/index/Bg_guzhangdianwei.png" alt="" />
                <strong class="color-o">54</strong>
              </div>
              <span>故障点位数</span>
            </el-col>
          </el-row>
        </div>
        <div>
          <div class="rightNavTop">
            能耗用电趋势
            <i class="el-icon-caret-right"></i>
            <i class="el-icon-caret-left"></i>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6">
        <div>
          <div class="rightNavTop">
            水浸监测区域占比
            <i class="el-icon-caret-right"></i>
            <i class="el-icon-caret-left"></i>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div>
          <div class="rightNavTop">
            回路信息统计
            <i class="el-icon-caret-right"></i>
            <i class="el-icon-caret-left"></i>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div>
          <div class="rightNavTop">
            分类用电占比
            <i class="el-icon-caret-right"></i>
            <i class="el-icon-caret-left"></i>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div>
          <div class="rightNavTop">
            预警统计
            <i class="el-icon-caret-right"></i>
            <i class="el-icon-caret-left"></i>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: "IndexFirst",
  data() {
    return {};
  },
  mounted() {
    new Swiper(".swiper-container", {
      loop: true,
      direction: "vertical",
      // 如果需要前进后退按钮
      nextButton: ".swiper-button-next",
      prevButton: ".swiper-button-prev",
      // 如果需要滚动条
      // scrollbar: '.swiper-scrollbar',
      //如果需要自动切换海报
      // autoplay: {
      //   delay: 1000,//时间 毫秒
      //   disableOnInteraction: false,//用户操作之后是否停止自动轮播默认true
      // },
    });
  },
};
</script>
<style lang="scss">
.indexContainer {
  padding: 40px 6px;
}
.swiper-container {
  height: 500px;
  width: 100%;
  .swiper-wrapper {
    .swiper-slide {
      width: 100%;
      height: 100%;
      background-color: #42b983;
      text-align: center;
      line-height: 500px;
    }
  }
}
</style>
<style lang="scss" scoped>
/*css主要部分的样式*/
/*定义滚动条宽高及背景，宽高分别对应横竖滚动条的尺寸*/

::-webkit-scrollbar {
  width: 10px; /*对垂直流动条有效*/
  height: 10px; /*对水平流动条有效*/
}

/*定义滚动条的轨道颜色、内阴影及圆角*/
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background: linear-gradient(
    180deg,
    rgba(16, 26, 60, 0) 0%,
    rgba(16, 26, 60, 1) 100%
  );
  border-radius: 3px;
}

/*定义滑块颜色、内阴影及圆角*/
::-webkit-scrollbar-thumb {
  border-radius: 7px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background: linear-gradient(
    180deg,
    rgba(91, 126, 255, 1) 0%,
    rgba(138, 191, 255, 1) 50%,
    rgba(91, 126, 255, 1) 100%
  );
}

/*定义两端按钮的样式*/
// ::-webkit-scrollbar-button {
// background-color:cyan;
// }

/*定义右下角汇合处的样式*/
::-webkit-scrollbar-corner {
  background: khaki;
}
.el-col {
  padding: 9px;
}
.rightNavLine {
  width: 100%;
  height: 2px;
  background: linear-gradient(
    90deg,
    rgba(91, 126, 255, 0.03) 0%,
    #5b7eff 50%,
    rgba(91, 126, 255, 0.03) 100%
  );
}
.rightNavTop {
  width: 100%;
  height: 34px;
  line-height: 34px;
  text-align: center;
  color: #fff;

  font-weight: 500;
  background: linear-gradient(
    90deg,
    rgba(91, 126, 255, 0.03) 0%,
    rgba(91, 126, 255, 0.75) 50%,
    rgba(91, 126, 255, 0.03) 100%
  );
  //   background: url("../../assets/index/Bg_title.png") no-repeat;
  //   background-size:cover;
  position: relative;
  i {
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    color: rgba(255, 226, 152, 1);
    font-size: 20px;
    display: inline-block;
    width: 20px;
    height: 34px;
    line-height: 34px;
  }
  .el-icon-caret-right {
    left: 0;
  }
  .el-icon-caret-left {
    right: 0;
  }
}
.right-ul {
  height: 150px;
  overflow-y: auto;
  font-size: 14px;
  color: #fff;
  list-style: none;
  text-align: left;
  margin: 0;
  padding: 0px 10px 16px;
  li {
    margin: 16px 0px 0px;
    span {
      display: inline-block;
      vertical-align: middle;
    }
  }
  .li-textContain {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 68%;
    box-sizing: border-box;
    padding-right: 3%;
  }
  .li-colorO {
    color: rgba(255, 190, 161, 1);
  }
  .li-colorY {
    color: rgba(255, 236, 146, 1);
  }
  .li-colorG {
    color: rgba(168, 255, 213, 1);
  }
  .li-colorR {
    color: rgba(255, 105, 204, 1);
  }
  .li-date {
    color: rgba(215, 215, 215, 1);
  }
}
.right-ul-line {
  height: 1px;
  width: 100%;
  background: url("../../assets/index/Img_daiban_line.png");
}
.right-seeMore {
  font-size: 14px;
  font-weight: 400;
  line-height: 36px;
  text-align: right;
  cursor: pointer;
  span {
    margin-right: 6px;
    color: #d7d7d7;
    vertical-align: middle;
  }
  img {
    vertical-align: middle;
  }
}
.zwzsBox {
  font-size: 14px;
  font-weight: 400;
  color: #ffffff;
  div {
    display: inline-block;
    position: relative; 
  }
  span {
    vertical-align: middle;
    margin-left: 6px;
    display: inline-block;
    width: 55%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  img {
    vertical-align: middle;
  }
  strong {
    position: absolute; 
    top: 0;
    margin: auto;
    bottom: 0;
    left:0;
    right: 0;
    font-size: 16px;
    font-family: DIN-Bold, DIN;
    font-weight: bold;
    display: inline-block;
    width: 100%;
    text-align: center;
    height: 20px;
    line-height: 20px;
  }
}
.color-g {
  color: #96ffbd;
}
.color-h {
  color: #97a5d6;
}
.color-o {
  color: #ff7b5b;
}
</style>
