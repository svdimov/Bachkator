from rest_framework import serializers
from .models import ContactRequest


class ContactRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactRequest
        fields = [
            "id",
            "name",
            "phone",
            "email",
            "service",
            "message",
            "lang",
            "created_at",
        ]
        read_only_fields = ["id", "created_at"]