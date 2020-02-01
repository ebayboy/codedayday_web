#!/bin/bash

#usage: ./build.sh type watch

if [ "$2" = "build" ]; then
    WATCH=""
else 
    WATCH="--watch"
fi

if [ "$1" = "alipay" ];then
#支付宝小程序
    TYPE="alipay"
elif [ "$1" = "swan" ];then
#百度小程序编译预览模式
    TYPE="swan"
elif [ "$1" = "h5" ];then
#H5 编译预览模式
    TYPE="h5"
else
#微信小程序
    TYPE="weapp"
fi

cmd="taro build --type $TYPE $WATCH"

echo "cmd:[$cmd]"

eval ${cmd}
