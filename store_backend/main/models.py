import random
import uuid
from django.db import models
from django.db.models.signals import pre_save
from phonenumber_field.modelfields import PhoneNumberField


class Item(models.Model):
    def images(self):
        return ItemImage.objects.filter(item=self)
    title = models.CharField(max_length=100)
    alternate_title = models.CharField(max_length=100, default='')  # TODO: delete default
    slug = models.SlugField(max_length=100, unique=True)
    price = models.IntegerField()
    description = models.TextField()
    quantity_in_stock = models.IntegerField()
    quantity_sold = models.IntegerField(default=0)
    is_active = models.BooleanField(default=False)
    date_created = models.DateTimeField(auto_now_add=True)

    sku = models.CharField(max_length=100, blank=True)  # TODO: make unique and not blank

    parts_amount = models.IntegerField(default=0)  # TODO: delete default
    series = models.CharField(max_length=100, default='')
    weight = models.IntegerField(default=0)  # TODO: delete default
    dimensions = models.CharField(max_length=100, default='')  # TODO: delete default
    minifigures_amount = models.IntegerField(default=0)  # TODO: delete default

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Товар'
        verbose_name_plural = 'Товары'


class ItemImage(models.Model):
    image = models.ImageField(upload_to='images/')
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    ordering = models.IntegerField()

    def __str__(self):
        return self.item.slug + ' image'

    class Meta:
        unique_together = ('item', 'ordering')
        ordering = ['ordering']
        verbose_name = 'Изображение товара'
        verbose_name_plural = 'Изображения товаров'


class Order(models.Model):
    STATES = (
        ('pending', 'Ожидает оплаты'),
        ('paid', 'Оплачен, ожидает сборки'),
        ('assembled', 'Собран, ожидает отправки'),
        ('shipping', 'Отправлен'),
        ('waiting_for_hand_in', 'Ожидает получения'),
        ('delivered', 'Доставлен'),
        ('canceled', 'Отменен'),
    )
    state = models.CharField(max_length=100, choices=STATES, default='pending')
    unique_uuid = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    # TODO: field for ip (getting HTTP_X_REAL_IP)
    # TODO: оставить property или хранить для каждого заказа индивидуально?
    items = models.ManyToManyField(Item, through='OrderItem')
    items_price = property(lambda self: sum([item.price for item in self.orderitem_set.all()]))
    delivery_price = models.IntegerField(default=0)
    total_price = property(lambda self: self.items_price + self.delivery_price)

    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField()
    phone = PhoneNumberField(region='RU')
    address = models.CharField(max_length=250)
    postal_code = models.CharField(max_length=6)

    def __str__(self):
        return f'Заказ №{self.unique_uuid}'

    class Meta:
        verbose_name = 'Заказ'
        verbose_name_plural = 'Заказы'


class OrderItem(models.Model):
    # TODO: add name and photos
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    price = models.IntegerField(default=0)
    quantity = models.IntegerField(default=1)

    def __str__(self):
        return f'{self.item.title}'

    class Meta:
        verbose_name = 'Товар в заказе'
        verbose_name_plural = 'Товары в заказе'
