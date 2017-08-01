# Reproduce a ConEmu only bug

This repo reproduces a small ConEmu bug that keeps me up at nights.

## Preparations:

1. Install the latest version of node&npm: http://nodejs.org/
1. Clone this repo `git clone git@github.com:nicojs/reproduce-conemu-child-process-environment-bug.git`
1. run `npm install`.

## Reproduce the bug

Now run `npm test` from a cmd command prompt (no ConEmu):

```
    √ should contain "npm_config_onload_script" (881ms)


  1 passing (889ms)
```

Next, open a ConEmu command prompt and run `npm test` again. Now you see:

```
    1) should contain "npm_config_onload_script"


  0 passing (974ms)
  1 failing

  1) the env should contain "npm_config_onload_script":
     Error: "npm_config_onload_script": "undefined"!
      at Context.it (test\a-test.js:9:19)
```

All env variables are printed as well.

## What is happening?

I'm not sure. It seems that empty env variables are incorrectly passed to child processes in ConEmu only.