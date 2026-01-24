let task = prompt("Typpe your wish according to the list!!");
let toDoList = [];

while (task !== 'q' && task !== 'quit') {
   switch (task) {
      case "new":
         let command = prompt("Type a to do");
         toDoList.push(command);
         break;
      case "list":
         console.log("**********");
         for (let i = 0; i < toDoList.length; i += 1) {
            console.log(`${i}: ${toDoList[i]}`);
         }
         console.log("**********");
         break;
      case "delete":
         let del = parseInt(prompt("Type the index of the element you want to delete"));
         if (!Number.isNaN(del) && del >= 0 && del <= toDoList.length) {
            toDoList.splice(del, 1);
         }
         break
      default: break;
   }
   task = prompt("Typpe your wish according to the list!!");
}
console.log("Quitted");


