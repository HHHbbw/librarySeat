<template>
  <view class="container">
    <button :class="['btn', selectedDate === 'start' ? 'active' : '']" @click="selectDate('start')">
      <view class="date">02-12</view>
      <view class="status">起始的时间</view>
    </button>
    <button :class="['btn', selectedDate === 'end' ? 'active' : '']" @click="selectDate('end')">
      <view class="date">02-13</view>
      <view class="status">截止的时间</view>
    </button>
  </view>
</template>

<script>
export default {
  data() {
    return {
      selectedDate: '', // 记录选中的按钮是开始还是结束
    };
  },
  methods: {
    selectDate(dateType) {
      // 设置选中的日期类型
      this.selectedDate = dateType;
    }
  }
};
</script>

<style>
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
