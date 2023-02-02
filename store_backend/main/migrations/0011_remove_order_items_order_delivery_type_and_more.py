# Generated by Django 4.1.4 on 2023-01-24 11:04

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0010_legoset_series_slug_minifigure_series_slug'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='order',
            name='items',
        ),
        migrations.AddField(
            model_name='order',
            name='delivery_type',
            field=models.CharField(choices=[('spb', 'Курьером по СПб'), ('pochta', 'Почтой России'), ('SDEK', 'СДЭК')], default='spb', max_length=100),
        ),
        migrations.AddField(
            model_name='order',
            name='items_price',
            field=models.IntegerField(null=True),
        ),
        migrations.AddField(
            model_name='order',
            name='items_quantities',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.IntegerField(), null=True, size=None),
        ),
        migrations.AddField(
            model_name='order',
            name='items_slugs',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.SlugField(max_length=100), null=True, size=None),
        ),
    ]