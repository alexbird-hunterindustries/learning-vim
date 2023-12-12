# Session 1: VIM in your IDE

## Learning Goals

 - use VIM extension in VS Code to navigate and modify code
   - choose between (and switch between) NORMAL mode and INSERT mode
   - navigate by line, word, search, and more
   - search and replace with regex across the whole file or within a block of
     code
   - perform code transformations like converting a list of `key=value`
     parameters into JSON or generating a series of method calls from a list of
     properties

## Intro

Place a card (or multiple) on the board under one (or more) of these headings:

1. In VIM, I already know how to...
2. I'm interested in exploring VIM because...
3. I find VIM intimidating because...

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
commands and the mouse as we see fit. This hour we're going to learn VIM
navigation and text manimulation that speeds up common coding tasks.This hour
we're going to learn VIM navigation and text manipulation that speeds up common
coding tasks. Everything we do we will do inside VS Code (or your preferred IDE,
as long as it has a VIM emulator extension).

## Instruction: Normal vs Insert Mode

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

### Exercise: go home to INSERT mode

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


