# Web Development Project 3 - *Astronomy Quiz (Part 2)*

Submitted by: **Raymond Zegles**

This web app: **This website is an extension of my Project 2 website, and is about astronomy facts. I added a text input to allow users to guess at the answer on the back of the card, and a shuffle button to allow the user to get a random card in the available cards.**

Time spent: **9** hours spent in total

## Required Features

The following **required** functionality is completed:

- [X] **The user can enter their guess in a box before seeing the flipside of the card**
- [X] **Clicking on a submit button shows visual feedback about whether the answer was correct or incorrect**
- [X] **A back button is displayed on the card and can be used to return to the previous card in a set sequence**
- [X] **A next button is displayed on the card and can be used to navigate to the next card in a set sequence**

The following **optional** features are implemented:

- [ ] A shuffle button is used to randomize the order of the cards
- [ ] A user's answer may be counted as correct even when it is slightly different from the target answer
- [ ] A counter displays the user's current and longest streak of correct responses
- [ ] A user can mark a card that they have mastered and have it removed from the pool of answers as well as added to a list of mastered cards

The following **additional** features are implemented:

* [ ] List anything else that you added to improve the site's functionality!

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2pyNTRlazg1MGxyaDZhMmRmbDJkMjVudDFlbHZubTV6aGo2ZzNnaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8fpnObdAjMbgAHbSmk/giphy.gif' title='Project 3 GIF Walkthrough' width='' alt='Project 3 GIF Walthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ScreenToGIF

## Notes

Describe any challenges encountered while building the app.

I had a bit of difficulty allowing my text input to have placeholder text appear on the website. I fixed it by using the placeholder attribute properly. I also had some trouble making text show up to show the user whether or not their answer was correct. I was able to fix the issue by creating a function to handle checking if the user's answer is correct, and changing an empty paragraph element to say that they were correct if the answer matched the card, or make the text box have red borders and say their answer is incorrect if their answer was wrong.

## License

    Copyright [2024] [Raymond Zegles]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
