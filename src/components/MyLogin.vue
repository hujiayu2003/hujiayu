<template>
  <div class="login-container">
    <div class="login-box">
      <!-- 头像区域 -->
      <div class="text-center avatar-box">
        <img src="../assets/save.png" class="img-thumbnail avatar" alt="" />
      </div>
      <!-- 表单区域 -->
      <div class="form-login p-4">
        <!-- 登录名称 -->
        <div class="form-group form-inline">
          <label for="usertype">用户类型</label>
          <select name="type" id="usertype" class="form-control ml-2" v-model="usertype">
                    <option value="0" type="">请选择用户类型</option>
                    <option value="1">商家</option>
                    <option value="2">用户</option>
          </select>
        </div>
        <div class="form-group form-inline">
          <label for="username">登录名称</label>
          <input
            type="text"
            class="form-control ml-2"
            id="username"
            placeholder="请输入登录名称"
            autocomplete="off"
            v-model.trim="username"
          />
        </div>
        <!-- 登录密码 -->
        <div class="form-group form-inline">
          <label for="password">登录密码</label>
          <input
            type="password"
            class="form-control ml-2"
            id="password"
            placeholder="请输入登录密码"
            v-model.trim="password"
          />
        </div>
        <!-- 登录和重置按钮 -->
        <div class="form-group form-inline d-flex justify-content-end">
          <button type="button" class="btn btn-danger btn-lg txt" @click="login">登录</button>
        </div>
        <a href="http://localhost:8080/#/register" class="free">免费注册</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyLogin',
  data() {
    return {
      username: '',
      password: '',
      usertype: '0'
    }
  },
  methods: {
    login() {
    if(this.usertype==1){
      this.$router.push('/home')
    }else if(this.usertype==2){
      this.$router.push('/shop')
      this.$bus.$emit('send', this.username)
    }
      // if (this.username === 'admin' && this.password === '666666') {
      //   // 登录成功
      //   // 1. 存储 token
      //   localStorage.setItem('token', 'Bearer xxxx')
      //   // 2. 跳转到后台主页
      //   this.$router.push('/home')
      // } else {
      //   // 登录失败
      //   localStorage.removeItem('token')
      // }
    },
  }
}
</script>

<style lang="less" scoped>
.free {
  float: right;
}
.login-container {
  background-image: url(../assets/bgc.png);
  height: 100%;
  background-size:100% 100%; 
  background-attachment: fixed;
  background-repeat: no-repeat;
  .login-box {
    width: 400px;
    height: 300px;
    background-color: #fff;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 6px rgba(255, 255, 255, 0.5);
    .form-login {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      box-sizing: border-box;
    }
  }
}
.txt {
  width: 361px;
  margin-left: auto;
  margin-right: auto;
}
.form-control {
  flex: 1;
}

.avatar-box {
  position: absolute;
  width: 100%;
  top: -65px;
  left: 0;
  .avatar {
    width: 120px;
    height: 120px;
    border-radius: 50% !important;
    box-shadow: 0 0 6px #efefef;
  }
}
</style>
