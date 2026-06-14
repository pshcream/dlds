import { jsx as o, jsxs as a } from "react/jsx-runtime";
import { forwardRef as r } from "react";
function u({ variant: l = "primary", size: n, className: s = "", children: t, ...e }) {
  const d = ["dlds-btn", `dlds-btn--${l}`, n === "sm" && "dlds-btn--sm", s].filter(Boolean).join(" ");
  return /* @__PURE__ */ o("button", { className: d, ...e, children: t });
}
const f = r(function({ className: n = "", ...s }, t) {
  return /* @__PURE__ */ o("input", { ref: t, className: ["dlds-input", n].filter(Boolean).join(" "), ...s });
});
function m({ elevation: l = "flat", className: n = "", children: s, ...t }) {
  const e = ["dlds-card", l === "soft" && "dlds-card--soft", n].filter(Boolean).join(" ");
  return /* @__PURE__ */ o("div", { className: e, ...t, children: s });
}
function p({ selected: l = !1, className: n = "", children: s, ...t }) {
  const e = ["dlds-chip", l && "dlds-chip--on", n].filter(Boolean).join(" ");
  return /* @__PURE__ */ o("button", { type: "button", className: e, ...t, children: s });
}
function h({ className: l = "", children: n, ...s }) {
  return /* @__PURE__ */ o("span", { className: ["dlds-badge", l].filter(Boolean).join(" "), ...s, children: n });
}
function N({ value: l, label: n, className: s = "", children: t, ...e }) {
  return /* @__PURE__ */ a("div", { className: ["dlds-callout", s].filter(Boolean).join(" "), ...e, children: [
    l != null && /* @__PURE__ */ o("div", { className: "dlds-callout__num", children: l }),
    n && /* @__PURE__ */ o("div", { className: "dlds-callout__label", children: n }),
    t
  ] });
}
function B({ items: l = [], className: n = "", ...s }) {
  return /* @__PURE__ */ o("div", { className: ["dlds-trustbar", n].filter(Boolean).join(" "), ...s, children: l.map((t, e) => /* @__PURE__ */ a("div", { className: "dlds-trustbar__item", children: [
    /* @__PURE__ */ o("span", { className: "dlds-trustbar__check", children: "✓" }),
    t
  ] }, e)) });
}
function b({ open: l, onClose: n, className: s = "", children: t }) {
  return l ? /* @__PURE__ */ o("div", { className: "dlds-sheet-mask", onClick: n, children: /* @__PURE__ */ o("div", { className: ["dlds-sheet", s].filter(Boolean).join(" "), onClick: (e) => e.stopPropagation(), children: t }) }) : null;
}
export {
  h as Badge,
  u as Button,
  N as Callout,
  m as Card,
  p as Chip,
  f as Input,
  b as Sheet,
  B as TrustBar
};
//# sourceMappingURL=dlds.js.map
