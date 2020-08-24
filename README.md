# **HW10: OOP - Template Endgine (Employee Summary)**

![GitHub license](https://img.shields.io/badge/Made%20by-%40WasteOfADrumBum-green)
![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

## Description 

I've built a software engineering team generator command line application. The application prompts the user for information about the team manager and then information about the other team members. The user can input any number of team members, and they may be a mix of engineers and interns. This assignment passes all unit tests. When the user has completed building the team, the application will create an HTML file that displays a nicely formatted team roster based on the information provided by the user.

### Application Functionality

![Image of me](develop/output/assets/templateengine.gif)

## Table of contents

- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Repository Link](#Repository)
- [Test](#Test)
- [Licence](#Licence)
- [GitHub Info](#GitHub) 


## Installation

In the `Develop` folder, there is a `package.json`, so make sure to `npm install`.

## Usage

Your app will run as a Node CLI to gather information about each employee. Initialize with 'node app.js'

## Repository

- [Project Repo](https://github.com/WasteOfADrumBum/Template-Engine-Employee-Summary)

## Test

![GitHub license](https://img.shields.io/badge/test-100%25-success)

Initialize test with 'npm test'

 PASS  test/Employee.test.js
  √ Can instantiate Employee instance (5ms)
  √ Can set name via constructor arguments (1ms)
  √ Can set id via constructor argument
  √ Can set email via constructor argument (1ms)
  √ Can get name via getName()
  √ Can get id via getId() (1ms)
  √ Can get email via getEmail()
  √ getRole() should return "Employee" (1ms)

 PASS  test/Intern.test.js
  √ Can set school via constructor (7ms)
  √ getRole() should return "Intern" (1ms)
  √ Can get school via getSchool()

 PASS  test/Manager.test.js
  √ Can set office number via constructor argument (7ms)
  √ getRole() should return "Manager" (1ms)
  √ Can get office number via getOffice() (1ms)

 PASS  test/Engineer.test.js
  √ Can set GitHUb account via constructor (5ms)
  √ getRole() should return "Engineer" (1ms)
  √ Can get GitHub username via getGithub() (1ms)

Test Suites: 4 passed, 4 total
Tests:       17 passed, 17 total
Snapshots:   0 total
Time:        4.152s

## Licence

![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

## GitHub

![Image of me](https://avatars0.githubusercontent.com/u/66432859?v=4)
- Joshua Small
- [GitHub Profile](https://github.com/WasteOfADrumBum)
