# Employee-Tracker

## Technology Used 

| Technology Used         | Resource URL           | 
| ------------- |:-------------:| 
| HTML    | [https://developer.mozilla.org/en-US/docs/Web/HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) | 
| CSS     | [https://developer.mozilla.org/en-US/docs/Web/CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)      |   
| Git | [https://git-scm.com/](https://git-scm.com/)     |    
| JavaScript    | [https://developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) | 
| MySQL    | [https://bulma.io/documentation/](https://bulma.io/documentation/) |
| npm    | [https://docs.npmjs.com/](https://docs.npmjs.com/) | 

## Description 


This Employee Tracker is a content management system(CMS) that manages a company's employee database from the command-line using Node.js, Inquirer, and MySQL.

Business owners can both view and add departments, roles, and employeesm. Additionally, the roles of employees can also be update. 

Video: https://watch.screencastify.com/v/NaPapfd5PTJrh0JYx4QL 
<iframe src="https://drive.google.com/file/d/1mv4_SgKjO58M4TQ_rOtFY9qYnbbvyV9B/preview" width="640" height="480"></iframe>

![Walk Through Video](/assests/media/Employee%20Tracker%20Walk-through%20Video.webm)

## Portfolio Example

When referencing the role table in the addEmployee function, the inclusion of the salary column was resulting in a null response. 


```
function addEmployee() {
    db.findAllRoles()
    .then(([rows]) => {
        let roles = rows;
        const roleChoices=roles.map(({id, title, salary}) => ({
            name: title,
            value: id,
            value: salary,
        }))

```

Since the salary is linked to the role that already exists, I only needed to focus on updating the role - not the salary. Removing the salary as a value allowed for employees to be added properly.

```
function addEmployee() {
    db.findAllRoles()
    .then(([rows]) => {
        let roles = rows;
        const roleChoices=roles.map(({id, title}) => ({
            name: title,
            value: id,
        }))

```


## Usage 

Use the command-line to view and interact with information that is stored in the databse.


## Learning Points 

This application helped me understand the functionality of switch cases. Using these simplified that steps that were necessary to execute each function.

## Author Info

### Fayven Amelga 


* [Portfolio](https://famelga.github.io/Portfolio/)
* [LinkedIn](https://www.linkedin.com/in/fayven-amelga-b09b17b6/)
* [Github](https://github.com/famelga)



## Credits

Fayven Amelga




## License

MIT License

Copyright (c) 2023 Fayven Amelga

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Badges

![MIT Badge](https://img.shields.io/badge/license-MIT-blue)

---

© 2023 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.