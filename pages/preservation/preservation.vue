<template>
	<view>
		<view class="pre_card">
		<uv-form labelPosition="left" :model="model1" :rules="rules" ref="form" >
			
			
		<!-- 	<uv-form-item  label="类 型:" :custom-style="{margin: '8px'}" borderBottom>
				<uv-radio-group v-model="radiovalue">
				  <uv-radio :disabled="false" name="自习室" label="自习室" @click="showStudyRoomSelect"></uv-radio>
				  <uv-radio :disabled="false" name="研修室" label="研修室" @click="showResearchRoomSelect" ></uv-radio>
				</uv-radio-group>
			</uv-form-item> -->
			
			<!-- 自习位置表单选择 -->
			<!-- <uv-form-item class="u-text-right u-m-l-40" label="自 习:" :custom-style="{margin: '8px'}" prop="userInfo.room" borderBottom @click="showRoomSelect">
				<view>
					<uv-input v-if="radiovalue=='自习室'" class="zixi" input-align="center" shape="circle" v-model="model1.userInfo.room" disabled disabledColor="#ffffff" placeholder="请选择自习室" border="none">
					</uv-input>
				</view>
				
				<view>
					<uv-input v-if="radiovalue=='研修室'" class="yanxiu" input-align="center" shape="circle" v-model="model1.userInfo.room" disabled disabledColor="#ffffff" placeholder="请选择研修室" border="none">
					</uv-input>
				</view> -->
				
				
				<!-- 选择类型：自习室 研修室 -->
				<uv-form-item label="类 型:" :custom-style="{margin: '8px'}" borderBottom>
				  <uv-radio-group v-model="radiovalue">
				    <uv-radio :disabled="false" name="自习室" label="自习室" @click="showStudyRoomSelect"></uv-radio>
				    <uv-radio :disabled="false" name="研修室" label="研修室" @click="showResearchRoomSelect"></uv-radio>
				  </uv-radio-group>
				</uv-form-item>
				
				<!-- 自习位置表单选择 -->
				<uv-form-item class="u-text-right u-m-l-40" label="自 习:" :custom-style="{margin: '8px'}" prop="userInfo.room" borderBottom @click="showRoomSelect">
				  <view>
				    <uv-input 
				      :class="{'zixi': radiovalue=='自习室', 'yanxiu': radiovalue=='研修室'}"
					  custom-style=" width: 150%; "
				      input-align="center" 
				      shape="circle" 
				      v-model="model1.userInfo.room" 
				      disabled 
				      disabledColor="#ffffff" 
				      :placeholder="radiovalue=='自习室' ? '请选择自习室' : '请选择研修室'" 
				      border="none"
					  @click.native="showButtons = true">
				    </uv-input>
				  </view>
				<!-- 右边箭头图标 -->
				<template v-slot:right>
					<uv-icon name="arrow-right"></uv-icon>
				</template>
			</uv-form-item>
			
		</uv-form>
		
		</view>
		
		  <view v-if="showButtons" class="container">
		    <button :class="['btn', selectedDate === 'start' ? 'active' : '']" @click="selectDate('start')">
		      <view class="date">02-12</view>
		      <view class="status">起始的时间</view>
		    </button>
		    <button :class="['btn', selectedDate === 'end' ? 'active' : '']" @click="selectDate('end')">
		      <view class="date">02-13</view>
		      <view class="status">截止的时间</view>
		    </button>
		  </view>
		  
		<!-- 提交与重置按钮 -->
		<uv-button  type="primary" text="提交" customStyle=" width:100%;  border: none;  margin: 10px auto;  flex: none; " @click="submit"></uv-button>
		<uv-button type="error" text="重置" customStyle="" @click="reset"></uv-button>

<!-- 		<uv-action-sheet  ref="roomSelect" :actions="actions1" title="请选择自习室" description="" @select="roomSelect">
		</uv-action-sheet>
		<uv-action-sheet ref="roomSelect" :actions="actions2" title="请选择研修室" description="" @select="roomSelect">
		</uv-action-sheet> -->
	
	<uv-action-sheet ref="studyRoomSelect" :actions="actions1" title="请选择自习室" description="" @select="roomSelect">
	</uv-action-sheet>
	<uv-action-sheet ref="researchRoomSelect" :actions="actions2" title="请选择研修室" description="" @select="roomSelect">
	</uv-action-sheet>

	</view>
</template>

<script>
	export default {
			data() {
				return {
					// 单选框默认选项
					radiovalue: '自习室',
					//选择图书馆的位置
					model1: {
						userInfo: {
							name: '主校区',
							room: '',
						},
					},
					// 选择自习地点的类型数组
					actions1: [{
						name: '【2层】东二楼自习室',
					}, {
						name: '【3层】南三环形区自习区',
					}, {
						name: '【3层】东三楼自习室',
					}, {
						name: '测试',
					},],
					actions2: [{
						name: '请选择研修室',
					}, 
					 {
						name: '测试',
					},],
					rules: {
						
						'userInfo.room': {
							type: 'string',
							max: 20,
							required: true,
							message: '请选择自习室',
							trigger: ['blur', 'change']
						},
					},
					radio: '',
					switchVal: false,
					showButtons: false, // 控制按钮显示的属性
					
					selectedDate: '', // 记录选中的按钮是开始还是结束
				}
			},
			methods: {
				showStudyRoomSelect() {
				      if (this.radiovalue === '自习室') {
				        this.$refs.studyRoomSelect.open();
				      }
				    },
				
				    showResearchRoomSelect() {
				      if (this.radiovalue === '研修室') {
				        this.$refs.researchRoomSelect.open();
				      }
				    },
					
						selectDate(dateType) {
						  // 设置选中的日期类型
						  this.selectedDate = dateType;
						},
				// 提交
				submit() {
					// 如果有错误，会在catch中返回报错信息数组，校验通过则在then中返回true
					this.$refs.form.validate().then(res => {
						uni.showToast({
							icon: 'success',
							title: '校验通过'
						})
					}).catch(errors => {
						uni.showToast({
							icon: 'error',
							title: '校验失败'
						})
					})
				},
				// 重置
				  reset() {
				    this.$refs.form.resetFields();
				    this.$refs.form.clearValidate();
				    this.showButtons = false; // 重置时隐藏按钮
				    this.selectedDate = ''; // 重置选中的按钮
				  },
				// 性别选择
				// showRoomSelect() {
				// 	this.$refs.roomSelect.open();
				// 	this.hideKeyboard();
				// },
				showRoomSelect() {
				  if (this.radiovalue === '自习室') {
				    this.$refs.studyRoomSelect.open();
				  } else if (this.radiovalue === '研修室') {
				    this.$refs.researchRoomSelect.open();
				  }
				  this.hideKeyboard();
				},

				
				// roomSelect(e) {
				// 	this.model1.userInfo.room = e.name;
				// 	// 对部分表单字段进行校验
				// 	this.$refs.form.validateField('userInfo.room',err=>{
				// 		// 处理错误后的逻辑
				// 	})
				// },
				
				
				roomSelect(e) {
				    this.model1.userInfo.room = e.name;
				    this.showButtons = true; // 显示按钮
				    // 对部分表单字段进行校验
				    this.$refs.form.validateField('userInfo.room', err => {
				      // 处理错误后的逻辑
				    });
				
				  // 如果是自习室，则弹出日历选择器
				      if (this.radiovalue === '自习室') {
				        // 调用弹出日历选择器的方法
				        this.showCalendar();
				      }
				    },
				  
				    
				showCalendar() {
				  // 实现打开日历选择器的逻辑
				  // 依赖于你的日历选择器组件的API
				}


				
			}
		}
	// export default {
	// 	data() {
	// 		return {
	// 			// // 基本案列数据
	// 			// radiolist: [{
	// 			// 	name: '自习室',
	// 			// 	disabled: false
	// 			// }, {
	// 			// 	name: '研修室',
	// 			// 	disabled: false
	// 			// }],
	// 			// // uv-radio-group的v-model绑定的值如果设置为某个radio的name，就会被默认选中
	// 			// radiovalue: '',
	// 		}
	// 	}
	// }
</script>
<style lang="scss" scoped>
	.pre_card{
		padding: 15px;
		background-color:#F5F5DC;
		border-radius: 10px;
		overflow: hidden;
		box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
		margin: 10px;
	}
	.container {
	  display: flex;
	}
	.btn {
	  border: 1px solid #c0c4cc;
	  padding: 10px;
	  margin: 50px;
	  border-radius: 10px;
	  background-color: #ffffff;
	}
	.active {
	  background-color: #87CEFF; /* 选中的颜色 */
	}
	.date {
	  color: #606266;
	  font-size: 16px;
	  font-weight: bold;
	}
	.status {
	  color: #909399;
	  font-size: 12px;
	}
	
</style>
