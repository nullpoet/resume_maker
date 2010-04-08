from django.conf import settings
import traceback, sys
import logging


from resume_maker import settings

from django.template.loader import get_template
from django.template import Context
import exceptions
from django.shortcuts import render_to_response

# Create your views here.




def editresume(request):
      """ Edit resume """

      

      c_dict = {}      
      return render_to_response('resume.html', c_dict )
      
      #t = get_template("resume.html")      
      #c = Context( c_dict )            
      #response = t.render(c)
      
      