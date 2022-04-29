# 笔试复习

## Redis服务器

使用ps aux|grep redis-server命令，查找结果如下，那么 redis-server运行的端口号为?

Redis 服务器默认使用 6379 端口，通过 –port 参数可以自定义端口号

## 哈夫曼树

下面对于哈夫曼树描述正确的是()

A 是一颗满二叉树
B 是一颗完全二叉树
C n个叶子节点的哈夫曼树总共有2n个节点
D 没有一个节点的出度为1

答案为D。考察对哈夫曼树的理解。既不是满二叉树，也不是完全 二叉树，只是一颗二叉树。
n 个叶子节点的哈夫曼树总共有 2n-1 个节点。
没有一个节点的出度为1。

## 浮点

计算器浮点运算速度为85.0167PFLOPS，这说明该计算器每秒完成的浮点操作次数约为()次?

K-M-G-T-P-E-Z，都是乘以10^3的递增关系，P=10^15。85.0167PFLOPS=每秒8.5*10^16次浮点操作

kiloFLOPS kFLOPS 103
megaFLOPS MFLOPS 106
gigaFLOPS GFLOPS 109
teraFLOPS TFLOPS 1012
petaFLOPS PFLOPS 1015
