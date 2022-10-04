from django.db import models
from LoginRegistration.models import *

class Message(models.Model):
    Text = models.TextField()
    User = models.ForeignKey(user, related_name="messages", on_delete = models.CASCADE) #naming may cause an issue so be carefull here
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Comment(models.Model):
    Text = models.TextField()
    User = models.ForeignKey(user, related_name="comments", on_delete = models.CASCADE)
    Message = models.ForeignKey(Message, related_name="comments", on_delete = models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)