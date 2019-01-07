#  Greenhorn - Team 8

## How run frontend in local

1. Setup address of the API server <br/>
    in *frontend/src/api.js* <br/>
    *baseURL: 'http://localhost:3031/api/'* <br/>
2. Run script “npm start”

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

## UI

In project we use two packages for design:
1. https://tailwindcss.com
2. https://material-ui.com

### How use *tailwind*

`import './css/tailwind.css';`

#### Basic use
Tailwind is pre-definiend classes which you can apply on components.
Soo basicly you can find the name on the webside and entry it to a className of component.

e.g. : one `<button className="text-black" />` or many `<button className="text-black text-xs text-letft bg-green />` and thats it.

#### Define own class
You can define your own className in `src/css/tailwind.src.css`

e.g:
`.btn {`
   `@apply font-bold py-2 px-4 rounded;`
` }`
You group many classNames together and than you can just use `<button className="btn" />`

### How use *Material-ui*

Find a component and use it.

`import AppBar from '@material-ui/core/AppBar';`
`<AppBar />`


#### Icons
Find you icon here: https://material.io/tools/icons/ -> name of icon e.g. `card-giftcard` ->
-> text transform `CardGiftcard`
-> you can add type of icon on the end
* Filled -> `CardGiftcardFilled`
* Outlined -> `CardGiftcardOutlined`
* Rounded ...
* Two Tone ...
* Sharp ..
* Edge-cases ..
-> make import `import GiftIcon from '@material-ui/icons/CardGiftcardRounded`

or many imports at ones
`import { CardGiftcardRounded, Send } from '@material-ui/icons';`

`<CardGiftcardRounded />
<Send />`

### Tailwind and Material-ui together
You can apply class names from tailwind on material-ui components.

eg.
`<AppBar className="bg-green">`
