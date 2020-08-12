# 数学知识

[牛顿-拉夫逊迭代](https://www.zhihu.com/question/20690553/answer/146104283)

[梯度下降法](https://www.zhihu.com/question/305638940/answer/670034343)

## 说明

69题是一道Easy题，实际上的难点在数学上面，有很多方法可以求平方根，此处是计算机用的比较多的方法。

求a的平方根可以等效成求![img](https://latex.codecogs.com/svg.latex?f(x)%20=%20x^2%20-%20a)的根，有了上述数学知识后：

- 任意选取一个数![img](https://latex.codecogs.com/svg.latex?a_{0})，该点坐标是![img](https://latex.codecogs.com/svg.latex?(a_{0},f(a_{0})))
- 该点与二次函数![img](https://latex.codecogs.com/svg.latex?f(x)%20=%20x^2%20-%20a)上的切线方程为![img](https://latex.codecogs.com/svg.latex?f(x)%20-%20f(a_{0})%20=%20f%27(a_{0})(x%20-%20a_{0}))
- 切线与x轴相交的点为：![img](https://latex.codecogs.com/svg.latex?(a_{0}%20-%20\frac{f(a_{0})}{f%27(a_{0})},%200))
- 过该点与x轴的垂线与二次函数相交与![img](https://latex.codecogs.com/svg.latex?a_{1})，![img](https://latex.codecogs.com/svg.latex?a_{1})的坐标为![img](https://latex.codecogs.com/svg.latex?(a_{1},f(a_{1})))，其中![img](https://latex.codecogs.com/svg.latex?a_{1}%20=%20a_{0}%20-%20\frac{f(a_{0})}{f%27(a_{0})})
- ......
- 所以![img](https://latex.codecogs.com/svg.latex?a_{n+1}%20=%20a_{n}%20-%20\frac{f(a_{n})}{f%27(a_{n})})

化简：![img](https://latex.codecogs.com/svg.latex?a_{n+1}%20=%20a_{n}%20-%20\frac{a_{n}^{2}-a}{2a_{n}}%20=%20\frac{a_{n}+\frac{a}{a_{n}}%20}{2})

也有人把这种方程叫做状态转移方程，其中![img](https://latex.codecogs.com/svg.latex?a)为待开根的值,![img](https://latex.codecogs.com/svg.latex?a_{n+1})为n+1次迭代后的平方根，n越大越趋近于实际值

## 实现

```javascript
var mySqrt = function (x) {
  let an = 1 // 任意数a0
  let a = x // 被开方数a
  for (let i = 0; Math.abs(an * an - a) > 0.1/* 收敛条件 */; i++) {
    an = (an + a / an) / 2
  }
  return Math.floor(an)
};
```

