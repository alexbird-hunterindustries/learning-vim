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

We need to tell VIM whether it should treat our keyboard input as text input or
navigation input. We call these two scenarios "modes", and VIM provides various
commands for switching between modes. The name of the current mode is shown at
the bottom of the screen.

- in `NORMAL` mode, VIM interprets our inputs as **commands**
- in `INSERT` mode, VIM interprets our inputs as **text input** (normal keyboard
  behaviour)
- from `INSERT` mode, we can enter `NORMAL` mode with the `Escape` key
- from `NORMAL` mode, we can enter `INSERT` mode with the `i` key (also with
  others, but we'll cover those later)

### Exercise: switch between NORMAL and INSERT mode

In pairs, share screen or connect to a workstation. Figure out what each of
these commands does.

Commands: i, I, a, A, o, O
Behavior:
  - write behind the cursor
  - write at the start of the current line
  - write after the cursor
  - write at the end of the current line
  - write on a new line after the cursor
  - write on a new line 


