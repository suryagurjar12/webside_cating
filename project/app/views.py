from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request ,'home.html')
def Services(request):
    return render(request,'Services.html')

def about(request):
    return render(request,'about.html')

def contact(request):
    return render(request,'contact.html')

def registration(request):
    return render(request,'registration.html')
