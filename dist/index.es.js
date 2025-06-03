import { defineComponent as r, useTemplateRef as f, shallowRef as m, onMounted as d, watchPostEffect as c, createElementBlock as i, openBlock as s, normalizeClass as v } from "vue";
import h from "odometer";
import './css/index.css';const E = /* @__PURE__ */ r({
  __name: "number-rolling",
  props: {
    start: { default: 0 },
    value: { default: 0 },
    format: { default: "(d).dd" },
    theme: { default: "default" },
    formatFunction: { type: Function },
    animation: { default: "default" },
    selector: { default: ".odometer" },
    auto: { type: Boolean, default: !1 },
    duration: { default: 1e3 }
  },
  setup(e, { expose: o }) {
    const a = f("odometerEl"), t = m();
    d(() => {
      t.value = new h({
        auto: e.auto,
        selector: e.selector,
        animation: e.animation,
        el: a.value,
        value: e.start,
        format: e.format,
        duration: e.duration,
        theme: e.theme,
        formatFunction: e.formatFunction
      }), c(() => {
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
    }), (l, u) => (s(), i("span", {
      class: v(["vue3-number-roll", l.theme]),
      ref: "odometerEl"
    }, null, 2));
  }
}), R = (e, o) => {
  const a = e.__vccOpts || e;
  for (const [t, n] of o)
    a[t] = n;
  return a;
}, F = /* @__PURE__ */ R(E, [["__scopeId", "data-v-5fa56450"]]);
export {
  F as NumberRolling,
  F as default
};
