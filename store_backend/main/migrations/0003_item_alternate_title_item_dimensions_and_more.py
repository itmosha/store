# Generated by Django 4.1.4 on 2023-01-12 13:40

from django.db import migrations, models


def update_item_sku(apps, schema_editor):
    item = apps.get_model('main', 'Item')
    for item in item.objects.all():
        item.sku = item.slug
        item.save()


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0002_remove_order_unique_id_order_unique_uuid_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='item',
            name='alternate_title',
            field=models.CharField(default='', max_length=100),
        ),
        migrations.AddField(
            model_name='item',
            name='dimensions',
            field=models.CharField(default='', max_length=100),
        ),
        migrations.AddField(
            model_name='item',
            name='minifigures_amount',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='item',
            name='parts_amount',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='item',
            name='series',
            field=models.CharField(default='', max_length=100),
        ),
        migrations.AddField(
            model_name='item',
            name='sku',
            field=models.CharField(blank=True, max_length=100),
        ),

        migrations.RunPython(update_item_sku, reverse_code=migrations.RunPython.noop),

        migrations.AddField(
            model_name='item',
            name='weight',
            field=models.IntegerField(default=0),
        ),
    ]
