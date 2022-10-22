from django.db import models
from django.utils import timezone


class School(models.Model):
    name = models.CharField(max_length=200)
    nces_id = models.PositiveBigIntegerField()
    created_on = models.DateTimeField()
    updated_on = models.DateTimeField(default=timezone.now())
    updated_by = models.IntegerField()


class User(models.Model):
    name = models.CharField(max_length=200)
    type = models.CharField(max_length=50)
    school_id = models.ForeignKey(School, on_delete=models.CASCADE)

class Class(models.Model):
    name = models.CharField(max_length=200)
    passphrase_hash = models.CharField()
    salt = models.CharField()
    active = models.BooleanField()
    created_on = models.DateTimeField()
    updated_on = models.DateTimeField(default=timezone.now())
    updated_by = models.IntegerField()


class ClassUsers(models.Model):
    class_id = models.ForeignKey(Class, on_delete=models.CASCADE)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)


class Project(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    teacher = models.ForeignKey(User, on_delete=models.CASCADE)
    type = models.CharField()
    created_on = models.DateTimeField()
    updated_on = models.DateTimeField(default=timezone.now())
    updated_by = models.IntegerField()
