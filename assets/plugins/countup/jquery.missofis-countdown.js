/*!
* Missofis Countdown Timer
*
* Author: Kemal YÄ±lmaz
* Website: http://missofis.com
* License: MIT
*
* @see http://jqueryboilerplate.com/ for this jQuery plugin boilerplate details
*/;(function($,window,document,undefined){'use strict';var PLUGIN_NAME='countdown',defaults={from:180,to:0,movingUnit:1000,timerEnd:undefined,outputPattern:'$day Days $hour : $minute : $second',autostart:true},outputReplacement=new RegExp('\\$day|\\$hour|\\$minute|\\$second','g');function Plugin(element,options){this.element=element;this.$element=$(element);this.settings=$.extend({},defaults,options);this._defaults=defaults;this._name=PLUGIN_NAME;this._displacement=-1*(this.settings.from-this.settings.to)/Math.abs(this.settings.from-this.settings.to);this._timerAt=this.settings.from;this._intervalId=undefined;this._isCounting=false;this.init();}
Plugin.prototype={init:function(){this._updateTimerText();if(this.settings.autostart)
this._start();},destroy:function(){window.clearInterval(this._intervalID);$.data(this.element,'plugin_'+PLUGIN_NAME,null);},resume:function(){if(this._isCounting)
return;this._start();},pause:function(){if(!this._isCounting)
return;this._isCounting=false;if(undefined!==this._intervalID)
window.clearInterval(this._intervalID);},_start:function(){var that=this;if(undefined!==this._intervalID)
window.clearInterval(this._intervalID);this._isCounting=true;this._intervalID=window.setInterval(function(){that._timerAt+=that._displacement;that._update();},that.settings.movingUnit);},_stop:function(){this.destroy();if(this.settings.timerEnd&&'function'===typeof this.settings.timerEnd){this.settings.timerEnd.call(this.$element);}},_update:function(){var that=this;this._updateTimerText();if(this._timerAt===this.settings.to||isNaN(this._timerAt)){this._stop();}},_updateTimerText:function(){var that=this;this.$element.text(function(index,text){var _parsedStuff=that._parseSeconds(that._timerAt);var _daysParsed=_parsedStuff.days.toString(),_hoursParsed=_parsedStuff.hours.toString(),_minutesParsed=_parsedStuff.minutes.toString(),_secondsParsed=_parsedStuff.seconds.toString();if(_parsedStuff.days<10)
_daysParsed='0'+_daysParsed;if(_parsedStuff.hours<10)
_hoursParsed='0'+_hoursParsed;if(_parsedStuff.minutes<10)
_minutesParsed='0'+_minutesParsed;if(_parsedStuff.seconds<10)
_secondsParsed='0'+_secondsParsed;return that.settings.outputPattern.replace(outputReplacement,function(match,offset,string){switch(match){case '$day':return _daysParsed;case '$hour':return _hoursParsed;case '$minute':return _minutesParsed;case '$second':return _secondsParsed;default:return '';}});});},_parseSeconds:function(seconds){seconds=Math.abs(seconds);var _parsedTime={days:0,hours:0,minutes:Math.floor(seconds/60),seconds:0};if(seconds>=86400){_parsedTime.days=Math.floor(seconds/86400);_parsedTime.hours=Math.floor(seconds%86400/3600);}
else if(seconds>=3600)
_parsedTime.hours=Math.floor(seconds/3600);if(seconds>=3600)
_parsedTime.minutes=Math.floor(seconds%3600/60);_parsedTime.seconds=seconds%60;return _parsedTime;}};$.fn[PLUGIN_NAME]=function(options){if(undefined===options||'object'===typeof options){return this.each(function(){if(!$.data(this,'plugin_'+PLUGIN_NAME))
$.data(this,'plugin_'+PLUGIN_NAME,new Plugin(this,options));});}
else if('string'===typeof options&&options[0]!=='_'&&options!=='init'){return this.each(function(){var instance=$.data(this,'plugin_'+PLUGIN_NAME);if(instance instanceof Plugin&&'function'===typeof instance[options]){instance[options].call(instance);}});}};})(jQuery,window,document);