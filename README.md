# Notes ![notes version](https://img.shields.io/badge/version-1.0.0-orange.svg)

Notes is a simple CLI notes application built as part of [Andrew Mead's](https://mead.io/) "[The Complete Node.js Developer Course](https://www.udemy.com/the-complete-nodejs-developer-course-2/learn/v4/overview)" on Udemy. You can create, read, and delete individual notes, as well as list all your current notes. The notes are stored in a JSON file (`notes.json`) and consist of a `title` and a `body`.

## Installation
Clone the repo, and then run `npm i` to install the necessary packages.

## Commands
### `add`
Creates a new note with the provided `title` and `body`. Each note's title must be unique (though not case-insensitive).
```
node app add --title="title" --body="body"
```
### `remove`
Removes a note with the provided `title`.
```
node app remove --title="title"
```
### `read`
Reads a note with the provided `title`.
```
node app read --title="title"
```
### `list`
Lists the titles of all your notes.
```
node app list
```
