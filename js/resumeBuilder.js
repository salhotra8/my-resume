

 var bio = {
 	"name" : "Himanshu Salhotra",
 	"role": " Web Developer",
     "contacts" : {

     	"location" : "Jammu & Kashmir",
     	"mobile"  : "901-161-254",
     	"email" : "salhotrahimanshu@yahoo.com",
     	"github" : "salhotra8",
        "twitter" : "salujames"
         },


     "welcomemessage" : "Go Win Barcelona Fc the treble this season...Forca Barca...lionel messi...!",
      "skills" : ["Innovative","Chef", "Very Fast","Programer","Engineer","Gamer", "Singer", "Dancer"],  
      "bioPic": "images/me.jpg"

 };

 


 var school = {


 	"schools" : [
 	{
 	  "name" : "nagbani",
 	  "location": "jammu",
 	  "degree": "2013"
    },
    {
    	"name" : "mietjammu",
 	  "location": "jammu",
 	  "degree": "2017"
    }
         ],
     "onlinecourse" : [
        {
        	"name" : "javascript",
        	"date": "14 feb 1995"
        }

     ]

     };


  var work = {
     "jobs"  : [
       {
       	"name": "nala shop",
       	"designation": "cook boy",
       	"description" : "this my first worst job that i have evr done in my life. after this go to bad job but not worse like it"

       },
       {
         "name": "jind shop",
       	"designation": "water boy",
       	"description" : "this my second bad job that i have ever done in my life. after this i became i useless person "
       }  

     ]


 };




 var projects = {


	"title": "Mind Control Drone",
	"Semester": "8th",
	"description": " this was my first ever project that i have made at college. i put so much hardwork on this project but i never was acknowledge.this was my faith.To hell with those teacher of miet that do this partiality",
	"pic": [
		"https://www.google.co.in/imgres?imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FDSaqWrTI7_w%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DDSaqWrTI7_w&docid=aAVjUc_T6TEstM&tbnid=m-XVAckNhWMDiM%3A&vet=10ahUKEwjMo7bL7qzVAhUDy7wKHdw_D4kQMwhbKC0wLQ..i&w=1280&h=720&bih=678&biw=1301&q=mind%20control%20drone&ved=0ahUKEwjMo7bL7qzVAhUDy7wKHdw_D4kQMwhbKC0wLQ&iact=mrc&uact=80",
		"https://www.google.co.in/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjetYPs7qzVAhVHwLwKHSZOCYQQjRwIBw&url=http%3A%2F%2Fblog.digitalcamerawarehouse.com.au%2F2016%2F09%2Fphotokina-2016-new-gopro-hero5-black.html&psig=AFQjCNH_Np2FecfF7GR92ZLraKClLQEA7g&ust=1501361775274130"

	]

  };






var FormattedRole = HTMLheaderRole.replace("%data%",bio.role);
$("#header").prepend(FormattedRole);



var FormattedName = HTMLheaderName.replace("%data%",bio.name);
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

}