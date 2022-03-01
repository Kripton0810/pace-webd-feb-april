var i = [2, 3, 4, 5, 6, "subhankar", 354.123, "2"];

// for (let index = 0; index < i.length; index++) {
//   console.log(i[index]);
// }
// console.log("-------------------");
// i.forEach(function (item, index) {
//   console.log(item + "::" + index);
// });
const student = {
  //json
  Name: "Subhankar",
  Roll: 68,
  Enroll: 120323342344,
  Marks: [23, 43, 55, 32, 54],
  Phone: 5355643454,
};
const stuarray = [
  {
    //json
    Name: "Subhankar",
    Roll: 68,
    Enroll: 120323342344,
    Marks: [23, 43, 55, 32, 54],
    Phone: 5355643454,
  },
  {
    //json
    Name: "Ankita",
    Roll: 67,
    Enroll: 234234,
    Marks: [23, 43, 55, 32, 54],
    Phone: 5355643454,
  },
  {
    //json
    Name: "Amit",
    Roll: 65,
    Enroll: 3534,
    Marks: [23, 43, 55, 32, 54],
    Phone: 5355643454,
  },
  {
    //json
    Name: "Kush",
    Roll: 61,
    Enroll: 32534534,
    Marks: [23, 43, 55, 32, 54],
    Phone: 5355643454,
  },
];
// console.log(stuarray);
stuarray.map((item, index) => {
  console.log(item.Roll);
});
// console.log("-------------------");
// i.map((fig, palak) => {
//   console.log(fig + "::" + palak);
// });
// const hello = (a, b) => {
//   console.log("Hello world");
//   return a + b;
// };
// var item = hello(10, 20);
// console.log(item);
setInterval(() => {
  const aasfd = new Date();
  var time =
    aasfd.getHours() + ":" + aasfd.getMinutes() + ":" + aasfd.getSeconds();
  document.querySelector("body").innerHTML = time;
}, 1000);
setTimeout(() => {
  alert("hellow owlrd");
}, 10000);
