# Generated by Django 2.1 on 2021-04-11 06:04

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_auto_20210411_1145'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='category',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='products', to='api.Category'),
        ),
        migrations.DeleteModel(
            name='Category',
        ),
    ]