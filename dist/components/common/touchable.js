"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _react=_interopRequireDefault(require("react"));var _reactNative=require("react-native");function _createSuper2(Derived){function isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],function(){}));return true;}catch(e){return false;}}return function(){var Super=(0,_getPrototypeOf2["default"])(Derived),result;if(isNativeReflectConstruct()){var NewTarget=(0,_getPrototypeOf2["default"])(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return(0,_possibleConstructorReturn2["default"])(this,result);};}var TouchableComponent;if(_reactNative.Platform.OS==='android'){TouchableComponent=_reactNative.TouchableNativeFeedback;}else{TouchableComponent=_reactNative.TouchableWithoutFeedback;}if(TouchableComponent!==_reactNative.TouchableNativeFeedback){TouchableComponent.SelectableBackground=function(){return{};};TouchableComponent.SelectableBackgroundBorderless=function(){return{};};TouchableComponent.Ripple=function(){return{};};TouchableComponent.canUseNativeForeground=function(){return false;};}var PlatformTouchable=function(_React$PureComponent){(0,_inherits2["default"])(PlatformTouchable,_React$PureComponent);var _super=_createSuper2(PlatformTouchable);function PlatformTouchable(){(0,_classCallCheck2["default"])(this,PlatformTouchable);return _super.apply(this,arguments);}(0,_createClass2["default"])(PlatformTouchable,[{key:"render",value:function render(){var _this$props=this.props,children=_this$props.children,style=_this$props.style,foreground=_this$props.foreground,background=_this$props.background,useForeground=_this$props.useForeground,props=(0,_objectWithoutProperties2["default"])(_this$props,["children","style","foreground","background","useForeground"]);children=_react["default"].Children.only(children);if(TouchableComponent===_reactNative.TouchableNativeFeedback){useForeground=foreground&&_reactNative.TouchableNativeFeedback.canUseNativeForeground();if(foreground&&background){console.warn('Specified foreground and background for Touchable, only one can be used at a time. Defaulted to foreground.');}return _react["default"].createElement(TouchableComponent,(0,_extends2["default"])({},props,{useForeground:useForeground,background:useForeground&&foreground||background}),_react["default"].createElement(_reactNative.View,{style:style},children));}else if(TouchableComponent===_reactNative.TouchableWithoutFeedback){return _react["default"].createElement(_reactNative.TouchableWithoutFeedback,props,_react["default"].createElement(_reactNative.View,{style:style},children));}else{var TouchableFallback=this.props.fallback||TouchableComponent;return _react["default"].createElement(TouchableFallback,(0,_extends2["default"])({},props,{style:style}),children);}}}]);return PlatformTouchable;}(_react["default"].PureComponent);exports["default"]=PlatformTouchable;(0,_defineProperty2["default"])(PlatformTouchable,"SelectableBackground",TouchableComponent.SelectableBackground);(0,_defineProperty2["default"])(PlatformTouchable,"SelectableBackgroundBorderless",TouchableComponent.SelectableBackgroundBorderless);(0,_defineProperty2["default"])(PlatformTouchable,"Ripple",TouchableComponent.Ripple);(0,_defineProperty2["default"])(PlatformTouchable,"canUseNativeForeground",TouchableComponent.canUseNativeForeground);