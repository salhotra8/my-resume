

 var bio = {
 	"Name" : "Himanshu Salhotra",
 	"role": " Web Developer",
     "contacts" : {

     	"location" : "new york",
     	"mobile"  : "901-161-254",
     	"email" : "salhotrahimanshu@yahoo.com",
     	"github" : "salhotra8",
        "twitter" : "salujames"
         },


     "welcomemessage" : "Go Win Barcelona Fc treble this season...Forca Barca.....lionel messi.....!",
      "skills" : ["Innovative","Chef", "Very Fast","Programer","Engineer","Gamer", "Singer", "Dancer"],  
      "bioPic": "images/me.jpg"

 };

 


 var school = {


 	"school" : [
 	{
 	  "name" : "MHAC Nagbani",
 	  "location": "Bombay,IN",
 	  "degree": "2013",
 	  "Major" : "Non-Medical"
    },
    {
    	"name" : "MietJammu",
 	  "location": "Texas,USA",
 	  "degree": "2017",
 	  "Major" : "ECE"
    }
         ],
     "onlinecourse" : [
        {
        	"name" : "Javascript Crash Course",
        	"date": "14 feb 1995",
        	"location" : "Udacity",
        	"url": "https://in.udacity.com/?utm_source=google&utm_medium=cpc&utm_campaign=bQAvD_BwE"
        }

     ]

     };


  var work = {
     "jobs"  : [
       {
       	"name": "Nala shop",
       	"designation": "cook boy",
       	"date" : "12 januray , 1995 - 2004",
       	"location" : "delhi",
       	"description" : "this my first worst job that i have evr done in my life. after this go to bad job but not worse like it. an age of instant communications, job applicants are often surprised -- perhaps even overwhelmed -- by requests for a writing sample during the search process."

       },
       {
         "name": "Jhind shop",
         "date" : "16 May , 2005 - 2020",
       	"designation": "water boy",
       	"location": "jammu",
       	"description" : "this my second bad job that i have ever done in my life. after this i became i useless person. an age of instant communications, job applicants are often surprised -- perhaps even overwhelmed -- by requests for a writing sample during the search process."
       }  

     ]


 };




 var projects = {
    
    "projects": [
    {

	"title": "Mind Control Drone",
	"date": "8 july , 2017",
	"description": " this was my first ever project that i have made at college. i put so much hardwork on this project but i never was acknowledge.this was my faith.To hell with those teacher of miet that do this partiality.this is my faith of all the time in my college doing nothing. i let my talent to go in vain.",
	"pic": [

	  "images/stadium.jpg",
	  "images/newstadium.jpg"	

	]
      }
	]

  };






var FormattedRole = HTMLheaderRole.replace("%data%",bio.role);
$("#header").prepend(FormattedRole);



var FormattedName = HTMLheaderName.replace("%data%",bio.Name);
$("#header").prepend(FormattedName);


var Formattedmobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
$("#topContacts").append(Formattedmobile);

var Formattedemail = HTMLemail.replace("%data%",bio.contacts.email);
$("#topContacts").append(Formattedemail);

var Formattedgithub = HTMLgithub.replace("%data%",bio.contacts.github);
$("#topContacts").append(Formattedgithub);

var Formattedtwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
$("#topContacts").append(Formattedtwitter);


var Formattedlocation = HTMLlocation.replace("%data%",bio.contacts.location);
$("#topContacts").append(Formattedlocation);

var FormattedbioPic = HTMLbioPic.replace("%data%",bio.bioPic);
$("#topContacts").append(FormattedbioPic);

var Formattedmessage = HTMLwelcomeMsg.replace("%data%",bio.welcomemessage);
$("#topContacts").append(Formattedmessage);

if(bio.skills.length>0)
{

 $("#topContacts").append(HTMLskillsStart);

 Formattedskill = HTMLskills.replace("%data%",bio.skills[0]);
 $("#skills").prepend(Formattedskill); 
 
 Formattedskill = HTMLskills.replace("%data%",bio.skills[1]);
 $("#skills").prepend(Formattedskill); 

 Formattedskill = HTMLskills.replace("%data%",bio.skills[2]);
 $("#skills").append(Formattedskill); 
 

 Formattedskill = HTMLskills.replace("%data%",bio.skills[4]);
 $("#skills").append(Formattedskill); 

Formattedskill = HTMLskills.replace("%data%",bio.skills[5]);
 $("#skills").append(Formattedskill);

Formattedskill = HTMLskills.replace("%data%",bio.skills[6]);
 $("#skills").append(Formattedskill); 

Formattedskill = HTMLskills.replace("%data%",bio.skills[7]);
 $("#skills").append(Formattedskill);

};


function works() 
{

for(job in work.jobs)
{

	$("#workExperience").append(HTMLworkStart);

	Formattedjobname = HTMLworkEmployer.replace("%data%",work.jobs[job].name);
    
    Formattedjoblevel = HTMLworkTitle.replace("%data%",work.jobs[job].designation);
   
   Formattednameandlevel = Formattedjobname + Formattedjoblevel;

   $(".work-entry:last").append(Formattednameandlevel);


   Formatteddate = HTMLworkDates.replace("%data%",work.jobs[job].date);
    $(".work-entry:last").append(Formatteddate);


    Formatteddescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
    $(".work-entry:last").append(Formatteddescription);


}

};

    works();


    $(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
     logClicks(x,y);
});



function inName(Name)
{
	Name = Name.trim().split(" ");
	console.log(Name);
	Name[1]=Name[1].toUpperCase();
    Name[0]=Name[0].slice(0,1).toUpperCase() + Name[0].slice(1).toLowerCase();
    return  Name[0]+ " " + Name[1] ;

}

    $("#main").append(internationalizeButton); 


    

    projects.display = function()

    {

     for(project in projects.projects)
     {

      $("#projects").append(HTMLprojectStart);

      Formattedtitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
     $(".project-entry:last").append(Formattedtitle);

      Formatteddate = HTMLprojectDates.replace("%data%",projects.projects[project].date);
     $(".project-entry:last").append(Formatteddate);
     
     Formatteddescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
     $(".project-entry:last").append(Formatteddescription);

     if(projects.projects[project].pic.length>0)
     {	

     	Formattedimage = HTMLprojectImage.replace("%data%",projects.projects[project].pic[0]);
     $(".project-entry:last").append(Formattedimage);

     Formattedimage = HTMLprojectImage.replace("%data%",projects.projects[project].pic[1]);
     $(".project-entry:last").append(Formattedimage);


     }	

 }
}

projects.display();


     function education() 
     {

     	$("#education").append(HTMLschoolStart);


      Formattedschoolname = HTMLschoolName.replace("%data%",school.school[0].name);
     $(".education-entry:last").append(Formattedschoolname);

     Formattedschoollocation = HTMLschoolLocation.replace("%data%",school.school[0].location);
     $(".education-entry:last").append(Formattedschoollocation);

     Formattedschooldegree = HTMLschoolDegree.replace("%data%",school.school[0].degree);
     $(".education-entry:last").append(Formattedschooldegree);


     Formattedschoolmajor = HTMLschoolMajor.replace("%data%",school.school[0].Major);
     $(".education-entry:last").append(Formattedschoolmajor);



     Formattedschoolname = HTMLschoolName.replace("%data%",school.school[1].name);
     $(".education-entry:last").append(Formattedschoolname);

     Formattedschoollocation = HTMLschoolLocation.replace("%data%",school.school[1].location);
     $(".education-entry:last").append(Formattedschoollocation);

     Formattedschooldegree = HTMLschoolDegree.replace("%data%",school.school[1].degree);
     $(".education-entry:last").append(Formattedschooldegree);


     Formattedschoolmajor = HTMLschoolMajor.replace("%data%",school.school[1].Major);
     $(".education-entry:last").append(Formattedschoolmajor);

     if (school.onlinecourse.length>0)
     {
     $("#education").append(HTMLonlineClasses);

     Formattedonlinecoursename = HTMLonlineTitle.replace("%data%",school.onlinecourse[0].name);
     $("#education").append(Formattedonlinecoursename);

     Formattedonlinecoursedate = HTMLonlineDates.replace("%data%",school.onlinecourse[0].date);
     $("#education").append(Formattedonlinecoursedate);


     Formattedonlinecourselocation = HTMLonlineSchool.replace("%data%",school.onlinecourse[0].location);
     $("#education").append(Formattedonlinecourselocation);

     Formattedonlinecourseurl = HTMLonlineURL.replace("%data%",school.onlinecourse[0].url);
     $("#education").append(Formattedonlinecourseurl);

      }

     }

     education();



 $("#mapDiv").append(googleMap);