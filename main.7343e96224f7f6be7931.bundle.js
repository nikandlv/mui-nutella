(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{422:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(74),__webpack_require__(75),__webpack_require__(80),__webpack_require__(71),__webpack_require__(132),__webpack_require__(76),__webpack_require__(63),__webpack_require__(161),__webpack_require__(402),__webpack_require__(162),__webpack_require__(105),__webpack_require__(385),__webpack_require__(254),__webpack_require__(19),__webpack_require__(322),__webpack_require__(747),__webpack_require__(387),__webpack_require__(131),__webpack_require__(388),__webpack_require__(61),__webpack_require__(81),__webpack_require__(77),__webpack_require__(78),__webpack_require__(748);var react__WEBPACK_IMPORTED_MODULE_24__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_24___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_24__),_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_25__=__webpack_require__(202),_material_ui_icons_Whatshot__WEBPACK_IMPORTED_MODULE_26__=__webpack_require__(143),_material_ui_icons_Whatshot__WEBPACK_IMPORTED_MODULE_26___default=__webpack_require__.n(_material_ui_icons_Whatshot__WEBPACK_IMPORTED_MODULE_26__),_material_ui_icons_Message__WEBPACK_IMPORTED_MODULE_27__=__webpack_require__(268),_material_ui_icons_Message__WEBPACK_IMPORTED_MODULE_27___default=__webpack_require__.n(_material_ui_icons_Message__WEBPACK_IMPORTED_MODULE_27__),_material_ui_core__WEBPACK_IMPORTED_MODULE_28__=__webpack_require__(70),_material_ui_core__WEBPACK_IMPORTED_MODULE_29__=__webpack_require__(866),_material_ui_core__WEBPACK_IMPORTED_MODULE_30__=__webpack_require__(429),_material_ui_core__WEBPACK_IMPORTED_MODULE_31__=__webpack_require__(99),_material_ui_core__WEBPACK_IMPORTED_MODULE_32__=__webpack_require__(203),_material_ui_core__WEBPACK_IMPORTED_MODULE_33__=__webpack_require__(95),_material_ui_core__WEBPACK_IMPORTED_MODULE_34__=__webpack_require__(270),_material_ui_core__WEBPACK_IMPORTED_MODULE_35__=__webpack_require__(84),_material_ui_core__WEBPACK_IMPORTED_MODULE_36__=__webpack_require__(269),_material_ui_core__WEBPACK_IMPORTED_MODULE_37__=__webpack_require__(272),_material_ui_core__WEBPACK_IMPORTED_MODULE_38__=__webpack_require__(882),react_color__WEBPACK_IMPORTED_MODULE_39__=__webpack_require__(423),react_mui_android_notification__WEBPACK_IMPORTED_MODULE_40__=__webpack_require__(266),react_mui_android_notification__WEBPACK_IMPORTED_MODULE_40___default=__webpack_require__.n(react_mui_android_notification__WEBPACK_IMPORTED_MODULE_40__),_material_ui_styles__WEBPACK_IMPORTED_MODULE_41__=__webpack_require__(271),react_transition_group__WEBPACK_IMPORTED_MODULE_42__=__webpack_require__(878),react_transition_group__WEBPACK_IMPORTED_MODULE_43__=__webpack_require__(879);function _typeof2(obj){return(_typeof2="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}function _typeof(obj){return(_typeof="function"==typeof Symbol&&"symbol"===_typeof2(Symbol.iterator)?function(obj){return _typeof2(obj)}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":_typeof2(obj)})(obj)}function _defineProperties(target,props){for(var descriptor,i=0;i<props.length;i++)(descriptor=props[i]).enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}function _possibleConstructorReturn(self,call){return!call||"object"!==_typeof(call)&&"function"!=typeof call?function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self):call}function _getPrototypeOf(o){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}function _setPrototypeOf(o,p){return(_setPrototypeOf=Object.setPrototypeOf||function(o,p){return o.__proto__=p,o})(o,p)}function _extends(){return(_extends=Object.assign||function(target){for(var source,i=1;i<arguments.length;i++)for(var key in source=arguments[i])Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key]);return target}).apply(this,arguments)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var source,i=1;i<arguments.length;i++)source=null==arguments[i]?{}:arguments[i],i%2?ownKeys(source,!0).forEach(function(key){_defineProperty(target,key,source[key])}):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(source).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))});return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var Nutella={},Update=function(){return console.log("Nutella is not ready yet")},useStyles=Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_41__.a)({wrapper:{display:"flex",flexDirection:"column",width:380,position:"fixed",padding:"1rem",transition:"all 1s",overflow:"visible",zIndex:2e3,boxSizing:"border-box","@media( max-width: 500px )":{width:"100%",padding:"0rem"},"&.absolute":{position:"absolute"},"&.top-right":{right:0,top:0,flexDirection:"column-reverse"},"&.bottom-right":{right:0,bottom:0},"&.top-left":{left:0,top:0,flexDirection:"column-reverse"},"&.bottom-left":{left:0,bottom:0}}}),defaultStyle={transition:"all ".concat(300,"ms ease-in-out"),maxHeight:0,opacity:0},transitionStyles={entering:{maxHeight:0,opacity:0},entered:{maxHeight:"200px",opacity:1},exited:{maxHeight:0,opacity:0}},variants={pie:{margin:"0.2rem 0rem"},oreo:{margin:"0rem 0rem"}},FadeTransition=function(_ref){var children=_ref.children,inProp=_ref.in,variant=_ref.variant;return react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_42__.a,{in:inProp,timeout:300,unmountOnExit:!0,mountOnEnter:!0},function(state){return react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("div",{style:_objectSpread({},defaultStyle,{},transitionStyles[state],{},variants[variant])},children)})};function NutellaSection(props){var styles=useStyles(),position=props.position,variant=props.variant,items=Object.keys(Nutella).filter(function(key){return Nutella[key].position===position});return react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_43__.a,{className:"".concat(styles.wrapper," ").concat(position," ").concat(variant)},items.map(function(index){var item=Nutella[index];return react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(FadeTransition,{key:index,variant:item.data.variant,className:styles.notification},react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(react_mui_android_notification__WEBPACK_IMPORTED_MODULE_40___default.a,_extends({className:"test"},item.data),item.actions.map(function(action,key){return react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_24___default.a.Fragment,{key:key},action)})))}))}var Nutella$1=_objectSpread({View:function(_React$Component){function View(){return function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,View),_possibleConstructorReturn(this,_getPrototypeOf(View).apply(this,arguments))}return function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}(View,react__WEBPACK_IMPORTED_MODULE_24___default.a.Component),function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(View,[{key:"componentDidMount",value:function(){var _this=this;Update=function(){_this.forceUpdate()}}},{key:"render",value:function(){var variant=this.props.variant||"fixed";return react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_24___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(NutellaSection,{variant:variant,position:"top-left"}),react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(NutellaSection,{variant:variant,position:"bottom-left"}),react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(NutellaSection,{variant:variant,position:"top-right"}),react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(NutellaSection,{variant:variant,position:"bottom-right"}))}}]),View}()},{push:function(index,position,data,actions,config){return Nutella[index]={position:position,data:data,actions:actions},Update(),void 0===config&&(config={persistent:!1,timeOut:5e3}),config.persistent||window.setTimeout(function(){delete Nutella[index],Update()},config.timeOut),index},dismiss:function(index){void 0===Nutella[index]||(delete Nutella[index],Update())}});function _typeof$1(obj){return(_typeof$1="function"==typeof Symbol&&"symbol"===_typeof2(Symbol.iterator)?function(obj){return _typeof2(obj)}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":_typeof2(obj)})(obj)}function ownKeys$1(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _objectSpread$1(target){for(var source,i=1;i<arguments.length;i++)source=null==arguments[i]?{}:arguments[i],i%2?ownKeys$1(source,!0).forEach(function(key){_defineProperty$1(target,key,source[key])}):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys$1(source).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))});return target}function _defineProperty$1(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _defineProperties$1(target,props){for(var descriptor,i=0;i<props.length;i++)(descriptor=props[i]).enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}function _getPrototypeOf$1(o){return(_getPrototypeOf$1=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}function _assertThisInitialized$1(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _setPrototypeOf$1(o,p){return(_setPrototypeOf$1=Object.setPrototypeOf||function(o,p){return o.__proto__=p,o})(o,p)}var cache=[],counter=0,iconCache="whatshot",NotificationBuilder=function(_React$Component){function NotificationBuilder(props){var _this;return function _classCallCheck$1(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,NotificationBuilder),(_this=function _possibleConstructorReturn$1(self,call){return!call||"object"!==_typeof$1(call)&&"function"!=typeof call?_assertThisInitialized$1(self):call}(this,_getPrototypeOf$1(NotificationBuilder).call(this,props))).state={type:"top-right",name:"Android Notification ",icon:react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_icons_Whatshot__WEBPACK_IMPORTED_MODULE_26___default.a,null),date:"Nov 6",accent:"rgb(63, 81, 181)",title:"Awesome Notification",body:"this is an awesome notification !",rounded:!1,variant:"oreo",absolute:!1,config:{persistent:!1,timeOut:5e3}},_this.setType=_this.setType.bind(_assertThisInitialized$1(_this)),_this.push=_this.push.bind(_assertThisInitialized$1(_this)),_this.setVariant=_this.setVariant.bind(_assertThisInitialized$1(_this)),_this.setIcon=_this.setIcon.bind(_assertThisInitialized$1(_this)),_this}return function _inherits$1(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf$1(subClass,superClass)}(NotificationBuilder,react__WEBPACK_IMPORTED_MODULE_24___default.a.Component),function _createClass$1(Constructor,protoProps,staticProps){return protoProps&&_defineProperties$1(Constructor.prototype,protoProps),staticProps&&_defineProperties$1(Constructor,staticProps),Constructor}(NotificationBuilder,[{key:"setType",value:function(event,type){this.setState({type:type})}},{key:"setVariant",value:function(event,variant){this.setState({variant:variant})}},{key:"setIcon",value:function(event,tab){iconCache=tab,"whatshot"===tab?this.setState({icon:react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_icons_Whatshot__WEBPACK_IMPORTED_MODULE_26___default.a,null)}):this.setState({icon:react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_icons_Message__WEBPACK_IMPORTED_MODULE_27___default.a,null)})}},{key:"clear",value:function(){cache.forEach(function(persistent){Nutella$1.dismiss(persistent)})}},{key:"push",value:function(){counter+=1;var _this$state=this.state,type=_this$state.type,config=_this$state.config;cache.push(Nutella$1.push("key-".concat(counter),type,this.state,[react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_25__.a,null,"Inject test!")],config))}},{key:"render",value:function(){var _this2=this,_this$state2=this.state,type=_this$state2.type,config=_this$state2.config,name=_this$state2.name,title=_this$state2.title,body=_this$state2.body,date=_this$state2.date,accent=_this$state2.accent,rounded=_this$state2.rounded,variant=_this$state2.variant,absolute=_this$state2.absolute,tabsStyle={borderRadius:"100px",overflow:"hidden"};return react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_28__.a,{container:!0,justify:"center"},react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_28__.a,{item:!0,xs:12},react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("div",{style:{height:"5vh"}})),react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_28__.a,{item:!0,xs:11,sm:7,md:5,lg:4},react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_29__.a,null,react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("div",{style:{zIndex:2e3,position:"relative"}},react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(react_mui_android_notification__WEBPACK_IMPORTED_MODULE_40___default.a,this.state)),react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_30__.a,{style:{overflowY:"scroll",maxHeight:"70vh"}},react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_31__.a,{variant:"h4"},"Notification builder"),react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_32__.a,{label:"Application/Service name",fullWidth:!0,variant:"outlined",value:name,onChange:function(event){return _this2.setState({name:event.currentTarget.value})}}),react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_28__.a,{container:!0,spacing:2},react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_28__.a,{item:!0,xs:12,md:6},react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_32__.a,{label:"Title",fullWidth:!0,variant:"outlined",value:title,onChange:function(event){return _this2.setState({title:event.currentTarget.value})}})),react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_28__.a,{item:!0,xs:12,md:6},react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_32__.a,{label:"Date",fullWidth:!0,variant:"outlined",value:date,onChange:function(event){return _this2.setState({date:event.currentTarget.value})}}))),react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_32__.a,{label:"Body",fullWidth:!0,variant:"outlined",value:body,onChange:function(event){return _this2.setState({body:event.currentTarget.value})}}),react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_31__.a,{variant:"h6"},"Position"),react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_33__.a,{style:tabsStyle},react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_34__.a,{value:type,color:"primary",onChange:this.setType,variant:"scrollable",scrollButtons:"auto"},react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_35__.a,{label:"Top Right",value:"top-right"}),react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_35__.a,{label:"Top Left",value:"top-left"}),react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_35__.a,{label:"Bottom Right",value:"bottom-right"}),react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_35__.a,{label:"Bottom Left",value:"bottom-left"}))),react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_31__.a,{variant:"h6"},"Style"),react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_33__.a,{style:tabsStyle},react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_34__.a,{value:variant,color:"primary",onChange:this.setVariant,centered:!0},react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_35__.a,{label:"Nougat/Oreo",value:"oreo"}),react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_35__.a,{label:"Pie",value:"pie"}))),react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_31__.a,{variant:"h6"},"Icon"),react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_33__.a,{style:tabsStyle},react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_34__.a,{value:iconCache,color:"primary",onChange:this.setIcon,centered:!0},react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_35__.a,{icon:react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_icons_Whatshot__WEBPACK_IMPORTED_MODULE_26___default.a,null),value:"whatshot"}),react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_35__.a,{icon:react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_icons_Message__WEBPACK_IMPORTED_MODULE_27___default.a,null),value:"message"}))),react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_36__.a,{control:react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_37__.a,{color:"primary",checked:absolute,onChange:function(){_this2.setState({absolute:!absolute})}}),label:"Absolute"}),react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_36__.a,{control:react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_37__.a,{color:"primary",checked:config.persistent,onChange:function(){_this2.setState({config:_objectSpread$1({},config,{persistent:!config.persistent})})}}),label:"Persistent"}),react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_36__.a,{control:react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_37__.a,{color:"primary",checked:rounded,onChange:function(){_this2.setState({rounded:!rounded})}}),label:"Rounded"}),react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_31__.a,{variant:"h6"},"Accent color"),react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(react_color__WEBPACK_IMPORTED_MODULE_39__.CirclePicker,{color:accent,onChangeComplete:function(color){_this2.setState({accent:color.hex})}})),react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_30__.a,null,react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_31__.a,{variant:"h6"},"Duration"),react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_38__.a,{defaultValue:config.timeOut/1e3,valueLabelDisplay:"auto",step:1,marks:!0,min:1,max:10,onChange:function(_,value){_this2.setState({config:_objectSpread$1({},config,{timeOut:1e3*value})})}})),react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_28__.a,{container:!0,spacing:2},react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_28__.a,{item:!0,xs:12,sm:6},react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_25__.a,{fullWidth:!0,variant:"outlined",color:"primary",onClick:this.push},"Push")),react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_28__.a,{item:!0,xs:12,sm:6},react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_25__.a,{fullWidth:!0,variant:"outlined",color:"secondary",onClick:this.clear},"Clear")),react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_28__.a,{item:!0,xs:12},react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_25__.a,{fullWidth:!0,variant:"text",onClick:function(){console.log(_this2.state)}},"Print to console")))))),react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(Nutella$1.View,{variant:absolute?"absolute":"fixed"}))}}]),NotificationBuilder}();__webpack_exports__.a=NotificationBuilder},460:function(module,exports,__webpack_require__){__webpack_require__(461),__webpack_require__(564),module.exports=__webpack_require__(565)},565:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(76),__webpack_require__(63),__webpack_require__(61),__webpack_require__(77),__webpack_require__(78);var _storybook_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(140),imports=__webpack_require__(745);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_5__.addParameters)({options:{brandTitle:"Nutella",name:"Nutella",showDownPanel:!1,showAddonPanel:!1,isToolshown:!1}}),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_5__.configure)(function loadStories(){imports.keys().forEach(function(filename){return imports(filename)})},module)}.call(this,__webpack_require__(315)(module))},745:function(module,exports,__webpack_require__){var map={"./index.stories.js":746};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=745},746:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(140),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_lib_NotificationBuilder_es__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(422),_ref=react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lib_NotificationBuilder_es__WEBPACK_IMPORTED_MODULE_2__.a,null);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Demos",module).add("Notification Builder",function(){return _ref})}.call(this,__webpack_require__(315)(module))}},[[460,1,2]]]);
//# sourceMappingURL=main.7343e96224f7f6be7931.bundle.js.map