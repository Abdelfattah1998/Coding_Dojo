# Generated by Django 2.2.4 on 2022-09-29 14:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('BookAuthor', '0002_auto_20220928_1435'),
    ]

    operations = [
        migrations.RenameField(
            model_name='publisher',
            old_name='name',
            new_name='first_name',
        ),
        migrations.AddField(
            model_name='publisher',
            name='last_name',
            field=models.CharField(default=1, max_length=255),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='publisher',
            name='notes',
            field=models.CharField(default=1, max_length=255),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='publisher',
            name='books',
            field=models.ManyToManyField(related_name='Publishers', to='BookAuthor.Book'),
        ),
    ]
