# Generated by Django 4.1.4 on 2022-12-25 18:24

from django.db import migrations, models
import django.db.models.deletion
import phonenumber_field.modelfields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Item',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('slug', models.SlugField(max_length=100, unique=True)),
                ('price', models.IntegerField()),
                ('description', models.TextField()),
                ('quantity_in_stock', models.IntegerField()),
                ('quantity_sold', models.IntegerField(default=0)),
                ('is_active', models.BooleanField(default=True)),
                ('date_created', models.DateTimeField(auto_now_add=True)),
            ],
            options={
                'verbose_name': 'Товар',
                'verbose_name_plural': 'Товары',
            },
        ),
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('state', models.CharField(choices=[('pending', 'Ожидает оплаты'), ('paid', 'Оплачен, ожидает сборки'), ('assembled', 'Собран, ожидает отправки'), ('shipping', 'Отправлен'), ('waiting_for_hand_in', 'Ожидает получения'), ('delivered', 'Доставлен'), ('canceled', 'Отменен')], default='pending', max_length=100)),
                ('unique_id', models.IntegerField(blank=True, unique=True)),
                ('delivery_price', models.IntegerField(default=0)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('updated', models.DateTimeField(auto_now=True)),
                ('first_name', models.CharField(max_length=50)),
                ('last_name', models.CharField(max_length=50)),
                ('email', models.EmailField(max_length=254)),
                ('phone', phonenumber_field.modelfields.PhoneNumberField(max_length=128, region='RU')),
                ('address', models.CharField(max_length=250)),
                ('postal_code', models.CharField(max_length=6)),
            ],
            options={
                'verbose_name': 'Заказ',
                'verbose_name_plural': 'Заказы',
            },
        ),
        migrations.CreateModel(
            name='OrderItem',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('price', models.IntegerField(default=0)),
                ('quantity', models.IntegerField(default=1)),
                ('item', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='main.item')),
                ('order', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='main.order')),
            ],
            options={
                'verbose_name': 'Товар в заказе',
                'verbose_name_plural': 'Товары в заказе',
            },
        ),
        migrations.AddField(
            model_name='order',
            name='items',
            field=models.ManyToManyField(through='main.OrderItem', to='main.item'),
        ),
        migrations.CreateModel(
            name='ItemImage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='images/')),
                ('ordering', models.IntegerField()),
                ('item', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='main.item')),
            ],
            options={
                'verbose_name': 'Изображение товара',
                'verbose_name_plural': 'Изображения товаров',
                'ordering': ['ordering'],
                'unique_together': {('item', 'ordering')},
            },
        ),
    ]
