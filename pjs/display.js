
//display for asap checked box
var asp = false;
var ssp = false;
var directm =false;
var snay =  false;

$(document).ready(function(){
	$( '#zip' ).on( 'keyup', function( e ){

               var $code1 = $( this );
               var zip1 = $code1.val();
               var reqUrl = 'http://ZiptasticAPI.com/' + zip1 + '?callback=?';

               var $city1 = $( '#city' );
               var $state1 = $( '#state' );
               
            if( zip1.length > 4 && $.isNumeric( zip1 ) )
               {
                 $.getJSON( reqUrl, null, function( data ){
                   if ( data.city ) $city1.val( data.city );
                   if ( data.state ) $state1.val( data.state );

                   if ( data.error )
                   {
                     $city1.val( '' );
                     $state1.val( '' );
                   }
                 });
                   

               }
           }); 

			$( '#zip20' ).on( 'keyup', function( e ){

               var $code1 = $( this );
               var zip1 = $code1.val();
               var reqUrl = 'http://ZiptasticAPI.com/' + zip1 + '?callback=?';

               var $city1 = $( '#city20' );
               var $state1 = $( '#state20' );
               
            if( zip1.length > 4 && $.isNumeric( zip1 ) )
               {
                 $.getJSON( reqUrl, null, function( data ){
                   if ( data.city ) $city1.val( data.city );
                   if ( data.state ) $state1.val( data.state );

                   if ( data.error )
                   {
                     $city1.val( '' );
                     $state1.val( '' );
                   }
                 });
                   

               }
           });


           $( '#pmezip' ).on( 'keyup', function( e ){

               var $code1 = $( this );
               var zip1 = $code1.val();
               var reqUrl = 'http://ZiptasticAPI.com/' + zip1 + '?callback=?';

               var $city1 = $( '#pmecity' );
               var $state1 = $( 'pmestate' );
               
            if( zip1.length > 4 && $.isNumeric( zip1 ) )
               {
                 $.getJSON( reqUrl, null, function( data ){
                   if ( data.city ) $city1.val( data.city );
                   if ( data.state ) $state1.val( data.state );

                   if ( data.error )
                   {
                     $city1.val( '' );
                     $state1.val( '' );
                   }
                 });
                   

               }
           });
           //Previous Employment  

           $( '#pmezip01' ).on( 'keyup', function( e ){

               var $code1 = $( this );
               var zip1 = $code1.val();
               var reqUrl = 'http://ZiptasticAPI.com/' + zip1 + '?callback=?';

               var $city1 = $( '#pmecity01' );
               var $state1 = $( '#pmestate01' );
               
            if( zip1.length > 4 && $.isNumeric( zip1 ) )
               {
                 $.getJSON( reqUrl, null, function( data ){
                   if ( data.city ) $city1.val( data.city );
                   if ( data.state ) $state1.val( data.state );

                   if ( data.error )
                   {
                     $city1.val( '' );
                     $state1.val( '' );
                   }
                 });
                   

               }
           }); 


    //for
		//question "home type"
		//for condo
		$('#condo').click(function() {
		    if ($('#condo').is(':checked')) {
				$('#townhouse').attr('checked', false);
				$('#manu').attr('checked', false);
				$('#site').attr('checked', false);
			} else {
				$('#townhouse').attr('checked', false);
				$('#manu').attr('checked', false);
				$('#site').attr('checked', false);
			}
		});

		//for townhouse
		$('#townhouse').click(function() {
		    if ($('#townhouse').is(':checked')) {
				$('#condo').attr('checked', false);
				$('#manu').attr('checked', false);
				$('#site').attr('checked', false);
			} else {
				$('#condo').attr('checked', false);
				$('#manu').attr('checked', false);
				$('#site').attr('checked', false);
			}
		});

		//for mobile
		$('#manu').click(function() {
		    if ($('#manu').is(':checked')) {
				$('#condo').attr('checked', false);
				$('#townhouse').attr('checked', false);
				$('#site').attr('checked', false);
			} else {
				$('#condo').attr('checked', false);
				$('#townhouse').attr('checked', false);
				$('#site').attr('checked', false);
			}
		});
		//for site
		$('#site').click(function() {
		    if ($('#site').is(':checked')) {
				$('#condo').attr('checked', false);
				$('#townhouse').attr('checked', false);
				$('#manu').attr('checked', false);
				
			} else {
				$('#condo').attr('checked', false);
				$('#townhouse').attr('checked', false);
				$('#manu').attr('checked', false);
			}
		}); 

		//question--which one applies
		$('#rental').click(function() {
		    if ($('#rental').is(':checked')) {
				$('#own').attr('checked', false);
				$('#buying').attr('checked', false);
				$('#reoption').show();
				$('#oboption').hide('checked', false);
			} else {
				$('#own').attr('checked', false);
				$('#buying').attr('checked', false);
				$('#oboption').hide('checked', false);
			}
		});
		// for own
		$('#own').click(function() {
		    if ($('#own').is(':checked')) {
				$('#oboption').hide();
				$('#rental').attr('checked', false);
				$('#buying').attr('checked', false);
				$('#reoption').show();
			} else {
				$('#rental').attr('checked', false);
				$('#buying').attr('checked', false);
				$('#reoption').hide('checked', false);
			}
		});

		//for buying
		$('#buying').click(function() {
			if ($('#buying').is(':checked')) {
				$('#oboption').show();
				$('#rental').attr('checked', false);
				$('#own').attr('checked', false);
				$('#reoption').hide('checked', false);
				
			} else {
				$('#rental').attr('checked', false);
				$('#own').attr('checked', false);
				$('#reoption').hide('checked', false);
				
			}
		});

		//for checking account
			//yes
			$('#ychecking').click(function() {
			    if ($('#ychecking').is(':checked')) {
					$('#csacc').show();
					$('#nchecking').attr('checked', false);
				} else {
					$('#nchecking').attr('checked', false);
				}
			});
			//no
			$('#nchecking').click(function() {
			    if ($('#nchecking').is(':checked')) {
					$('#csacc').hide('checked', false);
					$('#ychecking').attr('checked', false);
				} else {
					$('#ychecking').attr('checked', false);
					$('#csacc').hide('checked', false);
				}
			});

			//for saving
			//yes
			$('#ysaving').click(function() {
			    if ($('#ysaving').is(':checked')) {
					$('#csacc').show();
					$('#nsaving').attr('checked', false);
				} else {
					$('#nsaving').attr('checked', false);
				}
			});
			//no
			$('#nsaving').click(function() {
			    if ($('#nsaving').is(':checked')) {
					$('#csacc').hide('checked', false);
					$('#ysaving').attr('checked', false);
				} else {
					$('#ysaving').attr('checked', false);
					$('#csacc').hide('checked', false);
				}
			});
      

}); //end of document
	


	















































 










