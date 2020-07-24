const content = `Custom elements bootstrap themselves - they start automatically when they are added to the DOM, and are automatically destroyed
 when removed from the DOM. Once a custom element is added to the DOM for any page, it looks and behaves like any other HTML element, and does 
 not require any special knowledge of Angular terms or usage conventions. 
Easy dynamic content in an Angular app 
Transforming a component to a custom element provides an easy path to creating dynamic HTML content in your Angular app. HTML content that you add 
directly to the DOM in an Angular app is normally displayed without Angular processing, unless you define a dynamic component, adding your own code to 
connect the HTML tag to your app data, and participate in change detection. With a custom element, all of that wiring is taken care of automatically.

Content-rich applications
If you have a content-rich app, such as the Angular app that presents this documentation, custom elements let you give your content providers 
sophisticated Angular functionality without requiring knowledge of Angular. For example, an Angular guide like this one is added directly to the 
DOM by the Angular navigation tools, but can include special elements like <code-snippet> that perform complex operations. All you need to tell your 
content provider is the syntax of your custom element. They don't need to know anything about Angular, or anything about your component's data structures 
or implementation.`;

function loadContent() {
  //   const dialogbox = document.getElementById("dialogbox");
  const dialogbox = document.createElement("app-dialog");
  dialogbox.setAttribute("id", "dialogbox");
  dialogbox.setAttribute("title", "Sample Dialog");
  dialogbox.setAttribute("percentage-width", 50);
  dialogbox.setAttribute("percentage-height", 50);
  dialogbox.setAttribute("is-action-bar-required", true);
  dialogbox.setAttribute("dynamic-content", content);
  dialogbox.setAttribute("show-dialog", true);
  dialogbox.addEventListener("saveClicked", saveClicked);
  document.body.appendChild(dialogbox);
}

function showDialogbox() {
  loadContent();
}

function saveClicked() {
  const dialogbox = document.getElementById("dialogbox");
  document.body.removeChild(dialogbox);
}
