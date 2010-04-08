function makePOSTRequest(url, parameters, callback) {
      http_request = false;
      if (window.XMLHttpRequest) { // Mozilla, Safari,...
         http_request = new XMLHttpRequest();
         if (http_request.overrideMimeType) {
         	// set type accordingly to anticipated content type
            //http_request.overrideMimeType('text/xml');
            http_request.overrideMimeType('text/html');
         }
      } else if (window.ActiveXObject) { // IE
         try {
            http_request = new ActiveXObject("Msxml2.XMLHTTP");
         } catch (e) {
            try {
               http_request = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {}
         }
      }
      if (!http_request) {
         alert('Cannot create XMLHTTP instance');
         return false;
      }
      
      http_request.onreadystatechange = callback;
      http_request.open('POST', url, true);
      http_request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      http_request.setRequestHeader("Content-length", parameters.length);
      http_request.setRequestHeader("Connection", "close");
      http_request.send(parameters);
}

/* Given a container element, it returns keyvalue pair of each
 * input and value.
   */
function get_form_data( container )
{
	var array = Array();
	
	$(container).find("input[type=text]").each(function(index){
		array[$(this).attr('name')] = $(this).attr('value'); 
	});
	
	$(container).find("option:selected").each(function(index){
		var select = $(this).parents("select:first");
		array[$(select).attr('name')] = $(this).attr('value'); 
	});

	$(container).find("input[type=hidden]").each(function(index){
		array[$(this).attr('name')] = $(this).attr('value'); 
	});

	$(container).find("textarea").each(function(index){
		array[$(this).attr('name')] = $(this).attr('value'); 
	});
	
	console_log(array);
	
	return array;
}

function create_query_string( array, string )
{	
	for( key in array )
	{
		string = string + key + '=' + encodeURIComponent(array[key]) + '&'; 
	}
	
	// console_log('query=' + string);
	
	return string;
}
var validation_fields =
{
	"project":
	{
		'title'       : new Array('string', false, 1, 255,"Project Title"), 
		'from_Month'  : new Array('num', false, 1, 12,"From Month"), 
		'from_Year'   : new Array('num', false, 1, 5000,"From Year"),			 
		'to_Month'    : new Array('num', false, 1, 12,"Upto Month"), 
		'to_Year'     : new Array('num', false, 1, 5000,"Upto Year"),	
		'diff_date'	  : new Array('diff_date',false,0),	
		'comments'    : new Array('string', false, 0, 1023,"Comments")
	},
	"college":
	{	
		'degree'      : new Array('string', false, 1, 255,"Degree"), 
		'majors'      : new Array('string', false, 1, 255,"Majors"),  
		'institution' : new Array('string', false, 1, 255,"Institution"), 
		'city'        : new Array('string', false, 1, 255,"City"), 
		'grade'       : new Array('num', false, 0, 10000,"Grade"), 
		'maxgrade'    : new Array('num', false, 1, 10000,"Maximum Grade"), 
		'from_Month'  : new Array('num', false, 1, 12,"From Month"), 
		'from_Year'   : new Array('num', false, 0, 10000,"From Year"), 
		'until_Month' : new Array('num', false, 1, 12,"Upto Month"), 
		'until_Year'  : new Array('num', false, 0, 10000,"Upto Year"),
		'diff_date'	  : new Array('diff_date',false,0)
	},
	"school":
	{
		'board'       : new Array('string', false, 1, 255,"Board"),
		'stream'      : new Array('string', false, 1, 255,"Stream"),
		'institution' : new Array('string', false, 1, 255,"Institution"), 
		'city'        : new Array('string', false, 1, 255,"City"), 
		'grade'       : new Array('num', false, 0, 10000,"Grade"), 
		'maxgrade'    : new Array('num', false, 1, 10000,"Maximum Grade"), 
		'Year'        : new Array('num', false, 0, 10000,"Year")
	},
	'scholarship':
	{
		'name'        : new Array('string', false, 1, 255,"Name of scholarship"), 
		'donor'       : new Array('string', false, 1, 255,"Name of donor"), 
		'reason'      : new Array('string', false, 1, 255,"Reason of selection"), 
		'Year'        : new Array('num', false, 0, 10000,"Year awarded")
	},
	'certification':
	{
		'name'        : new Array('string', false, 1, 255,"Name of certificate"), 
		'organization': new Array('string', false, 1, 255,"Organisation"), 
		'Year'        : new Array('num', false, 0, 10000,"Year")
	},
	'experience':
	{
		'company'     : new Array('string', false, 1, 255,"Company"), 
		'position'    : new Array('string', false, 1, 255,"Position"), 
		'from_Year'   : new Array('num', false, 0, 10000,"From Year"), 
		'from_Month'  : new Array('num', false, 1, 12,"From Month"), 
		'until_Month' : new Array('num', false, 1, 12,"Upto Month"), 
		'until_Year'  : new Array('num', false, 0, 10000,"Upto Year"), 
		'diff_date'	  : new Array('diff_date',false,0),		
		'description' : new Array('string', false, 0, 1023,"Description") 
	},
	'skill':
	{
		'comments'    : new Array('string', false, 1, 255,"Skills")
	},	
	'skill1':
	{
		'title'    : new Array('string', false, 1, 255,"Skill"),
		'comments'    : new Array('string', false, 1, 255,"Description")
	},	
	'extraacad':
	{
	    'comments'    : new Array('string', false, 1, 255,"Activity")
	},	
	'internship':
	{
		'company'     : new Array('string', false, 1, 255,"Company name"),  
		'position'    : new Array('string', false, 0, 255,"Position"), 
		'from_Year'   : new Array('num', false, 0, 10000,"From Year"),
		'from_Month'  : new Array('num', false, 1, 12,"From Month"), 
		'until_Month' : new Array('num', false, 1, 12,"Upto Month"), 
		'until_Year'  : new Array('num', false, 0, 10000,"Upto Year"), 
		'description' : new Array('string', false, 0, 1023,"Description"),
		'diff_date'	  : new Array('diff_date',false,0)
	},
	'extraacad_1':
	{
		'type_of_position'    :new Array('string', false, 1, 255,"Type of position"),
		'position'		  	  :new Array('string', false, 1, 255,"Position"),	
		'organisation'		  :new Array('string', false, 1, 255,"Organisation"),
		'Year'				  :new Array('num', false, 0, 10000,"Year"),	
		'key_responsibilities':new Array('string', false, 1, 255,"Key Responsibilities")
	},
	'extraacad_2':
	{
		'position'  :new Array('string', false, 1, 255,"Position"),
		'event'		:new Array('string', false, 1, 255,"Event"),
		'Year'		:new Array('num', false, 0, 10000,"Year")
	}
};	
	
function submit_add(button)
{
	//var pars = $(button).parents().map(function () { 
	//return '{' + this.tagName + ' ' + $(this).attr('class') + '}'; 
	// }).get().join("\n");
	// console_log(pars);	
	
	var container = $(button).parents('.profile-each-content:first');
	var form = $(button).parents('.add_form:first');
	
	var array = get_form_data(form);
	//console_log('form data array : ' + array);	
	var buttonContainer = $(button).parents('.button_bottom:first');
		
	//$(container).find("input[type=hidden][name=part]:first").each(function(index){
	//	array[$(this).attr('name')] = $(this).attr('value'); 
	//});
		
	$(container).find("input[type=hidden][name=subpart]:first").each(function(index){
		array[$(this).attr('name')] = $(this).attr('value'); 
	});
	
	
	//check for errors

	var val_ary = validation_fields[array.part];
	var errors = validate_data(array , val_ary); // errors is an array of errors in validating data
	
	if(errors.length != 0)
	{
		var error_display = $(form).find('.error_display:first');
		
    	//console_log( errors );
    	$(error_display).empty();
    	for (var i = 0; i < errors.length; i++){
    		$(error_display).append( errors[i] + '<br/>' );							            	
		}
    	
    	return false;    	
	}
	
	
	var query = create_query_string(array,"");
	query = query+"format=json&form=add_entity";
	
	//var buttonContainer = $(button).parents('.button_bottom:first');	
	var doLoading = ' <div class="button_bottom"> <img class="show-add-btn small-btn"  src="images/ajax-loader-resume.gif" alt="" /> </div>';
	console_log('image loading....' );	
	var buttons_html = $(buttonContainer).html();	
	$(buttonContainer).html( doLoading );
	
	makePOSTRequest("talent/resume.php", query, function(){
		if (http_request.readyState == 4) 
		{				
		
       		if (http_request.status == 200) 
       		{
	            response = http_request.responseText;
	            // console_log('response = ' + response);
	            var state = eval("(" + response + ")");
	            if( state.success )
	            {
	            	// console_log(state.params.html);
	            	$(container).empty();
	            	$(container).append(state.params.html);
	            	update_completeness(state);
	            }
	            else
	            {  
	            	$(buttonContainer).html( buttons_html );
	            	// TODO: Error handling
	            	//if(state.params.code === 'E_VALIDATION_FAILED')
	            	
	            	var error_display = $(form).find('.error_display:first');
	            	console_log( state.params.errors );
	            	$(error_display).empty();
	            	for (var i = 0; i < state.params.errors.length; i++){
	            		$(error_display).append( state.params.errors[i] + '<br/>' );							            	
					}
	            }
         	} else {
            	alert('There was a problem with the request.' . http_request.status);
         	}
         }
	});
}

/**
 * On clicking show edit, the display block is hidden and the edit block is 
 * show. Also for functioning of cancel operation, a copy of the edit block
 * is saved as title in div.cancel_html just above the edit button row.
 * 
 * @param button The clicked button.
 * @return false
 */
function show_edit(button)
{
	var container = $(button).parents('.profile-each-content:first'); 	
	var edit_form = $(container).find('.edit_form:first');
	var html = $(edit_form).html();
	var cancelDiv = $(edit_form).find('.cancel_html:first');	
	
	$(cancelDiv).attr('title', html);
	$(container).find('.show_part:first').hide();
	$(container).find('.edit_form:first').show();
	
	return false;
}

/**
 * Replaces the edit block with hidden backup copy in div.cancel_html.
 * Hides the edit block.
 * Shows the display block.
 * 
 * @param button The clicked cancel button.
 * @return false
 */
function cancel_edit(button)
{
	var container = $(button).parents('.profile-each-content:first'); 
	var edit_form = $(container).find('.edit_form:first');
	var cancelDiv = $(edit_form).find('.cancel_html:first');
	var html = $(cancelDiv).attr('title');
	$(cancelDiv).attr('title', '');
	
	$(container).find('.edit_form:first').html(html);
	$(container).find('.edit_form:first').hide();
	$(container).find('.show_part:first').show();
	
	return false;
}

function cancel_add(button)
{
	console_log('cancel_add');
	var container = $(button).parents('.profile-each-content:first');
	$(container).remove();
}

function show_add(button)
{	
	// var pars = $(button).parents().map(function () { 
	//	return '{' + this.tagName + ' ' + $(this).attr('class') + '}'; 
	// }).get().join("\n");
	// console_log(pars);
		
	var array = new Array();
	var container = $(button).parents('.profile-each-body:first');
	var buttonContainer = $(button).parents('.button_bottom:first');
	
	$(container).find("input[type=hidden][name=part]:first").each(function(index){
		array[$(this).attr('name')] = $(this).attr('value'); 
	});
	
	$(container).find("input[type=hidden][name=subpart]:first").each(function(index){
		array[$(this).attr('name')] = $(this).attr('value'); 
	});	
	
	var query = create_query_string(array,"");
	query = query+"format=json&form=show_add_entity&entity=resume";
		
	if( typeof( subparts[array['part']] ) == 'undefined' ) {
		console_log(' no subparts for current part');
		if( typeof( add_parts[ array['part']] ) != 'undefined' ) {
			var html = '<div class="profile-each-content">' 
		  		+ add_parts[ array['part'] ] + 
				'</div>';
			console_log(html);
	       	//$(container).empty();
	       	$(buttonContainer).before(html);
	       	$(container).find('.add_form:hidden:first').show();
	       	return false;	
		}
	}
	else {
		console_log(' subparts exist for current part');
		if( typeof( add_parts[array['part']][array['subpart']] ) != 'undefined' ) {
			var html = '<div class="profile-each-content">' 
	  		+ add_parts[ array['part'] ][ array['subpart'] ] + 
			'</div>';
			console_log(html);
	       	//$(container).empty();
	       	$(buttonContainer).before(html);
	       	$(container).find('.add_form:hidden:first').show();
	       	return false;	
		}
	}	
	
			
	//var buttonContainer = $(button).parents('.button_bottom:first');	
	var doLoading = ' <div class="button_bottom"> <img class="show-add-btn small-btn"  src="images/ajax-loader-resume.gif" alt="" /> </div>';
	console_log('image loading....' );	
	var buttons_html = $(buttonContainer).html();	
	$(buttonContainer).html( doLoading );
	
	makePOSTRequest("talent/resume.php", query, function(){			
		if (http_request.readyState == 4) 
		{
       		if (http_request.status == 200) 
       		{
	            response = http_request.responseText;
	            // console_log('response = ' + response);
	            var state = eval("(" + response + ")");
	                     
	            if( state.success )
	            {
	            	if( typeof( subparts[ array['part']] ) == 'undefined' )
	            		add_parts[ array['part'] ] = state.params.html;
	            	else
	            		add_parts[ array['part'] ][array['subpart']] = state.params.html;
	            	
            		var html = '<div class="profile-each-content">' 
	            		+ add_parts[ array['part'] ] + 
	            		'</div>'; 
			       	console_log(html);
			       	//$(container).empty();
			       	$(buttonContainer).before(html);
			       	$(container).find('.add_form:hidden:first').show();
	            }
	            else
	            {
	            	$(buttonContainer).html( buttons_html );            
	            	// TODO: Error handling
	            	//if(state.params.code === 'E_VALIDATION_FAILED')
	            	
					alert('TODO: Error handling');
	            	var error_display = $(form).find('.error_display:first');
	            	console_log( state.params.errors );
	            	$(error_display).empty();
	            	for (var i = 0; i < state.params.errors.length; i++){
	            		$(error_display).append( state.params.errors[i] + '<br/>' );							            	
					}
	            }
         	} 
         	else 
         	{
            	alert('There was a problem with the request.' . http_request.status);
         	}
         }
	});		
}

function submit_delete(button)
{	

	var form = $(button).parents('.edit_form:first');
	var container = $(button).parents('.profile-each-content:first');
	
	var id = $(form).find("INPUT[name='id']").attr('value');
	var part = $(form).find("INPUT[name='part']").attr('value');
	var entity = $(form).find("INPUT[name='entity']").attr('value');
	var action = 'delete_entity';
		
	console_log('id: ' + id);
	console_log('part: ' + part);
	console_log('entity: ' + entity);
	console_log('action: ' + action);
	
	var query = 'id=' + encodeURI(id) + '&part=' + encodeURI(part) + '&entity=' + encodeURI(entity) + '&form=delete_entity&format=json';
	console_log('query=' + query);
	var url = 'talent/resume.php';
	console_log('url=' + url);
	
	var buttonContainer = $(button).parents('.button_bottom:first');	
	var doLoading = ' <div class="button_bottom"> <img class="show-add-btn small-btn"  src="images/ajax-loader-resume.gif" alt="" /> </div>';
	console_log('image loading....' );	
	var buttons_html = $(buttonContainer).html();	
	$(buttonContainer).html( doLoading );
	
	makePOSTRequest(url, query, function(){
		if (http_request.readyState == 4) 
		{
        	if (http_request.status == 200) 
        	{
	            response = http_request.responseText;
	            // console_log('response = ' + response);
	            var state = eval("(" + response + ")");
	            
	            if( state.success )  {
	            	$(container).empty();
	            	update_completeness(state);
	            } else {          	
	            	$(buttonContainer).html( buttons_html );
		            // TODO: Error handling
		            alert('TODO: Error handling.');
	            }
			}
	        else 
	        {
	        	alert('There was a problem with the request.');
	        }		
		} 
	});	
}

function submit_edit(button)
{
	
	var container = $(button).parents('.profile-each-content:first');
	var form = $(button).parents('.edit_form:first');
	
	var array = get_form_data(form);
	
	//check for error in client-field
	var val_ary = validation_fields[array.part];
	var errors = validate_data(array , val_ary); // errors is an array of errors in validating data
	
	if(errors.length != 0)
	{
		var error_display = $(form).find('.error_display:first');
		
    	//console_log( errors );
    	$(error_display).empty();
    	for (var i = 0; i < errors.length; i++){
    		$(error_display).append( errors[i] + '<br/>' );							            	
		}
    	
    	return false;    	
	}
	
	var query = create_query_string(array,"");
	query = query+"format=json&form=save_entity";
	console_log('query=' + query);
	var url = 'talent/resume.php';
	// console_log('url=' + url);
	
	var buttonContainer = $(button).parents('.button_bottom:first');	
	var doLoading = ' <div class="button_bottom"> <img class="show-add-btn small-btn"  src="images/ajax-loader-resume.gif" alt="" /> </div>';
	console_log('image loading....' );	
	var buttons_html = $(buttonContainer).html();	
	$(buttonContainer).html( doLoading );
	
	makePOSTRequest(url, query, function(){  
			
	
		if (http_request.readyState == 4) 
		{
			console_log('.....loaded....' );
	
       		if (http_request.status == 200) 
       		{
	            response = http_request.responseText;
	            // console_log('response = ' + response);
	            var state = eval("(" + response + ")");
	            
	            if( state.success )  {
	            	$(container).empty();
	            	$(container).append(state.params.html);
	            } else {	            	
	            	$(buttonContainer).html( buttons_html );	            	
		            // $(container).find('.error_display').append(error);
	            	// TODO: Error handling	            	
	            	var error_display = $(form).find('.error_display:first');
	            	console_log($(error_display).html() );
	            	console_log( state.params.errors );
	            	$(error_display).empty();
	            	for (var i = 0; i < state.params.errors.length; i++){
	            		$(error_display).append( state.params.errors[i] + '<br/>' );							            	
					}
	            }
			}
	        else 
	        {
	        	alert('There was a problem with the request.');
	        }		
		} 
	});	

}

