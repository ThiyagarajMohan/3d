/** Real business contact details for WhatsApp, phone, mailto, etc. */

export const BUSINESS_EMAIL = "3aprintsolutions@gmail.com";
export const PHONE_LOCAL_IN = "9092237193";
export const WA_URL = `https://wa.me/91${PHONE_LOCAL_IN}`;
export const TEL_URL = `tel:+91${PHONE_LOCAL_IN}`;
export const PHONE_DISPLAY = `+91 ${PHONE_LOCAL_IN.slice(0, 5)} ${PHONE_LOCAL_IN.slice(5)}`;

export function whatsappOrderMessage(productName: string): string {
  return `Hi! I'd like to know more about ordering: ${productName}`;
}

export function waUrlWithText(text: string): string {
  return `${WA_URL}?text=${encodeURIComponent(text)}`;
}

export const GENERAL_ORDER_WHATSAPP_MESSAGE =
  "Hi 3D Three Axis! I'd like to place a custom print order.";
