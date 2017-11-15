	client side for crossover todo App

	To start the app :-

		*first you must have mongo up and running

 
 	- just run cmd  and go to xo-todo Folder
 	- “npm install”
 	- “npm start”
 	- open browser go to http://localhost:3000/
 	- in login screen enter any of the below credentials
	
   		 username : ali
   		 password :	5f4dcc3b5aa765d61d8327deb882cf99

	
   		 username : tom
   		 password :	5f4dcc3b5aa765d61d8327deb882cf99


  		 username : harry
    		 password :	5f4dcc3b5aa765d61d8327deb882cf99
	
 	- then you can start main functionality
	
      	  - login
      	  - logout	
      	  - get all todos  (i assume that will get first 30 only )
      	  - Add
     	  - update
     	  - update status using drag from in progress to completed and vis versa
		please note:-	
		  (drag drop is not working on touch screens )
	  		 url: http://caniuse.com/#feat=dragndrop
	
      	 - delete	


  - UI options for background-image:  you can open code folder under 
    
        “xo_todo\client\assets\css\style.css”

	you can edit body class image there is 3 options  in line 1
      
         { todoBG.jpg , todoBG3.jpg , todoBG1.jpg }


  - karma unit test run command while in folder xo_todo

       “npm run testkarma”

       files:  - xo_todo\karma.confg.js 
		- tests\*.js


  - E2E End to End  test run command 

	you must run “npm start” in different cmd tab first 

	“npm run protractor”

	files:  - xo_todo\eteTests\protractor.conf.js 
		- xo_todo\eteTests\scenarios.js 




	I used AngularJS MVC Model View Controller HTML5/CSS3
	I used Bootstrap for responsive
	I used karma jasmine for controllers and services for unit testing
	I used protractor for e2e testing senarios


	Note I didn’t use Grunt task runner and  SASS  in project but i usually use 	them i didn’t need in this small project.

	

     		Thank you
		Mohamed ELGhoneimy
		UI Consultant/FrontEnd Developer at IBM Egypt














	
