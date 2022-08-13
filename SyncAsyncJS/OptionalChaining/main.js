const people = [
  {
    name: "bob",
    location: { street: "123 main street", timezone: { offset: "+7:00" } },
  },
  { name: "peter", location: { street: "123 pine street" } },
  {
    name: "susan",
    location: { street: "123 apple street", timezone: { offset: "+9:00" } },
  },
];

// Using &&.
// people.forEach((person) => {
//   console.log(
//     person.location &&
//       person.location.timezone &&
//       person.location.timezone.offset
//   );
// });

// Optional Chaining.
people.forEach((person) => {
  console.log(person?.location?.timezone?.offset);
})