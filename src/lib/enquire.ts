import { getWooConfig } from "./woocommerce/env";

export function whatsappEnquire(productName: string, productUrl = "") {
  const digits = getWooConfig().whatsapp.replace(/\D/g, "");
  const text = productUrl
    ? `Hello Mahakali, I would like to know more about ${productName}. ${productUrl}`
    : `Hello Mahakali, I would like to know more about ${productName}.`;
  return `https://wa.me/${digits}?text=${encodeURIComponent(text)}`;
}
