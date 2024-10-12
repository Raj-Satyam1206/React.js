# Chapter 02 


## Q: What is `npm`?
A:
- Npm stands for `Node Package Manager`, an open-source `registry and library for JavaScript software packages`.  
- It's the default package manager for Node.js, the JavaScript runtime environment  
- It helps developers find and use ready-made pieces of code (packages) made by other people. These packages add special features to websites or make it easier to write code.  
- With npm, programmers can easily get these packages and use them in their own projects without having to build everything from scratch.

<br/>
<br/>

## Q: What is a `bundler`?
A:  
- A `bundler` is a tool used in web development to `combine multiple separate files`, such as JavaScript, CSS, and images, `into a smaller number of optimized files`.  
- These optimized files, known as bundles, are `designed to be more efficient for browsers to load`, improving the performance of web applications.  
- Modern bundlers offer features like  
        - Minification (removing unnecessary characters to make files smaller),  
        - Transpilation (converting newer code syntax to older versions for wider compatibility),  
        - Code splitting (breaking code into smaller chunks to load only what's needed for each page).  
        
- Webpack, Parcel, and Vite are examples of popular bundlers used in web development.

<br/>
<br/>

## Q: What's `Webpack`? Why do we need it?
A:  
- Webpack is a `module bundler` that bundles your web project's files together.  
- It `optimizes and organizes JavaScript, CSS, images`, and more, making them load faster for websites.  
- It manages file dependencies, converts code for different browsers, and uses plugins to enhance performance.  
- Webpack helps in web development by `packaging, optimizing, and simplifying the way files are delivered to browsers`.

<br/>
<br/>

## Q How does `Webpack convert code for different browsers`?
A:  
- `Webpack` doesn't directly convert code for various browsers, but it works with tools like Babel.  
- `Babel` transforms modern JavaScript code syntax into older versions that older browsers can understand.  

<br/>
<br/>

## Q What is `Babel`?
A:  
- `Babel` is a widely used `open-source JavaScript compiler`.  
- Its primary purpose is to `transform modern JavaScript code`, which uses latest language features and syntax (ES6+, ES7, etc.), into an `older version` that is compatible with older browsers and environments that don't support those newer features.  
- Babel achieves this by  
        - Parsing your modern JavaScript code,  
        - Applying transformations based on specified rules,  
        - Generating equivalent code in an older syntax.  
- This process is commonly known as `transpilation`.

<br/>
<br/>

## Q What is `Parcel`?
A:  
- `Parcel` is an `open-source web application bundler` that simplifies the process of `building and packaging web projects`.  
- Unlike Webpack, it offers a `zero-config setup`, automatically handling various file types without complex configurations.  
- Used for smaller projects or developers looking for an easy-to-use bundling solution that requires minimal setup.

<br/>
<br/>

## Q What is the `difference between Webpack and Parcel`?
A:  
- `Webpack` and `Parcel` are both tools used for bundling and managing assets in web development, but they have some differences in terms of configuration, features, and use cases:

### Configuration:
`Webpack`: Webpack is `highly configurable` but requires more setup and configuration through a webpack.config.js file. This gives developers greater control over how assets are processed, optimized, and bundled.

`Parcel`: Parcel follows a `zero-config` approach, meaning it requires minimal to no configuration. It automatically detects and bundles assets without extensive setup, making it simpler for beginners.

### Ease of Use:
`Webpack`: While powerful, Webpack's configurability can be overwhelming for newcomers, and setting up loaders, plugins, and optimization can be time-consuming.

`Parcel`: Parcel is designed for simplicity and ease of use. Its zero-config approach makes it quick to start with and is well-suited for small to medium projects without complex requirements.

### Features:
`Webpack`: Webpack is extremely versatile and offers more advanced features like code splitting and dynamic imports. 

`Parcel`: Parcel offers built-in features like a fast development server and Hot Module Replacement which makes it great for rapid development.

### Use Cases:
`Webpack`: Best suited for larger projects with complex requirements, multiple entry points, and intricate build processes that demand fine-tuning.

`Parcel`: Ideal for smaller to medium-sized projects, prototypes, or beginners who want a straightforward setup without delving into extensive configuration.

 Webpack offers more `control and customization`, while Parcel prioritizes `simplicity and speed`.

<br/>
<br/>

## Q What is `.parcel-cache`?
A:  
- The .parcel-cache directory is created by the Parcel bundler when it `processes and builds your web project`.  
- It serves as a `cache storage location` to optimize the performance of subsequent builds.  
- Parcel caches code all the time.  
- When we `run` the application, `a build is created` which takes some time in ms.  
- If we make any `code changes and save the application`, another build will be triggered which might take even less time than the previous build.  
- This reduction of time is due to parcel cache. `Parcel immediately loads the code from the cache every time` there is a subsequent build.  
- On the very first build parcel creates a folder .parcel-cache where it stores the caches in binary codeformat.

<br/>
<br/>

## Q What is `npx`?
A:  
- `npx` is a `command-line tool` that comes with npm and is used to `execute Node.js packages`.  
- Used to execute packages that are `not globally installed` on your system.  
- The primary purpose of npx is to make it easier to run packages without having to install them globally. 

### Install Parcel (Optional): 
If you haven't already installed Parcel globally or locally in your project, you can skip this step. When using npx, you don't need to have Parcel installed globally or listed as a dependency in your package.json.

### Run Parcel with npx:
Open your terminal and navigate to the root directory of your project. 
Run the following command using npx and specify parcel as the package name:
```
npx parcel index.html
```
Replace index.html with the entry file of your project, which is the HTML file that serves as the starting point for your application.

### Parcel Processing:
Parcel will start processing your project, bundling and optimizing your files. It will automatically detect dependencies and apply the necessary transformations.

### View the Result:
`Once Parcel has finished bundling your project, it will provide you with a local development server address` (usually `http://localhost:1234` by default). Open this address in your web browser to see your bundled application.

<br/>
<br/>

## Q What is the difference between `devDependencies` and `dependencies`?
A:  
`dependencies`  
- Packages listed under dependencies are the ones that your `application needs to run correctly in production`.
- These are the dependencies that your application relies on,  to function as intended when it's in the hands of end-users.
- They are necessary for the `core functionality` of your application.
**Example**: If you're building a web app with React, React itself would be listed under dependencies because it's essential for your app to work properly.

 
`devDependencies`  
- Packages listed under devDependencies are used for `development purposes only`.
- They are tools, libraries, or other packages that help you during the development process, such as build tools, and testing frameworks.
- These dependencies are `not required for your application to run in a production environment` and won't be included when your application is deployed.
**Example**: A `testing library like Jest or a development server like Parcel` would be listed under devDependencies because they are used for development and testing but are not necessary for the deployed application.


<br/>
<br/>

## Q What is `Tree Shaking`?
A:  
- `Tree shaking` is a technique used in modern JavaScript build tools to `eliminate unused code from your final bundle`.  
- Optimize the size of JavaScript bundles, resulting in smaller file sizes and faster loading times for your web applications.  


<br/>
<br/>

## Q What is `Hot Module Replacement`?
A: `HMR` is a technique that allows developers to `make changes to their codebase` and see those changes `instantly reflected` in the running application `without requiring a full page refresh or a manual reload of the browser`.

`Change Detection`: When you make changes to your code, the HMR system keeps track of these changes.

`Patch and Apply`: Instead of reloading the entire page or application, HMR takes the modified module (JavaScript, CSS, or other assets) and patches the changes into the running application in real-time.

`Selective Updates`: HMR is capable of updating only the changed modules, which helps in reducing the need for a full page reload and speeds up the development process.

<br/>
<br/>

## Q What is `.gitignore`? What should `we add` and `not add` into it?
A:  
- `.gitignore` is a file used in Git repositories to specify `which files and directories should be ignored by the version control system`.  
- This file helps prevent certain files or types of files from being tracked by Git,  
    - files that are `generated during the development process`,  
    - contain `sensitive information`,  
    - or are `not relevant to the project's version history`.

<br/>
<br/>

## Q What is the difference between `package.json` and `package-lock.json`?
A:  
- `package.json` is a metadata file for your Node.js project.  
- It contains various information about your project, such as:  
    &emsp;name  
    &emsp;version  
    &emsp;description  
    &emsp;scripts  
    &emsp;list of dependencies with their generic versions  
    
- Developers typically manage the dependencies in the `dependencies` and `devDependencies` sections of the package.json file.  
- The dependencies section lists the packages that your application needs to run in production.  
- The devDependencies section lists packages that are only required during development, such as testing frameworks or build tools.


`package-lock.json`  is a file generated by npm that provides the `exact versions of the dependencies` installed in your project.  
- It includes information about the:
    - exact versions of the dependencies,  
    - their dependencies (sub-dependencies),  
    - the specific commit hashes for those versions.  
- This helps ensure that your project uses the same dependency versions across different environments and installations.

<br/>
<br/>

## Q  Why should I not modify package-lock.json?
A: `package-lock.json` is automatically generated by npm when you install or update dependencies in your Node.js project. It provides the exact versions of dependencies and their dependencies that were installed. Modifying package-lock.json directly is generally not recommended for several reasons:

`Version Consistency`: The primary purpose of package-lock.json is to ensure version consistency across different environments and installations of your project. If you modify it manually, you might introduce inconsistencies that could lead to unexpected behavior, bugs, or compatibility issues.

`Collaboration`: When working in a team, each member might have their own local changes to package-lock.json. If you manually modify it, you might cause conflicts when trying to merge changes from different team members. This can be a source of confusion and difficulty during collaboration.

<br/>
<br/>

## Q What is node_modules? Is it a good idea to push that on git?
A: `node_modules` is a directory that is automatically created by Node.js and npm when you install dependencies for your project. It contains all the packages (dependencies) that your project relies on.

The `node_modules` directory can become quite large, especially for projects with many dependencies. It contains all the code and files needed to make the external packages work within your project. Because of its size and the fact that it can be generated from the package.json and package-lock.json files, it's generally not considered a good practice to include the node_modules directory in your version control system (e.g., Git). 

<br/>
<br/>

## Q What is `browserlists`?
A:  
- `browserslist` is a configuration file and query syntax used by various front-end tools and libraries to define which browsers and browser versions your project should support.
- Browserslist is a tool that specifies which browsers should be supported/compatible in your frontend app.

<br/>
<br/>


## Q Read about: ^ - caret and ~ - tilde
A: 

`Caret (^)`:
When you use the caret symbol (^) in front of a version number, it indicates that you want to allow updates to the package as long as the major version remains the same.

### For example:
^1.2.3 allows updates to any version within the 1.x.x range.
^0.3.2 allows updates to any version within the 0.3.x range.
It allows for the inclusion of bug fixes and minor features while avoiding major version changes.

`Tilde (~)`:
The tilde symbol (~) is used to specify a version range that allows updates to a package as long as the most recent version is within the same minor version range.

### For example:
~1.2.3 allows updates to any version within the 1.2.x range, but not beyond that.
