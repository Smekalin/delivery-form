<script>
export default {
  name: 'AppTabs',

  data() {
    return {
      activeId: this.default,
    };
  },

  created() {
    this.$on('tab:click', this.select);

    // NOTE[@smekalin]: создаем нереактивное свойство, чтобы избежать перерендера
    this.tabsIds = [];
  },

  beforeDestroy() {
    this.$off('tab:click');
  },

  mounted() {
    // NOTE[@smekalin]: вызываем после метода рендера, иначе перерендер будет
    this.setDefaultTab();
  },

  methods: {
    parseNodes() {
      const { length } = this.$slots.default || [];
      const tabs = [];
      const tabsContent = [];

      for (let i = 0; i < length; i += 1) {
        const vnode = this.$slots.default[i];
        if (vnode.componentOptions) {
          switch (vnode.componentOptions.Ctor.options.name) {
            case 'AppTab':
              tabs.push(vnode);
              break;
            case 'AppTabContent':
              tabsContent.push(vnode);
              break;
            default:
              break;
          }
        }
      }

      for (let index = 0; index < tabs.length; index += 1) {
        const id = `app-tab-${index}`;
        this.tabsIds.push(id);
        this.setId(tabs[index], id);
        if (tabsContent[index]) this.setId(tabsContent[index], id);
      }

      return { tabs, tabsContent };
    },

    renderTabs(h, tabs) {
      return h(
        'ul',
        {
          attrs: {
            role: 'tablist',
          },
          class: [
            'app-tabs__list',
            {
              _center: this.center,
              _divider: this.divider,
              _grow: this.grow,
              _vertical: this.vertical,
              _adaptive: this.adaptive,
            },
          ],
        },
        tabs,
      );
    },

    renderTabsContent(h, tabsContent) {
      return h(
        'div',
        {
          staticClass: 'app-tabs__content',
        },
        tabsContent,
      );
    },

    select(id) {
      this.activeId = id;
      this.$emit('update', id);
    },

    setDefaultTab() {
      this.activeId = this.default !== null ? this.tabsIds[this.default] : null;
    },

    setId(vnode, id) {
      this.$set(vnode.componentOptions.propsData, 'id', id);
    },
  },

  render(h) {
    const { tabs, tabsContent } = this.parseNodes();
    return h(
      'div',
      {
        staticClass: 'app-tabs',
      },
      [
        this.renderTabs(h, tabs),
        tabsContent === null || tabsContent.length === 0
          ? null
          : this.renderTabsContent(h, tabsContent),
      ],
    );
  },
};
</script>
