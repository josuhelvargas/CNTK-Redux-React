"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
//Redux & React
var React = require("react");
var react_1 = require("react");
var MyFormStore = require("../store/MyForm");
var react_redux_1 = require("react-redux");
var Card_1 = require("@material-ui/core/Card");
var CardActions_1 = require("@material-ui/core/CardActions");
var CardContent_1 = require("@material-ui/core/CardContent");
var Button_1 = require("@material-ui/core/Button");
var Typography_1 = require("@material-ui/core/Typography");
var TextField_1 = require("@material-ui/core/TextField");
var MyForm = /** @class */ (function (_super) {
    __extends(MyForm, _super);
    function MyForm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyForm.prototype.render = function () {
        var _this = this;
        return (React.createElement(React.Fragment, null,
            React.createElement(Card_1.default, null,
                React.createElement(CardContent_1.default, null,
                    React.createElement(Typography_1.default, { color: "textSecondary", gutterBottom: true }, "FormRedux"),
                    React.createElement("form", { noValidate: true, autoComplete: "off" },
                        React.createElement(TextField_1.default, { id: "outlined-basic", label: "Nombre", variant: "outlined", value: this.props.name, onChange: function (event) { return _this.props.onChangeForm(); } }),
                        React.createElement(TextField_1.default, { id: "outlined-basic", label: "Apellido", variant: "outlined", value: this.props.firstName, onChange: function (event) { return _this.props.onChangeForm(); } }),
                        React.createElement(TextField_1.default, { id: "outlined-basic", label: "Edad", variant: "outlined", value: this.props.age, onChange: function (event) { return _this.props.onChangeForm(); } }))),
                React.createElement(CardActions_1.default, null,
                    React.createElement(Button_1.default, { size: "small" }, "Enviar Datos")))));
    };
    return MyForm;
}(react_1.PureComponent));
;
exports.default = react_redux_1.connect(function (state) {
    return state.name;
}, MyFormStore.actionCreatorsMyForm)(MyForm);
//# sourceMappingURL=MyForm.js.map