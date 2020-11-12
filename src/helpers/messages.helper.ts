import { message } from 'ant-design-vue';

export function showSuccessMessage(text: string, seconds = 1) {
  message.success(text, seconds);
}

export function showErrorMessage(text: string, seconds = 1) {
  message.error(text, seconds);
}
