<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

html,
	body,
	#app {
		width: 100%;
		height: 100vh;
		margin: 0;
		padding: 0;
	}

	a {
		text-decoration: none;
	}
	.el-menu--horizontal >>> .navbar-item{
        padding: 0;
    }
</style>
