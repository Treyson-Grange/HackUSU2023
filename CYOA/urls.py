from django.urls import path
from . import views
app_name = 'cyoa'
urlpatterns = [
    path('', views.cyoa, name="cyoa")
    # path('', views.calcHome, name='calcHome'),
    # path('plan/', views.plan, name="plan"),
    # path('byOperator/', views.byOperator, name='byOperator'),
    # path('disagree/', views.disagree, name='disagree'),
    # path('undefined/', views.undefined, name='undefined'),
    # path('recent/', views.recent, name='recent'),
    # path('createExpressions/', views.createExpressions, name='createExpressions'),
    # path('error/', views.error, name='error')



]