# Generated by Django 2.2 on 2021-05-04 16:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_auto_20210504_1634'),
    ]

    operations = [
        migrations.AddField(
            model_name='category',
            name='category_id',
            field=models.IntegerField(default=0),
            preserve_default=False,
        ),
    ]
