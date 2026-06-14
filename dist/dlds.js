import { jsx as a, jsxs as d } from "react/jsx-runtime";
function r({ variant: l = "primary", size: n, className: s = "", children: t, ...e }) {
  const o = ["dlds-btn", `dlds-btn--${l}`, n === "sm" && "dlds-btn--sm", s].filter(Boolean).join(" ");
  return /* @__PURE__ */ a("button", { className: o, ...e, children: t });
}
function c({ className: l = "", ...n }) {
  return /* @__PURE__ */ a("input", { className: ["dlds-input", l].filter(Boolean).join(" "), ...n });
}
function u({ elevation: l = "flat", className: n = "", children: s, ...t }) {
  const e = ["dlds-card", l === "soft" && "dlds-card--soft", n].filter(Boolean).join(" ");
  return /* @__PURE__ */ a("div", { className: e, ...t, children: s });
}
function f({ selected: l = !1, className: n = "", children: s, ...t }) {
  const e = ["dlds-chip", l && "dlds-chip--on", n].filter(Boolean).join(" ");
  return /* @__PURE__ */ a("button", { type: "button", className: e, ...t, children: s });
}
function m({ className: l = "", children: n, ...s }) {
  return /* @__PURE__ */ a("span", { className: ["dlds-badge", l].filter(Boolean).join(" "), ...s, children: n });
}
function p({ value: l, label: n, className: s = "", children: t, ...e }) {
  return /* @__PURE__ */ d("div", { className: ["dlds-callout", s].filter(Boolean).join(" "), ...e, children: [
    l != null && /* @__PURE__ */ a("div", { className: "dlds-callout__num", children: l }),
    n && /* @__PURE__ */ a("div", { className: "dlds-callout__label", children: n }),
    t
  ] });
}
function h({ items: l = [], className: n = "", ...s }) {
  return /* @__PURE__ */ a("div", { className: ["dlds-trustbar", n].filter(Boolean).join(" "), ...s, children: l.map((t, e) => /* @__PURE__ */ d("div", { className: "dlds-trustbar__item", children: [
    /* @__PURE__ */ a("span", { className: "dlds-trustbar__check", children: "✓" }),
    t
  ] }, e)) });
}
function N({ open: l, onClose: n, className: s = "", children: t }) {
  return l ? /* @__PURE__ */ a("div", { className: "dlds-sheet-mask", onClick: n, children: /* @__PURE__ */ a("div", { className: ["dlds-sheet", s].filter(Boolean).join(" "), onClick: (e) => e.stopPropagation(), children: t }) }) : null;
}
export {
  m as Badge,
  r as Button,
  p as Callout,
  u as Card,
  f as Chip,
  c as Input,
  N as Sheet,
  h as TrustBar
};
//# sourceMappingURL=dlds.js.map
