
## WEEK 1 - HTML Exercise 1.1

In this Document, you will be able to understand below scenario.



### When a user enters an URL in the browser, how does the browser fetch the desired result ?

Here we will look at what happens when you type a URL into your browser and press enter. End to end, the process involves the browser, your computer's operating system, your internet service provider, the server where you host the site, and services running on that server. It's important to understand where things can go wrong, where to look for performance issues, and ensure You are offering a secure experience for your users.

First, we will take a look at the relationship between websites, servers, and IP addresses. Then, we will go through the steps your browser takes to:

- look up the location of the server hosting the website
- make the connection to the server
- send a request to get the specific page
- handle the response from the server and
- how it renders the page so you, the viewer, can interact with the website

![App Screenshot](https://image.slidesharecdn.com/easytabsslideshowsdashboardsetc-120927105102-phpapp02/95/slide-12-1024.jpg)

#### What is the main functionality of the browser?

The main function of a web browser is to fetch and retrieve resources from the server over the internet. They also provide an interface and display content for the user. Most of the common features of an internet browser are a bookmark, history, menu, address bar, title bar, etc.

#### High Level Components of a browser :-

- The user interface : This includes the address bar, back/forward button, bookmarking menu, etc. Every part of the browser display except the window where you see the requested page.

- The browser engine : marshals actions between the UI and the rendering engine.

- The rendering engine : responsible for displaying requested content. For example if the requested content is HTML, the rendering engine parses HTML and CSS, and displays the parsed content on the screen.

![App Screenshot](https://i.imgur.com/VcpjfPL.png)

- Networking : For network calls such as HTTP requests, using different implementations for different platform behind a platform-independent interface.

- UI backend : Used for drawing basic widgets like combo boxes and windows. This backend exposes a generic interface that is not platform specific. Underneath it uses operating system user interface methods.

- JavaScript interpreter : Used to parse and execute JavaScript code.

- Data storage : This is a persistence layer. The browser may need to save all sorts of data locally, such as cookies. Browsers also support storage mechanisms such as localStorage, IndexedDB, WebSQL and FileSystem. It is important to note that browsers such as Chrome run multiple instances of the rendering engine: one for each tab. Each tab runs in a separate process.

#### Rendering engine and its use :- 

As the name suggests, this component is responsible for rendering a specific web page requested by the user on their screen. It interprets HTML and XML documents along with images that are styled or formatted using CSS, and a final layout is generated, which is displayed on the user interface.

- Google Chrome and Opera v.15+: Blink
- Internet Explorer: Trident
- Mozilla Firefox: Gecko
- Chrome for iOS and Safari: WebKit

#### Parsers (HTML, CSS, etc) :- 

![App Screenshot](https://scrapfly.io/blog/content/images/parsing-html-with-css_banner_light.svg)

When it comes to parsing web scraped HTML content, there are multiple techniques to select the data we want. For simple text parsing - various text parsing techniques like regular expression can be used. However, HTML is designed to be a machine-readable text structure - we can take advantage of this fact and use special path languages like CSS selectors to extract data in a much more efficient and reliable way!

#### Script Processors :- 

The script processor executes Javascript code to process an event. The processor uses a pure Go implementation of ECMAScript 5.1 and has no external dependencies. This can be useful in situations where one of the other processors doesn't provide the functionality you need to filter events.

For more Details, see  [Script Processors](https://www.elastic.co/guide/en/beats/heartbeat/current/processor-script.html#:~:text=The%20script%20processor%20executes%20Javascript%20code%20to%20process,provide%20the%20functionality%20you%20need%20to%20filter%20events.)

### Tree construction :-

First, the browser combines the DOM and CSSOM into a "render tree," which captures all the visible DOM content on the page and all the CSSOM style information for each node.

![App Screenshot](https://web-dev.imgix.net/image/C47gYyWYVMMhDmtYSLOWazuyePF2/b6Z2Gu6UD1x1imOu1tJV.png?auto=format&w=845)

For more Details, see  [Tree construction](https://web.dev/critical-rendering-path-render-tree-construction/#:~:text=First%2C%20the%20browser%20combines%20the%20DOM%20and%20CSSOM,of%20the%20DOM%20tree%2C%20traverse%20each%20visible%20node.)

### Order of script processing :-

Depending on the type of object, the task may have more than one Process page on which you can write scripts. The scripts in the Process pages are processed in the following order:

- Pre-Process page and Process page
- Child Post Process page
- Post Process page

For more Details, see  [Process pages](https://downloads.automic.com/documentation/webhelp/english/AWA/12.1/DOCU/12.2/AWA%20Guides/Content/AWA/Objects/obj_process_page.htm)

### Layout and Painting :-

- Layout :- The layout (also called reflow) peace will be in charge to calculate the positions and dimensions of each node on the screen. For instance, if you rotate your phone, or if you resize your browser, the layout peace will be executed. let's take a look another example related to layout

![App Screenshot](https://miro.medium.com/v2/resize:fit:720/format:webp/1*OLC_4tYWtsAAsBpyq_WUnA.png)

- Above side, we have our Render Tree (with Green nodes), and at the bottom, we have the meta tag needed to indicate to the browser that that 100% means the pixels of the device, in this example 320px. If we don't define that meta tag, the browser will define by default 980px that will cause the unwanted zoom in the browser from mobile devices.


- Paint :- Finally, now that we know which nodes are visible, and their computed styles and geometry, we can pass this information to the final stage, which converts each node in the render tree to actual pixels on the screen. This step is often referred to as Ã¢â‚¬Å“paintingÃ¢â‚¬Â, Ã¢â‚¬Å“rasterizing.Ã¢â‚¬Â or Ã¢â‚¬Å“repaintingÃ¢â‚¬Â. 

- if you need to know which property of CSS trigger repaint or reflow, please take a look [Css Triggers](https://csstriggers.com/)


