# Generated by Django 4.1.4 on 2023-01-24 11:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0011_remove_order_items_order_delivery_type_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='items_price',
            field=models.IntegerField(default=0, null=True),
        ),
    ]
