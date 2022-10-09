<template>
    <div class="login-container">
      <div class="login-box">
        <p style="font-size: 30px;text-align: center;margin-top: 10px;">欢迎注册</p>
        <!-- 表单区域 -->
        <div class="p-4">
          <!-- 登录名称 -->
          <div class="form-group form-inline">
            <label for="usertype">用户类型</label>
            <select name="type" id="usertype" class="form-control ml-2">
                      <option value="0">请选择用户类型</option>
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
              placeholder="请输入登录密码(字符长度不能少于6)"
              v-model.trim="password"
            />
          </div>
          <div class="form-group form-inline">
            <label for="password">确认密码</label>
            <input
              type="password"
              class="form-control ml-2"
              id="password2"
              placeholder="请再次输入登录密码"
              v-model.trim="password2"
            />
          </div>
          <!-- 登录和重置按钮 -->
          <div class="form-group form-inline d-flex justify-content-end">
            <button type="button" class="btn btn-danger btn-lg txt" @click="register">注册</button>
          </div>
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
        password2: '',
      }
    },
    methods: {
      register(){
        if(this.username==''){
          alert("登录名称不能为空")
        }else if(this.password==''){
          alert("登录密码不能为空")
        }else if(this.password.length<6){
          alert("密码长度要大于6")
        }else if(this.password!=this.password2)
        {
          alert("两次输入密码不一样")
        }else{
          this.$router.push('/login') 
          alert("注册成功")
        }
      }
    }
  }
  </script>
  
  <style lang="less" scoped>
  .login-container {
    background-image: url(../assets/bgc.webp);
    height: 100%;
    background-size:100% 100%; 
    background-attachment: fixed;
    background-repeat: no-repeat;
    .login-box {
      width: 400px;
      height: 350px;
      background-color: #fff;
      border-radius: 3px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      box-shadow: 0 0 6px rgba(255, 255, 255, 0.5);
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
  