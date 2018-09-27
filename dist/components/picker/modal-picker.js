'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends2=require('../../polyfills/extends');var _extends3=_interopRequireDefault(_extends2);var _objectGetPrototypeOf=require('../../polyfills/objectGetPrototypeOf');var _objectGetPrototypeOf2=_interopRequireDefault(_objectGetPrototypeOf);var _classCallCheck2=require('babel-runtime/helpers/classCallCheck');var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=require('../../polyfills/createClass');var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=require('../../polyfills/possibleConstructorReturn');var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=require('../../polyfills/inherits');var _inherits3=_interopRequireDefault(_inherits2);var _react=require('react');var _react2=_interopRequireDefault(_react);var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);var _reactNative=require('react-native');var _all=require('../../../data/all.json');var _all2=_interopRequireDefault(_all);var _nimblePicker=require('./nimble-picker');var _nimblePicker2=_interopRequireDefault(_nimblePicker);var _sharedProps=require('../../utils/shared-props');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var styles=_reactNative.StyleSheet.create({emojiMartBackdrop:{position:'absolute',top:0,right:0,bottom:0,left:0,backgroundColor:'rgba(0, 0, 0, 0.5)'},emojiMartPickerContainer:{flexDirection:'column',alignItems:'center',justifyContent:'center',position:'absolute',top:0,right:0,bottom:0,left:0}});var ModalPicker=function(_React$PureComponent){(0,_inherits3.default)(ModalPicker,_React$PureComponent);function ModalPicker(){(0,_classCallCheck3.default)(this,ModalPicker);return(0,_possibleConstructorReturn3.default)(this,(ModalPicker.__proto__||(0,_objectGetPrototypeOf2.default)(ModalPicker)).apply(this,arguments));}(0,_createClass3.default)(ModalPicker,[{key:'render',value:function render(){var _props=this.props;var onPressClose=_props.onPressClose;var isVisible=_props.isVisible;if(!isVisible){return null;}return _react2.default.createElement(_reactNative.Modal,{transparent:true,onRequestClose:onPressClose,visible:isVisible},_react2.default.createElement(_reactNative.TouchableWithoutFeedback,{onPress:onPressClose,style:styles.emojiMartBackdrop},_react2.default.createElement(_reactNative.View,{style:styles.emojiMartBackdrop})),_react2.default.createElement(_reactNative.View,{style:styles.emojiMartPickerContainer},_react2.default.createElement(_nimblePicker2.default,(0,_extends3.default)({showCloseButton:true},this.props,this.state))));}}]);return ModalPicker;}(_react2.default.PureComponent);ModalPicker.defaultProps=(0,_extends3.default)({},_sharedProps.PickerDefaultProps,{data:_all2.default,isVisible:false});exports.default=ModalPicker;