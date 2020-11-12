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
                rules: requiredRule,
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
                rules: requiredRule,
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
              rules: requiredRule,
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
              rules: requiredRule,
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

export default Vue.extend({
  directives: { mask },

  data(): {
    form: WrappedFormUtils;
    requiredRule: { required: boolean; message: string }[];
  } {
    return {
      form: this.$form.createForm(this, { name: 'authForm' }),
      requiredRule: [{ required: true, message: 'Обязательно для заполнения' }],
    };
  },

  methods: {
    handleSubmit(e: Event) {
      e.preventDefault();
      this.form.validateFields(
        (err, values: { fullName?: string; phone: string }) => {
          if (!err) {
            console.log('values', values);
          }
        },
      );
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
