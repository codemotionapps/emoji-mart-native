"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _react=_interopRequireDefault(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _reactNative=require("react-native");var _nimbleEmoji=_interopRequireDefault(require("./emoji/nimble-emoji"));function _createSuper2(Derived){function isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],function(){}));return true;}catch(e){return false;}}return function(){var Super=(0,_getPrototypeOf2["default"])(Derived),result;if(isNativeReflectConstruct()){var NewTarget=(0,_getPrototypeOf2["default"])(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return(0,_possibleConstructorReturn2["default"])(this,result);};}var styles=_reactNative.StyleSheet.create({skinSwatches:{paddingTop:2,paddingBottom:2,flexDirection:'row',alignItems:'center',justifyContent:'center'},skinSwatch:{width:0,height:0,overflow:'hidden'},skinSwatchShown:{width:32,height:28,paddingLeft:2,paddingRight:2},skin:{width:28,height:28,flexDirection:'row',alignItems:'center',justifyContent:'center'}});var SkinsEmoji=function(_React$PureComponent){(0,_inherits2["default"])(SkinsEmoji,_React$PureComponent);var _super=_createSuper2(SkinsEmoji);function SkinsEmoji(props){var _this;(0,_classCallCheck2["default"])(this,SkinsEmoji);_this=_super.call(this,props);_this.state={opened:false};return _this;}(0,_createClass2["default"])(SkinsEmoji,[{key:"handlePress",value:function handlePress(skin){var onChange=this.props.onChange;if(!this.state.opened){this.setState({opened:true});}else{this.setState({opened:false});if(skin!=this.props.skin){onChange(skin);}}}},{key:"render",value:function render(){var _this$props=this.props,skin=_this$props.skin,emojiProps=_this$props.emojiProps,data=_this$props.data,skinEmoji=_this$props.skinEmoji;var opened=this.state.opened;var skinToneNodes=[];for(var skinTone=1;skinTone<=6;skinTone++){var selected=skinTone===skin;skinToneNodes.push(_react["default"].createElement(_reactNative.View,{key:"skin-tone-".concat(skinTone),style:[styles.skinSwatch,selected||opened?styles.skinSwatchShown:null]},selected||opened?_react["default"].createElement(_reactNative.View,{style:styles.skin},_react["default"].createElement(_nimbleEmoji["default"],(0,_extends2["default"])({emoji:skinEmoji,data:data,onPress:this.handlePress.bind(this,skinTone)},emojiProps,{skin:skinTone}))):null));}return _react["default"].createElement(_reactNative.View,{style:styles.skinSwatches},skinToneNodes);}}]);return SkinsEmoji;}(_react["default"].PureComponent);exports["default"]=SkinsEmoji;SkinsEmoji.propTypes={onChange:_propTypes["default"].func,skin:_propTypes["default"].number.isRequired,emojiProps:_propTypes["default"].object.isRequired,skinTone:_propTypes["default"].number,skinEmoji:_propTypes["default"].string.isRequired};SkinsEmoji.defaultProps={onChange:function onChange(){},skinTone:null};