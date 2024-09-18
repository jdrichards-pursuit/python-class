// let state = 1;
// // f"I have {state} correct state{"" if state == 1 else 's'}"
// console.log(`I have ${state} correct state${state !== 1 ? "s" : ""}`);

// final_list = list(filter(lambda element: (element % 2 != 0), li))

let li = [5, 7, 22, 97, 54, 62, 77, 23, 73, 61];
let finalList = li.filter((element) => {
  return element % 2 !== 0;
});
