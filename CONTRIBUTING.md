# Project procedure

Please read below on tips and practices to follow to make sure things run well and smoothly! :) 
- [Code Structure and format format](#code-structure-and-format)
  -  [Styles](#styles)
  -  [Images](#images)
- [Github](#Github)
  - [Git using the CLI](#git-using-the-cli)
  - [Git using Github Desktop](#git-using-github-desktop)
  - [Git Tips / Cheatsheet](#git-tips--cheatsheet) 

--- 

## Code Structure and format

### Styles
Next.js uses CSS modules. This allows us to use seperate CSS files for each page and component without worrying about overlapping class names. 

To make use of this, within the component file first import the styles folder
```jsx
import styles from './navbar.module.css
```

The syntax to add a class name is the following
```jsx
  <div className={styles.container}>{children}</div>
```

For Styles that are relevant to pages as a whole (ie. About page) these should be added to a file within the 'styles' folder. On the other hand - components should be in a folder with their specific css file.

```
components
└─── navbar
│   └── navbar.js
│   └── navbar.module.css
│   
└─── footer
    └── footer.js
    └── footer.module.css
styles
└─── globals.css
└─── Home.module.css
└─── About.css
```

### Images
When using Next.js, there is a component [next/image](https://nextjs.org/docs/api-reference/next/image](https://nextjs.org/docs/basic-features/image-optimization) that we should be using instead of the standard html <img> tag. 

It will act like the standard img tag but with new options that help with Image Optimisation if we want / need to use them. Read the link above for more details! 

## Github 

### Git using the CLI

1. move into directory where you would like the project folder to go and clone the project
```
cd .\Desktop\
git clone https://github.com/GradShow2022/gradshow-frontend.git
```

2. checkout to staging branch and create a new branch for your task
```
git checkout staging
git checkout -b [NAME OF BRANCH]
```

3. make your changes to the project and push to the remote repo
```
git add . OR git add [SPECIFIC FILES]
git commit -m "brief message about the changes" 
git push -u origin [NAME OF BRANCH]
```

4. Once changes are complete go to github repo and create a pull request. List Either **Logan Trundle** or **James Andrew** as a reviewer. 

*Please Make sure that your request looks like the following:* 

`staging <-- NAME_OF_BRANCH`

5. When creating a new branch remember to navigate back to staging before doing so.
*It is a good idea to do *git pull* before creating a new branch as this will ensure your local repo is up to date with most recent changes*
```
git checkout staging
git pull
git checkout -b NEW_BRANCH
```

### Git using Github Desktop

1. Open Github Desktop. Select 'Clone a repository from the internet' Enter the url into the field and select a location for it to go
2. On the top bar, click on current branch move to staging
3. Select Create New Branch and make sure it is based on staging
4. Go to code editor and make your changes
5. Once ready, go to Github desktop, write a comment on the left panel under your changes files, and then commit your changes. 
6. The "publish changes" button will become available. hit this to push branch to the remote repo

### Git Tips / Cheatsheet
| Command                          | What it does                               |
|----------------------------------|--------------------------------------------|
| git clone LINK                   | Creates repo on your local device          | 
| git checkout BRANCH_NAME         | Move between branches                      |
| git checkout -b BRANCH_NAME      | Create a new branch and then move to it    |
| git add .                        | Add all changed files to be tracked        |

<a href="http://www.youtube.com/watch?feature=player_embedded&v=YOUTUBE_VIDEO_ID_HERE](https://www.youtube.com/watch?v=BCQHnlnPusY&list=PLRqwX-V7Uu6ZF9C0YMKuns9sLDzK6zoiV&ab_channel=TheCodingTrain" target="_blank"><img src="https://i.ytimg.com/vi/BCQHnlnPusY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLACDbj4zPuhudodIpf-blqyuVbZ9w" alt="LINK TO GIT TUTORIAL SERIES" width="320" height="180" border="10" /></a>


Above is a series that I found very helpful when first learning about git and the commands. 
