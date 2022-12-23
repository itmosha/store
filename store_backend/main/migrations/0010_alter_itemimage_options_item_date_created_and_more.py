# Generated by Django 4.1.4 on 2022-12-23 01:11

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0009_remove_item_image_itemimage'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='itemimage',
            options={'ordering': ['ordering'], 'verbose_name': 'Изображение товара', 'verbose_name_plural': 'Изображения товаров'},
        ),
        migrations.AddField(
            model_name='item',
            name='date_created',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='itemimage',
            name='ordering',
            field=models.IntegerField(default=0),
            preserve_default=False,
        ),
        migrations.AlterUniqueTogether(
            name='itemimage',
            unique_together={('item', 'ordering')},
        ),
    ]