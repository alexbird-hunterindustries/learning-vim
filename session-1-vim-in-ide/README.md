# Session 1: VIM in your IDE

## Learning Goals

 - use the VIM extension in VS Code to move around code faster than we could
   with a mouse
   - toggle between VIM mode (VIM NORMAL) and regular IDE mode (VIM INSERT)
   - translate high level navigation (like "go to line 35½" into VIM command) to
     quickly drive to the place you're navigated

## Intro

Place a card (or multiple) on the board under one (or more) of these headings:

1. In VIM, I already know how to...
2. I'm interested in exploring VIM because...
3. I find VIM confusing or intimidating because...

Also, make sure you have access to a workstation with VS Code installed and the
VIM extension installed. You could also install these on your laptop.

## Background: VIM vs Mouse

Our mouse is the essential tool for manipulating things on our computer, and our
keyboard lets us input text. One advantage of the mouse is that we it has a low
learning curve: the screen shows us what we can do, and the mouse lets us do
those things.

VIM provides a secondary tool for manipulating things on our computer. It's
faster and more powerful than the mouse, and unlike an LLM its inputs are terse
and latency free. If you'd like to learn the commands, you can more effectively
manipulate text than you could with a mouse and keyboard.

Most modern IDEs like VS Code have VIM emulators which let us use both VIM
commands and the mouse as we see fit. This hour we're going to learn how to move
around our code with VIM. Everything we do we will do inside VS Code (or your

preferred IDE, as long as it has a VIM emulator extension).

## Part 1: go home to INSERT mode
### Instruction: Normal vs Insert Mode

When I go exploring (hiking or driving), I first make a plan for how I will get
back home, and then I go wantering. Before we install a VS Code extension that
interferes with all our keyboard input, let's talk about how to get back from
VIM mode to the way we're used to entering text into our IDE.

VIM has multiple modes of operating with names and keyboard commands for
switching between them. The name of the current mode is shown at the bottom left
of the screen.

 - `INSERT` mode is the one that is pretty much the same as using our IDE
   without a VIM extension. When we talk about "going home from our adventure",
   that means getting back into `INSERT` mode where the inputs behave as we
   expect.
 - `NORMAL` mode is the default mode for VIM, and that's the mode we'll be
   learning about. From `INSERT` mode, we enter `NORMAL` mode by pressing
   `Escape`.

### Exercise: several ways to go home to INSERT mode

For this and subsequent exercises, download the code from [./dessert.ts](./dessert.ts).

In pairs, share screen or connect to a workstation. Figure out what each of
these commands does (each of them puts you into `INSERT` mode with your cursor
in a different place).

Commands: i, I, a, A, o, O  
Behavior:
  - start writing behind the cursor
  - start writing at the start of the current line
  - start writing after the cursor
  - start writing at the end of the current line
  - start writing on a new line after the cursor
  - start writing on a new line 

## Part 2: moving around the code in NORMAL mode
### Instruction: ways to get around

When we're coding collaboratively, the navigator often directs the driver to
certain places in the code. Let's look at how a driver with a VIM emulator can
quickly respond to these navigations.

Note that `<cr>` is short for the enter key ("carriage return" 📇)

| VIM               | Navigation                                                            |
|-------------------|-----------------------------------------------------------------------|
| `G`               | go to the bottom of the file                                          |
| `gg`              | go to the top of the file                                             |
| `:33<cr>o`        | on line 33½                                                           |
| `:12<cr>O`        | just before line 12                                                   |
| <code>\`\`</code> | go back to where we were before                                       |
| `:22<cr>A`        | at the end of line 22                                                 |
| `:23<cr>I`        | at the start of line 23                                               |
| `/blue<cr>`       | go to the next `blue`. Press `n` to skip to subsequent matches        |
| `gg/fish =<cr>`   | go to where we initialize `fish`                                      |
| `gg/class <cr>`   | go to the start of the class                                          |
| `e`               | after this word                                                       |
| `b`               | before this word                                                      |
| `f)i`             | just inside the close parenthesis (try this on the `Math.floor` line) |

### Exercise: navigate some code

With a pair, open the following code and take turns navigating each other. The
navigator gives the high level instruction like "go to the bottom of the file",
and the driver does what the navigator directs. Make sure each person gets a
chance to execute each command. When you are finished, if we still have time,
try coming up with new navigations and corresponding VIM commands by recombining
the elements of the ones we've seen here.

## Part 3: beyond the arrow keys
### Instruction: 20k and other commands

We move around (up, right, down, left) often, and when we move our hands down to
the arrow keys on our keyboard, they're far from our home row. They're closer
than if we went all the way to our mouse, but we can do better.

VIM provides `h`, `j`, `k`, and `l` for moving left, down, up, and right without
leaving our home row.

We also often have to move quite a ways -- not just one row or column over, but
many. We already learned some search based methods to jump around: `/word<cr>`
to jump to the next occurance of `word`, and `fx` to jump to the next occurance
of character `x` on this line. Also `e` and `b` to go to the **e**nd and
**b**eginning of a word. However, sometimes there is no obvious target like a
word or a character, and we have to go up a few lines or over a few columns.

For that, we prepend a number to the `h`, `j`, `k`, and `l` commands to repeat
them (e.g. `22k` to go up 22 lines).

### Exercise: VIM tag

In pairs, take turns being "it". The person who is "it" is not at the keyboard.
They describe some place in this code file, and their pair needs to get there as
quickly as possible without using the mouse. When they get to the place, they
insert "`TAG`" into the code, and then the person who is "it" tells them a new
place. After a little bit, rotate who is "it".

## Outro

Place a card (or multiple) on the board under one (or more) of these headings.

- I'm keen to start using...
- I don't want to forget...
- I want to learn more about...

Also, use one of the emoji reactions to respond to the statement "I could start
using VIM in VS Code today if I wanted to". 🙌🏻🤷😬
