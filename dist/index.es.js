import { defineComponent as r, useTemplateRef as f, shallowRef as m, onMounted as c, watchPostEffect as d, createElementBlock as s, openBlock as i, normalizeClass as v } from "vue";
import h from "odometer";
import './css/index.css';const p = /* @__PURE__ */ r({
  __name: "number-rolling",
  props: {
    start: { default: 0 },
    value: { default: 0 },
    format: { default: "(d).dd" },
    theme: { default: "default" },
    formatFunction: { type: Function },
    animation: { default: "default" },
    selector: { default: ".odometer" },
    auto: { type: Boolean, default: !1 }
  },
  setup(e, { expose: o }) {
    const a = f("odometerEl"), t = m();
    c(() => {
      t.value = new h({
        auto: e.auto,
        selector: e.selector,
        animation: e.animation,
        el: a.value,
        value: e.start,
        format: e.format,
        duration: 1e3,
        theme: e.theme,
        formatFunction: e.formatFunction
      }), d(() => {
        t.value.update(e.value);
      });
    });
    function n(l) {
      var u;
      (u = t.value) == null || u.update(l);
    }
    return o({
      old: t,
      update: n
    }), (l, u) => (i(), s("span", {
      class: v(["vue3-number-roll", l.theme]),
      ref: "odometerEl"
    }, null, 2));
  }
}), E = (e, o) => {
  const a = e.__vccOpts || e;
  for (const [t, n] of o)
    a[t] = n;
  return a;
}, b = /* @__PURE__ */ E(p, [["__scopeId", "data-v-7fc8a4ea"]]);
export {
  b as default
};
