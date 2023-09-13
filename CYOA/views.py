from django.shortcuts import render
from django.shortcuts import render, get_object_or_404
import math
from time import strftime
from django.http import HttpResponseRedirect
from django.urls import reverse
from django.utils import timezone
# Create your views here.

def cyoa(request):
    return render(request, 'CYOA/index.html')