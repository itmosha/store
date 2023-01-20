import uuid
from django.db import models
from phonenumber_field.modelfields import PhoneNumberField


class LegoSet(models.Model):
    def images(self):
        return LegoSetImage.objects.filter(item=self)

    title = models.CharField(max_length=100)
    alternate_title = models.CharField(max_length=100, blank=True)
    slug = models.SlugField(max_length=100, unique=True)
    price = models.IntegerField()
    description = models.TextField(blank=True)
    quantity_in_stock = models.IntegerField()
    quantity_sold = models.IntegerField(default=0)
    is_active = models.BooleanField(default=False)
    date_created = models.DateTimeField(auto_now_add=True)

    sku = models.CharField(max_length=100, unique=True)

    parts_amount = models.IntegerField(blank=True, null=True)
    series = models.CharField(max_length=100, blank=True)
    weight = models.IntegerField(blank=True, null=True)
    dimensions = models.CharField(max_length=100, blank=True)
    minifigures_amount = models.IntegerField(blank=True, null=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Набор'
        verbose_name_plural = 'Наборы'


class Minifigure(models.Model):
    def images(self):
        return MinifigureImage.objects.filter(item=self)

    title = models.CharField(max_length=100)
    alternate_title = models.CharField(max_length=100, blank=True)
    slug = models.SlugField(max_length=100, unique=True)
    price = models.IntegerField()
    description = models.TextField(blank=True)
    quantity_in_stock = models.IntegerField()
    quantity_sold = models.IntegerField(default=0)
    is_active = models.BooleanField(default=False)
    date_created = models.DateTimeField(auto_now_add=True)

    sku = models.CharField(max_length=100, unique=True)
    series = models.CharField(max_length=100, blank=True)
    weight = models.IntegerField(blank=True, null=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Минифигурка'
        verbose_name_plural = 'Минифигурки'


class Part(models.Model):
    def images(self):
        return PartImage.objects.filter(item=self)

    title = models.CharField(max_length=100)
    alternate_title = models.CharField(max_length=100, blank=True)
    slug = models.SlugField(max_length=100, unique=True)
    price = models.IntegerField()
    description = models.TextField(blank=True)
    quantity_in_stock = models.IntegerField()
    quantity_sold = models.IntegerField(default=0)
    is_active = models.BooleanField(default=False)
    date_created = models.DateTimeField(auto_now_add=True)

    sku = models.CharField(max_length=100, unique=True)
    weight = models.IntegerField(blank=True, null=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Деталь'
        verbose_name_plural = 'Детали'

class Series(models.Model):
    image = models.ImageField(upload_to='images/')
    slug = models.SlugField(max_length=100, unique=True)
    title = models.CharField(max_length=100)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Серия'
        verbose_name_plural = 'Серии'



class LegoSetImage(models.Model):
    image = models.ImageField(upload_to='images/')
    item = models.ForeignKey(LegoSet, on_delete=models.CASCADE)
    ordering = models.IntegerField()

    def __str__(self):
        return self.item.slug + ' image'

    class Meta:
        unique_together = ('item', 'ordering')
        ordering = ['ordering']
        verbose_name = 'Изображение набора'
        verbose_name_plural = 'Изображения наборов'

class MinifigureImage(models.Model):
    image = models.ImageField(upload_to='images/')
    item = models.ForeignKey(Minifigure, on_delete=models.CASCADE)
    ordering = models.IntegerField()

    def __str__(self):
        return self.item.slug + ' image'

    class Meta:
        unique_together = ('item', 'ordering')
        ordering = ['ordering']
        verbose_name = 'Изображение минифигурки'
        verbose_name_plural = 'Изображения минифигурок'

class PartImage(models.Model):
    image = models.ImageField(upload_to='images/')
    item = models.ForeignKey(Part, on_delete=models.CASCADE)
    ordering = models.IntegerField()

    def __str__(self):
        return self.item.slug + ' image'

    class Meta:
        unique_together = ('item', 'ordering')
        ordering = ['ordering']
        verbose_name = 'Изображение детали'
        verbose_name_plural = 'Изображения деталей'


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
    items = models.ManyToManyField(LegoSet, through='OrderLegoSet')
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


class OrderLegoSet(models.Model):
    # TODO: add name and photos
    item = models.ForeignKey(LegoSet, on_delete=models.CASCADE)
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    price = models.IntegerField(default=0)
    quantity = models.IntegerField(default=1)

    def __str__(self):
        return f'{self.item.title}'

    class Meta:
        verbose_name = 'Набор в заказе'
        verbose_name_plural = 'Наборы в заказе'
