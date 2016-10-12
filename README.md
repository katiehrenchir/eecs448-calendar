# Calendar
Class Project: A calendar web app for the 2016-2017 academic year

The goal of this project is to create a calendar for the 2016-2017 academic year. Users are able to view the calendar in years, months, weeks, or days. Events can also be created and modified as they wish, with several options available for recurring events.

[Link to project][20]

## The Team
This project was created by [Sharynne Azhar][1], [Erin Coots][2], [Ashli Mosiman][3], and [Parthvi Patel][4].

It is currently maintained by [Yehan Li][13], [Mac Crider][14], [Katie Hrenchir][15], and [Andrew Thomas][16].

## Contributing
#### Generating the documentation
- Install [Node.js][10]
- Install [JSDoc][11] `npm install jsdoc`
- Run `./node_modules/.bin/jsdoc scripts -t ./node_modules/minami -d documentation -R README.md`
- Visit `path/to/project/documentation/index.html` in your browser to view the documentation

## Resources
- [Documentation][9]
- [Response Object Example][12]

#### This project is powered by:
- [Bootstrap][5]
- [MomentJS][6]

#### References
- [OOP in Javascript][7]
- [TutorialsPoint PHP & MySQL][8]

## TO DO
### See Google Doc for description of each task
- [ ] Bugs
	- [ ] Prev and Next Buttons in Day view default to May
	- [ ] Set today has no effect
	- [ ] Edit event does not populate event info 
	- [ ] New recurring events don't appear on Upcoming Events view

- [ ] New functionalities 
	- [x] Multi-day events
	- [x] Recurring events
		- [x] weekly
		- [x] bi weekly
		- [x] monthly
		- [x] monthly by date
		- [x] weekly by day of the week
		- [ ] move recurring event code to separate file (main is getting very cluttered)
	- [ ] Events within time frames
		- [x] events connected to time frame
		- [ ] overlapping events noticeable
		- [ ] events ordered by time in one-day view

- [ ] UML Diagrams
	- [x] [Use case diagram][17]
	- [x] State diagram [21]
	- [x] [Class diagram][18]
- [ ] [Powerpoint presentation][19]
 


[1]: https://github.com/sharynneazhar
[2]: https://github.com/erincoots
[3]: https://github.com/ashlimosiman
[4]: https://github.com/parthvip28
[5]: http://getbootstrap.com/
[6]: http://momentjs.com/
[7]: http://javascriptissexy.com/oop-in-javascript-what-you-need-to-know/
[8]: https://www.tutorialspoint.com/php/php_and_mysql.htm
[9]: http://people.eecs.ku.edu/~khrenchi/eecs448-calendar/documentation/jsdoc/index.html
[10]: https://nodejs.org/en/
[11]: http://usejsdoc.org/index.html
[12]: http://people.eecs.ku.edu/~sazhar/eecs448-calendar/api/client.php
[13]: https://github.com/greatyehanli
[14]: https://github.com/cridermac
[15]: https://github.com/katiehrenchir
[16]: https://github.com/athoma35
[17]: https://www.gliffy.com/go/share/sxeeietn5l7dskj98j8c
[18]: https://www.gliffy.com/go/share/sysei22t05aoidstaqd8
[19]: https://docs.google.com/presentation/d/1GBB32DcERaA_XULjjFI0zDkwHPyXx6EWmfzPKJUnaTo/edit?usp=sharing
[20]: https://people.eecs.ku.edu/~khrenchi/eecs448-calendar/index.html
[21]: https://www.gliffy.com/go/html5/11275407
