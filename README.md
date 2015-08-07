YScroll
=====
> A lightweight scroll for touch device. 高性能的无线滚动组件

## Demo & Examples

To build the examples locally, run:

```
npm install
gulp server
```

Then your example([localhost:3000/demo/](localhost:3000/demo/)) will open automatically in browser.

## Usage

#### 不设置distance参数，则默认为scroll效果，如下面的代码：

``` javascript
new YScroll('.scroll-nav');
```

#### 设置snap效果

``` javascript
new YScroll('.fs-2', {
  distance: 220,    \\ 每一帧滑动的距离
  bounceTime: 300,  \\ 滑动动画时间transitionDuration
  ease: 'quadratic' \\ 滑动效果选项 'quadratic' || 'circular' || 'back' || 'elastic'
});
```

#### js animation scroll

``` javascript
new YScroll('.scroll-nav-1', {
  cssAnimation: false
});
```
