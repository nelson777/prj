# Base project

Base javascript project

## Description

This project installs a javascript template with requirejs, jquery and scss/sass configured that can be used as a base for any js project.

## Installation

First install dependencies:

```shell
sudo apt-get install nodejs ruby sass
```

then create a folder for your project and clone the repository:

```shell
mkdir prj
cd prj
git clone https://github.com/nelson777/prj.git .
```

now install node dependencies and compile it with grunt

```shell
npm install
grunt
```

That's it. it's running. Check in <yourprojectdir>/www/index.html