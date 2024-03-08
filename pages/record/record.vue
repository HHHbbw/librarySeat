<template>
<view class="record_v">
  <!-- 按钮区 -->
  <view class="container">
    <view class="button-group">
      <button class="button" @click="onReserveClick">自习室记录</button>
      <button class="button" @click="onStudyRoomClick">研修室记录</button>
    </view>
    <view class="button-group">
      <button class="button full-width" @click="onOtherClick">投诉记录</button>
    </view>
	<!-- 文本区 -->
	<view class="text-container">
	  <uv-text custom-style="color: #FFFFFF; text-align: center; font-size: 14px; width: 90%;" text="您本年度已有0次违规"></uv-text>
	  <uv-text custom-style="color: #FFFFFF; text-align: center; font-size: 14px; width: 90%;" text="请保持良好的自习室"></uv-text>
	</view>
  </view>

 
</view>

</template>

<script>
export default {
	  data(){
		  return{
			  el: '.button-group',
		  }
	  },
	  methods: {
	    onReserveClick: function(event) {
	      // 移除其他按钮的active类
	      this.removeActiveClass();
	      // 为点击的按钮添加active类
	      event.target.classList.add('active');
	    },
	    onStudyRoomClick: function(event) {
	      // 移除其他按钮的active类
	      this.removeActiveClass();
	      // 为点击的按钮添加active类
	      event.target.classList.add('active');
	    },
	    removeActiveClass: function() {
	      // 获取所有按钮
	      let buttons = document.querySelectorAll('.button');
	      // 移除每个按钮的active类
	      buttons.forEach(button => {
	        button.classList.remove('active');
	      });
	    }
	  }
  // methods: {
  //   onReserveClick() {
  //     // 处理自习室预定点击事件
  //   },
  //   onStudyRoomClick() {
  //     // 处理研修室预定点击事件
  //   },
  //   onOtherClick() {
  //     // 处理其他预定点击事件
  //   }
  // }
}
</script>

<style scoped>
	.record_v {
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	  justify-content: center;
	  width: 100%; /* 调整为需要的宽度，例如100% */
	
	}
	
	.container {
	  width: 90%; /* 调整为需要的宽度，例如90% */
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	  justify-content: center;
	  padding: 15px;
	  background-color:#87CEFA;
	  border-radius: 10px;
	  overflow: hidden;
	  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
	  margin: 10px;
	}
	
	.full-width {
	  flex: none; /* This button will not grow */
	  width: 100%; /* Full width button */
	}
	
	.text-container {
	  width: 90%; /* Set the width to match the container */
	  margin-top: 10px; /* Adjust spacing as needed */
	  text-align: center; /* Center the text horizontally */
	  margin: 0 auto; /* 上下边距为0，左右自动 */
	  width: 90%; /* 已经设置 */

	}


.button-group {
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin-bottom: 10px;
}

.button {
  background-color: #F0FFFF;
  color: darkgray;
  border: none;
  border-radius: 5px;
  padding: 2px 3px;
  margin: 0 5px;
  flex: 1; /* Buttons take up equal space */
}
.active {
  color: red; /* 点击后的文本颜色 */
}



</style>
