from django.contrib import admin

# Register your models here.



from .models import ContactRequest


@admin.register(ContactRequest)
class ContactRequestAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "phone",
        "email",
        "service",
        "lang",
        "created_at",
    )

    list_filter = (
        "service",
        "lang",
        "created_at",
    )

    search_fields = (
        "name",
        "phone",
        "email",
        "message",
    )

    readonly_fields = (
        "created_at",
    )

    ordering = (
        "-created_at",
    )

