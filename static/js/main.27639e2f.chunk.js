(this["webpackJsonpreal-time-qr-code-example"]=this["webpackJsonpreal-time-qr-code-example"]||[]).push([[0],{11:function(t,e,r){"use strict";r.r(e);r(4);var n,o=r(0),i=r.n(o),a=r(2),s=r.n(a),h=r(1);!function(){function t(t){this.mode=r.MODE_8BIT_BYTE,this.data=t,this.parsedData=[];for(var e=0,n=this.data.length;e<n;e++){var o=[],i=this.data.charCodeAt(e);i>65536?(o[0]=240|(1835008&i)>>>18,o[1]=128|(258048&i)>>>12,o[2]=128|(4032&i)>>>6,o[3]=128|63&i):i>2048?(o[0]=224|(61440&i)>>>12,o[1]=128|(4032&i)>>>6,o[2]=128|63&i):i>128?(o[0]=192|(1984&i)>>>6,o[1]=128|63&i):o[0]=i,this.parsedData.push(o)}this.parsedData=Array.prototype.concat.apply([],this.parsedData),this.parsedData.length!=this.data.length&&(this.parsedData.unshift(191),this.parsedData.unshift(187),this.parsedData.unshift(239))}function e(t,e){this.typeNumber=t,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}t.prototype={getLength:function(t){return this.parsedData.length},write:function(t){for(var e=0,r=this.parsedData.length;e<r;e++)t.put(this.parsedData[e],8)}},e.prototype={addData:function(e){var r=new t(e);this.dataList.push(r),this.dataCache=null},isDark:function(t,e){if(t<0||this.moduleCount<=t||e<0||this.moduleCount<=e)throw new Error(t+","+e);return this.modules[t][e]},getModuleCount:function(){return this.moduleCount},make:function(){this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(t,r){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var n=0;n<this.moduleCount;n++){this.modules[n]=new Array(this.moduleCount);for(var o=0;o<this.moduleCount;o++)this.modules[n][o]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(t,r),this.typeNumber>=7&&this.setupTypeNumber(t),null==this.dataCache&&(this.dataCache=e.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,r)},setupPositionProbePattern:function(t,e){for(var r=-1;r<=7;r++)if(!(t+r<=-1||this.moduleCount<=t+r))for(var n=-1;n<=7;n++)e+n<=-1||this.moduleCount<=e+n||(this.modules[t+r][e+n]=0<=r&&r<=6&&(0==n||6==n)||0<=n&&n<=6&&(0==r||6==r)||2<=r&&r<=4&&2<=n&&n<=4)},getBestMaskPattern:function(){for(var t=0,e=0,r=0;r<8;r++){this.makeImpl(!0,r);var n=g.getLostPoint(this);(0==r||t>n)&&(t=n,e=r)}return e},createMovieClip:function(t,e,r){var n=t.createEmptyMovieClip(e,r);this.make();for(var o=0;o<this.modules.length;o++)for(var i=1*o,a=0;a<this.modules[o].length;a++){var s=1*a;this.modules[o][a]&&(n.beginFill(0,100),n.moveTo(s,i),n.lineTo(s+1,i),n.lineTo(s+1,i+1),n.lineTo(s,i+1),n.endFill())}return n},setupTimingPattern:function(){for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6]&&(this.modules[t][6]=t%2==0);for(var e=8;e<this.moduleCount-8;e++)null==this.modules[6][e]&&(this.modules[6][e]=e%2==0)},setupPositionAdjustPattern:function(){for(var t=g.getPatternPosition(this.typeNumber),e=0;e<t.length;e++)for(var r=0;r<t.length;r++){var n=t[e],o=t[r];if(null==this.modules[n][o])for(var i=-2;i<=2;i++)for(var a=-2;a<=2;a++)this.modules[n+i][o+a]=-2==i||2==i||-2==a||2==a||0==i&&0==a}},setupTypeNumber:function(t){for(var e=g.getBCHTypeNumber(this.typeNumber),r=0;r<18;r++){var n=!t&&1==(e>>r&1);this.modules[Math.floor(r/3)][r%3+this.moduleCount-8-3]=n}for(r=0;r<18;r++){n=!t&&1==(e>>r&1);this.modules[r%3+this.moduleCount-8-3][Math.floor(r/3)]=n}},setupTypeInfo:function(t,e){for(var r=this.errorCorrectLevel<<3|e,n=g.getBCHTypeInfo(r),o=0;o<15;o++){var i=!t&&1==(n>>o&1);o<6?this.modules[o][8]=i:o<8?this.modules[o+1][8]=i:this.modules[this.moduleCount-15+o][8]=i}for(o=0;o<15;o++){i=!t&&1==(n>>o&1);o<8?this.modules[8][this.moduleCount-o-1]=i:o<9?this.modules[8][15-o-1+1]=i:this.modules[8][15-o-1]=i}this.modules[this.moduleCount-8][8]=!t},mapData:function(t,e){for(var r=-1,n=this.moduleCount-1,o=7,i=0,a=this.moduleCount-1;a>0;a-=2)for(6==a&&a--;;){for(var s=0;s<2;s++)if(null==this.modules[n][a-s]){var h=!1;i<t.length&&(h=1==(t[i]>>>o&1)),g.getMask(e,n,a-s)&&(h=!h),this.modules[n][a-s]=h,-1==--o&&(i++,o=7)}if((n+=r)<0||this.moduleCount<=n){n-=r,r=-r;break}}}},e.PAD0=236,e.PAD1=17,e.createData=function(t,r,n){for(var o=v.getRSBlocks(t,r),i=new _,a=0;a<n.length;a++){var s=n[a];i.put(s.mode,4),i.put(s.getLength(),g.getLengthInBits(s.mode,t)),s.write(i)}var h=0;for(a=0;a<o.length;a++)h+=o[a].dataCount;if(i.getLengthInBits()>8*h)throw new Error("code length overflow. ("+i.getLengthInBits()+">"+8*h+")");for(i.getLengthInBits()+4<=8*h&&i.put(0,4);i.getLengthInBits()%8!=0;)i.putBit(!1);for(;!(i.getLengthInBits()>=8*h)&&(i.put(e.PAD0,8),!(i.getLengthInBits()>=8*h));)i.put(e.PAD1,8);return e.createBytes(i,o)},e.createBytes=function(t,e){for(var r=0,n=0,o=0,i=new Array(e.length),a=new Array(e.length),s=0;s<e.length;s++){var h=e[s].dataCount,u=e[s].totalCount-h;n=Math.max(n,h),o=Math.max(o,u),i[s]=new Array(h);for(var l=0;l<i[s].length;l++)i[s][l]=255&t.buffer[l+r];r+=h;var f=g.getErrorCorrectPolynomial(u),c=new m(i[s],f.getLength()-1).mod(f);a[s]=new Array(f.getLength()-1);for(l=0;l<a[s].length;l++){var d=l+c.getLength()-a[s].length;a[s][l]=d>=0?c.get(d):0}}var p=0;for(l=0;l<e.length;l++)p+=e[l].totalCount;var v=new Array(p),_=0;for(l=0;l<n;l++)for(s=0;s<e.length;s++)l<i[s].length&&(v[_++]=i[s][l]);for(l=0;l<o;l++)for(s=0;s<e.length;s++)l<a[s].length&&(v[_++]=a[s][l]);return v};for(var r={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},o={L:1,M:0,Q:3,H:2},i=0,a=1,s=2,h=3,u=4,l=5,f=6,c=7,g={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){for(var e=t<<10;g.getBCHDigit(e)-g.getBCHDigit(g.G15)>=0;)e^=g.G15<<g.getBCHDigit(e)-g.getBCHDigit(g.G15);return(t<<10|e)^g.G15_MASK},getBCHTypeNumber:function(t){for(var e=t<<12;g.getBCHDigit(e)-g.getBCHDigit(g.G18)>=0;)e^=g.G18<<g.getBCHDigit(e)-g.getBCHDigit(g.G18);return t<<12|e},getBCHDigit:function(t){for(var e=0;0!==t;)e++,t>>>=1;return e},getPatternPosition:function(t){return g.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,r){switch(t){case i:return(e+r)%2==0;case a:return e%2==0;case s:return r%3==0;case h:return(e+r)%3==0;case u:return(Math.floor(e/2)+Math.floor(r/3))%2==0;case l:return e*r%2+e*r%3==0;case f:return(e*r%2+e*r%3)%2==0;case c:return(e*r%3+(e+r)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new m([1],0),r=0;r<t;r++)e=e.multiply(new m([1,d.gexp(r)],0));return e},getLengthInBits:function(t,e){if(1<=e&&e<10)switch(t){case r.MODE_NUMBER:return 10;case r.MODE_ALPHA_NUM:return 9;case r.MODE_8BIT_BYTE:case r.MODE_KANJI:return 8;default:throw new Error("mode:"+t)}else if(e<27)switch(t){case r.MODE_NUMBER:return 12;case r.MODE_ALPHA_NUM:return 11;case r.MODE_8BIT_BYTE:return 16;case r.MODE_KANJI:return 10;default:throw new Error("mode:"+t)}else{if(!(e<41))throw new Error("type:"+e);switch(t){case r.MODE_NUMBER:return 14;case r.MODE_ALPHA_NUM:return 13;case r.MODE_8BIT_BYTE:return 16;case r.MODE_KANJI:return 12;default:throw new Error("mode:"+t)}}},getLostPoint:function(t){for(var e=t.getModuleCount(),r=0,n=0;n<e;n++)for(var o=0;o<e;o++){for(var i=0,a=t.isDark(n,o),s=-1;s<=1;s++)if(!(n+s<0||e<=n+s))for(var h=-1;h<=1;h++)o+h<0||e<=o+h||0==s&&0==h||a==t.isDark(n+s,o+h)&&i++;i>5&&(r+=3+i-5)}for(n=0;n<e-1;n++)for(o=0;o<e-1;o++){var u=0;t.isDark(n,o)&&u++,t.isDark(n+1,o)&&u++,t.isDark(n,o+1)&&u++,t.isDark(n+1,o+1)&&u++,0!=u&&4!=u||(r+=3)}for(n=0;n<e;n++)for(o=0;o<e-6;o++)t.isDark(n,o)&&!t.isDark(n,o+1)&&t.isDark(n,o+2)&&t.isDark(n,o+3)&&t.isDark(n,o+4)&&!t.isDark(n,o+5)&&t.isDark(n,o+6)&&(r+=40);for(o=0;o<e;o++)for(n=0;n<e-6;n++)t.isDark(n,o)&&!t.isDark(n+1,o)&&t.isDark(n+2,o)&&t.isDark(n+3,o)&&t.isDark(n+4,o)&&!t.isDark(n+5,o)&&t.isDark(n+6,o)&&(r+=40);var l=0;for(o=0;o<e;o++)for(n=0;n<e;n++)t.isDark(n,o)&&l++;return r+=10*(Math.abs(100*l/e/e-50)/5)}},d={glog:function(t){if(t<1)throw new Error("glog("+t+")");return d.LOG_TABLE[t]},gexp:function(t){for(;t<0;)t+=255;for(;t>=256;)t-=255;return d.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},p=0;p<8;p++)d.EXP_TABLE[p]=1<<p;for(p=8;p<256;p++)d.EXP_TABLE[p]=d.EXP_TABLE[p-4]^d.EXP_TABLE[p-5]^d.EXP_TABLE[p-6]^d.EXP_TABLE[p-8];for(p=0;p<255;p++)d.LOG_TABLE[d.EXP_TABLE[p]]=p;function m(t,e){if(void 0==t.length)throw new Error(t.length+"/"+e);for(var r=0;r<t.length&&0==t[r];)r++;this.num=new Array(t.length-r+e);for(var n=0;n<t.length-r;n++)this.num[n]=t[n+r]}function v(t,e){this.totalCount=t,this.dataCount=e}function _(){this.buffer=[],this.length=0}m.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),r=0;r<this.getLength();r++)for(var n=0;n<t.getLength();n++)e[r+n]^=d.gexp(d.glog(this.get(r))+d.glog(t.get(n)));return new m(e,0)},mod:function(t){if(this.getLength()-t.getLength()<0)return this;for(var e=d.glog(this.get(0))-d.glog(t.get(0)),r=new Array(this.getLength()),n=0;n<this.getLength();n++)r[n]=this.get(n);for(n=0;n<t.getLength();n++)r[n]^=d.gexp(d.glog(t.get(n))+e);return new m(r,0).mod(t)}},v.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],v.getRSBlocks=function(t,e){var r=v.getRsBlockTable(t,e);if(void 0==r)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+e);for(var n=r.length/3,o=[],i=0;i<n;i++)for(var a=r[3*i+0],s=r[3*i+1],h=r[3*i+2],u=0;u<a;u++)o.push(new v(s,h));return o},v.getRsBlockTable=function(t,e){switch(e){case o.L:return v.RS_BLOCK_TABLE[4*(t-1)+0];case o.M:return v.RS_BLOCK_TABLE[4*(t-1)+1];case o.Q:return v.RS_BLOCK_TABLE[4*(t-1)+2];case o.H:return v.RS_BLOCK_TABLE[4*(t-1)+3];default:return}},_.prototype={get:function(t){var e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(var r=0;r<e;r++)this.putBit(1==(t>>>e-r-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var C=[[17,14,11,7],[32,26,20,14],[53,42,32,24],[78,62,46,34],[106,84,60,44],[134,106,74,58],[154,122,86,64],[192,152,108,84],[230,180,130,98],[271,213,151,119],[321,251,177,137],[367,287,203,155],[425,331,241,177],[458,362,258,194],[520,412,292,220],[586,450,322,250],[644,504,364,280],[718,560,394,310],[792,624,442,338],[858,666,482,382],[929,711,509,403],[1003,779,565,439],[1091,857,611,461],[1171,911,661,511],[1273,997,715,535],[1367,1059,751,593],[1465,1125,805,625],[1528,1190,868,658],[1628,1264,908,698],[1732,1370,982,742],[1840,1452,1030,790],[1952,1538,1112,842],[2068,1628,1168,898],[2188,1722,1228,958],[2303,1809,1283,983],[2431,1911,1351,1051],[2563,1989,1423,1093],[2699,2099,1499,1139],[2809,2213,1579,1219],[2953,2331,1663,1273]];function w(){var t=!1,e=navigator.userAgent;if(/android/i.test(e)){t=!0;var r=e.toString().match(/android ([0-9]\.[0-9])/i);r&&r[1]&&(t=parseFloat(r[1]))}return t}var D=function(){var t=function(t,e){this._el=t,this._htOption=e};return t.prototype.draw=function(t){var e=this._htOption,r=this._el,n=t.getModuleCount();function o(t,e){var r=document.createElementNS("http://www.w3.org/2000/svg",t);for(var n in e)e.hasOwnProperty(n)&&r.setAttribute(n,e[n]);return r}this.clear();var i=o("svg",{viewBox:"0 0 "+String(n)+" "+String(n),width:"100%",height:"100%",fill:e.colorLight});i.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink"),r.appendChild(i),i.appendChild(o("rect",{fill:e.colorLight,width:"100%",height:"100%"})),i.appendChild(o("rect",{fill:e.colorDark,width:"1",height:"1",id:"template"}));for(var a=0;a<n;a++)for(var s=0;s<n;s++)if(t.isDark(a,s)){var h=o("use",{x:String(s),y:String(a)});h.setAttributeNS("http://www.w3.org/1999/xlink","href","#template"),i.appendChild(h)}},t.prototype.clear=function(){for(;this._el.hasChildNodes();)this._el.removeChild(this._el.lastChild)},t}(),E="svg"===document.documentElement.tagName.toLowerCase()?D:"undefined"==typeof CanvasRenderingContext2D?function(){var t=function(t,e){this._el=t,this._htOption=e};return t.prototype.draw=function(t){for(var e=this._htOption,r=this._el,n=t.getModuleCount(),o=Math.floor(e.width/n),i=Math.floor(e.height/n),a=['<table style="border:0;border-collapse:collapse;">'],s=0;s<n;s++){a.push("<tr>");for(var h=0;h<n;h++)a.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:'+o+"px;height:"+i+"px;background-color:"+(t.isDark(s,h)?e.colorDark:e.colorLight)+';"></td>');a.push("</tr>")}a.push("</table>"),r.innerHTML=a.join("");var u=r.childNodes[0],l=(e.width-u.offsetWidth)/2,f=(e.height-u.offsetHeight)/2;l>0&&f>0&&(u.style.margin=f+"px "+l+"px")},t.prototype.clear=function(){this._el.innerHTML=""},t}():function(){function t(){this._elImage.src=this._elCanvas.toDataURL("image/png")}if(this&&this._android&&this._android<=2.1){var e=1/window.devicePixelRatio,r=CanvasRenderingContext2D.prototype.drawImage;CanvasRenderingContext2D.prototype.drawImage=function(t,n,o,i,a,s,h,u,l){if("nodeName"in t&&/img/i.test(t.nodeName))for(var f=arguments.length-1;f>=1;f--)arguments[f]=arguments[f]*e;else"undefined"==typeof u&&(arguments[1]*=e,arguments[2]*=e,arguments[3]*=e,arguments[4]*=e);r.apply(this,arguments)}}function n(t,e){var r=this;if(r._fFail=e,r._fSuccess=t,null===r._bSupportDataURI){var n=document.createElement("img"),o=function(){r._bSupportDataURI=!1,r._fFail&&r._fFail.call(r)};return n.onabort=o,n.onerror=o,n.onload=function(){r._bSupportDataURI=!0,r._fSuccess&&r._fSuccess.call(r)},void(n.src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==")}!0===r._bSupportDataURI&&r._fSuccess?r._fSuccess.call(r):!1===r._bSupportDataURI&&r._fFail&&r._fFail.call(r)}var o=function(t,e){this._bIsPainted=!1,this._android=w(),this._htOption=e,this._el=t,this._bIsPainted=!1,this._bSupportDataURI=null,this._elCanvas=document.createElement("canvas"),this._oContext=this._elCanvas.getContext("2d"),this._elCanvas.width=e.width,this._elCanvas.height=e.height,this._elImage=document.createElement("img"),this._elImage.alt="Scan me!","canvas"===e.mode&&t.appendChild(this._elCanvas),"img"===e.mode&&this._el.appendChild(this._elImage)};return o.prototype.draw=function(t){var e=this._oContext,r=this._htOption,n=t.getModuleCount(),o=r.width/n,i=r.height/n,a=Math.round(o),s=Math.round(i);this.clear();for(var h=0;h<n;h++)for(var u=0;u<n;u++){var l=t.isDark(h,u),f=u*o,c=h*i;e.strokeStyle=l?r.colorDark:r.colorLight,e.lineWidth=1,e.fillStyle=l?r.colorDark:r.colorLight,e.fillRect(f,c,o,i),e.strokeRect(Math.floor(f)+.5,Math.floor(c)+.5,a,s),e.strokeRect(Math.ceil(f)-.5,Math.ceil(c)-.5,a,s)}this._bIsPainted=!0},o.prototype.makeImage=function(){this._bIsPainted&&n.call(this,t)},o.prototype.isPainted=function(){return this._bIsPainted},o.prototype.clear=function(){this._oContext.clearRect(0,0,this._elCanvas.width,this._elCanvas.height),this._bIsPainted=!1},o.prototype.round=function(t){return t?Math.floor(1e3*t)/1e3:t},o}();function A(t,e){for(var r=1,n=function(t){var e=encodeURI(t).toString().replace(/\%[0-9a-fA-F]{2}/g,"a");return e.length+(e.length!=t?3:0)}(t),i=0,a=C.length;i<=a;i++){var s=0;switch(e){case o.L:s=C[i][0];break;case o.M:s=C[i][1];break;case o.Q:s=C[i][2];break;case o.H:s=C[i][3]}if(n<=s)break;r++}if(r>C.length)throw new Error("Too long data");return r}(n=window.QRCode=function(t,e){if(this._htOption={width:256,height:256,typeNumber:4,colorDark:"#000000",colorLight:"#ffffff",correctLevel:o.H,mode:"canvas"},"string"===typeof e&&(e={text:e}),e)for(var r in e)this._htOption[r]=e[r];"string"==typeof t&&(t=document.getElementById(t)),this._htOption.useSVG&&(E=D),this._android=w(),this._el=t,this._oQRCode=null,this._oDrawing=new E(this._el,this._htOption),this._htOption.text&&this.makeCode(this._htOption.text)}).prototype.makeCode=function(t){this._oQRCode=new e(A(t,this._htOption.correctLevel),this._htOption.correctLevel),this._oQRCode.addData(t),this._oQRCode.make(),this._el.title=t,this._oDrawing.draw(this._oQRCode),this.makeImage()},n.prototype.makeImage=function(){"function"==typeof this._oDrawing.makeImage&&(!this._android||this._android>=3)&&this._oDrawing.makeImage()},n.prototype.clear=function(){this._oDrawing.clear()},n.CorrectLevel=o}();var u=null,l=function(t){var e=Object(o.useRef)(null);return Object(o.useEffect)((function(){return e&&e.current&&(e.current.innerHTML="",u?u.makeCode(t.text):u=new QRCode(e.current,t)),function(){u.clear(),u=null}}),[e,t]),i.a.createElement("div",{ref:e,style:{fontSize:0}})},f={display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"},c=function(){var t=Object(o.useState)("Hello World"),e=Object(h.a)(t,2),r=e[0],n=e[1],a=Object(o.useState)("Hello World"),s=Object(h.a)(a,2),u=s[0],c=s[1];return i.a.createElement("div",{style:f},i.a.createElement("div",{style:{margin:"50px auto"}},i.a.createElement(l,{text:u})),i.a.createElement("div",null,i.a.createElement("input",{type:"text",value:r,onChange:function(t){return n(t.target.value)}}),i.a.createElement("button",{onClick:function(){c(r)}},"\u66f4\u65b0\u4e8c\u7ef4\u7801"),i.a.createElement("button",{onClick:function(){c("https://www.bilibili.com/"),n("https://www.bilibili.com/")}},"\u53ef\u8df3\u8f6c")))};s.a.render(i.a.createElement(c,null),document.getElementById("root"))},3:function(t,e,r){t.exports=r(11)},4:function(t,e,r){}},[[3,1,2]]]);
//# sourceMappingURL=main.27639e2f.chunk.js.map