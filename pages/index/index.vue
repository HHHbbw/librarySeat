<template>
	  <view class="container">
		  	<h1 class="h1">用户登录</h1>
			<!-- 
		
		  <view class="login-icon">
			  <image class="login-img" src=""></image>
		  </view> -->
		  
		  
		  <!-- 输入框代码 -->
		  <view class="login-from">
			  <!--  账号 -->
			  <view class="inputView">
				  <image class="nameImage" src="../../static/logname.png" ></image>
				  <input class="inputText" v-model="userInfo.username" placeholder="请输入账号"/>
			  </view>
			  <!-- 密码 -->
			  <view class="inputView">
			  	  <image class="nameImage" src="../../static/password.png"></image>
			  	   <input class="inputText" type="number" v-model="userInfo.password" password="true"  placeholder="请输入密码"/>
			  </view>
 
			  <!-- 登录按钮 -->
			  <view class="loginBtnView" @click="login">
				  立即登录
			  </view> 
		  </view>
		  
		  <view>
		  		<uv-toast ref="uToast" />
		  </view>
		  
	  </view>
</template>
 
<script>
	export default {
		data(){
			return{
				userInfo:{
					username:"",
					password:""
				},	
				loginOK:0 //用户第一次登录是0，登录过后变成1，第二次以后自动登录
			}
		},
		// 自动登录的制作
		async onLoad(){
			this.userInfo.username = await uni.getStorageSync("username")
			this.userInfo.password = await uni.getStorageSync("password")
			this.loginOK = await uni.getStorageSync("loginOK")
			if(this.loginOK === 6)
			{
				this.login()
			}
		},
		methods:{
			async login(){
				if(this.userInfo.username==='')
				{
					this.$refs.uToast.show({title: '账号不能为空'})
					return
				}
				const username = this.userInfo.username
				const password = md5Libs.md5(this.userInfo.password)
				let params = {username,password}
				await uni.setStorageSync('username', this.userInfo.username)
				await uni.setStorageSync('password', this.userInfo.password)
				const res = await this.$u.api.login(params)
				
				if(res.flag){
					console.log(JSON.stringify(res))
					await this.$store.dispatch('user/login',res) //保存token
					await uni.setStorageSync('loginOK', 1)     //设置是否自动登录
					uni.reLaunch({url:'/pages/index/index'}) //要用这个才可以
				}
				else
				{
					this.$refs.uToast.show({title: res.msg})
				}
			}
		}
	}
</script>
 
<style>
/* #ifndef H5 */
page {
	height: 100%;
	background-color: #eeeeee;
}
/* #endif */
</style>
 
<style lang="scss" scoped>
	page{ 
	 height: 100%; 
	} 
	
	
	.container { 
		.h1 {
			color: white;
			background-color: #5f8bd2;
			text-align: center;
			// margin: auto;
			height: 55px;
			width: 100%;
		}
	 height: 100%; 
	 display: flex; 
	 flex-direction: column; 
	 padding: 0; 
	 box-sizing: border-box; 
	 background-color: #f2f6fc;
	 
	
	   
	   /*表单内容*/
	   .login-from view:nth-child(2){
	   			  margin-top: 42rpx;
	   }
	   
	   .login-from { 
	    margin-top: 50rpx; 
		margin-left: 37rpx;
	    position: relative;
	    height:495rpx;
		width: 676rpx;
		border-radius: 6rpx;
		
		.inputView {
		   background-color: #FFFFFF; 
		   margin-top: 72rpx;
		   margin-left: 32rpx;
		   display: flex;
		   border-radius: 6rpx;
		   height: 76rpx;
		   border: 2rpx solid #EEEEEE ;
		   width: 616rpx;
		        /*输入框*/
			   .nameImage{ 
				margin-left: 22rpx; 
				margin-top: 22rpx;
				width: 24rpx; 
				height: 24rpx
			   }  
			   .inputText {
				margin-left: 25rpx; 
				margin-top: 14rpx;
				color: #727272; 
				font-size: 30rpx
			   }  
		  } 
		  .loginBtnView{
			  margin-top: 42rpx;
			  margin-left:24rpx;
			  background: #5f8bd2;
			  padding-top: 20rpx;
			  text-align: center;
			  font-size: 32rpx;
			  letter-spacing:4rpx;
			  color: #f5ffed;
			  height: 78rpx;
			  width: 639rpx;
			  border-radius: 32rpx;
			  
		  }
		  
		     
	   } 
	} 
</style>