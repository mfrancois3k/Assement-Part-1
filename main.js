// Part 1: 30%, you must create a repo for part 1, separate from part 2

// // 1. Why does React utilize the virtual-dom?
// //   the  reason react uses virtual dom is because it allows you have a  copy or presentation of your Dom which is the document object model in memory
// //    and whenever there's an update either It Be by maybe like a state change that it will update for the virtual Dom and sync it with a real dom now

// 2a How is data flowed in React? 2b. Why is React architected this way?
// //  the data flows unidirectionally in react in a way that it is a tree of nodes and the root node is the virtual dom
// // a example of this is the parent and child relationship between files an how the parent pass information to the child

// //    b. React is architected this way because
// //      1. it allows you to have a single source of structuring information thats readable
// //      2. Great performance benefits
// //      3. it easeir to debug issues because of the structure of the code

// 3. What is the purpose for lifting state up in React? Give an example of this
// //  the purpose of this is to allow you to not have data being redundant and inconsistenthave . So, by Lifting up the state we make the state of the parent component
// // as a single source of truth and pass the data of the parent in its children.
// //  an example of this is the parent and child relationship between files an how the parent pass information to the child
// //  the parent is the file that has the state and the child is the file that has the render function

// 4. Why would a startup be interested in applying React-Router to a project? Explain in detail.
//     1. Routing between components is fast as the amount of data that renders is less.
//         The rest of the data is rendered by the DOM, and even when there's tons of HTML and CSS to render.
//     2. Its a practical use for Using lazy loading, any delay in rendering HTML is compensated for this
//     3. it great for animation libraries like framer motion and react-spring because it easyer to use for  and transitions can be easily
//         implemented when switching between different components
//     4. it It gives a real sense of a single-page application in action. No separate pages are rendered no refresing is needed

// 5. Can browsers read JSX? Why?
//  // Browsers can't read JSX because there is no inherent implementation for the browser engines to read
//  //and understand them. that why there complier like babel

// 6. What is the significance of keys in React?
// // it tell react differentiation betweeb elements from each other in the virtual and real DOM.

// 7. What is the difference between Props and State?
// Props” refers to the properties being passed into a component in order for it
// to work correctly, similar to how a function receives parameters: “fromabove.

// 8. Examine the code below: In relation to React, explain what is occurring, and why it’s significant.

// Babel Input: ES2015 arrow function
// [1, 2, 3].map( n => n + 1 )

// Babel Output: ES5 equivalent
// [1,2,3].map(function(n) {
// Return n + 1;
// })

// function map(n) {
//     const array = [1,2,3]
//     let result = [];
//     for(let i = 0; i < array.length; i++) {
//         array[i] += n + 1
//         result.push(array[i])

//        }
//        return result
// }
// map(3)

// 9. Given the array of strings: names, return a new array with each name properly capitalized. Must use .map()
// const names = [ “James”, “Joseph”, “Diamond”, “Gillian”]
// function properNames(names) {
//    let capitalized = names.map(name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase())
//     return capitalized
// }

// 10. Create an array of strings, return a new array that only includes those that are 6 characters or fewer in length. Must use .filter()
// function smallWordsOnly(arr) {
//     let smallWords = arr.filter(word => word.length <= 6)
//     return smallWords
// }
