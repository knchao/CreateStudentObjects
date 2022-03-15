var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Student = /** @class */ (function () {
    function Student(name, age, gender, nationality) {
        this.name = name;
        this.age = age;
        this.gender = "female";
        this.nationality = nationality;
    }
    Student.prototype.getNationality = function () {
        console.log("The nationality of the student is ".concat(this.nationality, "."));
    };
    return Student;
}());
var UnderGraduate = /** @class */ (function (_super) {
    __extends(UnderGraduate, _super);
    function UnderGraduate(name, age, gender, nationality, batch, GPA) {
        var _this = _super.call(this, name, age, gender, nationality) || this;
        _this.batch = batch;
        _this.GPA = GPA;
        return _this;
    }
    return UnderGraduate;
}(Student));
var newUnderGrad = new UnderGraduate("Charlie Zimmerman", 20, "Male", "Canadian", 4, 3.5);
newUnderGrad.getNationality();
