---
title: logスケール上で等間隔の点を打つ
tags: 数値計算
author: Torricelli_1107
slide: false
---
Qiita初投稿になります．初めてのMarkdown記法に慣れる練習も兼ねていますので，体裁等の見づらさがありましたらご了承下さい．

# はじめに
宇宙のような何桁ものオーダーを議論する分野において，log scaleのグラフは何度もお世話になります．その中で先日，log scale上で等間隔に点を打つということを考えるようになりました．
自分で考える前にネットで調べる悪い癖が付いてしまったのですぐにgoogleで検索したのですが，日本語で解説されている記事は多くありませんでした．Qiitaにも記事はありますが（[両対数グラフの上で等間隔な点を打つ](https://qiita.com/yotapoon/items/f7208cc04ffe581b44fc)），ここでは始めに等比数列が仮定されていて，これが私には理解できませんでした．

# 解説
以上の経緯から自分なりに考えてみたというのが今回の内容です．計算は高校数学しか使っていないので全くもって大したものではありませんが．

以下ではlog scale上での離散的な値を$X_i$，このときのlinear scaleでの値を$x_i$と大文字/小文字で分けて解説します．すなわち両者には，
$$X_i=\log_{10}x_i$$が成り立ちます．
問題設定として，下図のようにlog scale上での2個の離散値$X_0,X_N(X_0<X_N)$の間を等間隔になるよう$N$分割し，このときに隣り合う任意の2つの離散値 $X_i,X_{i+1}(0\leq i<N)$が，linear scaleにおいてどう対応づけられるかを考えます．
![log_linear.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1582727/aba0dd3b-aa85-37bf-1011-9f933f0904d7.png)

問題設定より次の式が成り立ちます．

```math
\begin{cases}
 X_{i+1}=X_i+\Delta X\\
 \Delta X \equiv \dfrac{X_N - X_0}{N} = \rm{const.}
\end{cases}
```
今，$X_{i+1}=\log_{10}x_{i+1}$であることを考慮すると，

```math
\begin{align}
X_{i+1}&=X_i+\dfrac{1}{N}(X_N-X_0) \\
&=\log_{10}x_{i+1}
\end{align}
```
よって，

```math
\begin{align}
x_{i+1}&=10^{X_i+(X_N-X_0)/N} \\
&=10^{\log_{10}x_i+(\log_{10}x_N-\log_{10}x_0)/N} \\
&=10^{\log_{10}x_i}\cdot (10^{\log_{10}x_N}\cdot 10^{\log_{10}x_0})^{1/N} \\
&=x_i\cdot \Bigl(\dfrac{x_N}{x_0} \Bigr)^{\frac{1}{N}}
\end{align}
```
が得られます．$r\equiv (x_N/x_0 )^{1/N}$は両端の点と分割数で決まる定数なので, $x_{i+1}=r\cdot x_i$ と等比数列が成り立つことが示されます．
以上より，linear scaleでの離散値間の幅$\Delta x_i$は，

```math
\begin{align}
\Delta x_i&\equiv x_{i+1}-x_i \\
&= x_i\cdot \Bigl(\dfrac{x_N}{x_0} \Bigr)^{\frac{1}{N}} - x_i\\
&= \Bigl\{\Bigl(\dfrac{x_N}{x_0} \Bigr)^{\frac{1}{N}}-1 \Bigr\}x_i
\end{align}
```
で決まります．log scaleにおいて幅を一定にしている分，linear scaleでは$x_i$に応じて幅が変化することが分かります．
