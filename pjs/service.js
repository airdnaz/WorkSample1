$(document).ready(function(){
            $( ":checkbox" ).click(showRadio );
            $( "select" ).change( showRadio );


            
              // $('#textNum').mask('99/99/9999');
              // $('#ccnum').mask('9999 9999 9999 9999');
              // $('#expdate').mask('99/9999');
              

              // http://stackoverflow.com/questions/21999685/jquery-masked-input-plugin-doesnt-work
              //residential package radio button show hidden div
              $('#package').click(function() {
                    if ($('#package').is(':checked')) {
                        $('#packageSel').show();
                        $('#questSpilt').show();
                        $('#spiSystemSel').hide();
                        $('#spilt').attr('checked', false);
                        $('#evpgo').attr('checked', false);
                    } else {
                       $('#spilt').attr('checked', false);
                       $('#evpgo').attr('checked', false);
                    }
                });
              //residential spilt radio button show hidden div
              $('#spilt').click(function() {
                    if ($('#spilt').is(':checked')) {
                        $('#packageSel').hide();
                        $('#spiSystemSel').show();
                        $('#questSpilt').hide();
                        $('#package').attr('checked', false);
                        $('#evpgo').attr('checked', false);
                    } else {
                       $('#package').attr('checked', false);
                       $('#evpgo').attr('checked', false);
                    }
                });
              //commercial package radio button to show hidden
              $('#cpackage').click(function() {
                    if ($('#cpackage').is(':checked')) {
                        $('#cpackageSel').show();
                        $('#entireDisplay').hide();
                        $('#comSplitRadio').hide();
                        $('#cspilt').attr('checked', false);
                     } else {
                       $('#cspilt').attr('checked', false);
                    }
                });
              //commercial split system radio button to show hidden
              $('#cspilt').click(function() {
                    if ($('#cspilt').is(':checked')) {
                        $('#cpackageSel').hide();
                        $('#entireDisplay').show();
                        $('#comSplitRadio').show();
                        $('#cpackage').attr('checked', false);
                     } else {
                       $('#cpackage').attr('checked', false);
                    }
                });
              
              //Unit Location(ground radio button)
              $('#ground').click(function() {
                    if ($('#ground').is(':checked')) {
                        $('.grounSho').hide();
                        $('.ladderSho').hide('checked', false);
                        $('#roofr').attr('checked', false);
                    } else {
                       $('#roofr').attr('checked', false);
                       $('.ladderSho').false('checked', false);
                    }
                });
              //Unit location(roof radio button)
              $('#roofr').click(function() {
                    if ($('#roofr').is(':checked')) {
                        $('.grounSho').show();
                        $('#ground').attr('checked', false);
                    } else {
                       $('#ground').attr('checked', false);
                    }
                });

              //Unit Location(ladder)it will display hidden div with ladder sizes
              $('#supLad').click(function() {
                    if ($('#supLad').is(':checked')) {
                        $('.ladderSho').show();
                        $('#perRoof').attr('checked', false);
                    } else {
                       $('#perRoof').attr('checked', false);
                    }
                });
              //Unit Location(Roof Access)
              $('#perRoof').click(function() {
                    if ($('#perRoof').is(':checked')) {
                        $('.ladderSho').hide();
                        $('#supLad').attr('checked', false);
                    } else {
                       $('#supLad').attr('checked', false);
                    }
                });
              //commerical package radio button for roof radio button
              ///roof
              $('#croofr').click(function() {
                    if ($('#croofr').is(':checked')) {
                        $('.cgrounSho').show();
                        $('#cground').attr('checked', false);//ground
                        $('#clocWall').attr('checked', false);//wall
                    } else {
                       $('#cground').attr('checked', false);//ground
                       $('#clocWall').attr('checked', false);//wall
                    }
                });
              //ground
              $('#cground').click(function() {
                    if ($('#cground').is(':checked')) {
                        $('.cgrounSho').hide();
                        $('#croofr').attr('checked', false);//roof
                        $('#clocWall').attr('checked', false);//wall
                    } else {
                       $('#croofr').attr('checked', false);//roof
                       $('#clocWall').attr('checked', false);//wall
                    }
                });
              //wall
              $('#clocWall').click(function() {
                    if ($('#clocWall').is(':checked')) {
                        $('.cgrounSho').hide();
                        $('#croofr').attr('checked', false);//roof
                        $('#cground').attr('checked', false);//ground
                    } else {
                       $('#croofr').attr('checked', false);//roof
                       $('#cground').attr('checked', false);//ground
                    }
                });


              $('#csupLad').click(function() {
                    if ($('#csupLad').is(':checked')) {
                        $('.cladderSho').show();
                        $('#cperRoof').attr('checked', false);
                    } else {
                       $('#cperRoof').attr('checked', false);
                    }
                });
              //Roof question will show when ladder is click
              $('#cperRoof').click(function() {
                    if ($('#cperRoof').is(':checked')) {
                        $('.cladderSho').hide();
                        $('#csupLad').attr('checked', false);
                    } else {
                       $('#csupLad').attr('checked', false);
                    }
                });

              //Question:Is your heat, gas or electric? for Package radio button
              //gas
              $('#gasr').click(function() {
                    if ($('#gasr').is(':checked')) {
                        $('#elegas11r').show();
                        $('#electricr').attr('checked', false);
                        $('#gaseldr').hide();
                        $('#heatr').attr('checked', false);
                    } else {
                       $('#electricr').attr('checked', false);
                       $('#gaseldr').hide();
                       $('#heatr').attr('checked', false);
                       
                    }
                });
              //electric
              $('#electricr').click(function() {
                    if ($('#electricr').is(':checked')) {
                        $('#gaseldr').show();
                        $('#elegas11r').hide();
                        $('#heatr').attr('checked', false);
                        $('#gasr').attr('checked', false);
                    } else {
                       $('#elegas11r').hide();
                       $('#heatr').attr('checked', false);
                       $('#gasr').attr('checked', false);
                    }
                });
              //heat
              $('#heatr').click(function() {
                    if ($('#heatr').is(':checked')) {
                        $('#gaseldr').hide();
                        $('#elegas11r').hide();
                        $('#gasr').attr('checked', false);
                    } else {
                        $('#elegas11r').hide();
                        $('#gaseldr').hide();
                        $('#gasr').attr('checked', false);
                    }
                });

              $('#cooling').click(function() {
                    if ($('#cooling').is(':checked')) {
                        $('.icooling').show();
                        $('.iheating').hide();
                        $('.iheating1').hide();
                        $('#heating').attr('checked', false);
                    } else {
                        $('#heating').attr('checked', false);
                    }
                });
              $('#heating').click(function() {
                    if ($('#heating').is(':checked')) {
                        $('.icooling').hide();
                        $('.iheating').show();
                        $('.iheating1').hide();
                        $('.icooling1').hide();
                        $('#cooling').attr('checked', false);
                    } else {
                        $('#cooling').attr('checked', false);
                    }
                });

            //(Commerical) if cooling is click it show this hidden div copCooling
             $('#cocooling').click(function() {
                    if ($('#cocooling').is(':checked')) {
                        $('.copCooling').show();
                        $('#cheatbut').hide();
                        $('#coheating').attr('checked', false);
                        $('#coheatCool').attr('checked', false);
                    } else {
                        $('#coheating').attr('checked', false);
                        $('#coheatCool').attr('checked', false);
                    }
                });
             //(Commerical) if heating is click it will hide and show heating option when click
             $('#coheating').click(function() {
                    if ($('#coheating').is(':checked')) {
                        $('.copCooling').hide();
                        $('#cheatbut').show();
                        $('#cnceRooms').hide();
                        $('#cocooling').attr('checked', false);
                        $('#coheatCool').attr('checked', false);
                    } else {
                        $('#cocooling').attr('checked', false);
                        $('#coheatCool').attr('checked', false);
                    }
                });

        //(Commerical Heating) room not heating start
             //(Commerical) if cooling and heat is click it will hide and show heating option when click
             $('#coheatCool').click(function() {
                    if ($('#coheatCool').is(':checked')) {
                        $('.copCooling').hide();
                        $('#cheatbut').hide();

                        $('#cocooling').attr('checked', false);
                        $('#coheating').attr('checked', false);
                    } else {
                        $('#cocooling').attr('checked', false);
                        $('#coheating').attr('checked', false);
                    }
                });
             //(Commerical) if not heating evenly is click with display room selection
              $('#cohnhe').click(function() {
                    if ($('#cohnhe').is(':checked')) {
                        $('#nceCom').show();
                        $('.cpihSelectH').hide();
                        $('#cohnh').attr('checked', false);//not heating
                        $('#cohloh').attr('checked', false);//low heating
                        $('#cohon').attr('checked', false);//noise
                        $('#cohs').attr('checked', false);//smell
                        $('#cohv').attr('checked', false);//vibration
                        $('#cohtb').attr('checked', false);//tripping beaker
                        $('#cohfreu').attr('checked', false);//freezing up
                        $('#cohwl').attr('checked', false);//water leak
                        
                    } else {
                        $('#cohnh').attr('checked', false);//not heating
                        $('#cohloh').attr('checked', false);//low heating
                        $('#cohon').attr('checked', false);//noise
                        $('#cohs').attr('checked', false);//smell
                        $('#cohv').attr('checked', false);//vibration
                        $('#cohtb').attr('checked', false);//tripping beaker
                        $('#cohfreu').attr('checked', false);//freezing up
                        $('#cohwl').attr('checked', false);//water leak
                        
                    }
                });
              //(Commerical) if not heating is click it will hide the not heating evenly hidden divs
              $('#cohnh').click(function() {
                    if ($('#cohnh').is(':checked')) {
                        $('#nceCom').hide();
                        $('.cpihSelectH').show();
                        $('#cohnhe').attr('checked', false);//not heating evenly
                        $('#cohloh').attr('checked', false);//low heating
                        $('#cohon').attr('checked', false);//noise
                        $('#cohs').attr('checked', false);//smell
                        $('#cohv').attr('checked', false);//vibration
                        $('#cohtb').attr('checked', false);//tripping beaker
                        $('#cohfreu').attr('checked', false);//freezing up
                        $('#cohwl').attr('checked', false);//water leak
                        
                    } else {
                        $('#cohnhe').attr('checked', false);//not heating evenly
                        $('#cohloh').attr('checked', false);//low heating
                        $('#cohon').attr('checked', false);//noise
                        $('#cohs').attr('checked', false);//smell
                        $('#cohv').attr('checked', false);//vibration
                        $('#cohtb').attr('checked', false);//tripping beaker
                        $('#cohfreu').attr('checked', false);//freezing up
                        $('#cohwl').attr('checked', false);//water leak
                        
                    }
                });
              //(Commerical) click low heating radio button it will hide the not heating evenly hidden divs
              $('#cohloh').click(function() {
                    if ($('#cohloh').is(':checked')) {
                        $('#nceCom').hide();
                        $('.cpihSelectH').show();
                        $('#cohnhe').attr('checked', false);//not heating evenly
                        $('#cohnh').attr('checked', false);//not heating
                        $('#cohon').attr('checked', false);//noise
                        $('#cohs').attr('checked', false);//smell
                        $('#cohv').attr('checked', false);//vibration
                        $('#cohtb').attr('checked', false);//tripping beaker
                        $('#cohfreu').attr('checked', false);//freezing up
                        $('#cohwl').attr('checked', false);//water leak
                        
                    } else {
                        $('#cohnhe').attr('checked', false);//not heating evenly
                        $('#cohnh').attr('checked', false);//not heating
                        $('#cohon').attr('checked', false);//noise
                        $('#cohs').attr('checked', false);//smell
                        $('#cohv').attr('checked', false);//vibration
                        $('#cohtb').attr('checked', false);//tripping beaker
                        $('#cohfreu').attr('checked', false);//freezing up
                        $('#cohwl').attr('checked', false);//water leak
                        
                    }
                });
              //(Commerical) click noise radio button it will hide the not heating evenly hidden divs
              $('#cohon').click(function() {
                    if ($('#cohon').is(':checked')) {
                        $('#nceCom').hide();
                        $('.cpihSelectH').show();
                        $('#cohnhe').attr('checked', false);//not heating evenly
                        $('#cohnh').attr('checked', false);//not heating
                        $('#cohloh').attr('checked', false);//low heating
                        $('#cohs').attr('checked', false);//smell
                        $('#cohv').attr('checked', false);//vibration
                        $('#cohtb').attr('checked', false);//tripping beaker
                        $('#cohfreu').attr('checked', false);//freezing up
                        $('#cohwl').attr('checked', false);//water leak
                       
                    } else {
                        $('#cohnhe').attr('checked', false);//not heating evenly
                        $('#cohnh').attr('checked', false);//not heating
                        $('#cohloh').attr('checked', false);//noise
                        $('#cohs').attr('checked', false);//smell
                        $('#cohv').attr('checked', false);//vibration
                        $('#cohtb').attr('checked', false);//tripping beaker
                        $('#cohfreu').attr('checked', false);//freezing up
                        $('#cohwl').attr('checked', false);//water leak
                        
                    }
                });
              //(Commerical) click smell radio button  it will hide the not heating evenly hidden divs
              $('#cohs').click(function() {
                    if ($('#cohs').is(':checked')) {
                        $('#nceCom').hide();
                        $('.cpihSelectH').show();
                        $('#cohnhe').attr('checked', false);//not heating evenly
                        $('#cohnh').attr('checked', false);//not heating
                        $('#cohloh').attr('checked', false);//low heating
                        $('#cohon').attr('checked', false);//noise
                        $('#cohv').attr('checked', false);//vibration
                        $('#cohtb').attr('checked', false);//tripping beaker
                        $('#cohfreu').attr('checked', false);//freezing up
                        $('#cohwl').attr('checked', false);//water leak
                        
                    } else {
                        $('#cohnhe').attr('checked', false);//not heating evenly
                        $('#cohnh').attr('checked', false);//not heating
                        $('#cohloh').attr('checked', false);//low heating
                        $('#cohon').attr('checked', false);//noise
                        $('#cohv').attr('checked', false);//vibration
                        $('#cohtb').attr('checked', false);//tripping beaker
                        $('#cohfreu').attr('checked', false);//freezing up
                        $('#cohwl').attr('checked', false);//water leak
                        
                    }
                });

              //(Commerical) click Vibration radio button  it will hide the not heating evenly hidden divs
              $('#cohv').click(function() {
                    if ($('#cohv').is(':checked')) {
                        $('#nceCom').hide();
                        $('.cpihSelectH').show();
                        $('#cohnhe').attr('checked', false);//not heating evenly
                        $('#cohnh').attr('checked', false);//not heating
                        $('#cohloh').attr('checked', false);//low heating
                        $('#cohon').attr('checked', false);//noise
                        $('#cohs').attr('checked', false);//smell
                        $('#cohtb').attr('checked', false);//tripping beaker
                        $('#cohfreu').attr('checked', false);//freezing up
                        $('#cohwl').attr('checked', false);//water leak
                    } else {
                        $('#cohnhe').attr('checked', false);//not heating evenly
                        $('#cohnh').attr('checked', false);//not heating
                        $('#cohloh').attr('checked', false);//low heating
                        $('#cohon').attr('checked', false);//noise
                        $('#cohs').attr('checked', false);//smell
                        $('#cohtb').attr('checked', false);//tripping beaker
                        $('#cohfreu').attr('checked', false);//freezing up
                        $('#cohwl').attr('checked', false);//water leak

                    }
                });
              //(Commerical) click Tripping Beaker radio button  it will hide the not heating evenly hidden divs
              $('#cohtb').click(function() {
                    if ($('#cohtb').is(':checked')) {
                        $('#nceCom').hide();
                        $('.cpihSelectH').show();
                        $('#cohnhe').attr('checked', false);//not heating evenly
                        $('#cohnh').attr('checked', false);//not heating
                        $('#cohloh').attr('checked', false);//low heating
                        $('#cohon').attr('checked', false);//noise
                        $('#cohs').attr('checked', false);//smell
                        $('#cohv').attr('checked', false);//vibration
                        $('#cohfreu').attr('checked', false);//freezing up
                        $('#cohwl').attr('checked', false);//water leak
                    } else {
                        $('#cohnhe').attr('checked', false);//not heating evenly
                        $('#cohnh').attr('checked', false);//not heating
                        $('#cohloh').attr('checked', false);//low heating
                        $('#cohon').attr('checked', false);//noise
                        $('#cohs').attr('checked', false);//smell
                        $('#cohv').attr('checked', false);//vibration
                        $('#cohfreu').attr('checked', false);//freezing up
                        $('#cohwl').attr('checked', false);//water leak

                    }
                });
            //(Commerical) click Freezing Up radio button  it will hide the not heating evenly hidden divs
              $('#cohfreu').click(function() {
                    if ($('#cohfreu').is(':checked')) {
                        $('#nceCom').hide();
                        $('.cpihSelectH').show();
                        $('#cohnhe').attr('checked', false);//not heating evenly
                        $('#cohnh').attr('checked', false);//not heating
                        $('#cohloh').attr('checked', false);//low heating
                        $('#cohon').attr('checked', false);//noise
                        $('#cohs').attr('checked', false);//smell
                        $('#cohv').attr('checked', false);//vibration
                        $('#cohtb').attr('checked', false);//tripping beaker
                        $('#cohfreu').attr('checked', false);//freezing up
                        $('#cohwl').attr('checked', false);//water leak
                    } else {
                        $('#cohnhe').attr('checked', false);//not heating evenly
                        $('#cohnh').attr('checked', false);//not heating
                        $('#cohloh').attr('checked', false);//low heating
                        $('#cohon').attr('checked', false);//noise
                        $('#cohs').attr('checked', false);//smell
                        $('#cohv').attr('checked', false);//vibration
                        $('#cohtb').attr('checked', false);//tripping beaker
                        $('#cohfreu').attr('checked', false);//freezing up
                        $('#cohwl').attr('checked', false);//water leak


                    }
                });

            //(Commerical) click Water Leak radio button  it will hide the not heating evenly hidden divs
              $('#cohwl').click(function() {
                    if ($('#cohwl').is(':checked')) {
                        $('#nceCom').hide();
                        $('.cpihSelectH').show();
                        $('#cohnhe').attr('checked', false);//not heating evenly
                        $('#cohnh').attr('checked', false);//not heating
                        $('#cohloh').attr('checked', false);//low heating
                        $('#cohon').attr('checked', false);//noise
                        $('#cohs').attr('checked', false);//smell
                        $('#cohv').attr('checked', false);//vibration
                        $('#cohtb').attr('checked', false);//tripping beaker
                        $('#cohfreu').attr('checked', false);//freezing up
                    } else {
                        $('#cohnhe').attr('checked', false);//not heating evenly
                        $('#cohnh').attr('checked', false);//not heating
                        $('#cohloh').attr('checked', false);//low heating
                        $('#cohon').attr('checked', false);//noise
                        $('#cohs').attr('checked', false);//smell
                        $('#cohv').attr('checked', false);//vibration
                        $('#cohtb').attr('checked', false);//tripping beaker
                        $('#cohfreu').attr('checked', false);//freezing up


                    }
                });
            //(Commerical Heating) room not heating end

        //(Commerical Cooling)Option to display and hide hidden div start 

            //(Commerical) if not cooling evenly is click with display room selection div
             $('#conce').click(function() {
                    if ($('#conce').is(':checked')) {
                        $('#cnceRooms').show();
                        $('#nceCom').hide();
                        $('.hideOption').hide();
                        $('#conc').attr('checked', false);//not cooling
                        $('#coloc').attr('checked', false);//low cooling
                        $('#coon').attr('checked', false);//noise
                        $('#cos').attr('checked', false);//smell
                        $('#cov').attr('checked', false);//Vibration
                        $('#cotb').attr('checked', false);//Tripping Beaker
                        $('#cofreu').attr('checked', false);//freezing up
                        $('#cowl').attr('checked', false);//water leaked 
                    } else {
                        $('#conc').attr('checked', false);//not cooling
                        $('#coloc').attr('checked', false);//low cooling
                        $('#coon').attr('checked', false);//noise 
                        $('#cos').attr('checked', false);//smell
                        $('#cov').attr('checked', false);//Vibration
                        $('#cotb').attr('checked', false);//Tripping Beaker
                        $('#cofreu').attr('checked', false);//freezing up
                        $('#cowl').attr('checked', false);//water leaked
                    }
                });
             //(Commerical) if not cooling is click with hide room selection div
             $('#conc').click(function() {
                    if ($('#conc').is(':checked')) {
                        $('#cnceRooms').hide();
                        $('#nceCom').hide();
                        $('.hideOption').show();
                        $('#conce').attr('checked', false);//not cooling
                        $('#coloc').attr('checked', false);//low cooling
                        $('#coon').attr('checked', false);//noise
                        $('#cos').attr('checked', false);//smell
                        $('#cov').attr('checked', false);//Vibration
                        $('#cotb').attr('checked', false);//Tripping Beaker
                        $('#cofreu').attr('checked', false);//freezing up
                        $('#cowl').attr('checked', false);//water leaked
                    } else {
                        $('#conce').attr('checked', false);//not cooling
                        $('#coloc').attr('checked', false);//low cooling
                        $('#coon').attr('checked', false);//noise
                        $('#cos').attr('checked', false);//smell
                        $('#cov').attr('checked', false);//Vibration
                        $('#cotb').attr('checked', false);//Tripping Beaker
                        $('#cofreu').attr('checked', false);//freezing up
                        $('#cowl').attr('checked', false);//water leaked
                    }
                });
             //(Commerical) if Low Cooling is click with hide room selection 
             $('#coloc').click(function() {
                    if ($('#coloc').is(':checked')) {
                        $('#cnceRooms').hide();
                        $('#nceCom').hide();
                         $('.hideOption').show();
                        $('#conce').attr('checked', false);//not cooling 
                        $('#conc').attr('checked', false);//not cooling evently
                        $('#coon').attr('checked', false);//noise
                        $('#cos').attr('checked', false);//smell
                        $('#cov').attr('checked', false);//Vibration
                        $('#cotb').attr('checked', false);//Tripping Beaker
                        $('#cofreu').attr('checked', false);//freezing up
                        $('#cowl').attr('checked', false);//water leaked
                    } else {
                        $('#conce').attr('checked', false);//not cooling
                        $('#conc').attr('checked', false);//not cooling evently
                        $('#coon').attr('checked', false);//noise
                        $('#cos').attr('checked', false);//smell
                        $('#cov').attr('checked', false);//Vibration
                        $('#cotb').attr('checked', false);//Tripping Beaker
                        $('#cofreu').attr('checked', false);//freezing up
                        $('#cowl').attr('checked', false);//water leaked
                    }
                });
             //(Commerical) if noise is click with hide room selection 
             $('#coon').click(function() {
                    if ($('#coon').is(':checked')) {
                        $('#cnceRooms').hide();
                        $('#nceCom').hide();
                        $('.hideOption').show();
                        $('#conce').attr('checked', false);//not cooling 
                        $('#conc').attr('checked', false);//not cooling evently
                        $('#coloc').attr('checked', false);//not cooling evently
                        $('#cos').attr('checked', false);//smell
                        $('#cov').attr('checked', false);//Vibration
                        $('#cotb').attr('checked', false);//Tripping Beaker
                        $('#cofreu').attr('checked', false);//freezing up
                        $('#cowl').attr('checked', false);//water leaked
                    } else {
                        $('#conce').attr('checked', false);//not cooling
                        $('#conc').attr('checked', false);//not cooling evently
                        $('#coloc').attr('checked', false);//not cooling evently
                        $('#cos').attr('checked', false);//smell
                        $('#cov').attr('checked', false);//Vibration
                        $('#cotb').attr('checked', false);//Tripping Beaker
                        $('#cofreu').attr('checked', false);//freezing up
                        $('#cowl').attr('checked', false);//water leaked
                    }
                });
             //(Commerical) if Smell is click with hide room selection 
             $('#cos').click(function() {
                    if ($('#cos').is(':checked')) {
                        $('#cnceRooms').hide();
                        $('#nceCom').hide();
                        $('.hideOption').show();
                        $('#conce').attr('checked', false);//not cooling 
                        $('#conc').attr('checked', false);//not cooling evently
                        $('#coloc').attr('checked', false);//not cooling evently
                        $('#coon').attr('checked', false);//noise
                        $('#cov').attr('checked', false);//Vibration
                        $('#cotb').attr('checked', false);//Tripping Beaker
                        $('#cofreu').attr('checked', false);//freezing up
                        $('#cowl').attr('checked', false);//water leaked
                    } else {
                        $('#conce').attr('checked', false);//not cooling
                        $('#conc').attr('checked', false);//not cooling evently
                        $('#coloc').attr('checked', false);//not cooling evently
                        $('#coon').attr('checked', false);//noise
                        $('#cov').attr('checked', false);//Vibration
                        $('#cotb').attr('checked', false);//Tripping Beaker
                        $('#cofreu').attr('checked', false);//freezing up
                        $('#cowl').attr('checked', false);//water leaked
                        
                    }
                });

                //(Commerical) if Vibration is click with hide room selection 
                 $('#cov').click(function() {
                        if ($('#cov').is(':checked')) {
                            $('#cnceRooms').hide();
                            $('#nceCom').hide();
                            $('.hideOption').show();
                            $('#conce').attr('checked', false);//not cooling 
                            $('#conc').attr('checked', false);//not cooling evently
                            $('#coloc').attr('checked', false);//not cooling evently
                            $('#coon').attr('checked', false);//noise
                            $('#cos').attr('checked', false);//smell
                            $('#cotb').attr('checked', false);//Tripping Beaker
                            $('#cofreu').attr('checked', false);//freezing up
                            $('#cowl').attr('checked', false);//water leaked
                        } else {
                            $('#conce').attr('checked', false);//not cooling
                            $('#conc').attr('checked', false);//not cooling evently
                            $('#coloc').attr('checked', false);//not cooling evently
                            $('#coon').attr('checked', false);//noise
                            $('#cos').attr('checked', false);//smell
                            $('#cotb').attr('checked', false);//Tripping Beaker
                            $('#cofreu').attr('checked', false);//freezing up
                            $('#cowl').attr('checked', false);//water leaked
                        }
                    });
                
                //(Commerical) if Tripping Beaker is click with hide room selection 
                 $('#cotb').click(function() {
                        if ($('#cotb').is(':checked')) {
                            $('#cnceRooms').hide();
                            $('#nceCom').hide();
                            $('.hideOption').show();
                            $('#conce').attr('checked', false);//not cooling 
                            $('#conc').attr('checked', false);//not cooling evently
                            $('#coloc').attr('checked', false);//not cooling evently
                            $('#coon').attr('checked', false);//noise
                            $('#cos').attr('checked', false);//smell
                            $('#cov').attr('checked', false);//Vibration
                            $('#cofreu').attr('checked', false);//freezing up
                            $('#cowl').attr('checked', false);//water leaked
                        } else {
                            $('#conce').attr('checked', false);//not cooling
                            $('#conc').attr('checked', false);//not cooling evently
                            $('#coloc').attr('checked', false);//not cooling evently
                            $('#coon').attr('checked', false);//noise
                            $('#cos').attr('checked', false);//smell
                            $('#cov').attr('checked', false);//Vibration
                            $('#cofreu').attr('checked', false);//freezing up
                            $('#cowl').attr('checked', false);//water leaked
                        }
                    });

                //(Commerical) if freezing up is click with hide room selection 
                 $('#cofreu').click(function() {
                        if ($('#cofreu').is(':checked')) {
                            $('#cnceRooms').hide();
                            $('#nceCom').hide();
                            $('.hideOption').show();
                            $('#conce').attr('checked', false);//not cooling 
                            $('#conc').attr('checked', false);//not cooling evently
                            $('#coloc').attr('checked', false);//not cooling evently
                            $('#coon').attr('checked', false);//noise
                            $('#cos').attr('checked', false);//smell
                            $('#cov').attr('checked', false);//Vibration
                            $('#cotb').attr('checked', false);//Tripping Beaker
                            $('#cowl').attr('checked', false);//water leaked
                        } else {
                            $('#conce').attr('checked', false);//not cooling
                            $('#conc').attr('checked', false);//not cooling evently
                            $('#coloc').attr('checked', false);//not cooling evently
                            $('#coon').attr('checked', false);//noise
                            $('#cos').attr('checked', false);//smell
                            $('#cov').attr('checked', false);//Vibration
                            $('#cotb').attr('checked', false);//Tripping Beaker
                            $('#cowl').attr('checked', false);//water leaked
                        }
                    });
                //(Commerical) if water leak is click with hide room selection 
                 $('#cowl').click(function() {
                        if ($('#cowl').is(':checked')) {
                            $('#cnceRooms').hide();
                            $('#nceCom').hide();
                            $('.hideOption').show();
                            $('#conce').attr('checked', false);//not cooling 
                            $('#conc').attr('checked', false);//not cooling evently
                            $('#coloc').attr('checked', false);//not cooling evently
                            $('#coon').attr('checked', false);//noise
                            $('#cos').attr('checked', false);//smell
                            $('#cov').attr('checked', false);//Vibration
                            $('#cotb').attr('checked', false);//Tripping Beaker
                            $('#cofreu').attr('checked', false);//freezing up
                        } else {
                            $('#conce').attr('checked', false);//not cooling
                            $('#conc').attr('checked', false);//not cooling evently
                            $('#coloc').attr('checked', false);//not cooling evently
                            $('#coon').attr('checked', false);//noise
                            $('#cos').attr('checked', false);//smell
                            $('#cov').attr('checked', false);//Vibration
                            $('#cotb').attr('checked', false);//Tripping Beaker
                            $('#cofreu').attr('checked', false);//freezing up
                        }
                    });

                //(Commerical Cooling)Option to display and hide hidden div end


                //(Residental Cooling)Option to display and hide hidden div start
                    //not cooling evening
                      $('#nce').click(function() {
                            if ($('#nce').is(':checked')) {
                                $('.icooling1').show();
                                $('#hideSelectoin').hide();hideNotes
                                $('#hideNotes').hide();
                                $('#nc').attr('checked', false);//not cooling
                                $('#lc').attr('checked', false);//low cooling
                                $('#nio').attr('checked', false);//noise
                                $('#smell').attr('checked', false);//smell
                                $('#vibe').attr('checked', false);//noise
                                $('#tb').attr('checked', false);//tripping breaker
                                $('#freu').attr('checked', false);//freezing up
                                $('#watleak').attr('checked', false);//tripping breaker
                            } else {
                                $('#nc').attr('checked', false);//not cooling
                                $('#lc').attr('checked', false);//low cooling
                                $('#nio').attr('checked', false);//noise
                                $('#smell').attr('checked', false);//smell
                                $('#vibe').attr('checked', false);//noise
                                $('#tb').attr('checked', false);//tripping breaker
                                $('#freu').attr('checked', false);//freezing up
                                $('#watleak').attr('checked', false);//tripping breaker
                            }
                        });
                //not cooling radio button if click it will hidden (.icooling1)
                    $('#nc').click(function() {
                            if ($('#nc').is(':checked')) {
                                $('.icooling1').hide();
                                $('#hideSelectoin').show();
                                $('#hideNotes').show();
                                $('#nce').attr('checked', false);//not cooling evenly
                                $('#lc').attr('checked', false);//low cooling\
                                $('#nio').attr('checked', false);//noise
                                $('#smell').attr('checked', false);//smell
                                $('#vibe').attr('checked', false);//noise
                                $('#tb').attr('checked', false);//tripping breaker
                                $('#freu').attr('checked', false);//freezing up
                                $('#watleak').attr('checked', false);//tripping breaker
                            } else {
                                $('#nce').attr('checked', false);//not cooling evenly
                                $('#lc').attr('checked', false);//low cooling
                                $('#nio').attr('checked', false);//noise
                                $('#smell').attr('checked', false);//smell
                                $('#vibe').attr('checked', false);//noise
                                $('#tb').attr('checked', false);//tripping breaker
                                $('#freu').attr('checked', false);//freezing up
                                $('#watleak').attr('checked', false);//tripping breaker
                                
                            }
                        });
                    //low cooling radio button if click it will hidden (.icooling1)
                    $('#lc').click(function() {
                            if ($('#lc').is(':checked')) {
                                $('.icooling1').hide();
                                $('#hideSelectoin').show();
                                $('#hideNotes').show();
                                $('#nce').attr('checked', false);//not cooling evenly
                                $('#nc').attr('checked', false);//not cooling
                                $('#nio').attr('checked', false);//noise
                                $('#smell').attr('checked', false);//smell
                                $('#vibe').attr('checked', false);//noise
                                $('#tb').attr('checked', false);//tripping breaker
                                $('#freu').attr('checked', false);//freezing up
                                $('#watleak').attr('checked', false);//tripping breaker 
                                
                            } else {
                                $('#nce').attr('checked', false);//not cooling evenly
                                $('#nc').attr('checked', false);//not cooling
                                $('#nio').attr('checked', false);//noise
                                $('#smell').attr('checked', false);//smell
                                $('#vibe').attr('checked', false);//noise
                                $('#tb').attr('checked', false);//tripping breaker
                                $('#freu').attr('checked', false);//freezing up
                                $('#watleak').attr('checked', false);//tripping breaker
                                
                            }
                        });
                    //noise radio button if click it will hidden (.icooling1)
                    $('#nio').click(function() {
                            if ($('#nio').is(':checked')) {
                                $('.icooling1').hide();
                                $('#hideSelectoin').show();
                                $('#hideNotes').show();
                                $('#nce').attr('checked', false);//not cooling evenly
                                $('#nc').attr('checked', false);//not cooling
                                $('#lc').attr('checked', false);//low cooling
                                $('#smell').attr('checked', false);//smell
                                $('#vibe').attr('checked', false);//noise
                                $('#tb').attr('checked', false);//tripping breaker
                                $('#freu').attr('checked', false);//freezing up
                                $('#watleak').attr('checked', false);//tripping breaker
                            } else {
                                $('#nce').attr('checked', false);//not cooling evenly
                                $('#nc').attr('checked', false);//not cooling
                                $('#lc').attr('checked', false);//low cooling
                                $('#smell').attr('checked', false);//smell
                                $('#vibe').attr('checked', false);//noise
                                $('#tb').attr('checked', false);//tripping breaker
                                $('#freu').attr('checked', false);//freezing up
                                $('#watleak').attr('checked', false);//tripping breaker
                                
                            }
                        });
                    //smell radio button if click it will hidden (.icooling1)
                    $('#smell').click(function() {
                            if ($('#smell').is(':checked')) {
                                $('.icooling1').hide();
                                $('#hideSelectoin').show();
                                $('#hideNotes').show();
                                $('#nce').attr('checked', false);//not cooling evenly
                                $('#nc').attr('checked', false);//not cooling
                                $('#lc').attr('checked', false);//low cooling
                                $('#nio').attr('checked', false);//noise
                                $('#vibe').attr('checked', false);//noise
                                $('#tb').attr('checked', false);//tripping breaker
                                $('#freu').attr('checked', false);//freezing up
                                $('#watleak').attr('checked', false);//tripping breaker
                            } else {
                                $('#nce').attr('checked', false);//not cooling evenly
                                $('#nc').attr('checked', false);//not cooling
                                $('#lc').attr('checked', false);//low cooling
                                $('#nio').attr('checked', false);//noise
                                $('#vibe').attr('checked', false);//noise
                                $('#tb').attr('checked', false);//tripping breaker
                                $('#freu').attr('checked', false);//freezing up
                                $('#watleak').attr('checked', false);//tripping breaker
                            }
                        });

                    //vibration radio button if click it will hidden (.icooling1)
                    $('#vibe').click(function() {
                            if ($('#vibe').is(':checked')) {
                                $('.icooling1').hide();
                                $('#hideSelectoin').show();
                                $('#hideNotes').show();
                                $('#nce').attr('checked', false);//not cooling evenly
                                $('#nc').attr('checked', false);//not cooling
                                $('#lc').attr('checked', false);//low cooling
                                $('#nio').attr('checked', false);//noise
                                $('#smell').attr('checked', false);//smell
                                $('#tb').attr('checked', false);//tripping breaker
                                $('#freu').attr('checked', false);//freezing up
                                $('#watleak').attr('checked', false);//tripping breaker
                            } else {
                                $('#nce').attr('checked', false);//not cooling evenly
                                $('#nc').attr('checked', false);//not cooling
                                $('#lc').attr('checked', false);//low cooling
                                $('#nio').attr('checked', false);//noise
                                $('#smell').attr('checked', false);//smell
                                $('#tb').attr('checked', false);//tripping breaker
                                $('#freu').attr('checked', false);//freezing up
                                $('#watleak').attr('checked', false);//tripping breaker
                                
                            }
                        });
                    //tripping breaker radio button if click it will hidden (.icooling1)
                    $('#tb').click(function() {
                            if ($('#tb').is(':checked')) {
                                $('.icooling1').hide();
                                $('#hideSelectoin').show();
                                $('#hideNotes').show();
                                $('#nce').attr('checked', false);//not cooling evenly
                                $('#nc').attr('checked', false);//not cooling
                                $('#lc').attr('checked', false);//low cooling
                                $('#nio').attr('checked', false);//noise
                                $('#smell').attr('checked', false);//smell
                                $('#vibe').attr('checked', false);//vibration
                                $('#freu').attr('checked', false);//freezing up
                                $('#watleak').attr('checked', false);//tripping breaker
                            } else {
                                $('#nce').attr('checked', false);//not cooling evenly
                                $('#nc').attr('checked', false);//not cooling
                                $('#lc').attr('checked', false);//low cooling
                                $('#nio').attr('checked', false);//noise
                                $('#smell').attr('checked', false);//smell
                                $('#vibe').attr('checked', false);//vibration
                                $('#freu').attr('checked', false);//freezing up
                                $('#watleak').attr('checked', false);//tripping breaker
                                
                            }
                        });
                    //freezing up radio button if click it will hidden (.icooling1)
                    $('#freu').click(function() {
                            if ($('#freu').is(':checked')) {
                                $('.icooling1').hide();
                                $('#hideSelectoin').show();
                                $('#hideNotes').show();
                                $('#nce').attr('checked', false);//not cooling evenly
                                $('#nc').attr('checked', false);//not cooling
                                $('#lc').attr('checked', false);//low cooling
                                $('#nio').attr('checked', false);//noise
                                $('#smell').attr('checked', false);//smell
                                $('#vibe').attr('checked', false);//vibration
                                $('#tb').attr('checked', false);//tripping breaker
                                $('#watleak').attr('checked', false);//tripping breaker
                            } else {
                                $('#nce').attr('checked', false);//not cooling evenly
                                $('#nc').attr('checked', false);//not coolingnoh
                                $('#lc').attr('checked', false);//low cooling
                                $('#nio').attr('checked', false);//noise
                                $('#smell').attr('checked', false);//smell
                                $('#vibe').attr('checked', false);//vibration
                                $('#tb').attr('checked', false);//tripping breaker
                                $('#watleak').attr('checked', false);//tripping breaker
                            }
                        });
                    //water leak radio button if click it will hidden (.icooling1)
                    $('#watleak').click(function() {
                            if ($('#watleak').is(':checked')) {
                                $('.icooling1').hide();
                                $('#hideSelectoin').show();
                                $('#hideNotes').show();
                                $('#nce').attr('checked', false);//not cooling evenly
                                $('#nc').attr('checked', false);//not cooling
                                $('#lc').attr('checked', false);//low cooling
                                $('#nio').attr('checked', false);//noise
                                $('#smell').attr('checked', false);//smellnoh
                                $('#vibe').attr('checked', false);//vibration
                                $('#tb').attr('checked', false);//tripping breaker
                                $('#freu').attr('checked', false);//freezing up

                            } else {
                                $('#nce').attr('checked', false);//not cooling evenly
                                $('#nc').attr('checked', false);//not cooling
                                $('#lc').attr('checked', false);//low cooling
                                $('#nio').attr('checked', false);//noise
                                $('#smell').attr('checked', false);//smell
                                $('#vibe').attr('checked', false);//vibration
                                $('#tb').attr('checked', false);//tripping breaker
                                $('#freu').attr('checked', false);//freezing up

                            }
                        });
                //(Residental Cooling)Option to display and hide hidden div end

                //(Residental Heating)Option to display and hide hidden div start
                    //not heating evenly
                    $('#nhe').click(function() {
                            if ($('#nhe').is(':checked')) {
                                $('.iheating1').show();rheatissue
                                $('#rheatissue').hide();
                                $('#rheatissue1').hide();
                                $('#nh').attr('checked', false);//not heating
                                $('#lh').attr('checked', false);//low heat
                                $('#noh').attr('checked', false);//noise
                                $('#sh').attr('checked', false);//smell
                                $('#vh').attr('checked', false);//vibration
                                $('#cotbh').attr('checked', false);//tripping breaker
                                $('#wlh').attr('checked', false);//water leak
                            } else {
                                 $('#nh').attr('checked', false);//not heating
                                 $('#lh').attr('checked', false);//low heat
                                 $('#noh').attr('checked', false);//noise
                                 $('#sh').attr('checked', false);//smell
                                 $('#vh').attr('checked', false);//vibration
                                 $('#cotbh').attr('checked', false);//tripping breaker
                                 $('#wlh').attr('checked', false);//water leak
                                        
                            }
                        });
                    //not heating(residental)
                    $('#nh').click(function() {
                            if ($('#nh').is(':checked')) {
                                $('.iheating1').hide();
                                $('#rheatissue').show();
                                $('#rheatissue1').show();
                                $('#nhe').attr('checked', false);//not heating evenly
                                $('#lh').attr('checked', false);//low heat
                                $('#noh').attr('checked', false);//noise
                                $('#sh').attr('checked', false);//smell
                                $('#vh').attr('checked', false);//vibration
                                $('#cotbh').attr('checked', false);//tripping breaker
                                $('#wlh').attr('checked', false);//water leak
                            } else {
                                 $('#nhe').attr('checked', false);//not heating evenly
                                 $('#lh').attr('checked', false);//low heat
                                 $('#noh').attr('checked', false);//noise
                                 $('#sh').attr('checked', false);//smell
                                 $('#vh').attr('checked', false);//vibration
                                 $('#cotbh').attr('checked', false);//tripping breaker
                                 $('#wlh').attr('checked', false);//water leak
                            }
                    });
                    //low heating heating(residental)
                    $('#lh').click(function() {
                            if ($('#lh').is(':checked')) {
                                $('.iheating1').hide();
                                $('#rheatissue').show();
                                $('#rheatissue1').show();
                                $('#nhe').attr('checked', false);//not heating evenly
                                $('#nh').attr('checked', false);//not heating 
                                $('#noh').attr('checked', false);//noise
                                $('#sh').attr('checked', false);//smell
                                $('#vh').attr('checked', false);//vibration
                                $('#cotbh').attr('checked', false);//tripping breaker
                                $('#wlh').attr('checked', false);//water leak
                            } else {
                                 $('#nhe').attr('checked', false);//not heating evenly
                                 $('#nh').attr('checked', false);//not heating 
                                 $('#noh').attr('checked', false);//noise
                                 $('#sh').attr('checked', false);//smell
                                 $('#vh').attr('checked', false);//vibration
                                 $('#cotbh').attr('checked', false);//tripping breaker
                                 $('#wlh').attr('checked', false);//water leak 
                            }
                    });
                    // noise-- heating(residental)
                    $('#noh').click(function() {
                            if ($('#noh').is(':checked')) {
                                $('.iheating1').hide();
                                $('#rheatissue').show();
                                $('#rheatissue1').show();
                                $('#nhe').attr('checked', false);//not heating evenly
                                $('#nh').attr('checked', false);//not heating 
                                $('#lh').attr('checked', false);//low heat
                                $('#sh').attr('checked', false);//smell
                                $('#vh').attr('checked', false);//vibration
                                $('#cotbh').attr('checked', false);//tripping breaker
                                $('#wlh').attr('checked', false);//water leak
                            } else {
                                 $('#nhe').attr('checked', false);//not heating evenly
                                 $('#nh').attr('checked', false);//not heating
                                 $('#lh').attr('checked', false);//low heat
                                 $('#sh').attr('checked', false);//smell
                                 $('#vh').attr('checked', false);//vibration
                                 $('#cotbh').attr('checked', false);//tripping breaker
                                 $('#wlh').attr('checked', false);//water leak
                            }
                    });
                    // smell-- heating(residental)
                    $('#sh').click(function() {
                            if ($('#sh').is(':checked')) {
                                $('.iheating1').hide();
                                $('#rheatissue').show();
                                $('#rheatissue1').show();
                                $('#nhe').attr('checked', false);//not heating evenly
                                $('#nh').attr('checked', false);//not heating 
                                $('#lh').attr('checked', false);//low heat
                                $('#noh').attr('checked', false);//noise
                                $('#vh').attr('checked', false);//vibration
                                $('#cotbh').attr('checked', false);//tripping breaker
                                $('#wlh').attr('checked', false);//water leak
                            } else {
                                 $('#nhe').attr('checked', false);//not heating evenly
                                 $('#nh').attr('checked', false);//not heating
                                 $('#lh').attr('checked', false);//low heat
                                 $('#noh').attr('checked', false);//noise
                                 $('#vh').attr('checked', false);//vibration
                                 $('#cotbh').attr('checked', false);//tripping breaker
                                 $('#wlh').attr('checked', false);//water leak
                            }
                    });
                    // vibration-- heating(residental)
                    $('#vh').click(function() {
                            if ($('#vh').is(':checked')) {
                                $('.iheating1').hide();
                                $('#rheatissue').show();
                                $('#rheatissue1').show();
                                $('#nhe').attr('checked', false);//not heating evenly
                                $('#nh').attr('checked', false);//not heating 
                                $('#lh').attr('checked', false);//low heat
                                $('#noh').attr('checked', false);//noise
                                $('#sh').attr('checked', false);//smell
                                $('#cotbh').attr('checked', false);//tripping breaker
                                $('#wlh').attr('checked', false);//water leak
                            } else {
                                 $('#nhe').attr('checked', false);//not heating evenly
                                 $('#nh').attr('checked', false);//not heating
                                 $('#lh').attr('checked', false);//low heat
                                 $('#noh').attr('checked', false);//noise
                                 $('#sh').attr('checked', false);//smell
                                 $('#cotbh').attr('checked', false);//tripping breaker
                                 $('#wlh').attr('checked', false);//water leak
                            }
                    });
                    // tripping breaker-- heating(residental)
                    $('#cotbh').click(function() {
                            if ($('#cotbh').is(':checked')) {
                                $('.iheating1').hide();
                                $('#rheatissue').show();
                                $('#rheatissue1').show();
                                $('#nhe').attr('checked', false);//not heating evenly
                                $('#nh').attr('checked', false);//not heating 
                                $('#lh').attr('checked', false);//low heat
                                $('#noh').attr('checked', false);//noise
                                $('#sh').attr('checked', false);//smell
                                $('#vh').attr('checked', false);//vibration
                                $('#wlh').attr('checked', false);//water leak
                            } else {
                                 $('#nhe').attr('checked', false);//not heating evenly
                                 $('#nh').attr('checked', false);//not heating
                                 $('#lh').attr('checked', false);//low heat
                                 $('#noh').attr('checked', false);//noise
                                 $('#sh').attr('checked', false);//smell
                                 $('#vh').attr('checked', false);//vibration
                                 $('#wlh').attr('checked', false);//water leak
                            }
                    });
                    // water leak-- heating(residental)
                    $('#wlh').click(function() {
                            if ($('#wlh').is(':checked')) {
                                $('.iheating1').hide();
                                $('#rheatissue').show();
                                $('#rheatissue1').show();
                                $('#nhe').attr('checked', false);//not heating evenly
                                $('#nh').attr('checked', false);//not heating 
                                $('#lh').attr('checked', false);//low heat
                                $('#noh').attr('checked', false);//noise
                                $('#sh').attr('checked', false);//smell
                                $('#vh').attr('checked', false);//vibration
                                $('#cotbh').attr('checked', false);//tripping breaker
                            } else {
                                 $('#nhe').attr('checked', false);//not heating evenly
                                 $('#nh').attr('checked', false);//not heating
                                 $('#lh').attr('checked', false);//low heat
                                 $('#noh').attr('checked', false);//noise
                                 $('#sh').attr('checked', false);//smell
                                 $('#vh').attr('checked', false);//vibration
                                 $('#cotbh').attr('checked', false);//tripping breaker
                            }
                    });




                //(Residental Heating)Option to display and hide hidden div end

                //(Residental)Unit Served radio button to show and hide div cfFloor
                //if entire radio is click will hide  id = "entireDisplay"
                $('#centire').click(function() {
                    if ($('#centire').is(':checked')) {
                        $('#entireDisplay').hide();
                        $('#cfFloor').attr('checked', false);//first floor residential
                        $('#csFloor').attr('checked', false);//second floor
                        $('#ctFloor').attr('checked', false);//third floor residential
                        $('#cbedroom').attr('checked', false);//bedroom residential
                        $('#cLivingRom').attr('checked', false);//third floor residential
                    } else {
                        $('#cfFloor').attr('checked', false);//first floor residential
                        $('#csFloor').attr('checked', false);//second floor
                        $('#ctFloor').attr('checked', false);//third floor residential
                        $('#cbedroom').attr('checked', false);//bedroom residential
                        $('#cLivingRom').attr('checked', false);//third floor residential
                    }
                });

                //first floor
                $('#cfFloor').click(function() {
                    if ($('#cfFloor').is(':checked')) {
                        $('#entireDisplay').show();
                        $('#centire').attr('checked', false);//Entire House
                        $('#csFloor').attr('checked', false);//second floor
                        $('#ctFloor').attr('checked', false);//third floor residential
                        $('#cbedroom').attr('checked', false);//bedroom residential
                        $('#cLivingRom').attr('checked', false);//third floor residential
                        
                    } else {
                        $('#centire').attr('checked', false);//Entire House
                        $('#csFloor').attr('checked', false);//second floor
                        $('#ctFloor').attr('checked', false);//third floor residential
                        $('#cbedroom').attr('checked', false);//bedroom residential
                        $('#cLivingRom').attr('checked', false);//third floor residential
                        
                    }
                });
                //second floor(residential)
                $('#csFloor').click(function() {
                    if ($('#csFloor').is(':checked')) {
                        $('#entireDisplay').show();
                        $('#centire').attr('checked', false);//Entire House
                        $('#cfFloor').attr('checked', false);//first floor residential
                        $('#ctFloor').attr('checked', false);//third floor residential
                        $('#cbedroom').attr('checked', false);//bedroom residential
                        $('#cLivingRom').attr('checked', false);//third floor residential
                    } else {
                        $('#centire').attr('checked', false);//Entire House
                        $('#cfFloor').attr('checked', false);//first floor residential
                        $('#ctFloor').attr('checked', false);//third floor residential
                        $('#cbedroom').attr('checked', false);//bedroom residential
                        $('#cLivingRom').attr('checked', false);//third floor residential

                    }
                });
                //third floor(residential)
                $('#ctFloor').click(function() {
                    if ($('#ctFloor').is(':checked')) {
                        $('#entireDisplay').show();
                        $('#centire').attr('checked', false);//Entire House
                        $('#cfFloor').attr('checked', false);//first floor residential
                        $('#csFloor').attr('checked', false);//second floor residential
                        $('#cbedroom').attr('checked', false);//bedroom residential
                        $('#cLivingRom').attr('checked', false);//third floor residential
                    } else {
                        $('#centire').attr('checked', false);//Entire House
                        $('#cfFloor').attr('checked', false);//first floor residential
                        $('#csFloor').attr('checked', false);//second floor residential
                        $('#cbedroom').attr('checked', false);//bedroom residential
                        $('#cLivingRom').attr('checked', false);//third floor residential
                    }
                });
                //bedroom(residential)
                $('#cbedroom').click(function() {
                    if ($('#cbedroom').is(':checked')) {
                        $('#entireDisplay').show();
                        $('#centire').attr('checked', false);//Entire House
                        $('#cfFloor').attr('checked', false);//first floor residential
                        $('#csFloor').attr('checked', false);//second floor residential
                        $('#ctFloor').attr('checked', false);//third floor residential
                        $('#cLivingRom').attr('checked', false);//third floor residential
                    } else {
                        $('#centire').attr('checked', false);//Entire House
                        $('#cfFloor').attr('checked', false);//first floor residential
                        $('#csFloor').attr('checked', false);//second floor residential
                        $('#ctFloor').attr('checked', false);//third floor residential
                        $('#cLivingRom').attr('checked', false);//third floor residential
                    }
                });
                //living Room(residential)
                $('#cLivingRom').click(function() {
                    if ($('#cLivingRom').is(':checked')) {
                        $('#entireDisplay').show();
                        $('#centire').attr('checked', false);//Entire House
                        $('#cfFloor').attr('checked', false);//first floor residential
                        $('#csFloor').attr('checked', false);//second floor residential
                        $('#ctFloor').attr('checked', false);//third floor residential
                        $('#cbedroom').attr('checked', false);//bedroom residential
                    } else {
                        $('#centire').attr('checked', false);//Entire House
                        $('#cfFloor').attr('checked', false);//first floor residential
                        $('#csFloor').attr('checked', false);//second floor residential
                        $('#ctFloor').attr('checked', false);//third floor residential
                        $('#cbedroom').attr('checked', false);//bedroom residential
                    }
                });

                
                $('#hpyes').click(function() {
                    if ($('#hpyes').is(':checked')) {
                        $('#yeshp').show();
                        $('#nohp').hide();
                        $('#hpno').attr('checked', false);//no
                    } else {
                        $('#hpno').attr('checked', false);//no
                        
                    }
                });
                $('#hpno').click(function() {
                    if ($('#hpno').is(':checked')) {
                        $('#yeshp').hide();
                        $('#nohp').show();
                        $('#hpyes').attr('checked', false);//yes
                    } else {
                        $('#hpyes').attr('checked', false);//yes
                        
                    }
                });
                //gas radio button for spilt system if click will display hidden div guestion
                $('#gasrspi').click(function() {
                    if ($('#gasrspi').is(':checked')) {
                        $('#gasSpBut').show();
                        $('#splitHeatbutton').hide();
                        $('#heatrspi').attr('checked', false);//heat spilt system
                        $('#electricrspi').attr('checked', false);//electric  spilt system
                    } else {
                        $('#heatrspi').attr('checked', false);//heat spilt system
                        $('#electricrspi').attr('checked', false);//electric  spilt system
                        
                    }
                });
                //electric and heat radio button for spilt system if click will display hidden div guestion
                $('#heatrspi').click(function() {
                    if ($('#heatrspi').is(':checked')) {
                        $('#splitHeatbutton').show();
                        $('#gasSpBut').hide();
                        $('#gasrspi').attr('checked', false);//electric and heating spilt system
                        $('#electricrspi').attr('checked', false);//electric spilt system
                    } else {
                        $('#gasrspi').attr('checked', false);//electric and heating spilt system
                        $('#electricrspi').attr('checked', false);//electric  spilt system
                    }
                });
                $('#electricrspi').click(function() {
                    if ($('#electricrspi').is(':checked')) {
                        $('#splitHeatbutton').show();
                        $('#gasSpBut').hide();
                        $('#gasrspi').attr('checked', false);//gas spilt system
                        $('#heatrspi').attr('checked', false);//heat spilt system
                    } else {
                        $('#gasrspi').attr('checked', false);//gas spilt system
                        $('#heatrspi').attr('checked', false);//heat spilt system
                    }
                });
                //electric and heat radio button for spilt system if click will display hidden div guestion
                $('#heleyes').click(function() {
                    if ($('#heleyes').is(':checked')) {
                        $('#yeshep').show();
                        $('#nohep').hide();
                        $('#heleno').attr('checked', false);//electric and heating spilt system
                    } else {
                        $('#heleno').attr('checked', false);//electric and heating spilt system
                    }
                });
                //no to show question 
                $('#heleno').click(function() {
                    if ($('#heleno').is(':checked')) {
                        $('#yeshep').hide();
                        $('#nohep').show();
                        $('#heleyes').attr('checked', false);//electric and heating spilt system
                    } else {
                        $('#heleyes').attr('checked', false);//electric and heating spilt system
                    }
                });

                //roof access for split system
                $('#roofilt').click(function() {
                    if ($('#roofilt').is(':checked')) {
                        $('#outdSplit').show();
                        $('#grouilt').attr('checked', false);//electric and heating spilt system
                    } else {
                        $('#grouilt').attr('checked', false);//electric and heating spilt system
                    }
                });
                //ground access for split system
                $('#grouilt').click(function() {
                    if ($('#grouilt').is(':checked')) {
                        $('#outdSplit').hide();
                        $('#roofilt').attr('checked', false);//electric and heating spilt system
                    } else {
                        $('#roofilt').attr('checked', false);//electric and heating spilt system
                    }
                });
                //ladder access size for split system
                $('#lSpilt').click(function() {
                    if ($('#lSpilt').is(':checked')) {
                        $('#AccessLad').show();
                        $('#prfSpilt').attr('checked', false);
                    } else {
                        $('#prfSpilt').attr('checked', false);
                    }
                });

                //Indoor radio button start for split unit
                //attic radio button display hidden div
                $('#iduatti').click(function() {
                    if ($('#iduatti').is(':checked')) {
                        $('#inatticDiv').show();
                        $('#iduclos').attr('checked', false);
                    } else {
                        $('#iduclos').attr('checked', false);
                    }
                });
                //closet
                $('#iduclos').click(function() {
                    if ($('#iduclos').is(':checked')) {
                        $('#inatticDiv').hide();
                        $('#iduatti').attr('checked', false);
                    } else {
                        $('#iduatti').attr('checked', false);
                    }
                });

                //Indoor radio button start for end unit
                //commerical spilt system Heat
                $('#cospiheat').click(function() {
                    if ($('#cospiheat').is(':checked')) {
                        $('#spihhe').hide();
                        $('#spnpC').hide();
                        $('#heelComOption').show();
                        $('#cospigasr1').hide();
                        $('#cospigasr1').hide();
                        $('#cospigasr').attr('checked', false);
                    } else {
                        $('#cospigasr').attr('checked', false);
                    }
                });
                //commerical spilt system Gas
                $('#cospigasr').click(function() {
                    if ($('#cospigasr').is(':checked')) {
                        $('#spihhe').show();
                        $('#cospigasr1').show();
                        $('#cospigasr1').show();
                        $('#spheeleCom').hide();
                         $('#heelComOption').hide();
                        $('#cospiheat').attr('checked', false);
                    } else {
                        $('#cospiheat').attr('checked', false);
                    }
                });
                //commerical spilt system Roof
                $('#spiroofrcp').click(function() {
                    if ($('#spiroofrcp').is(':checked')) {
                        $('#cospiacro').show();
                        $('#spigroundcp').attr('checked', false);
                        $('#spilocWallcp').attr('checked', false);
                    } else {
                        $('#spigroundcp').attr('checked', false);
                        $('#spilocWallcp').attr('checked', false);
                    }
                });
                //commerical spilt system ground
                $('#spigroundcp').click(function() {
                    if ($('#spigroundcp').is(':checked')) {
                        $('#cospiacro').hide();
                        $('#spiroofrcp').attr('checked', false);//roof
                        $('#spilocWallcp').attr('checked', false);//wall
                    } else {
                        $('#spiroofrcp').attr('checked', false);//roof
                        $('#spilocWallcp').attr('checked', false);//wall
                    }
                });
                //commerical spilt system wall
                $('#spilocWallcp').click(function() {
                    if ($('#spilocWallcp').is(':checked')) {
                        $('#cospiacro').hide();
                        $('#spiroofrcp').attr('checked', false);//roof
                        $('#spigroundcp').attr('checked', false);//ground
                    } else {
                        $('#spiroofrcp').attr('checked', false);//roof
                        $('#spigroundcp').attr('checked', false);//ground
                    }
                });
                //commerical Roof ladder
                $('#cspisupLad').click(function() {
                    if ($('#cspisupLad').is(':checked')) {
                        $('#spiLadder').show();
                        $('#cspiperRoo').attr('checked', false);//Permanete roof
                    } else {
                        $('#cspiperRoo').attr('checked', false);//Permanete roof
                    }
                });
                //commerical Roof ladder
                $('#cspiperRoo').click(function() {
                    if ($('#cspiperRoo').is(':checked')) {
                        $('#spiLadder').hide();
                        $('#cspisupLad').attr('checked', false);//Ladder Roof
                    } else {
                        $('#cspisupLad').attr('checked', false);//Ladder Roof
                    }
                });
                //commerical "Question:Is indoor and outdoor unit approximate same age"
                $('#noComsp').click(function() {
                    if ($('#noComsp').is(':checked')) {
                        $('#spnoC').show();
                        $('#spyesC').hide();
                        $('#yesComsp').attr('checked', false);//yes
                    } else {
                        $('#yesComsp').attr('checked', false);//yes
                    }
                });
                //commerical "Question:Is indoor and outdoor unit approximate same age"
                $('#yesComsp').click(function() {
                    if ($('#yesComsp').is(':checked')) {
                        $('#spnoC').hide();
                        $('#spyesC').show();
                        $('#noComsp').attr('checked', false);//yes
                    } else {
                        $('#noComsp').attr('checked', false);//yes
                    }
                });
                $('#yesCHEsp').click(function() {
                    if ($('#yesCHEsp').is(':checked')) {
                       $('#CHEyessp').show();
                       $('#spheeleCom').hide();
                       $('#noCHEsp').attr('checked', false);//no
                    } else {
                        $('#noCHEsp').attr('checked', false);//no
                    }
                });
                $('#noCHEsp').click(function() {
                    if ($('#noCHEsp').is(':checked')) {
                        $('#CHEyessp').hide();
                        $('#spheeleCom').show();
                        $('#yesCHEsp').attr('checked', false);
                    } else {
                        $('#yesCHEsp').attr('checked', false);
                    }
                });
                //commerical heat roof  spilt union
                $('#spiroofheel').click(function() {
                    if ($('#spiroofheel').is(':checked')) {
                        $('#roHeel').show();
                        $('#spigroundheel').attr('checked', false);//ground
                        $('#spilocWallheel').attr('checked', false);//wall
                    } else {
                        $('#spigroundheel').attr('checked', false);//ground
                        $('#spilocWallheel').attr('checked', false);//wall
                    }
                });
                //commerical heat ground  spilt union
                $('#spigroundheel').click(function() {
                    if ($('#spigroundheel').is(':checked')) {
                        $('#roHeel').hide();
                        $('#spiroofheel').attr('checked', false);//roof
                        $('#spilocWallheel').attr('checked', false);//wall
                    } else {
                        $('#spiroofheel').attr('checked', false);//roof
                        $('#spilocWallheel').attr('checked', false);//wall
                    }
                });
                //commerical heat ground  spilt union
                $('#spilocWallheel').click(function() {
                    if ($('#spilocWallheel').is(':checked')) {
                        $('#roHeel').hide();
                        $('#spiroofheel').attr('checked', false);//roof
                        $('#spigroundheel').attr('checked', false);//ground
                    } else {
                        $('#spiroofheel').attr('checked', false);//roof
                        $('#spigroundheel').attr('checked', false);//ground
                    }
                });
                $('#heelspisupLad').click(function() {
                    if ($('#heelspisupLad').is(':checked')) {
                        $('#suHeel').show();
                        $('#heelpiperRoof').attr('checked', false);
                    } else {
                       $('#heelpiperRoof').attr('checked', false);
                    }
                });
                $('#heelpiperRoof').click(function() {
                    if ($('#heelpiperRoof').is(':checked')) {
                        $('#suHeel').hide();
                        $('#heelspisupLad').attr('checked', false);
                    } else {
                       $('#heelspisupLad').attr('checked', false);
                    }
                });
                //spilt system unit location list 
                //attic
                $('#inlAttic').click(function() {
                    if ($('#inlAttic').is(':checked')) {
                        $('#Atticinl').show();
                        $('#Aboveinl').hide();
                        $('#i10AtAb').hide();
                        $('#inlCloset').attr('checked', false);//closet
                        $('#inlAbove').attr('checked', false);//above suspended Ceiling
                        $('#inlGarage').attr('checked', false);//Garage
                        $('#inlBasement').attr('checked', false);//basement
                        $('#inlCrawl').attr('checked', false);//Crawel Space
                        $('#inlWare').attr('checked', false);//warehouse
                        $('#inlExpose').attr('checked', false);//exposed
                        $('#inlMroom').attr('checked', false);//Mechancial Room
                    } else {
                       $('#inlCloset').attr('checked', false);//closet
                       $('#inlAbove').attr('checked', false);//above suspended Ceiling
                       $('#inlGarage').attr('checked', false);//Garage
                       $('#inlBasement').attr('checked', false);//basement
                       $('#inlCrawl').attr('checked', false);//Crawel Space
                       $('#inlWare').attr('checked', false);//warehouse
                       $('#inlExpose').attr('checked', false);//exposed
                       $('#inlMroom').attr('checked', false);//Mechancial Roomv
                    }
                });
                //closet
                $('#inlCloset').click(function() {
                    if ($('#inlCloset').is(':checked')) {
                        $('#Atticinl').hide();
                        $('#Aboveinl').hide();
                        $('#i10AtAb').show();
                        $('#inlAttic').attr('checked', false);//attic
                        $('#inlAbove').attr('checked', false);//above suspended Ceiling
                        $('#inlGarage').attr('checked', false);//Garage
                        $('#inlBasement').attr('checked', false);//basement
                        $('#inlCrawl').attr('checked', false);//Crawel Space
                        $('#inlWare').attr('checked', false);//warehouse
                        $('#inlExpose').attr('checked', false);//exposed
                        $('#inlMroom').attr('checked', false);//Mechancial Room
                    } else {
                       $('#inlAttic').attr('checked', false);//attic
                       $('#inlAbove').attr('checked', false);//above suspended Ceiling
                       $('#inlGarage').attr('checked', false);//Garage
                       $('#inlBasement').attr('checked', false);//basement
                       $('#inlCrawl').attr('checked', false);//Crawel Space
                       $('#inlWare').attr('checked', false);//warehouse
                       $('#inlExpose').attr('checked', false);//exposed
                       $('#inlMroom').attr('checked', false);//Mechancial Room
                    }
                });
                 //above Suspended Ceiling
                $('#inlAbove').click(function() {
                    if ($('#inlAbove').is(':checked')) {
                        $('#Atticinl').hide();
                        $('#Aboveinl').show();
                        $('#i10AtAb').hide();
                        $('#inlAttic').attr('checked', false);//attic
                        $('#inlCloset').attr('checked', false);//closet
                        $('#inlGarage').attr('checked', false);//Garage
                        $('#inlBasement').attr('checked', false);//basement
                        $('#inlCrawl').attr('checked', false);//Crawel Space
                        $('#inlWare').attr('checked', false);//warehouse
                        $('#inlExpose').attr('checked', false);//exposed
                        $('#inlMroom').attr('checked', false);//Mechancial Room
                    } else {
                        $('#inlAttic').attr('checked', false);//attic
                        $('#inlCloset').attr('checked', false);//closet
                        $('#inlGarage').attr('checked', false);//Garage
                        $('#inlBasement').attr('checked', false);//basement
                        $('#inlCrawl').attr('checked', false);//Crawel Space
                        $('#inlWare').attr('checked', false);//warehouse
                        $('#inlExpose').attr('checked', false);//exposed
                        $('#inlMroom').attr('checked', false);//Mechancial Room
                    }
                });
                //Garage
                $('#inlGarage').click(function() {
                    if ($('#inlGarage').is(':checked')) {
                        $('#Atticinl').hide();
                        $('#Aboveinl').hide();
                        $('#i10AtAb').show();
                        $('#inlAttic').attr('checked', false);//attic
                        $('#inlCloset').attr('checked', false);//closet
                        $('#inlAbove').attr('checked', false);//above suspended Ceiling
                        $('#inlBasement').attr('checked', false);//basement
                        $('#inlCrawl').attr('checked', false);//Crawel Space
                        $('#inlWare').attr('checked', false);//warehouse
                        $('#inlExpose').attr('checked', false);//exposed
                        $('#inlMroom').attr('checked', false);//Mechancial Room
                    } else {
                        $('#inlAttic').attr('checked', false);//attic
                        $('#inlCloset').attr('checked', false);//closet
                        $('#inlAbove').attr('checked', false);//above suspended Ceiling
                        $('#inlBasement').attr('checked', false);//basement
                        $('#inlCrawl').attr('checked', false);//Crawel Space
                        $('#inlWare').attr('checked', false);//warehouse
                        $('#inlExpose').attr('checked', false);//exposed
                        $('#inlMroom').attr('checked', false);//Mechancial Room
                    }
                });
                //Basement
                $('#inlBasement').click(function() {
                    if ($('#inlBasement').is(':checked')) {
                        $('#Atticinl').hide();
                        $('#Aboveinl').hide();
                        $('#i10AtAb').show();
                        $('#inlAttic').attr('checked', false);//attic
                        $('#inlCloset').attr('checked', false);//closet
                        $('#inlAbove').attr('checked', false);//above suspended Ceiling
                        $('#inlGarage').attr('checked', false);//Garage
                        $('#inlCrawl').attr('checked', false);//Crawel Space
                        $('#inlWare').attr('checked', false);//warehouse
                        $('#inlExpose').attr('checked', false);//exposed
                        $('#inlMroom').attr('checked', false);//Mechancial Room
                    } else {
                        $('#inlAttic').attr('checked', false);//attic
                        $('#inlCloset').attr('checked', false);//closet
                        $('#inlAbove').attr('checked', false);//above suspended Ceiling
                        $('#inlGarage').attr('checked', false);//Garage
                        $('#inlCrawl').attr('checked', false);//Crawel Space
                        $('#inlWare').attr('checked', false);//warehouse
                        $('#inlExpose').attr('checked', false);//exposed
                        $('#inlMroom').attr('checked', false);//Mechancial Room

                    }
                });
                //Crawel Space
                $('#inlCrawl').click(function() {
                    if ($('#inlCrawl').is(':checked')) {
                        $('#Atticinl').hide();
                        $('#Aboveinl').hide();
                        $('#i10AtAb').show();
                        $('#inlAttic').attr('checked', false);//attic
                        $('#inlCloset').attr('checked', false);//closet
                        $('#inlAbove').attr('checked', false);//above suspended Ceiling
                        $('#inlGarage').attr('checked', false);//Garage
                        $('#inlBasement').attr('checked', false);//basement
                        $('#inlWare').attr('checked', false);//warehouse
                        $('#inlExpose').attr('checked', false);//exposed
                        $('#inlMroom').attr('checked', false);//Mechancial Room
                    } else {
                        $('#inlAttic').attr('checked', false);//attic
                        $('#inlCloset').attr('checked', false);//closet
                        $('#inlAbove').attr('checked', false);//above suspended Ceiling
                        $('#inlGarage').attr('checked', false);//Garage
                        $('#inlBasement').attr('checked', false);//basement
                        $('#inlWare').attr('checked', false);//warehouse
                        $('#inlExpose').attr('checked', false);//exposed
                        $('#inlMroom').attr('checked', false);//Mechancial Room

                    }
                });
                //Warehouse
                $('#inlWare').click(function() {
                    if ($('#inlWare').is(':checked')) {
                        $('#Atticinl').hide();
                        $('#Aboveinl').hide();
                        $('#i10AtAb').show();
                        $('#inlAttic').attr('checked', false);//attic
                        $('#inlCloset').attr('checked', false);//closet
                        $('#inlAbove').attr('checked', false);//above suspended Ceiling
                        $('#inlGarage').attr('checked', false);//Garage
                        $('#inlBasement').attr('checked', false);//basement
                        $('#inlCrawl').attr('checked', false);//Crawel Space
                        $('#inlExpose').attr('checked', false);//exposed
                        $('#inlMroom').attr('checked', false);//Mechancial Room
                    } else {
                        $('#inlAttic').attr('checked', false);//attic
                        $('#inlCloset').attr('checked', false);//closet
                        $('#inlAbove').attr('checked', false);//above suspended Ceiling
                        $('#inlGarage').attr('checked', false);//Garage
                        $('#inlBasement').attr('checked', false);//basement
                        $('#inlCrawl').attr('checked', false);//Crawel Space
                        $('#inlExpose').attr('checked', false);//exposed
                        $('#inlMroom').attr('checked', false);//Mechancial Room

                    }
                });
                //Exposed
                $('#inlExpose').click(function() {
                    if ($('#inlExpose').is(':checked')) {
                        $('#Atticinl').hide();
                        $('#Aboveinl').hide();
                        $('#i10AtAb').show();
                        $('#inlAttic').attr('checked', false);//attic
                        $('#inlCloset').attr('checked', false);//closet
                        $('#inlAbove').attr('checked', false);//above suspended Ceiling
                        $('#inlGarage').attr('checked', false);//Garage
                        $('#inlBasement').attr('checked', false);//basement
                        $('#inlCrawl').attr('checked', false);//Crawel Space
                        $('#inlWare').attr('checked', false);//warehouse
                        $('#inlMroom').attr('checked', false);//Mechancial Room
                    } else {
                        $('#inlAttic').attr('checked', false);//attic
                        $('#inlCloset').attr('checked', false);//closet
                        $('#inlAbove').attr('checked', false);//above suspended Ceiling
                        $('#inlGarage').attr('checked', false);//Garage
                        $('#inlBasement').attr('checked', false);//basement
                        $('#inlCrawl').attr('checked', false);//Crawel Space
                        $('#inlWare').attr('checked', false);//warehouse
                        $('#inlMroom').attr('checked', false);//Mechancial Room
                    }
                });

                //Exposed
                $('#inlMroom').click(function() {
                    if ($('#inlMroom').is(':checked')) {
                        $('#Atticinl').hide();
                        $('#Aboveinl').hide();
                        $('#i10AtAb').show();
                        $('#inlAttic').attr('checked', false);//attic
                        $('#inlCloset').attr('checked', false);//closet
                        $('#inlAbove').attr('checked', false);//above suspended Ceiling
                        $('#inlGarage').attr('checked', false);//Garage
                        $('#inlBasement').attr('checked', false);//basement
                        $('#inlCrawl').attr('checked', false);//Crawel Space
                        $('#inlWare').attr('checked', false);//warehouse
                        $('#inlExpose').attr('checked', false);//exposed
                    } else {
                        $('#inlAttic').attr('checked', false);//attic
                        $('#inlCloset').attr('checked', false);//closet
                        $('#inlAbove').attr('checked', false);//above suspended Ceiling
                        $('#inlGarage').attr('checked', false);//Garage
                        $('#inlBasement').attr('checked', false);//basement
                        $('#inlCrawl').attr('checked', false);//Crawel Space
                        $('#inlWare').attr('checked', false);//warehouse
                        $('#inlExpose').attr('checked', false);//exposed

                    }
                });

          //refer to function showRadio1 this will display the radio value of the radio is checked
                $( ":checkbox" ).click(showRadio1 );
                $( ".heatTempR" ).click(showRadio1 );
                $( "select" ).change( showRadio );
                //Room not cooling evenly
                $('#nceOther').click(function() {
                    if ($('#nceOther').is(':checked')) {
                        $('#recnAdd').show();
                    } else {
                        $('#recnAdd').hide();
                    }
                });
                //not heating evenly
                $('#heatOther').click(function() {
                    if ($('#heatOther').is(':checked')) {
                        $('#OtherHeat').show();
                    } else {
                        $('#OtherHeat').hide();
                    }
                });
                //Unit Concern(Residential)other ddl to show hidden div
                $('#coolIRes').click(function() {
                    if ($('#coolIRes').is(':checked')) {
                        $('#cResIOther').show();
                    } else {
                        $('#cResIOther').hide();
                    }
                });

                //click on either business, industrial, educational, and religious
                //other ddl selection it will display hide div
                $('#AddComp').click(function() {
                    if ($('#AddComp').is(':checked')) {
                        $('#compAd').show();
                        $('cNone').attr('checked', false);
                    } else {
                        $('cNone').attr('checked', false);
                    }
                });
                //none for company to hide other div
                $('#cNone').click(function() {
                    if ($('#cNone').is(':checked')) {
                        $('#compAd').hide('checked', false);
                        $('#AddComp').attr('checked', false);
                    } else {
                        $('#compAd').hide('checked', false);
                        $('#AddComp').attr('checked', false);
                    }
                });
                //Ladder: other ddl 
                $('#otLadder').click(function() {
                    if ($('#otLadder').is(':checked')) {
                        $('#ladAdditional').show();
                       } else {
                        $('#ladAdditional').hide();
                    }
                });
                //Ladder Heating Issue Residential: ddl other selection
                //will show hidden div to add additional Issues to list
                $('#hOtherIss').click(function() {
                    if ($('#hOtherIss').is(':checked')) {
                        $('#IssOther').show();
                       } else {
                        $('#IssOther').hide();
                    }
                });
                //Estimate Ceiling Height(Residential)
                //will show hidden div to add additional hidden div
                $('#estOther').click(function() {
                    if ($('#estOther').is(':checked')) {
                        $('#atticDiv').show();
                       } else {
                        $('#atticDiv').hide();
                    }
                });
                //split system (heat pump)Ladder size ddl 
                $('#ELNOth').click(function() {
                    if ($('#ELNOth').is(':checked')) {
                        $('#oeln').show();
                       } else {
                        $('#oeln').hide();
                    }
                });
                //warranty other to show hidden div
                $('#wsOther').click(function() {
                    if ($('#wsOther').is(':checked')) {
                        $('#wsdOther').show();
                       } else {
                        $('#wsdOther').hide();
                    }
                });

            //commerical Other Unit Conern/ Problem:Cooling
            $('#cpicOther').click(function() {
                    if ($('#cpicOther').is(':checked')) {
                        $('#cpicHidden').show();
                       } else {
                        $('#cpicHidden').hide();
                    }
                });
            //commerical Other Unit Conern/ Problem:Not Cooling Evenly
            $('#rneList').click(function() {
                    if ($('#rneList').is(':checked')) {
                        $('#cpiHidden').show();
                       } else {
                        $('#cpiHidden').hide();
                    }
                });
            //commerical Other Unit Conern/ Problem:Heating Issues
            $('#cpihOther').click(function() {
                    if ($('#cpihOther').is(':checked')) {
                        $('#cpihHidden').show();
                       } else {
                        $('#cpihHidden').hide();
                    }
                });
             //commerical Other Unit Conern/ Problem:Room Not Heating Issues
            $('#rsnheOther').click(function() {
                    if ($('#rsnheOther').is(':checked')) {
                        $('#rsnheHidden').show();
                       } else {
                        $('#rsnheHidden').hide();
                    }
                });coOffice
             //commerical Other Unit Conern/ Problem:Room Not Heating Issues(Office)
            $('#coOffice').click(function() {
                    if ($('#coOffice').is(':checked')) {
                        $('#OfficeHidden').show();
                       } else {
                        $('#OfficeHidden').hide();
                    }
                });
            //commerical Other Unit Conern/ Problem:Room Not Heating Issues(Office Other) 
            $('#offOther').click(function() {
                    if ($('#offOther').is(':checked')) {
                        $('#OtherOffice').show();
                       } else {
                        $('#OtherOffice').hide();
                    }
                });
            //commerical Package heat, gas or Electric
            //gas
            $('#packGasC').click(function() {
                    if ($('#packGasC').is(':checked')) {
                        $('#packGasHidden').show();
                        $('#packHeatC').attr('checked', false);
                        $('#packElectricC').attr('checked', false);
                       } else {
                        $('#packHeatC').attr('checked', false);
                        $('#packElectricC').attr('checked', false);
                    }
            });
             $('#cy0Other').click(function() {
                    if ($('#cy0Other').is(':checked')) {
                        $('#cy0Hidden').show();
                       } else {
                       $('#cy0Hidden').hide();
                    }
            });

            //Commerical spilt ladder show hidden div for other
            $('#sizeOther').click(function() {
                if ($('#sizeOther').is(':checked')) {
                    $('#sizeHidden').show();
                   } else {
                   $('#sizeHidden').hide();
                }
            });
            //Commerical spilt attic show hidden div for other
            $('#atticOther').click(function() {
                if ($('#atticOther').is(':checked')) {
                    $('#atticHidden').show();
                   } else {
                   $('#atticHidden').hide();
                }
            });
            //Commerical spilt attic Indoor Unit Location other show hidden div 
            $('#i10other').click(function() {
                if ($('#i10other').is(':checked')) {
                    $('#i10Hidden').show();
                   } else {
                   $('#i10Hidden').hide();
                }
            });
            //Commerical spilt Ceiling Height other show hidden div 
            $('#cshOther').click(function() {
                if ($('#cshOther').is(':checked')) {
                    $('#cshHidden').show();
                   } else {
                   $('#cshHidden').hide();
                }
            });



});//end of document