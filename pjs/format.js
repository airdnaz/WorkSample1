//this page is for format for credit card, phone number and date

 /*this area is the format function for dob, ssn, expires date and phone number*/
//function to format SSN Number
function CC23(obj) {
    var snumber = obj.value.replace(/\D/g, ''),
        char = {3:'-',5:'-',11:'-'};
    obj.value = '';
    for (var i = 0; i < snumber.length; i++) {
        obj.value += (char[i]||'') + snumber[i];
    }
}//end of function

// function format for date
function DateFormat(obj) {
    var dnumber = obj.value.replace(/\D/g, ''),
        char = {2:'/',4:'/',11:'/'};
    obj.value = '';
    for (var i = 0; i < dnumber.length; i++) {
        obj.value += (char[i]||'') + dnumber[i];
    }
}//end of function

//for expire date format
function DateExpired(obj) {
    var denumber = obj.value.replace(/\D/g, ''),
        char = {2:'/',4:'/'};
    obj.value = '';
    for (var i = 0; i < denumber.length; i++) {
        obj.value += (char[i]||'') + denumber[i];
    }
}//end of function

//function to format phone
function InputPhone(obj) {
    var pnum = obj.value.replace(/\D/g, ''),
        char = {3:'-',6:'-',10:'x'}; 
        obj.value = '';
    for (var i = 0; i < pnum.length; i++) {
        obj.value += (char[i]||'') + pnum[i];
    }
}//end of function

/* this area end for format function*/

//function for credit card number  ^\s*(\d{4}-){3}\d{4}\s*$|^\s*(\d{4} ){3}\d{4}\s*$|^\s*\d{16}\s*$
// function CC2(obj) {
//     var cnumber = obj.value.replace(/\s/g,''),
//         	char = {4:'-',8:'-',12:'-'};
//     obj.value = '';
//     for (var i = 0; i < cnumber.length; i++) {
//         obj.value += (char[i]||'') + cnumber[i];
//     }
// }
//end of function

//function for credit card number
function CC3(obj) {
    var cnumber = obj.value.replace(/\D/g, ''),
            char = {4:'-',8:'-',12:'-'};
    obj.value = '';
    for (var i = 0; i < cnumber.length; i++) {
        obj.value += (char[i]||'') + cnumber[i];
    }
}//end of function

//function to display last digit for credit card
function four(){
	 var letter = document.getElementById('strange');
	 //letter = letter.match(new RegExp('.{1,4}$|.{1,4}', 'g')).join("-");
	 letter.value = new Array(letter.value.length-3).join('x') + letter.value.substr(letter.value.length-4, 4);
     alert(letter);
}
// for the same checkbox for pages "Service, Replacement, Scheduled Service Inbound Call" 
// if  this button click it will display the same phone number as the phone number
function showNumber(){
    var number0 = document.getElementById('pho1');
    var number1 = document.getElementById('textphone');
    var number2 = document.getElementById('same');
    var number3 = document.getElementById('same2');
   
    if (number2.checked){
        number1.value = number0.value;
    } else if(!number2.checked){
        number1.value = "";
    } 
}

function showNumber1(){
    var number3 = document.getElementById('same2');
    var numrde = document.getElementById('same4');
    var frame1 = document.getElementById('fname');
    var frame2 = document.getElementById('rfname');
    var frame3 = document.getElementById('mname');
    var frame4 = document.getElementById('rmname');
    var frame5 = document.getElementById('lname');
    var frame6 = document.getElementById('rlname');
    var numrde1 = document.getElementById('owinfo');

    if (number3.checked){
        frame2.value = frame1.value;
        frame4.value = frame3.value;
        frame6.value = frame5.value;
    } else {
        frame2.value = "";
        frame4.value = "";
        frame6.value = "";
    }

    

}

function addCoIn(){
    var muit = document.getElementById("");
    var muitt = document.getElementById("");
    var option = document.createElement("option");
}

// function showNumber3(){
//     var numrde = document.getElementById('hopefully');
//     var numrde1 = document.getElementById('sample');
//     var numrde2 = document.getElementById('firstMessage');

//     if(numrde.checked){
//        numrde2.value = numrde1.value; 

//     }

// }

function showNumber2(){
    var number4 = document.getElementById('same3');
    var number5 = document.getElementById('phonenumber');
    var number7 = document.getElementById('textphone');
    if(number4.checked){
        number7.value = number5.value;
    }else if(!number4.checked){
        number7.value = "";
    }
}

//functin for clear textbox cache
function clear(){
    document.getElementById('members').value =""
    document.getElementById('phonenumber').value =""
    document.getElementById('email').value =""
    document.getElementById('textphone').value =""
    document.getElementById('pho1').value =""
    
}

/*function for table Warranty "page Caller Id", if the date is less than the expired date it will display green,*/
/*if the is greater than it will display red*/
function warDate(){
    var today = new Date();
    var compare = document.getElementById("date2").value;
    var compare1 = document.getElementById("date0").value;
    var date2 = new Date(compare1);
    var date1 = new Date(compare);

    //var dateString = "03-01-2012"
    //var compareDates =  dateString < today ? 
    if(compare.length == 0){
        document.getElementById("col1").style.backgroundColor="";
        document.getElementById("date2").style.color="";
    } else if(today > date1){
        document.getElementById("col1").style.backgroundColor="#FF0000";
        document.getElementById("date2").style.color="#000000";
        var test = document.getElementById('date1').textContent;
        alert(test);
    } else if(today < date1){
        document.getElementById("col1").style.backgroundColor="#008A00";
        document.getElementById("date2").style.color="#000000";
    }

    if(compare1.length == 0){
            document.getElementById("col2").style.backgroundColor="";
            document.getElementById("date0").style.color="";
    }else if(today > date2){
            document.getElementById("col2").style.backgroundColor="#FF0000";
            document.getElementById("date0").style.color="#000000";
    }else if(today < date2){
            document.getElementById("col2").style.backgroundColor="#008A00";
            document.getElementById("date0").style.color="#000000";
    }
        
}



//for email update button
function change(){
    var noinfo = document.getElementById('email');
    var disp = document.getElementById('updateE');
    if(disp.checked){
        document.getElementById('email').disabled = true;
    }else{
        document.getElementById('email').disabled = false;
    }
}

function change2(){
    var noinfo0 = document.getElementById('emailtwo');
    var disp1 = document.getElementById('updateE1');
    if(disp1.checked){
        disp = noinfo0.value = "";
    }
}

//if the update checkbox is checked it will delete the information  to enter new  address information
function addChange(){
var cadd1 = document.getElementById('addupdate');
var cadd = document.getElementById('address');
var cadd2 = document.getElementById('address1');
var cadd3 = document.getElementById('strloc');
var cadd4 = document.getElementById('address2');
var cadd5 = document.getElementById('zip');
var cadd7 = document.getElementById('city');
var cadd7 = document.getElementById('state');
    if (cadd1.checked){
        cadd1 = cadd.value = "";
        cadd1 = cadd2.value = "";
        cadd1 = cadd3.value = "0";
        cadd1 = cadd4.value = "";
        cadd1 = cadd5.value = "";
        cadd1 = cadd7.value = "";
        cadd1 = cadd8.value = "";
    }
}

function addChange1(){
    var cadd8 = document.getElementById('addupdate20');
    var cadd9 = document.getElementById('address21');
    var cadd10 = document.getElementById('address12');
    var cadd12 = document.getElementById('strloc21');
    var cadd13 = document.getElementById('address212');
    var cadd14 = document.getElementById('zip21');
    var cadd15 = document.getElementById('city21');
    var cadd17 = document.getElementById('state21');
    if (cadd8.checked){
        cadd8 = cadd9.value = "";
        cadd8 = cadd10.value = "";
        cadd8 = cadd12.value = "0";
        cadd8 = cadd13.value = "";
        cadd8 = cadd14.value = "";
        cadd8 = cadd15.value = "";
        cadd8 = cadd17.value = "";
    }

}

function ZipClear(){
  var clzi = document.getElementById('clzipco');
  var clez = document.getElementById('zip');
  var clse = document.getElementById('city');
  var clce = document.getElementById('state');

  //credit card
  var clziz = document.getElementById('clcreditco');
  var strange = document.getElementById('strange');
    if(clzi.checked){
            clzi = clez.value = "";
            clzi = clse.value = "";
            clce = clce.value = "";
        } else{
            clzi = clez.value ;
            clzi = clse.value ;
            clce = clce.value ;
        }

     if(clziz.checked){
        clziz = strange.value = "";
     } else {
        clziz = strange.value ;
     }   
}
/*This function is for page Caller id for service type, when select it will change color to show selection , unclick it will go back to it orginal color*/
function colorC(layer){
  var mylayer= document.getElementById(layer);
  var input = mylayer.childNodes[0];
    if(input.checked == true){
    mylayer.style.backgroundColor = "#000";
    } else {
    mylayer.style.backgroundColor = "#009300";
  }
}

function amountOwe(){
var amowe;
var balmain;
var aomain;
var amowe = document.getElementById('amowe').value;
var balmain = document.getElementById('balmain').value;
var aomain = document.getElementById('aomain').value;
document.getElementById("disamount").innerHTML = "";
document.getElementById("disamount1").innerHTML = "" ;
document.getElementById("disamount2").innerHTML = "" ;
document.getElementById("disamount3").innerHTML = "" ;
together = amowe - balmain;
together1 = balmain - amowe;
together2 = amowe - balmain- aomain;

	 if (amowe > balmain){
		document.getElementById("hcareag").style.backgroundColor="#FF0000";
		document.getElementById("disamount").innerHTML = "Invoice total amount $ " + amowe;
		document.getElementById("disamount1").innerHTML = "Present balance $ " + balmain;
        document.getElementById("disamount2").innerHTML = "Current Payment $ " + aomain;
		document.getElementById("disamount3").innerHTML = "Current Amount $ " + together2;
	 } else if(amowe < balmain){
		document.getElementById("hcareag").style.backgroundColor="#009300";
		document.getElementById("disamount").innerHTML = "Invoice total amount: " + amowe;
		document.getElementById("disamount1").innerHTML = "Present balance: " + balmain;
		document.getElementById("disamount2").innerHTML = "You have overpaid: " + together1;
		
	 } else if(amowe <= balmain){
		document.getElementById("hcareag").style.backgroundColor="";
        document.getElementById("disamount").innerHTML = "Invoice total amount: " + amowe;
        document.getElementById("disamount1").innerHTML = "Present balance: " + balmain;
        document.getElementById("disamount2").innerHTML = "Current Payment: " + aomain;
        document.getElementById("disamount3").innerHTML = "Current Amount: " + together2;
		
		
	 }else{
        document.getElementById("hcareag").style.backgroundColor="";
     }
}

function amountRE(){
    var umn = 100.00;
    umn = umn.toFixed(2);
    var ufnd = document.getElementById('ufnd').value;
     if (parseInt(ufnd)<= parseInt(umn)){
        document.getElementById("ufnd").style.backgroundColor="";
        document.getElementById("forun").innerHTML = "" ;
    }else if(parseInt(ufnd)> parseInt(umn)){
        document.getElementById("ufnd").style.backgroundColor="#FF0000";
        document.getElementById("ufnd").style.color="#000000";
        document.getElementById("forun").innerHTML = "<font color = 'red'> Need Manager Approval Over </font>" + umn;
    } else {
       document.getElementById("ufnd").style.backgroundColor=""; 
       document.getElementById("forun").innerHTML = "";
    }
}




function invoiceBalance(){
var listVal = document.getElementById('invo');
var listVal1 = document.getElementById('totamouo');
var listVal2 = document.getElementById('totamou');
var listVal3 = document.getElementById('totoweo');
var listVal4 = document.getElementById('totowe');
var listVal5 = document.getElementById('invo1');
var listVal7 = document.getElementById('totamoua');
var listVal8 = document.getElementById('totamou1');
var listVal9 = document.getElementById('totowea');
var listVal10 = document.getElementById('totowe1');
var listVal11 = document.getElementById('invo2');
var listVal12 = document.getElementById('totamoub');
var listVal13 = document.getElementById('totamou2');
var listVal14 = document.getElementById('totoweb');
var listVal15 = document.getElementById('totowe2');
var listVal17 = document.getElementById('tottoo');
var listVal18 = document.getElementById('tottoo4');
var listVal19 = document.getElementById('tottoo1');
var listVal20 = document.getElementById('tottoo5');
var listVal21 = document.getElementById('tottoo3');
var listVal22 = document.getElementById('tottoo7');


if (listVal.checked){
        listVal2.value = listVal1.value;
        listVal4.value = listVal3.value;
        listVal18.value = listVal17.value;
    } else{
        listVal2.value = "";
        listVal4.value = "";
        listVal18.value = "";
    }

    if(listVal5.checked){
        listVal8.value = listVal7.value;
        listVal10.value = listVal9.value;
        listVal20.value = listVal19.value;
    } else {
        listVal8.value = "";
        listVal10.value = "";
        listVal20.value = "";
    }

    if(listVal11.checked){
        listVal13.value = listVal12.value;
        listVal15.value = listVal14.value;
        listVal22.value = listVal21.value;
    } else {
        listVal13.value = "";
        listVal15.value = "";
        listVal22.value = "";
    }
var total=Number($('#totamouo').val()) - Number($('#totoweo').val());
$('#tottoo').val(total);

var total1=Number($('#totamoua').val()) - Number($('#totowea').val());
$('#tottoo1').val(total1);

var total2=Number($('#totamoub').val()) - Number($('#totoweb').val());
$('#tottoo3').val(total2);

var total3=Number($('#tottoo').val()) + Number($('#tottoo1').val()) + Number($('#tottoo3').val());
$('#fintot').val(total3);
}

function ocaSumm(){
    var restot = Number($('#ationsum').val()) - Number($('#taionsum').val());
     $('#tiaonsum').val(restot); 
   var restot1 = Number($('#atsum').val()) - Number($('#tasum').val());
    $('#taisum').val(restot1); 
   var restot2 = Number($('#atsum1').val()) - Number($('#tasum1').val());
    $('#taisum1').val(restot2);
   var restot3 = Number($('#atsum2').val()) - Number($('#tasum2').val());
    $('#taisum2').val(restot3);
   var restot4 = Number($('#taisum').val()) + Number($('#taisum1').val()) + Number($('#taisum2').val());
    $('#ationsum').val(restot4); 

    var restot5 = Number($('#fatsum').val()) - Number($('#fasum').val());
    $('#ftaisum').val(restot5);
    var restot7 = Number($('#fatsum1').val()) - Number($('#ftasum1').val());
    $('#ftaisum1').val(restot7);
    var restot8 = Number($('#fatsum2').val()) - Number($('#ftasum2').val());
    $('#ftaisum2').val(restot8);
    var restot9 = Number($('#ftaisum').val()) + Number($('#ftaisum1').val()) + Number($('#ftaisum2').val());
    $('#ationsum1').val(restot9); 
    var restot10 = Number($('#ationsum1').val()) - Number($('#taionsum1').val());
    $('#tiaonsum1').val(restot10);

    var restot11 = Number($('#oatsum').val()) - Number($('#oasum').val());
    $('#otaisum').val(restot11);
    var restot12 = Number($('#oatsum1').val()) - Number($('#otasum1').val());
    $('#otaisum1').val(restot12);
    var restot13 = Number($('#oatsum2').val()) - Number($('#otasum2').val());
    $('#otaisum2').val(restot13);
    var restot14 = Number($('#otaisum').val()) + Number($('#otaisum1').val()) + Number($('#otaisum2').val());
    $('#ationsum2').val(restot14); 
    var restot15 = Number($('#ationsum2').val()) - Number($('#taionsum2').val());
    $('#tiaonsum2').val(restot15);

    var restot17 = Number($('#latsum').val()) - Number($('#lasum').val());
    $('#ltaisum').val(restot17);
    var restot18 = Number($('#latsum1').val()) - Number($('#ltasum1').val());
    $('#ltaisum1').val(restot18);
    var restot19 = Number($('#latsum2').val()) - Number($('#ltasum2').val());
    $('#ltaisum2').val(restot19);
    var restot20 = Number($('#ltaisum').val()) + Number($('#ltaisum1').val()) + Number($('#ltaisum2').val());
    $('#ationsum3').val(restot20); 
    var restot21 = Number($('#ationsum3').val()) - Number($('#taionsum3').val());
    $('#tiaonsum3').val(restot21);

    var restot22 = Number($('#tiaonsum').val()) + Number($('#tiaonsum1').val()) + Number($('#tiaonsum2').val()) + Number($('#tiaonsum3').val());
    $('#fintot').val(restot22); 

}
$(document).ready(function(){
        $('#compname').keyup(function() {
        var $compname = $(this);
        // this is the value before the keypress
        var beforeVal = $compname.val();
        setTimeout(function() {
            // this is the value after the keypress
            var afterVal = $compname.val();
            $('#companyContract').prepend(
                $('<div></div>').append("<div class = 'control-group'><label class ='question'>First Name:</label><input class='span3' type = 'text' name ='unitage' id = 'age'/><label class = 'question2'>Last Name:</label><input class='span3' type = 'text' name ='unitage' id = 'age'/></div>" )
            );
        }, 0);
    });
});

//function for to show edit or present script(phone number)
//this function when is click the checkbox which is for the page it is for 
//it will change text script  message for phone
//if all check it will change it for all the pages
function Onetst(){
    var servic = document.getElementById('sRepair');
    var reRes = document.getElementById('reRes');
    var rePla = document.getElementById('repPage');
    var reCom = document.getElementById('plicPage');
    var reCon = document.getElementById('licPage');
    var reBill = document.getElementById('inBill');
    var reMBill = document.getElementById('pbill');
    var geDch = document.getElementById('greSch');
    var geDSch = document.getElementById('gscheduled');
    var geDrpl = document.getElementById('gRpla');
    var upCpay = document.getElementById('upCpay');
    var rpsol = document.getElementById('uctior');
    var hmanu = document.getElementById('huReso');
    var mfoep = document.getElementById('mfoep');
    var loyment = document.getElementById('loyment');
    var tainq = document.getElementById('tainq');
    var accrecv = document.getElementById('accrecv');
    var lrolay = document.getElementById('lrolay');
    var ablepay = document.getElementById('ablepay');
    var ancelcl = document.getElementById('ancelcl');
    var difymo = document.getElementById('difymo');
    var fasta = document.getElementById('fasta');
    var veremoym = document.getElementById('veremoym');
    var hpsta = document.getElementById('hpsta');purc
    var purc = document.getElementById('purc');aythomew
    var aythomew = document.getElementById('aythomew');
    var meNotes = document.getElementById('rodeo').value;
    var newString = meNotes.replace(/showScript/g, "");
     //for checkbox phone(service page)
    if(servic.checked){
        // document.cdsquestions.pho1.checked = document.getElementById('showScript').innerHTML = "Phone number new message" + meNotes;
        document.getElementById('showScript').innerHTML = " Service Repair New Message:</br>" + newString;
    } 
    //for checkbox phone number (Reschedule Service)
    if (reRes.checked){
        // document.schService.pho1.checked = document.getElementById('showScript').innerHTML = "Reschedule Service phone number new message" + meNotes;
         document.getElementById('showScript').innerHTML = "Reschedule Service New Message:</br>" + newString;
    }
    //for checkbox phone number (Replacement Service)
    if (rePla.checked){
         //document.replacement.pho1.checked = document.getElementById('showScript').innerHTML = "Replacement phone number new message" + meNotes;
         document.getElementById('showScript').innerHTML = "Replacement New Message:</br>" + newString;
        // document.body.appendChild("Replacement" + meNotes);
    } 
    //for phone number(Compliments(Happy)
    if (reCom.checked){
         //document.getElementById('showScrippurct').innerHTML = "Replacement New Message:</br>" + newString;
        document.getElementById('showScript').innerHTML = "Compliments New Message:</br>" + newString;
    } 
    //for phone number(Concerns(UnHappy))
    if (reCon.checked){
         //document.getElementById('showScript').innerHTML = "Replacement New Message:</br>" + newString;
        document.getElementById('showScript').innerHTML = "Concerns New Message:</br>" + newString;
    } 
    //for phone number(Billing)
    if (reBill.checked){
         //document.getElementById('showScript').innerHTML = "Replacement New Message:</br>" + newString;
        document.getElementById('showScript').innerHTML = "Billing New Message:</br>" + newString;
    } 
    //for Make a Payment 
    if (reMBill.checked){
         document.getElementById('showScript').innerHTML = "Make a Payment New Message:</br>" + newString;
    } uctior
    //for Reschedule Service Appointment 
    if (geDch.checked){
         document.getElementById('showScript').innerHTML = "Reschedule Service Appointment:</br>" + newString;
    } 
    //for Reschedule Scheduled Appointment: 
    if (geDSch.checked){
         document.getElementById('showScript').innerHTML = "Reschedule Scheduled Appointment:</br>" + newString;
    } 
    //for Reschedule Placement Appointment: 
    if (geDrpl.checked){
         document.getElementById('showScript').innerHTML = "Reschedule Placement Appointment:</br>" + newString;
    } 
    //for Update Club Payment Appointment: 
    if (upCpay.checked){
         document.getElementById('showScript').innerHTML ="Update Club Payment Appointment:</br>" + newString;
    }
    //for Solicitor
    if (rpsol.checked){
         document.getElementById('showScript').innerHTML = "Solicitor New Message:</br>" + newString;
    }
    //for Human Resource
    if (hmanu.checked){
         document.getElementById('showScript').innerHTML = "Human Resource New Message:</br>" + newString;
    }
    //message for employee
    if (mfoep.checked){
         document.getElementById('showScript').innerHTML = "Message for Employee New Message:</br>" + newString;
    }
    //Employment
    if (loyment.checked){
         document.getElementById('showScript').innerHTML = "Employee New Message:</br>" + newString;
    }
    //Techician Arrival Inquiry
    if (tainq.checked){
         document.getElementById('showScript').innerHTML = "Techician Arrival Inquiry New Message:</br>" + newString;
    }
    //Account Receivable
    if (accrecv.checked){
         document.getElementById('showScript').innerHTML = "Account Receivable Inquiry:</br>" + newString;
    }
    //Payroll
    if (lrolay.checked){
         document.getElementById('showScript').innerHTML = "Payroll New Message :</br>" + newString;
    }
    //Account Payablveremoyme
    if (ablepay.checked){
         document.getElementById('showScript').innerHTML = "Account Payable New Message :</br>" + newString;
    }
    //Cancel Club Membership
    if (ancelcl.checked){
         document.getElementById('showScript').innerHTML = "Cancel Club Membership New Message :</br>" + newString;
    }
    //Modify Club Membership
    if (difymo.checked){
         document.getElementById('showScript').innerHTML = "Modify Club Membership New Message :</br>" + newString;
    }
    //Financing Application Status
    if (fasta.checked){
         document.getElementById('showScript').innerHTML = "Financing Application Status New Message :</br>" + newString;
    }
    //Employment Verification
    if (veremoym.checked){
         document.getElementById('showScript').innerHTML = "Employment Verification New Message :</br>" + newString;
    }
    //Home Repair Status
    if (hpsta.checked){
         document.getElementById('showScript').innerHTML = "Employment Verification New Message :</br>" + newString;
    }
    //Purchasing
    if (purc.checked){
         document.getElementById('showScript').innerHTML = "Purchasing New Message :</br>" + newString;
    }
    //Are you the homeowner?
    if (aythomew.checked){
         document.getElementById('showScript').innerHTML = "Are you the homeowner New Message :</br>" + newString;
    }
}

//for first name admin
// function Onetst1(){
//     var meNotes1 = document.getElementById('rodeo').value;
//     var newString1 = meNotes1.replace(//g, "showScript1");
//     var wiType = document.getElementById('wiType').value;
    

//     switch (wiType){
//         case "1":
//             document.getElementById('showScript1').innerHTML = "All page changes:</br>" + newString1;
//         break;
//         case "2":
//              var sracp = document.getElementById('showScript1').getElementsByTag Name('strong');
//              for(var i=strong.length; i-->0;){
//                 strong[i].onclick = function(){
//                     document.getElementById('showScript1') = "Test Now"
//                 };
//              }
//          break;
//         case "3":
//             document.getElementById('showScript1').innerHTML = "Replacement" + meNotes1;
//          break;
//         case "4":
//             document.getElementById('showScript1').innerHTML = "Choice 4";
//          break;
//         case "5":
//             document.getElementById('showScript1').innerHTML = "Choice 5";
//          break;
//         case "7":
//             document.getElementById('showScript1').innerHTML = "Choice 7";
//         break;
//         case "8":
//             document.getElementById('showScript1').innerHTML = "Choice 8";
//         break;
//         case "9":
//             document.getElementById('showScript1').innerHTML = "Choice 9";
//         break;
//         case "10":
//             document.getElementById('showScript1').innerHTML = "Choice 10";
//         break;
//         case "11":
//             document.getElementById('showScript1').innerHTML = "Choice 11";
//         break;
//         case "12":
//             document.getElementById('showScript1').innerHTML = "Choice 12";
//         break;
//        default:
//          // Display an error dialog.
//             document.getElementById('showScript1').innerHTML = "test";
//          break; 
//   }
    
// }//end of function


// function TypeSc(){
//     var pTNotes = document.getElementById('rodeoList').value;
//     var newString1 = pTNotes.replace('"",/showScript1/g');
//     document.getElementById('showScript1').innerHTML = "New Message:" + newString1;
// }
 
// function MiState(){
//     var mTNotes = document.getElementById('rodeo1').value;
//     // var newString2 = pTNotes.replace('"",/showScript2/g');
//     document.getElementById('showScript2').innerHTML = "New Message:" + mTNotes;
// }

//residential dropdown list for not cooling evenly
        //click other it will display hidden show in jquery function id =nceOTher
        // and input text into textbox and click add button it be add into the dropdown list
        function roomEvenly(){
            var rlist=document.getElementById("addOther").value;//textbox
            var molist = document.getElementById("addR");//dropdown List
            var option1 = document.createElement("option");//create new option
            var rmpat= /^[a-zA-Z\s]+$/;//pattern
           
            if(!rlist.match(rmpat)){
                document.getElementById('addOther').focus();
                document.getElementById("cpiMess").innerHTML="<font color = 'red'> Letters Only</font>"
                return false;
            }else if(rlist.match(rmpat)){
                document.getElementById("cpiMess").innerHTML=""
                option1.text = rlist;
                molist.options.add(option1);
                return true;
            }
        }// end of roomEvenly()

        //residential dropdown list for not heating  evenly
        //click other it will display hidden show in jquery function id =heatOther
        // and input text into textbox and click add button it be add into the dropdown list
        function hEvenly(){
            var hlist=document.getElementById("heOther").value;//textbox
            var healist = document.getElementById("HeatIssue");//dropdown List
            var option2 = document.createElement("option");//create new option
            var htpat= /^[a-zA-Z\s]+$/;//pattern
            
            if(!hlist.match(htpat)){
                document.getElementById('heOther').focus();
                document.getElementById("cpipMess").innerHTML="<font color = 'red'> Letters Only</font>"
                return false;
            }else if(hlist.match(htpat)){
                document.getElementById("cpipMess").innerHTML=""
                option2.text = hlist;
                healist.options.add(option2);
                return true;
            }

        }//end of hEvenly()
        
        //company other selection
        //click other it will display hidden show in jquery function id =compAd
        // and input text into textbox and click add button it be add into the dropdown list
        function CompanyOther(){
            var complist=document.getElementById("yanpAdd").value;//textbox
            var busnlist = document.getElementById("companyList");//dropdown List
            var option4 = document.createElement("option");//create new option
            var cpat= /^[a-zA-Z\s]+$/;//pattern

            if(!complist.match(cpat)){
                document.getElementById('yanpAdd').focus();
                document.getElementById("comAddon").innerHTML="<font color = 'red'> Letters Only</font>"
                return false;
            }else if(complist.match(cpat)){
                document.getElementById("comAddon").innerHTML=""
                option4.text = complist;
                busnlist.options.add(option4);
                return true;
            }


        }//end of CompanyOther()

        //Ladder (Package) 
        //click other it will display hidden show in jquery function id =otLadder
        // and input text into textbox and click add button it be add into the dropdown list
        function LadderSize(){
            var lsize=document.getElementById("ladSize").value;//textbox
            var ladlist = document.getElementById("ladderSeletion");//dropdown List
            var option5 = document.createElement("option");//create new option
            var lpat= /^[0-9]+$/;//pattern

            if(!lsize.match(lpat)){
                    document.getElementById('ladSize').focus();
                    document.getElementById("LadMessage").innerHTML="<font color = 'red'> Number Only</font>"
                    return false;
            }else if(lsize.match(lpat)){
                document.getElementById("LadMessage").innerHTML=""
                option5.text = lsize;
                ladlist.options.add(option5);
                return true;
            }
        }//end of LadderSize()

        //Heating Issues Residential
        //click other it will display hidden show in jquery function id =IssOther
        // and input text into textbox and click add button it be add into the dropdown list
        function HeatIssu(){
            var teaText=document.getElementById("addheaOther").value;//textbox
            var ladlist = document.getElementById("rheatissu");//dropdown List
            var option7 = document.createElement("option");//create new option
            var hpat= /^[a-zA-Z\s]+$/;//pattern

            if(!teaText.match(hpat)){
                document.getElementById('addheaOther').focus();
                document.getElementById("heaMessage").innerHTML="<font color = 'red'> Letters Only</font>"
                return false;
            }else if(teaText.match(hpat)){
                document.getElementById("heaMessage").innerHTML=""
                option7.text = teaText;
                ladlist.options.add(option7);
                return true;
            }
        }//end of HeatIssu()

        //Estimate Ceiling Height
        //click other it will display hidden show in jquery function id =IssOther
        // and input text into textbox and click add button it be add into the dropdown list
        function CeilingHeight(){
            var esticText=document.getElementById("atticInput").value;//textbox
            var ceilist = document.getElementById("atticList");//dropdown List
            var option8 = document.createElement("option");//create new option
            var ewpat= /^[0-9]+$/;//pattern

            if(!esticText.match(ewpat)){
                document.getElementById('atticInput').focus();
                document.getElementById("attticmess").innerHTML="<font color = 'red'> Numbers Only</font>"
                return false;
            }else if(esticText.match(ewpat)){
                document.getElementById("attticmess").innerHTML=""
                option8.text = esticText;
                ceilist.options.add(option8);
                return true;
            }
        }//end of CeilingHeight()

        //Estimat Ladder Height (Heating , Spilt System)
        //click other it will display hidden show in jquery function id =ELNOth
        // and input text into textbox and click add button it be add into the dropdown list
        function heatSpilt(){
            var numText=document.getElementById("olz").value;//textbox
            var hespist = document.getElementById("elnList");//dropdown List
            var option9 = document.createElement("option");//create new option
            var swpat= /^[0-9]+$/;//pattern

            if(!numText.match(swpat)){
                document.getElementById('olz').focus();
                document.getElementById("reatSPI").innerHTML="<font color = 'red'> Numbers Only</font>"
                return false;
            }else if(numText.match(swpat)){
                document.getElementById("reatSPI").innerHTML=""
                option9.text = numText;
                hespist.options.add(option9);
                return true;
            }
        }//end of heatSpilt()

        //Cooling (radio button) (Unit Concern/Problem )
        //click other it will display hidden show in jquery function id = cResIOther
        // and input text into textbox and click add button it be add into the dropdown list
        function UnitOther(){
            var coText=document.getElementById("Otherclick").value;//textbox
            var poplist = document.getElementById("ResCoolI");//dropdown List
            var option10 = document.createElement("option");//create new option
            var wpat= /^[a-zA-Z\s]+$/;//pattern

            if(!coText.match(wpat)){
                document.getElementById('Otherclick').focus();
                document.getElementById("cpMess").innerHTML="<font color = 'red'>Letters Only</font>"
                return false;
            }else if(coText.match(wpat)){
                document.getElementById("cpMess").innerHTML=""
                option10.text = coText;
                poplist.options.add(option10);
                return true;
            }
        }

        //Warranty
        //click other it will display hidden show in jquery function id = wsdOther
        // and input text into textbox and click add button it be add into the dropdown list
        function warrantyList(){
            var wText=document.getElementById("warrText").value;//textbox
            var wlist = document.getElementById("wardlist");//dropdown List
            var option11 = document.createElement("option");//create new option
            var wapat= /^[a-zA-Z\s]+$/;//pattern

            if(!wText.match(wapat)){
                document.getElementById('warrText').focus();
                document.getElementById("arrwMess").innerHTML="<font color = 'red'>Letters Only</font>"
                return false;
            }else if(wText.match(wapat)){
                document.getElementById("arrwMess").innerHTML=""
                option11.text = wText;
                wlist.options.add(option11);
                return true;
            }
        }

        //Commercial  Unit Concern/Problem:Cooling
        //click other it will display hidden show in jquery function id = cpiHidden
        // and input text into textbox and click add button it be add into the dropdown list
        function coolCommercial(){
            var ccomText=document.getElementById("cpicText").value;//textbox
            var ccomlist = document.getElementById("cpicAList");//dropdown List
            var option12 = document.createElement("option");//create new option
            var wapat= /^[a-zA-Z\s]+$/;//pattern

            if(!ccomText.match(wapat)){
                document.getElementById('cpicText').focus();
                document.getElementById("cpicMess").innerHTML="<font color = 'red'>Letters Only</font>"
                return false;
            }else if(ccomText.match(wapat)){
                document.getElementById("cpicMess").innerHTML=""
                option12.text = ccomText;
                ccomlist.options.add(option12);
                return true;
            }
        }

        //Commercial  Unit Concern/Problem:Cooling Issues--Not Cooling Evenly
        //click other it will display hidden show in jquery function id = cpiMess
        // and input text into textbox and click add button it be add into the dropdown list
        function notevevlyCCom(){
            var cpiText=document.getElementById("cpiText").value;//textbox
            var cpiList = document.getElementById("cpiDDL");//dropdown List
            var option121 = document.createElement("option");//create new option
            var nepat= /^[a-zA-Z\s]+$/;//pattern

            if(!cpiText.match(nepat)){
                document.getElementById('cpiText').focus();
                document.getElementById("cpiMess1").innerHTML="<font color = 'red'>Letters Only</font>"
                return false;
            }else if(cpiText.match(nepat)){
                document.getElementById("cpiMess1").innerHTML=""
                option121.text = cpiText;
                cpiList.options.add(option121);
                return true;
            }
        }//end of notevevlyCCom()  function
        
        //Commercial  Unit Concern/Problem:Heating Issues
        //click other it will display hidden show in jquery function id = cpihHidden
        // and input text into textbox and click add button it be add into the dropdown list
        function cpicIssues(){
            var cpihText=document.getElementById("cpihText").value;//textbox
            var cpihList = document.getElementById("cpihDDL");//dropdown List
            var option13 = document.createElement("option");//create new option
            var cpihpat= /^[a-zA-Z\s]+$/;//pattern

            if(!cpihText.match(cpihpat)){
                document.getElementById('cpihText').focus();
                document.getElementById("cpicMess1").innerHTML="<font color = 'red'>Letters Only</font>"
                return false;
            }else if(cpihText.match(cpihpat)){
                document.getElementById("cpicMess1").innerHTML=""
                option13.text = cpihText;
                cpihList.options.add(option13);
                return true;
            }
        }

        //Commercial  Unit Concern/Problem:Not Heating Evenly other
        //click other it will display hidden show in jquery function id = rsnheHidden
        // and input text into textbox and click add button it be add into the dropdown list
        function locateRoom(){
            var rsnheText=document.getElementById("rsnheInput").value;//textbox
            var rsnheList = document.getElementById("rsnheSelect");//dropdown List
            var option14 = document.createElement("option");//create new option
            var rsnhepat= /^[a-zA-Z\s]+$/;//pattern

            if(!rsnheText.match(rsnhepat)){
                document.getElementById('rsnheInput').focus();
                document.getElementById("rsnheMess").innerHTML="<font color = 'red'>Letters Only</font>"
                return false;
            }else if(rsnheText.match(rsnheText)){
                document.getElementById("rsnheMess").innerHTML=""
                option14.text = rsnheText;
                rsnheList.options.add(option14);
                return true;
            }
        }

        //Commercial  Unit Concern/Problem:Not Heating Evenly Office Other
        //click other it will display hidden show in jquery function id = OtherOffice
        // and input text into textbox and click add button it be add into the dropdown list
        function additionalLocation(){
            var officeText=document.getElementById("officeText").value;//textbox
            var officeList = document.getElementById("officeDDL");//dropdown List
            var option15 = document.createElement("option");//create new option
            var officepat= /^[a-zA-Z\s]+$/;//pattern

            if(!officeText.match(officepat)){
                document.getElementById('officeText').focus();
                document.getElementById("locationMess").innerHTML="<font color = 'red'>Letters Only</font>"
                return false;
            }else if(officeText.match(officepat)){
                document.getElementById("locationMess").innerHTML=""
                option15.text = officeText;
                officeList.options.add(option15);
                return true;
            }
        }

        function packCoLadder(){
            var cy0Text=document.getElementById("cy0Text").value;//textbox
            var cy0List = document.getElementById("cy0DDL");//dropdown List
            var option17 = document.createElement("option");//create new option
            var cy0pat= /^[0-9]+$/;//pattern

            if(!cy0Text.match(cy0pat)){
                document.getElementById('cy0Text').focus();
                document.getElementById("cy0message").innerHTML="<font color = 'red'>Number Only</font>"
                return false;
            }else if(cy0Text.match(cy0pat)){
                document.getElementById("cy0message").innerHTML=""
                option17.text = cy0Text;
                cy0List.options.add(option17);
                return true;
            }
        }

        //Commercial Ladder Size Spilt System
        //click other it will display hidden show in jquery function id = sizeHidden
        // and input text into textbox and click add button it be add into the dropdown list

        function sizeLadder(){
            var sizeText=document.getElementById("sizeText").value;//textbox
            var sizeList = document.getElementById("sizeDDL");//dropdown List
            var option18 = document.createElement("option");//create new option
            var sizepat = /^[0-9]+$/;//pattern

            if(!sizeText.match(sizepat)){
                document.getElementById('sizeText').focus();
                document.getElementById("sizeMess").innerHTML="<font color = 'red'>Letters Only</font>"
                return false;
            }else if(sizeText.match(sizepat)){
                document.getElementById("sizeMess").innerHTML=""
                option18.text = sizeText;
                sizeList.options.add(option18);
                return true;
            }
        }
        //Commercial Attic Spilt System
        //click other it will display hidden show in jquery function id = atticHidden
        // and input text into textbox and click add button it be add into the dropdown list
        function atticEntry(){
            var atticText=document.getElementById("atticText").value;//textbox
            var atticList = document.getElementById("atticDDl");//dropdown List
            var option19 = document.createElement("option");//create new option
            var atticpat = /^[a-zA-Z\s]+$/;//pattern

            if(!atticText.match(atticpat)){
                document.getElementById('atticText').focus();
                document.getElementById("atticMess").innerHTML="<font color = 'red'>Letters Only</font>"
                return false;
            }else if(atticText.match(atticpat)){
                document.getElementById("atticMess").innerHTML=""
                option19.text = atticText;
                atticList.options.add(option19);
                return true;
            }
        }

        //Commercial other  Indoor Unit Location Spilt System
        //click other it will display hidden show in jquery function id = i10Hidden
        // and input text into textbox and click add button it be add into the dropdown list
        function ulsEntry(){
            var i10Text = document.getElementById("i10Text").value;//textbox
            var i10List = document.getElementById("i10DDl");//dropdown List
            var option20 = document.createElement("option");//create new option
            var i10pat = /^[a-zA-Z\s]+$/;//pattern

            if(!i10Text.match(i10pat)){
                document.getElementById('i10Text').focus();
                document.getElementById("i10Mess").innerHTML="<font color = 'red'>Letters Only</font>"
                return false;
            }else if(i10Text.match(i10pat)){
                document.getElementById("i10Mess").innerHTML=""
                option20.text = i10Text;
                i10List.options.add(option20);
                return true;
            }
        }

        //Commercial other Ceiling Estimate other option
        //click other it will display hidden show in jquery function id = cshHidden
        // and input text into textbox and click add button it be add into the dropdown list
        function ceilingEntry(){
            var cshText = document.getElementById("cshText").value;//textbox
            var cshList = document.getElementById("cshDDl");//dropdown List
            var option21 = document.createElement("option");//create new option
            var cshpat = /^[0-9]+$/;//pattern

            if(!cshText.match(cshpat)){
                document.getElementById('cshText').focus();
                document.getElementById("cshMess").innerHTML="<font color = 'red'>Letters Only</font>"
                return false;
            }else if(cshText.match(cshpat)){
                document.getElementById("cshMess").innerHTML=""
                option21.text = cshText;
                cshList.options.add(option21);
                return true;
            }
        }



        //function for Room(s) Not Cooling Evenly Residential 
        //click the checkbox it will display value and label text box to enter temp
        function showRadio(){
        var letters = $(".coolTemp").serializeArray();
        $( "#moorCooling" ).empty();
            jQuery.each( letters, function( i, letters ) {
              $( "#moorCooling" )
              .append('<div style ="display:inline; padding:10px">'+'<label class = "question4">'+ letters.value +'&nbsp Degree Difference:</label>'+'<input type = "text" class = "span1" autocomplete = "off"/>'+'<label>deg.f</label></div>');
            });
        }
            // $( ":checkbox" ).click(showRadio );
            // $( "select" ).change( showRadio );

        //function for Room(s) Not Cooling Evenly Residential 
        //click the checkbox it will display value and label text box to enter temp
        function showRadio1(){
            var hletters = $(".heatTempR").serializeArray();
            $( "#heatEName" ).empty();
                jQuery.each( hletters, function( i, hletters ) {
                  $( "#heatEName" )
                  .append('<div style ="display:inline; padding:10px">'+'<label class = "question4">'+ hletters.value +'&nbsp Degree Difference:</label>'+'<input type = "text" class = "span1" autocomplete = "off"/>'+'<label>deg.f</label></div>');
                });
        }



$(document).ready(function(){
        (function(document) {
            'use strict';
             var TableFilter = (function(Arr) {
             var _input;

                function _onInputEvent(e) {
                    _input = e.target;
                    var tables = document.getElementsByClassName(_input.getAttribute('data-table'));
                    Arr.forEach.call(tables, function(table) {
                        Arr.forEach.call(table.tBodies, function(tbody) {
                            Arr.forEach.call(tbody.rows, _filter);
                        });
                    });
                }

                function _filter(row) {
                    var text = row.textContent.toLowerCase(), val = _input.value.toLowerCase();
                    row.style.display = text.indexOf(val) === -1 ? 'none' : 'table-row';
                }

                return {
                    init: function() {
                        var inputs = document.getElementsByClassName('table-filter');
                        Arr.forEach.call(inputs, function(input) {
                            input.oninput = _onInputEvent;
                        });
                    }
                };
            })(Array.prototype);

            document.addEventListener('readystatechange', function() {
                if (document.readyState === 'complete') {
                    TableFilter.init();
                }
            });

        })(document);    
});
