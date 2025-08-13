var weekDays;
(function (weekDays) {
    weekDays["Monday"] = "Thu hai";
    weekDays["Tuesday"] = "Th\u1EE9 Ba";
    weekDays["Wednesday"] = "Th\u1EE9 T\u01B0";
    weekDays["Thursday"] = "Th\u1EE9 N\u0103m";
    weekDays["Friday"] = "Th\u1EE9 S\u00E1u";
    weekDays["Saturday"] = "Th\u1EE9 B\u1EA3y";
    weekDays["Sunday"] = " Ch\u1EE7 Nh\u1EADt";
})(weekDays || (weekDays = {}));
for (let value of Object.values(weekDays)) {
    console.log(value);
}
