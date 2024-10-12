/* 
For Production-ready App::
    - Minify the code(remove console.log())
    - Bundle the files into smaller number of optimized files
    - Optimize the images
*/




// To add NODE PACKAGE MANAGER into our project :: npm init




/*
package-lock.json locks the dependencies and libraries.

It means that package-lock.json contains:
    - EXACT version of the dependencies and libraries
    - specific commit hashes for the dependencies (so that version of dependency is SAME in local and production)  
*/



/*
- package.json is like a configuration for npm
- node_modules is like a database for the dependencies and the third-party libraries. It contains the code related to all the dependencies.
*/




/*
Q. How many package.json file can be there?
A. Multiple
    Every dependency in the node_modules can have its own package.json file which will further contain dependencies.
    TRANSITIVE DEPENDENCIES 

Q. How many package-lock.json file can be there?
A. Only one
*/




/*
Q. Why do we put node_modules in .gitignore?
A. Node_modules is a huge folder which does not need be put up into the remote repository because:
    - It is huge
    - It can be re-generated since we have the package.json and package-lock.json (npm install or npm i)
*/




/*
- When we do npx parcel index.html ::
        - It starts/creates the development build
        - Creates a local development server  http://localhost:1234
        - Creates .parcel-cache file which caches code all the time so that the next builds can be done faster 
        - If we make changes in the code and save the application, then for all subsequent builds , parcel will load code from the cache and not run the entire application.
*/




/*
HMR
    - make changes to the code and save
    - reflected instantly on the browser
    - without manually reloading the browser or refreshing the page
    - HMR system keeps track of the changes/updates in the code
    - Uses a file watcher algorithm(C++)
*/




/* 
PARCEL
    - Zero-config tool(npx parcel index.html)
    - Dev Build
    - Local server
    - HMR 
    - File watcher algo
    - Caching (.parcel-cache)
    - Image Optimization
    - Minification
    - Bundling
    - Compress
    - Code splitting
    - Differential Bundling - support older browsers(transpilation)
    - Tree Shaking - (remove unused code)
*/


/*
npx parcel build index.html
    - creates a production build which is ready to be executed and then served to the end-users
    - creates an optimized bundle of files
    - Eveything comes down to 3 files: 1 html, 1 css and 1 js file
*/