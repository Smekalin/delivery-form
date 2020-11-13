<template>
  <div class="app-delivery-form">
    <a-form
      :form="form"
      hideRequiredMark
      layout="vertical"
      @submit="handleSubmit"
    >
      <div class="app-delivery-form__input-group">
        <a-form-item label="ФИО" class="app-delivery-form__group-item">
          <a-input
            autoFocus
            size="large"
            type="tel"
            placeholder="Только кириллица"
            :tokens="{}"
            v-decorator="[
              'fullName',
              {
                rules: [requiredRule, nameRule],
              },
            ]"
          >
          </a-input>
        </a-form-item>
        <a-form-item label="Телефон" class="app-delivery-form__group-item">
          <a-input
            size="large"
            v-mask="'+7 (###) ###-##-##'"
            placeholder="+7 (___) ___-__-__"
            v-decorator="[
              'phone',
              {
                rules: [requiredRule, phoneRule],
              },
            ]"
          >
          </a-input>
        </a-form-item>
      </div>

      <a-form-item label="Адрес доставки">
        <a-input
          size="large"
          placeholder="Город, улица, дом"
          v-decorator="[
            'address',
            {
              rules: [requiredRule],
            },
          ]"
        >
        </a-input>
      </a-form-item>

      <a-form-item label="Комментарий">
        <a-textarea
          :rows="4"
          size="large"
          v-decorator="[
            'comment',
            {
              rules: [requiredRule],
            },
          ]"
        >
        </a-textarea>
      </a-form-item>

      <a-form-item>
        <div class="app-delivery-form__footer">
          <app-button htmlType="submit" class="app-delivery-form__submit">
            Отправить
          </app-button>
        </div>
      </a-form-item>
    </a-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { WrappedFormUtils } from 'ant-design-vue/types/form/form';
import { mask } from 'vue-the-mask';
import { showSuccessMessage } from '@/helpers';

const validateName = (
  rule: object[],
  value: string,
  callback: (str?: string) => void,
) => {
  if (value) {
    const regExp = RegExp(/^[?!\-а-яА-ЯёЁ\s]+$/);
    const res = regExp.test(value);
    if (!res) {
      callback('Допустимы только кириллица, пробел и тире');
    }

    callback();
    return;
  } else {
    callback();
  }
};

const validatePhone = (
  rule: object[],
  value: string,
  callback: (str?: string) => void,
) => {
  if (!value) return callback();
  if (value && value.length < 18) {
    return callback('Введите номер телефона полностью');
  }
};

export default Vue.extend({
  directives: { mask },

  data(): {
    form: WrappedFormUtils;
    requiredRule: {
      required: boolean;
      message: string;
      validator?: Function;
    };
    nameRule: { validator?: Function };
    phoneRule: { validator?: Function };
  } {
    return {
      form: this.$form.createForm(this, { name: 'authForm' }),
      requiredRule: { required: true, message: 'Обязательно для заполнения' },
      nameRule: { validator: validateName },
      phoneRule: { validator: validatePhone },
    };
  },

  methods: {
    handleSubmit(e: Event) {
      e.preventDefault();
      this.form.validateFields((err) => {
        if (!err) {
          showSuccessMessage('Запрос успешно отправлен');
        }
      });
    },
  },
});
</script>

<style lang="less">
.app-delivery-form {
  background-color: white;
  padding: 20px;

  &__input-group {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    @media (max-width: 650px) {
      flex-direction: column;
    }
  }

  &__group-item {
    max-width: 48%;
    width: 100%;
    min-width: 300px;

    @media (max-width: 650px) {
      width: 100%;
      max-width: 100%;
      min-width: initial;
    }
  }

  &__footer {
    display: flex;
  }
  &__submit {
    margin-left: auto;
  }
}
</style>
