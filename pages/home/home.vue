<template>
	
<view>
	
  <view class="u-card" >
    <!-- 用户信息区 -->
    <view class="u-list-item">
      <uv-avatar :size="60" src="static/home.png"></uv-avatar>
      <view class="u-info">
        <view class="u-name" style="color: azure;">姓名：测试姓名</view>
        <view class="u-id" style="color: azure;">学号：202330324</view>
      </view>
    </view>

    <!-- 操作按钮 -->
    <view class="u-button-group">
      <uv-button @click="open" type="info" icon="clock"  text="我要预约" ></uv-button>
      <uv-button type="info" icon="camera" text="扫码就座"></uv-button>
    </view>
  </view>
  
  <!-- 弹框 -->
  <view>
  	<uv-popup ref="popup" mode="center" custom-style="height: 150px; width:300px;" round="5" :closeOnClickOverlay="false">
  		<view class="content">
			<view class="home_btn1">
				<uv-button type="info" @click="goToReservation">预约座位</uv-button>
			</view>
  			<view class="home_btn2">
  				<uv-button type="info" @click="goToReservation">预约其他</uv-button>
  			</view>
			<view class="home_btn3">
				<uv-button type="primary" @click="close">关闭</uv-button>
			</view>
  		</view>
  	</uv-popup>
  </view>
  
	<view class="image-u">
		<uv-image  src="../../static/stu.png" mode="widthFix" :fade="true" duration="450"></uv-image>
	</view>
	<view class="image-text">
      
      <uv-text type="info" text="您尚未预约座位，快来吧！" align="center"></uv-text>
    </view>
	
  </view>
</template>

<script>
export default {
  // 页面的初始数据
    
  
    // 按钮点击事件处理函数
    methods: {
    	open(){
    		this.$refs.popup.open();
    	},close(){
				this.$refs.popup.close();
		},
		 goToReservation() {
		      // 使用path
		      this.$router.push('../preservation/preservation');
		      // 或者使用路由的name
		      // this.$router.push({ name: 'Reservation' });
		    }
    }
    
};
</script>

<style scoped>
.u-card {
  padding: 15px;
  background-color:#87CEFA;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  margin: 10px;
}

.u-list-item {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.u-info {
  margin-left: 10px;
}

.u-name,
.u-id {
  font-size: 16px;
  line-height: 1.5;
}

.u-button-group {
  display: flex;
  justify-content: space-around;
}

.image-u{
	position: relative;
	height: 300px;
	display: flex;
	justify-content: center;
	align-items: center;
}

/* 弹出层的自定义样式 */
uv-popup {
  width: 100%;
  border-radius: 10px; /* 设置圆角 */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* 设置阴影 */
}

/* 弹出层内部内容的样式 */
.content {
  display: flex; /* 使用flex布局 */
  flex-direction: column; /* 子元素垂直排列 */
  justify-content: space-between; /* 子元素之间平均分布空间 */
  height: 200rpx; /* 设置内容高度 */
}

/* 按钮的通用样式 */
.home_btn1, .home_btn2, .home_btn3 {
  margin: 10rpx; /* 设置按钮间距 */
}

/* 按钮样式 */
uv-button {
  background-color: #fff; /* 设置按钮背景颜色 */
  border: 1px solid #ccc; /* 设置按钮边框 */
  border-radius: 5px; /* 设置按钮圆角 */
  color: #333; /* 设置按钮文字颜色 */
  font-size: 16px; /* 设置文字大小 */
  padding: 10rpx; /* 设置内边距 */
}

/* 针对关闭按钮的额外样式 */
.home_btn3 uv-button {
  background-color: #eee; /* 设置关闭按钮的背景颜色 */
}

</style>
