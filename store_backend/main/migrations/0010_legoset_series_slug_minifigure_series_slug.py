# Generated by Django 4.1.4 on 2023-01-21 12:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0009_alter_series_options'),
    ]

    operations = [
        migrations.AddField(
            model_name='legoset',
            name='series_slug',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AddField(
            model_name='minifigure',
            name='series_slug',
            field=models.CharField(blank=True, max_length=100),
        ),
    ]
