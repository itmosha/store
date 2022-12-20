from django.db import models


class Item(models.Model):
    image = models.ImageField(upload_to='images/')
    title = models.CharField(max_length=100)
    slug = models.SlugField(max_length=100, unique=True)
    price = models.IntegerField()
    description = models.TextField()
    quantity_in_stock = models.IntegerField()
    quantity_sold = models.IntegerField()

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Товар'
        verbose_name_plural = 'Товары'
