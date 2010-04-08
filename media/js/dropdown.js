//Contents for menu 1
var menu1=new Array()
menu1[0]='<a href="talent/personal.php">Edit Profile</a>'
menu1[1]='<a href="talent/profile.php?talent_id=me">View Profile</a>'
menu1[2]='<a href="talent/print.php?talent_id=me">Print Resume</a>'
menu1[3]='<a href="talent/resume.php">Edit Resume</a>'

//Contents for menu 2
var menu2=new Array()
// menu2[0]='<a href="community/community.php">Learning Communities</a>'
// menu2[1]='<a href="talent/chat_list.php">Chat</a>'

//Contents for menu 3
var menu3=new Array()
// menu3[0]='<a href="ucfinder/ucfinder.php">University/Course finder</a>'

//Contents for menu 4
var menu4=new Array()
menu4[0]='<a href="tests/gre/gre-about.php">GRE</a>'
menu4[1]='<a href="tests/gmat/gmat-about.php">GMAT</a>'

//Contents for menu 5
var menu5=new Array()
// menu5[0]='<a href="opportunity.php">Other Opportunities</a>'
menu5[0]='<a href="opportunity.php?cat=1">Events</a>'
menu5[1]='<a href="opportunity.php?cat=2">Scholarship</a>'
menu5[2]='<a href="opportunity.php?cat=4">Challanges</a>'
// menu5[2]='<a href="farehome.php">E-career Fair</a>'
	
var menu6=new Array()
menu6[0]='<a href="admin/company_reg.php">Add</a>'
menu6[1]='<a href="admin/company_profile_edit.php">Edit</a>'
menu6[2]='<a href="admin/company_profile_view.php">View</a>'
menu6[3]='<a href="admin/company_profile_add.php">Company Profile</a>'

var menu7=new Array()
menu7[0]='<a href="admin/university_reg.php">Add</a>'
menu7[1]='<a href="admin/university_profile_edit.php">Edit</a>'
menu7[2]='<a href="admin/university_profile_view.php">View</a>'
menu7[3]='<a href="admin/university_profile_add.php">Univ Profile</a>'
	
var menu8=new Array()
menu8[0]='<a href="admin/create_user.php">Create</a>'
menu8[1]='<a href="admin/emp_invite.php">Employer Attendance</a>'
menu8[2]='<a href="admin/create_admin.php">Create Feeder</a>'

var menu9=new Array()
menu9[0]='<a href="admin/emp_chat_add.php">Add</a>'
menu9[1]='<a href="admin/emp_chat_edit.php">Edit</a>'

var menu10=new Array()
menu10[0]='<a href="tests/gre/add_questions.php">GRE</a>'
menu10[1]='<a href="tests/gmat/add_questions.php">GMAT</a>'

// var menu11=new Array()
// menu11[0]='<a href="community/community.php">Learning Communities</a>'
//Contents for menu 6
var menuwidth='100px' //default menu width
var menubgcolor='#244966'  //menu bgcolor
var disappeardelay=250  //menu disappear speed onMouseout (in miliseconds)
var hidemenu_onclick="yes" //hide menu when user clicks within menu?

/////No further editting needed

var ie4=document.all
var ns6=document.getElementById&&!document.all

if (ie4||ns6)
document.write('<div id="dropmenudiv" style="visibility:hidden;width:'+menuwidth+';background-image:'+menubgcolor+'" onMouseover="clearhidemenu()" onMouseout="dynamichide(event)"></div>')

function getposOffset(what, offsettype){
var totaloffset=(offsettype=="left")? what.offsetLeft : what.offsetTop;
var parentEl=what.offsetParent;
while (parentEl!=null){
totaloffset=(offsettype=="left")? totaloffset+parentEl.offsetLeft : totaloffset+parentEl.offsetTop;
parentEl=parentEl.offsetParent;
}
return totaloffset;
}


function showhide(obj, e, visible, hidden, menuwidth){
if (ie4||ns6)
dropmenuobj.style.left=dropmenuobj.style.top="-500px"
if (menuwidth!=""){
dropmenuobj.widthobj=dropmenuobj.style
dropmenuobj.widthobj.width=menuwidth
}
if (e.type=="click" && obj.visibility==hidden || e.type=="mouseover")
obj.visibility=visible
else if (e.type=="click")
obj.visibility=hidden
}

function iecompattest(){
return (document.compatMode && document.compatMode!="BackCompat")? document.documentElement : document.body
}

function clearbrowseredge(obj, whichedge){
var edgeoffset=0
if (whichedge=="rightedge"){
var windowedge=ie4 && !window.opera? iecompattest().scrollLeft+iecompattest().clientWidth-15 : window.pageXOffset+window.innerWidth-15
dropmenuobj.contentmeasure=dropmenuobj.offsetWidth
if (windowedge-dropmenuobj.x < dropmenuobj.contentmeasure)
edgeoffset=dropmenuobj.contentmeasure-obj.offsetWidth
}
else{
var topedge=ie4 && !window.opera? iecompattest().scrollTop : window.pageYOffset
var windowedge=ie4 && !window.opera? iecompattest().scrollTop+iecompattest().clientHeight-15 : window.pageYOffset+window.innerHeight-18
dropmenuobj.contentmeasure=dropmenuobj.offsetHeight
if (windowedge-dropmenuobj.y < dropmenuobj.contentmeasure){ //move up?
edgeoffset=dropmenuobj.contentmeasure+obj.offsetHeight
if ((dropmenuobj.y-topedge)<dropmenuobj.contentmeasure) //up no good either?
edgeoffset=dropmenuobj.y+obj.offsetHeight-topedge
}
}
return edgeoffset
}

function populatemenu(what){
if (ie4||ns6)
dropmenuobj.innerHTML=what.join("")
}


function dropdownmenu(obj, e, menucontents, menuwidth){
if (window.event) event.cancelBubble=true
else if (e.stopPropagation) e.stopPropagation()
clearhidemenu()
dropmenuobj=document.getElementById? document.getElementById("dropmenudiv") : dropmenudiv
populatemenu(menucontents)

if (ie4||ns6){
showhide(dropmenuobj.style, e, "visible", "hidden", menuwidth)

dropmenuobj.x=getposOffset(obj, "left")
dropmenuobj.y=getposOffset(obj, "top")
dropmenuobj.style.left=dropmenuobj.x-clearbrowseredge(obj, "rightedge")+"px"
dropmenuobj.style.top=dropmenuobj.y-clearbrowseredge(obj, "bottomedge")+obj.offsetHeight+"px"
}

return clickreturnvalue()
}

function clickreturnvalue(){
if (ie4||ns6) return true
else return false
}

function contains_ns6(a, b) {
while (b.parentNode)
if ((b = b.parentNode) == a)
return true;
return false;
}

function dynamichide(e){
if (ie4&&!dropmenuobj.contains(e.toElement))
delayhidemenu()
else if (ns6&&e.currentTarget!= e.relatedTarget&& !contains_ns6(e.currentTarget, e.relatedTarget))
delayhidemenu()
}

function hidemenu(e){
if (typeof dropmenuobj!="undefined"){
if (ie4||ns6)
dropmenuobj.style.visibility="hidden"
}
}

function delayhidemenu(){
if (ie4||ns6)
delayhide=setTimeout("hidemenu()",disappeardelay)
}

function clearhidemenu(){
if (typeof delayhide!="undefined")
clearTimeout(delayhide)
}

if (hidemenu_onclick=="yes")
document.onclick=hidemenu
