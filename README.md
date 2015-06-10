## YScroll - 高性能的无线滚动组件

### 使用gulp进行构建

#### 安装npm依赖
  `npm install`、`gulp`

#### 查看demo
执行`gulp server`，就会自动打开[http://localhost:3000/demo/index.html](http://localhost:3000/demo/index.html)

### 例子

* 不设置distance参数，则默认为scroll效果，如下面的代码：

  `new YScroll('.scroll-nav');`

* 设置snap效果

  `new YScroll('.fs-2', {
      distance: 220,    \\ 每一帧滑动的距离
      bounceTime: 300,  \\ 滑动动画时间transitionDuration
      ease: 'quadratic' \\ 滑动效果选项 'quadratic' || 'circular' || 'back' || 'elastic'
  });`