const _0xace6b8=_0x9136;(function(_0x1988a,_0x44c071){const _0x51f923=_0x9136,_0x630f6f=_0x1988a();while(!![]){try{const _0x22907f=parseInt(_0x51f923(0xb5))/0x1*(parseInt(_0x51f923(0xab))/0x2)+parseInt(_0x51f923(0xac))/0x3*(parseInt(_0x51f923(0xb6))/0x4)+-parseInt(_0x51f923(0xb7))/0x5*(-parseInt(_0x51f923(0xbf))/0x6)+-parseInt(_0x51f923(0xb0))/0x7*(-parseInt(_0x51f923(0xad))/0x8)+parseInt(_0x51f923(0xb9))/0x9+-parseInt(_0x51f923(0xbe))/0xa*(parseInt(_0x51f923(0xbc))/0xb)+parseInt(_0x51f923(0xa6))/0xc*(-parseInt(_0x51f923(0xb2))/0xd);if(_0x22907f===_0x44c071)break;else _0x630f6f['push'](_0x630f6f['shift']());}catch(_0x22881c){_0x630f6f['push'](_0x630f6f['shift']());}}}(_0x201f,0x4a25f));const winston=require(_0xace6b8(0xb1)),colors=require(_0xace6b8(0xb4)),customLevels={'levels':{'error':0x0,'warn':0x1,'info':0x2,'success':0x3,'custom':0x4},'colors':{'error':_0xace6b8(0xbd),'warn':_0xace6b8(0xae),'info':'cyan','success':'green','custom':_0xace6b8(0xa9)}},padLevel=_0x249d33=>{const _0x3cdfe5=0x7;return _0x249d33['toUpperCase']()['padEnd'](_0x3cdfe5);},customFormat=winston[_0xace6b8(0xaa)]['combine'](winston[_0xace6b8(0xaa)][_0xace6b8(0xbb)]({'format':_0xace6b8(0xa7)}),winston[_0xace6b8(0xaa)]['printf'](({timestamp:_0xe7235d,level:_0x5e5c41,message:_0x40a061})=>{const _0x5419a2=_0xace6b8,_0x30e5dd={'error':colors['error'],'warn':colors['warning'],'info':colors[_0x5419a2(0xba)],'success':colors['success'],'custom':colors['custom']};return''+colors[_0x5419a2(0xb3)]+_0xe7235d+colors[_0x5419a2(0xc0)]+_0x5419a2(0xb8)+_0x30e5dd[_0x5e5c41]+padLevel(_0x5e5c41)+colors['reset']+'\x20|\x20'+_0x40a061;})),logger=winston['createLogger']({'levels':customLevels[_0xace6b8(0xaf)],'level':'custom','format':customFormat,'transports':[new winston['transports']['Console']()]});function _0x9136(_0x3ae354,_0x402987){const _0x201f6c=_0x201f();return _0x9136=function(_0x9136f2,_0x5b1919){_0x9136f2=_0x9136f2-0xa6;let _0x4cf772=_0x201f6c[_0x9136f2];return _0x4cf772;},_0x9136(_0x3ae354,_0x402987);}function _0x201f(){const _0x38d99b=['4890285JKIBDh','info','timestamp','1397lGzuYY','red','41890YnAlXJ','2704818AgQevu','reset','1473636pBVNOT','YYYY-MM-DD\x20HH:mm:ss','exports','magenta','format','366HAEuFn','339513qejifP','8NgZjMO','yellow','levels','3153143EHeUcy','winston','143IadQPu','dim','./colors','2199uYCXWe','12Hbvngz','5jzAjpy','\x20|\x20'];_0x201f=function(){return _0x38d99b;};return _0x201f();}winston['addColors'](customLevels['colors']),module[_0xace6b8(0xa8)]=logger;