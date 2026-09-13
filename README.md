**Dev Stack Builder**<br><br>
<p>A responsive web app where developers can browse popular web technologies and add the ones they like to their own personal tech stack.</p>
<br>
<br>
**Technology**
- React
- Tailwind CSS + DaisyUI
- React-Toastify
<br>
<br>
**Featured**
- 
- 
- 
- 
<br>
<br>
*1.What is JSX, and why is it used in React?*<br>
Ans:JSX stands for JavaScript XML.JSX way to write HTML, like code inside JavaScript.<br>
React uses it to make building websites easier. Browsers cannot read JSX directly, so tools automatically convert it into standard JavaScript.
<br>
<br>
*2.What is the difference between props and state?*<br>
Ans:In react, the core difference in that <br>
*props:*are used to pass data from parent component down to a child component<br>
*state*:is used to manage data locally within the component itself.<br><br>
*3.What does the useState hook do, and where did you use it in this project?* <br>Ans:The useState hook lets your React app remember and update information on the screen. When the data changes, React automatically refreshes the page to show the new look.<br><br>
*4.What does the useEffect hook do, and why did you need it to load the JSON data?*<br>Ans:The useEffect hook performs side effects like fetching data immediately after a component loads on the screen. It is required here to safely load the JSON data only once when the app opens, preventing an infinite re-rendering loop that would crash your application.<br><br>
*5.Why does every item in a .map() list need a unique key prop?*<br>
Ans:The key prop gives each item a unique identity so React knows exactly which one changed, was added, or got removed. It allows React to update only that specific item instantly, making your application faster and preventing display bugs.<br><br>
*6.What is conditional rendering? Show one place you used it (example: the empty stack message).*<br>
Ans:Conditional rendering means showing different user interface components based on whether a specific condition is true or false<br>
example:<br>

```jsx
{myStack.length === 0 ? (
  <p>Your Stack is empty</p>
) : (
  <p>{myStack.length} Technology Selected</p>
)}
```
<br>
<br>
*7.How do you pass data from a parent component to a child component, and how does a child send something back to the parent?*<br>
Ans:Props pass data down from parent to child, while callback functions send data back up from child to parent.<br>
- Parent to Child: The parent sends data down as custom attributes (called props) which the child reads instantly.
- Child to Parent: The parent sends a function down to the child; when the child runs this function, it passes data back up as an argument.