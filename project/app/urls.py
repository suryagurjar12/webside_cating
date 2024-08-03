from django.urls import path
from .views import*

urlpatterns=[
    path('', home, name='home1'),
    path('Services/', Services, name='services'),
    path('about/', about, name='about'),
    path('contact/', contact, name='contact'),
    path('registration',registration,name="registration"),
    path('Show_Products/',showProduct,name="Show_Products")
]
