先打开任意Steam商店页面并登陆, 
然后在Steam商店页面打开浏览器控制台, 各类浏览器打开控制台的方法可自行搜索, chrome是F12
再把下边的命令复制到浏览器的控制台运行即可, 

S3&&4sAiBCjgK-C

https://club.ubisoft.com/en-US/game/assassins-creed-odyssey/PROJECTSTREAM/overview

(function _exec(){ var appids,      running = true,      queueNumber,      progressDialog = ShowAlertDialog('探索中', $J('<div/>').append($J('<div/>', {'class': 'waiting_dialog_throbber'}) ).append( $J('<div/>', {'id': 'progressContainer'}).text('获取进度...') ), '停止').done(abort); function abort(){   running = false;   progressDialog.Dismiss(); } function retry(){   abort();   ShowConfirmDialog('错误', '是否重试?', '重试', '放弃').done(_exec) } function clearApp(){   if(!running)     return;   showProgress();   var appid = appids.shift();   !appid ? generateQueue() : $J.post( appids.length ? '/app/' + appid : '/explore/next/', {sessionid: g_sessionID, appid_to_clear_from_queue: appid} ).done(clearApp).fail(retry);  } function generateQueue(){   running && $J.post('/explore/generatenewdiscoveryqueue', {sessionid: g_sessionID, queuetype: 0}).done(beginQueue).fail(retry); } function beginQueue(){   if(!running)     return;   $J.get('/explore/').done(function(htmlText){     var cardInfo = htmlText.match(/<div class="subtext">\D+(\d)\D+<\/div>/);     if( !cardInfo ){       abort();       ShowAlertDialog('完成','已完成全部3轮探索队列');       return;     }     var matchedAppids = htmlText.match(/0,\s+(\[.*\])/);     if( !matchedAppids ){       retry();       return;     }     appids = JSON.parse(matchedAppids[1]);     queueNumber = cardInfo[1];     appids.length == 0 ? generateQueue() : clearApp();     showProgress();   }) } function showProgress(){   $J('#progressContainer').html( '<br>剩余' + queueNumber + '个待探索队列, 当前队列剩余' + appids.length + '个待探索游戏' ); } beginQueue(); }()) 



扔tampermonkey就能用 。18年6月23日更新：文件头中的启用网址已更改为https，实测可正常使用。
// ==UserScript== // @name         Steam自动探索队列 // @namespace    https://steamcn.com/t157861-1-1 // @version      0.1 // @description  Steam节庆活动用脚本，自动探索3次队列。 // @author       baodongsun // @match        https://store.steampowered.com/ // @grant        SteamCN // ==/UserScript==  (function() {     'use strict';      // Your code here... })();(function _exec(){ var appids,      running = true,      queueNumber,      progressDialog = ShowAlertDialog('探索中', $J('<div/>').append($J('<div/>', {'class': 'waiting_dialog_throbber'}) ).append( $J('<div/>', {'id': 'progressContainer'}).text('获取进度...') ), '停止').done(abort); function abort(){   running = false;   progressDialog.Dismiss(); } function retry(){   abort();   ShowConfirmDialog('错误', '是否重试?', '重试', '放弃').done(_exec) } function clearApp(){   if(!running)     return;   showProgress();   var appid = appids.shift();   !appid ? generateQueue() : $J.post( appids.length ? '/app/' + appid : '/explore/next/', {sessionid: g_sessionID, appid_to_clear_from_queue: appid} ).done(clearApp).fail(retry);  } function generateQueue(){   running && $J.post('/explore/generatenewdiscoveryqueue', {sessionid: g_sessionID, queuetype: 0}).done(beginQueue).fail(retry); } function beginQueue(){   if(!running)     return;   $J.get('/explore/').done(function(htmlText){     var cardInfo = htmlText.match(/<div class="subtext">\D+(\d)\D+<\/div>/);     if( !cardInfo ){       abort();       ShowAlertDialog('完成','已完成全部3轮探索队列');       return;     }     var matchedAppids = htmlText.match(/0,\s+(\[.*\])/);     if( !matchedAppids ){       retry();       return;     }     appids = JSON.parse(matchedAppids[1]);     queueNumber = cardInfo[1];     appids.length == 0 ? generateQueue() : clearApp();     showProgress();   }) } function showProgress(){   $J('#progressContainer').html( '<br>剩余' + queueNumber + '个待探索队列, 当前队列剩余' + appids.length + '个待探索游戏' ); } beginQueue(); }())

2018年6月23日更新：
目前ASF支持自动探索队列：

在配置文件“机器人名称.json” 中添加以下参数，即可自动探索队列。
"AutoSteamSaleEvent": true,
复制代码
