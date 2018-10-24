#  Greenhorn - Team 8

## First steps

### Clone project to your pc

1. Open Terminal or cmd
2.  `cd ~/Desktop/` or where you want to import project folder
3.  Source -> Clone -> Copy command -> Paste in Terminal/cmd

### Working with Git
1. #### Basic Git commands
* `git fetch`    - loads infomations about changes in repo
* `git pull`     - loads all changes from remote branch on local branch
* `git add *`   - Stage all files to be commited
* `git commit -m "Commit message"`  // Make commit
* `git push`     - Push commits to remote repo

2. #### Configuration SourceTree (Git GUI)
    1. Download https://www.sourcetreeapp.com/
    2. New -> Add Existing local repository
    3. For next configuration steps contact @martinmatejka

### Run project

1. `node -v` check if you have installed some version of *Node.js* ~8 because *npm* ("Node package manager" equivalent for *yarn*) is insatalled with Node.
If not install Node.js from https://nodejs.org/en/download/

2. `npm install` install all packages for project ("The packages are not pushed on remote")
3. `npm start`  - will start project and run on local http://localhost:3000/. If some change is made the local server reloads itselfs.

### Create your branch, edit code and push your branch to the repository

1. As above 
* `git fetch`    - loads infomations about changes in repo
* `git pull`     - loads all changes from remote branch on local branch
- at this stage you have everything from repo in github
2. Create the branch on your local machine and switch in this branch :
`git checkout -b [name_of_your_new_branch]` i.e. `git checkout -b B-1_avatar_odhlasovani`
3. Do the changes in the code 
4. Add the files you changed to be tracked 
`git add [file_name]` i.e. `git add readme.txt` - to track simple file
or
`git add .` - to track all modified files
`git checkout [file_name]` - to remove file from tracked
5. Commit (potvrdit - zavázat se ke změnám na lokálním gitu) changes
`git commit -m "[commit_message]"` i.e. `git commit -m "pridan avatar pro odhlasovani"`
6. Pushni (pošli) your branch to repository
`git push -u origin [name_of_your_new_branch]` i.e. `git push -u origin B-1_avatar_odhlasovani`
7. Tadaa your branch with changes should be in repository

Read the rest at https://github.com/Kunena/Kunena-Forum/wiki/Create-a-new-branch-with-git-and-manage-branches



