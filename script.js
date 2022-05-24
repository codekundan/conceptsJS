// Example 1

const person = {
  name: "Kyle",
  friends: ["John", "Sally"],
};

function addFriend(p, friendName) {
  person2 = { ...p };
  console.log(p);
  console.log(person2);
  if (person2 !== p) {
    console.log("Not Equal");
  }
  person2.friends.push(friendName);
  console.log(person2);
}

addFriend(person, "Joey");

console.log(person);

//  Example 2

const oldObj = { a: { b: 10 }, c: 2 };
const newObj = { ...oldObj };

oldObj.a.b = 2; // It also changes the newObj `b` value as `newObj` and `oldObj`'s `b` property allocates the same memory address.
oldObj.c = 5; // It changes the oldObj `c` but untouched at the newObj

console.log("oldObj:", oldObj);
console.log("newObj:", newObj);
