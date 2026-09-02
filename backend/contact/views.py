import logging

from rest_framework.generics import CreateAPIView

from .models import ContactRequest
from .serializers import ContactRequestSerializer
from .telegram import send_telegram_message


logger = logging.getLogger(__name__)


class ContactRequestCreateView(CreateAPIView):
    queryset = ContactRequest.objects.all()
    serializer_class = ContactRequestSerializer

    def perform_create(self, serializer):
        contact_request = serializer.save()

        message = (
            "🔔 НОВА ЗАЯВКА — БАЧКАТОР\n\n"
            f"👤 Име: {contact_request.name}\n"
            f"📞 Телефон: {contact_request.phone}\n"
            f"📧 E-mail: {contact_request.email or '-'}\n"
            f"🔨 Услуга: {contact_request.service or '-'}\n"
            f"💬 Съобщение: {contact_request.message or '-'}\n"
            f"🌐 Език: {contact_request.lang}"
        )

        try:
            send_telegram_message(message)
        except Exception:
            logger.exception("Failed to send Telegram notification")