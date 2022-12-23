import random
from django.db import models
from django.db.models.signals import pre_save
from phonenumber_field.modelfields import PhoneNumberField


def pre_save_create_order_id(sender, instance, *args, **kwargs):
    if not instance.unique_id:
        order_new_id = random.randint(1000, 9999)
        while instance.__class__.objects.filter(unique_id=order_new_id).exists():
            order_new_id = random.randint(1000, 9999)
        instance.unique_id = order_new_id


class Item(models.Model):
    image = models.ImageField(upload_to='images/')
    title = models.CharField(max_length=100)
    slug = models.SlugField(max_length=100, unique=True)
    price = models.IntegerField()
    description = models.TextField()
    quantity_in_stock = models.IntegerField()
    quantity_sold = models.IntegerField(default=0)
    is_active = models.BooleanField(default=True)
    date_created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Товар'
        verbose_name_plural = 'Товары'


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
    unique_id = models.IntegerField(unique=True, blank=True)
    items = models.ManyToManyField(Item, through='OrderItem')
    # TODO: оставить property или хранить для каждого заказа индивидуально?
    items_count = property(lambda self: self.orderitem_set.count())
    items_price = property(lambda self: sum([item.price for item in self.orderitem_set.all()]))
    delivery_price = models.IntegerField(default=0)
    total_price = property(lambda self: self.items_price + self.delivery_price)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField()
    phone = PhoneNumberField(region='RU')
    address = models.CharField(max_length=250)
    postal_code = models.CharField(max_length=6)

    def __str__(self):
        return f'Заказ №{self.unique_id}'

    class Meta:
        verbose_name = 'Заказ'
        verbose_name_plural = 'Заказы'


pre_save.connect(pre_save_create_order_id, sender=Order)


class OrderItem(models.Model):
    # TODO: хранить цену товара в момент заказа или всегда брать из модели товара?
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    price = models.IntegerField(default=0)
    quantity = models.IntegerField(default=1)

    def __str__(self):
        return f'{self.item.title}'

    class Meta:
        verbose_name = 'Товар в заказе'
        verbose_name_plural = 'Товары в заказе'
