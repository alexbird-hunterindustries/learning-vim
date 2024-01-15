# Vim Gym
*lots of reps of basic steps*

---

# Demo 1: jumping around

(Vince)

---

# Demo 2: text transformations
Alex

- text list into JSON
- key=value;otherkey=othervalue to JSON
- search and replace with groups (rename getEggPie, EggPieService, EggPieFactory
  to *Quiche*


---

# Demo 3: something else?

Vince

---

# Workout plan
1. 1st circuit set of 10 exercises (10+ reps per exercise)
2. Rest (mini lean coffee)
3. repeat the 1st circuit set (2 reps per exercise)
4. 2nd circuit set of 10 exercises (10+ reps per exercise)
5. Rest (mini lean coffee)
6. repeat 1st and 2nd circuit set (2 reps per exercise)
7. 3rd circuit set of 10 exercises
8. Rest (mini lean coffee)

---

# 1st Circuit

about 10 reps of each exercise

---

# 1.01 Down and Up
- j
  - ("j" is kind of shaped like a down arrow)
- k

---

# 1.02. Left and Right

- h
- l

---

# 1.03 Clockwise

- h
- j
- l
- k


---

# 1.04 Counterclockwise

- l
- k
- h
- j

---

# 1.05 Down and Up by n
- 2j
- 2k
- 5j
- 5k

---

# 1.06 Left and Right by n

- 2h
- 2l
- 5h
- 5l

---

# 1.07 *B*eginning and *E*nd of word

Before your first rep, click on a word

- b
- e

---

# 1.08 Jumping to the nth beginning/end

- 2b
- 2e
- 5b
- 5e

---

# 1.09 Top and Bottom

- gg
- G

---

# 1.10 Go to line

- :22`Enter`
- gg
- :4`Enter`
- gg

---

# Rest

Lean Coffee

---

# Repeat the 1st Circuit
2 reps per exercise


---

# 2nd Circuit

About 10 reps of each exercise

Start on line `:30`

---

# 2.01 - Start and End of Line
- $
- 0

---

# 2.02 - Start and End of Line (ignoring leading whitespace)
- $
  - like the regex symbol "$" for "end of line"
- ^
  - like the regex symbol "^" for "start of line"

---

# 2.03 - First "b" character

- 0
- fb
  - "f" for "first"

---

# 2.04 - First single quote character

- 0
- f'

---

# 2.05 - Search for "Bub"

- gg
- /bub`Enter`

---

# 2.06 - Go to *N*ext search result

- gg
- /bub`Enter`
- n
  - "next"

---

# 2.07 - Search for "Basil"

- gg
- /Basil`Enter`

---

# 2.08 - Go to matching brace

- gg
- /Basil`Enter`
- $
  - to go to the end of the line
- %
  - go to matching brace

---

# 2.09 - ??

---

# 2.10 - ??

---

# Rest

Lean Coffee

---

# Repeat the 1st Circuit
2 reps per exercise

---

# Repeat the 2nd Circuit
2 reps per exercise

---

# 3rd Circuit

---

# 3.01 into Insert mode

10 reps

- i
- `Escape`

Notice the "NORMAL" and "INSERT" in the bottom left of the screen

---

# 3.02 spam escape

5 reps

you can press Escape from any mode to get back to Normal mode

- `Escape`
- `Escape`
- `Escape`
- `Escape`
- i

---

# 3.03 Change "ice cream" to "fancy ice cream"

`gg` before you start your first rep

5 reps

- / ice`Enter`
- i
-  fancy
- `Escape`
- j

# 3.04 Change "sauces" to "saucesss"

Before your first rep: **gg/sauces`Enter`**

15 reps

- e
- i
- ss
- `Escape`
- j
- n

# 3.05 Change "saucesss" back to "sauces"

- :%s/saucesss/sauces/`Enter`
  - % for "the whole file"
  - "s" for "substitute"
- :%s/sauces/saucesss/`Enter`


# 3.06 Search and replace, one at a time

Before your first rep:

- :%s/saucesss/sauces/c`Enter`
  - "c" for "confirm"

Then, for each saucesss

- Either `y` or `n` (you choose)

# 3.07 Add a log statement in getSauces

1 rep

- gg/getSauces`Enter`
  - that brings you to the invocation, but we want the definition
- n
  - there we go, that's the right one
- $i`Arrow Right` `Enter`
- console.log('getting the sauces');
- `Escape`

# 3.08 Add a log statement to getFlavors

1 rep

- gg
- /getFlavors`Enter`
- n
- O
  - this enters INSERT mode on a new line
- console.log('getting the flavors');
- `Escape`

# 3.08 Add chocolate on line 60½

1 rep

- :60`Enter`
- O
- 'chocolate'
- `Escape`
- `Escape`
- `Escape`
  - just spam Escape

# 3.09 Make the class public

1 rep

- gg
- /^class `Enter`
- i
- public`Space`
- `Escape`
- `Escape`
  - just spam Escape

# 3.10 how many lines of code in this file?

1 rep

- G
- (what is the line number?)

---

# Rest

Lean coffee

---
