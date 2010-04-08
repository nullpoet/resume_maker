
function validate_data(data, val_ary)
{
	var result="",i=-1;
	var ret = new Array();
	
	// return ret;
	
	for(var key in val_ary)
	{
		if(data[key] == "undefined")
			continue;
		if(val_ary[key][0] == "diff_date")
		{
			   result += check_diff_date(data,val_ary[key][1],val_ary[key][2]);
			   
				if(result != "")
				{
					ret[++i] =  result;
				}
				
			    result = "";
		}
		else if(val_ary[key][0] == "string") 		// for string checking
		{
		    result += check_string(data[key],val_ary[key][1],val_ary[key][2],val_ary[key][3]);
			
			if(result != "")
			{
				result = val_ary[key][val_ary[key].length-1] + result;
				ret[++i] =  result;
			}
			
		    result = "";
		} 
		else if(val_ary[key][0] == "num")				// for number checking
		{
			result += check_num(data[key],val_ary[key][1],val_ary[key][2],val_ary[key][3]);	
			
			if(result != "")
			{
				result = val_ary[key][val_ary[key].length-1] + result;
				ret[++i] =  result;
			}		
			
			result = "";	
		}			
	}
	
	return ret;
}

function check_diff_date(vars, value, min_diff)
{
	var from_Year = vars['from_Year'];
	var from_Month = vars['from_Month'];
	var until_Month = vars['until_Month'];
	var until_Year = vars['until_Year'];
	// var until_Day = vars['until_Day'];
	// var from_Day = vars['from_Day'];
		
	var from = from_Year*365+from_Month*30+0;
	var until = until_Year*365+until_Month*30+0;
	
	if( from == 0 || until == 0 )
	{
		return '';
	}
	
	var diff_date = until - from;
	
	if (diff_date && value == true)
	{
		return "";
	}
	
	if( diff_date < min_diff)
	{
		return 'Until date can not be after from';
	}
	
	return "";
}

function check_string(data, value, min_length, max_length)
{
	if(data === "" && value === true)
	{
	    return "";
	}
	if(data === "" && min_length != 0)
	{
		return " can not be blank";
	}
	
	if(data.length < min_length)
	{
		return " is too short";
	}
	
	if(data.length > max_length)
	{
		return " is too long";		
	}
	
	return "";
}

function check_num(data, value, min_value, max_value)
{
	if(data === "" && value === true)
	{
	    return "";
	}
	
	if(data === "")
	{
		return " can not be blank";
	}
	
	if(data < min_value)
	{	
		return " is too small";
	}
	
	if(data > max_value)
	{	
		return " is too large";
	}
	
	return "";
}
